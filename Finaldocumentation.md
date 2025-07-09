Dockerized Infrastructure Technical Documentation
This document provides a detailed technical overview of the Dockerized infrastructure for the project, covering the core components: NGINX, ClickHouse, and their orchestration using Docker Compose. It aims to provide project stakeholders and future developers with a comprehensive understanding of the setup, configuration, and initialization processes.

1. Overall Docker Strategy
The project leverages Docker to containerize its core services, ensuring consistency, portability, and ease of deployment across different environments. The strategy focuses on:

Isolation: Each service (NGINX, ClickHouse) runs in its own isolated container, preventing conflicts and simplifying dependency management.

Reproducibility: Docker images and docker-compose.yml ensure that the entire infrastructure can be spun up identically on any Docker-enabled host.

Orchestration: Docker Compose is used to define and run the multi-container Docker application, managing networking, volumes, and service dependencies.

Scalability (Future-Proofing): While the MVP focuses on a single instance, the containerized approach lays the groundwork for horizontal scaling if needed in the future.

Simplified Development: Developers can quickly set up a local environment that mirrors production, reducing "it works on my machine" issues.

2. Dockerfile.nginx (Multi-Stage Build for React)
The Dockerfile.nginx is designed to create a lightweight NGINX image that serves the production-ready React frontend application. It utilizes a multi-stage build pattern to optimize the final image size by separating the build environment from the runtime environment.

# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the application with NGINX
FROM nginx:stable-alpine

# Copy the NGINX configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Remove default NGINX index.html
RUN rm /etc/nginx/html/index.html

# Copy the built React application from the 'build' stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (HTTP) and 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

Step-by-step Explanation:

FROM node:18-alpine AS build:

This line defines the first stage, named build. It uses the node:18-alpine image, which is a lightweight Node.js environment based on Alpine Linux. This stage is responsible for building the React application.

WORKDIR /app:

Sets the working directory inside the container for this stage to /app. All subsequent commands will be executed relative to this directory.

COPY package.json ./ and COPY package-lock.json ./:

Copies the package.json and package-lock.json files into the /app directory. This is done early to leverage Docker's build cache. If these files don't change, Docker can skip npm install in subsequent builds.

RUN npm install:

Installs all Node.js dependencies defined in package.json.

COPY . .:

Copies the rest of the React application source code into the /app directory.

RUN npm run build:

Executes the build script defined in package.json, which typically compiles the React application into static HTML, CSS, and JavaScript files, usually outputting them to a build/ directory.

FROM nginx:stable-alpine:

This line defines the second and final stage. It uses the nginx:stable-alpine image, a lightweight NGINX server based on Alpine Linux. This stage will contain only the NGINX server and the static React files, without the Node.js build tools.

COPY nginx/default.conf /etc/nginx/conf.d/default.conf:

Copies the custom NGINX configuration file (default.conf from the nginx/ directory in the host) into the NGINX configuration directory inside the container. This file dictates how NGINX serves the application.

RUN rm /etc/nginx/html/index.html:

Removes the default NGINX index.html file to ensure our React application's index.html is served instead.

COPY --from=build /app/build /usr/share/nginx/html:

This is the crucial part of the multi-stage build. It copies the built React application (from /app/build in the build stage) to NGINX's default web root directory (/usr/share/nginx/html) in the final image.

EXPOSE 80 and EXPOSE 443:

Informs Docker that the container listens on ports 80 (HTTP) and 443 (HTTPS) at runtime. This is documentation and does not actually publish the ports. Port mapping is handled in docker-compose.yml.

CMD ["nginx", "-g", "daemon off;"]:

Specifies the command to run when the container starts. nginx -g "daemon off;" starts NGINX in the foreground, which is necessary for Docker containers.

3. ClickHouse Service Definition in docker-compose.yml
The ClickHouse service is defined to provide a robust and persistent data store for the application.

  clickhouse:
    image: clickhouse/clickhouse-server:latest
    container_name: devimarket-clickhouse
    ports:
      - "8123:8123" # HTTP interface
      - "9000:9000" # Native client interface
      - "9009:9009" # Secure native client interface (if enabled)
    volumes:
      - clickhouse_data:/var/lib/clickhouse
      - clickhouse_logs:/var/log/clickhouse-server
      - ./clickhouse/init:/docker-entrypoint-initdb.d
    environment:
      CLICKHOUSE_DB: devimarket
      CLICKHOUSE_USER: devimarket_user
      CLICKHOUSE_PASSWORD: devimarket_password
    networks:
      - devimarket-net
    healthcheck:
      test: ["CMD", "curl", "--fail", "http://localhost:8123/ping"]
      interval: 5s
      timeout: 3s
      retries: 5

Explanation:

image: clickhouse/clickhouse-server:latest:

Specifies the Docker image to use for the ClickHouse service. latest ensures the most recent stable version is pulled.

container_name: devimarket-clickhouse:

Assigns a specific, human-readable name to the container, making it easier to reference.

ports::

- "8123:8123": Maps port 8123 on the host to port 8123 in the container. This is the default HTTP interface for ClickHouse, used for HTTP API requests and the ClickHouse client.

- "9000:9000": Maps port 9000 on the host to port 9000 in the container. This is the default native TCP client interface for ClickHouse.

- "9009:9009": Maps port 9009 on the host to port 9009 in the container. This is for the secure native client interface, if SSL is enabled for ClickHouse.

volumes::

clickhouse_data:/var/lib/clickhouse: Mounts a named Docker volume clickhouse_data to /var/lib/clickhouse inside the container. This ensures that ClickHouse data (databases, tables) persists even if the container is removed or recreated.

clickhouse_logs:/var/log/clickhouse-server: Mounts a named Docker volume clickhouse_logs to /var/log/clickhouse-server. This ensures ClickHouse server logs are persisted and accessible outside the container.

./clickhouse/init:/docker-entrypoint-initdb.d: Mounts the local clickhouse/init directory (relative to docker-compose.yml) to /docker-entrypoint-initdb.d inside the ClickHouse container. Any .sql or .sh scripts placed in this directory will be executed by the ClickHouse entrypoint script when the container starts for the first time. This is crucial for initial database setup.

environment::

CLICKHOUSE_DB: devimarket: Sets the default database name.

CLICKHOUSE_USER: devimarket_user: Sets the default username for the database.

CLICKHOUSE_PASSWORD: devimarket_password: Sets the password for the default user.

networks: - devimarket-net:

Connects the ClickHouse container to the custom devimarket-net network, allowing it to communicate with other services on the same network (e.g., NGINX, if it were to proxy ClickHouse directly).

healthcheck::

Defines a health check to determine if the ClickHouse service is running and responsive. It attempts to curl the /ping endpoint on the HTTP interface (port 8123). This helps Docker Compose understand the service's readiness.

4. NGINX Service Definition in docker-compose.yml
The NGINX service is responsible for serving the React frontend and acting as a reverse proxy if needed.

  nginx:
    build:
      context: .
      dockerfile: Dockerfile.nginx
    container_name: devimarket-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro # Mount SSL certificates
    depends_on:
      - clickhouse # NGINX depends on ClickHouse (though not directly used by NGINX in this setup)
    networks:
      - devimarket-net

Explanation:

build::

context: .: Specifies the build context for the NGINX image as the current directory (where docker-compose.yml resides). This means Docker will look for the Dockerfile.nginx and the React application source code within this directory.

dockerfile: Dockerfile.nginx: Explicitly tells Docker Compose to use Dockerfile.nginx to build the image for this service.

container_name: devimarket-nginx:

Assigns a specific name to the NGINX container.

ports::

- "80:80": Maps host port 80 to container port 80, allowing HTTP traffic to reach NGINX.

- "443:443": Maps host port 443 to container port 443, allowing HTTPS traffic to reach NGINX.

volumes::

- ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro: Mounts the local nginx/default.conf file into the container at /etc/nginx/conf.d/default.conf. The :ro (read-only) flag ensures that NGINX cannot modify this file. This is where the primary NGINX configuration for serving the React app and handling SSL resides.

- ./nginx/ssl:/etc/nginx/ssl:ro: Mounts the local nginx/ssl directory into the container at /etc/nginx/ssl. This directory is expected to contain the SSL certificate (.crt) and private key (.key) files required for HTTPS. The :ro flag ensures read-only access.

depends_on: - clickhouse:

Indicates that the NGINX service depends on the clickhouse service. Docker Compose will start ClickHouse before NGINX. While NGINX doesn't directly proxy ClickHouse in this setup, this ensures the database is ready if the frontend (React) were to attempt to connect to a backend that relies on ClickHouse.

networks: - devimarket-net:

Connects the NGINX container to the custom devimarket-net network, enabling communication with other services within the Docker Compose stack.

5. NGINX Configuration File (default.conf)
The default.conf (or devimarket.conf depending on naming convention) is the core NGINX configuration for serving the React Single Page Application (SPA) and enabling HTTPS.

server {
    listen 80;
    listen [::]:80;
    server_name devimarket.com www.devimarket.com; # Replace with your domain

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name devimarket.com www.devimarket.com; # Replace with your domain

    # SSL Configuration
    ssl_certificate /etc/nginx/ssl/devimarket.crt; # Path to your SSL certificate
    ssl_certificate_key /etc/nginx/ssl/devimarket.key; # Path to your SSL private key
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    # Root directory for the React application
    root /usr/share/nginx/html;
    index index.html index.htm;

    # SPA Routing: Try serving files directly, then fall back to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: Proxy API requests to a backend service (if applicable)
    # location /api/ {
    #     proxy_pass http://backend_service_name:port/;
    #     proxy_set_header Host $host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_set_header X-Forwarded-Proto $scheme;
    # }

    # Error pages
    error_page 404 /index.html; # Redirect 404 to index.html for SPA routing
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}

Explanation:

HTTP to HTTPS Redirection (server block for port 80):

listen 80; listen [::]:80;: NGINX listens for incoming HTTP requests on both IPv4 and IPv6.

server_name devimarket.com www.devimarket.com;: Specifies the domain names this server block responds to.

return 301 https://$host$request_uri;: All HTTP requests are permanently redirected (301) to their HTTPS equivalent, ensuring secure communication.

HTTPS Server Block (server block for port 443):

listen 443 ssl http2; listen [::]:443 ssl http2;: NGINX listens for incoming HTTPS requests on both IPv4 and IPv6, enabling SSL/TLS and HTTP/2 for performance.

server_name devimarket.com www.devimarket.com;: Specifies the domain names for this HTTPS block.

SSL Configuration:

ssl_certificate /etc/nginx/ssl/devimarket.crt;: Specifies the path to the SSL certificate file inside the container. This file is mounted from the host's nginx/ssl directory.

ssl_certificate_key /etc/nginx/ssl/devimarket.key;: Specifies the path to the SSL private key file.

ssl_protocols TLSv1.2 TLSv1.3;: Configures NGINX to only allow secure TLS versions (1.2 and 1.3), deprecating older, less secure versions.

ssl_prefer_server_ciphers on; ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';: Prioritizes strong server-side ciphers for secure encryption.

ssl_session_cache shared:SSL:10m; ssl_session_timeout 10m;: Configures SSL session caching for improved performance by allowing clients to resume previous secure sessions without a full handshake.

ssl_stapling on; ssl_stapling_verify on;: Enables OCSP stapling, which improves SSL handshake performance and privacy by allowing the server to provide OCSP revocation status directly.

resolver 8.8.8.8 8.8.4.4 valid=300s; resolver_timeout 5s;: Configures DNS resolvers for OCSP stapling.

add_header X-Frame-Options DENY; add_header X-Content-Type-Options nosniff; add_header X-XSS-Protection "1; mode=block";: Adds security headers to mitigate common web vulnerabilities like clickjacking, MIME-type sniffing, and cross-site scripting (XSS).

React Application Serving:

root /usr/share/nginx/html;: Sets the root directory from which NGINX serves files. This is where the built React application is copied.

index index.html index.htm;: Specifies the default files to serve when a directory is requested.

SPA Routing (location /):

try_files $uri $uri/ /index.html;: This is critical for Single Page Applications (SPAs).

$uri: NGINX first tries to serve a file directly matching the requested URI (e.g., /styles.css).

$uri/: If $uri is not found, it tries to serve a directory (e.g., /assets/).

/index.html: If neither a file nor a directory is found, it falls back to serving /index.html. This ensures that client-side routing (e.g., /dashboard, /profile) is handled by the React application, as all non-static file requests are routed back to the main index.html.

Error Pages:

error_page 404 /index.html;: When a 404 Not Found error occurs, NGINX redirects internally to /index.html. This allows the React application to handle its own 404 routing.

error_page 500 502 503 504 /50x.html;: Configures custom error pages for server errors.

location = /50x.html { root /usr/share/nginx/html; }: Defines the location for the custom 50x error page.

6. ClickHouse Initialization Scripts (*.sql, *.sh)
The clickhouse/init directory, mounted to /docker-entrypoint-initdb.d in the ClickHouse container, is used to automatically initialize the ClickHouse database upon the first container startup.

Purpose: Any .sql files in this directory are executed by the ClickHouse entrypoint script to create databases, tables, users, and pre-populate data. Shell scripts (.sh) can also be included for more complex initialization logic or data loading.

Example clickhouse/init/init.sql:

-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS devimarket;

-- Create a user with specific permissions (if not already defined via environment variables)
-- This is often redundant if CLICKHOUSE_USER/PASSWORD are used, but good for fine-grained control
CREATE USER IF NOT EXISTS devimarket_user IDENTIFIED WITH sha256_password BY 'devimarket_password';
GRANT ALL ON devimarket.* TO devimarket_user;

-- Use the devimarket database
USE devimarket;

-- Create a sample table (e.g., for products)
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT generateUUIDv4(),
    name String,
    description String,
    price Decimal(10, 2),
    stock UInt32,
    created_at DateTime DEFAULT now()
) ENGINE = MergeTree()
ORDER BY created_at;

-- Insert some initial data (optional)
INSERT INTO products (name, description, price, stock) VALUES
('Laptop', 'High performance laptop', 1200.00, 50),
('Mouse', 'Wireless ergonomic mouse', 25.50, 200),
('Keyboard', 'Mechanical gaming keyboard', 75.00, 100);

Explanation:

CREATE DATABASE IF NOT EXISTS devimarket;: Ensures the devimarket database is created if it doesn't already exist.

CREATE USER IF NOT EXISTS ... GRANT ALL ON ...: (Potentially redundant with environment variables but demonstrates user creation). Creates a user and grants them all privileges on the devimarket database.

USE devimarket;: Sets the current database context.

CREATE TABLE IF NOT EXISTS products (...) ENGINE = MergeTree() ORDER BY created_at;: Creates a sample products table with various data types. MergeTree is a common ClickHouse table engine for analytical workloads. ORDER BY created_at defines the primary sorting key.

INSERT INTO products (...) VALUES (...): Populates the products table with some initial data.

This setup ensures that the ClickHouse instance is ready to use with the necessary database and tables as soon as the container starts, facilitating rapid development and consistent environments.

7. Custom Docker Network (devimarket-net)
A custom bridge network named devimarket-net is defined in docker-compose.yml:

networks:
  devimarket-net:
    driver: bridge

Explanation:

networks:: Defines custom networks for the Docker Compose application.

devimarket-net:: The name of the custom network.

driver: bridge: Specifies that it's a bridge network, which is the default and most common type for single-host Docker deployments.

Purpose:

Service Discovery: Services connected to the same custom bridge network can communicate with each other using their service names (e.g., clickhouse, nginx) as hostnames, without needing to expose ports to the host machine (unless external access is required).

Isolation: It provides better isolation than the default Docker bridge network, preventing potential IP address conflicts with other Docker applications running on the same host.

Security: By default, containers on custom networks can communicate with each other, but not with containers on other networks, enhancing security.

8. Challenges Encountered and Solutions
During the infrastructure setup, several common challenges were addressed:

Docker Networking for Inter-Service Communication:

Challenge: Initially, there might be confusion about how containers communicate. Trying to use localhost from one container to access another will fail.

Solution: Implementing a custom Docker network (devimarket-net) and connecting all relevant services to it. This enables seamless service discovery where containers can reach each other using their service names (e.g., clickhouse as a hostname for the ClickHouse service).

SSL Setup for NGINX:

Challenge: Configuring NGINX for HTTPS requires valid SSL certificates and keys, and correctly mapping them into the container. Generating self-signed certificates for development can be tricky.

Solution:

Certificate Management: Created a dedicated nginx/ssl directory on the host to store devimarket.crt and devimarket.key.

Volume Mounting: Mounted this directory as a read-only volume into the NGINX container at /etc/nginx/ssl.

NGINX Configuration: Ensured default.conf correctly references these paths and includes necessary SSL directives (ssl_certificate, ssl_certificate_key, ssl_protocols, ssl_ciphers, etc.) for robust security.

HTTP to HTTPS Redirection: Implemented a separate server block for port 80 to automatically redirect all HTTP traffic to HTTPS, enforcing secure connections.

ClickHouse Data Persistence and Initialization:

Challenge: Ensuring that ClickHouse data persists across container restarts and that the database is correctly initialized with schemas and users on first run.

Solution:

Named Volumes: Used Docker named volumes (clickhouse_data, clickhouse_logs) to persist the database files and logs outside the container lifecycle.

Initialization Scripts: Leveraged the /docker-entrypoint-initdb.d directory by mounting a local clickhouse/init directory. This allowed for automatic execution of .sql scripts to create the database, user, and initial tables upon the first startup of the ClickHouse container.

React SPA Routing with NGINX:

Challenge: When building a Single Page Application (SPA) with React, direct URL access (e.g., yourdomain.com/dashboard) often results in a 404 error from the server because no physical file exists at that path.

Solution: The try_files $uri $uri/ /index.html; directive in the NGINX default.conf was implemented. This tells NGINX to first try to find the requested file, then a directory, and if neither exists, to serve the main index.html file. This allows the React router to take over and handle the client-side routing for the specific path.

9. Final, Consolidated Instructions on Building and Running the Entire Docker Stack
To build and run the entire Dockerized infrastructure, follow these consolidated instructions. These steps are also detailed in SETUP_INFRASTRUCTURE_MVP.md.

Prerequisites:

Docker Desktop (or Docker Engine and Docker Compose) installed on your machine.

Ensure you have the necessary SSL certificates (devimarket.crt and devimarket.key) placed in the nginx/ssl directory. If you don't have real certificates for development, you can generate self-signed ones.

Steps:

Navigate to the Project Root:
Open your terminal or command prompt and navigate to the root directory of your project where the docker-compose.yml file is located.

cd /path/to/your/project/root

Ensure SSL Certificates are Present:
Verify that your SSL certificate (devimarket.crt) and private key (devimarket.key) are in the nginx/ssl/ directory relative to your docker-compose.yml. If they are not present, NGINX will fail to start on port 443.

# Example:
# project-root/
# ├── docker-compose.yml
# ├── Dockerfile.nginx
# ├── nginx/
# │   ├── default.conf
# │   └── ssl/
# │       ├── devimarket.crt
# │       └── devimarket.key
# └── clickhouse/
#     └── init/
#         └── init.sql
# └── (your React app files)

Build and Start the Docker Stack:
Execute the following command to build the Docker images (if not already built) and start all services defined in docker-compose.yml in detached mode (in the background).

docker-compose up --build -d

up: Starts the services.

--build: Forces Docker Compose to rebuild images for services that have a build instruction (like NGINX), ensuring any changes to Dockerfile.nginx or the React source code are incorporated.

-d: Runs containers in detached mode, leaving the terminal free.

Verify Service Status:
To check if all containers are running correctly, use:

docker-compose ps

You should see devimarket-nginx and devimarket-clickhouse listed with Up status.

Access the Application:

The React frontend should now be accessible via HTTPS in your web browser. Depending on your server_name in default.conf and your /etc/hosts file setup, you can access it at:

https://localhost (if server_name is localhost or not explicitly set and using default NGINX behavior)

https://devimarket.com (if you've configured your host's /etc/hosts file to map devimarket.com to 127.0.0.1)

ClickHouse interfaces will be available on the host machine at:

HTTP: http://localhost:8123

Native TCP: localhost:9000

Stop the Docker Stack:
To stop and remove the containers, networks, and volumes (if not explicitly marked as external), run:

docker-compose down

down: Stops containers and removes containers, networks, and volumes.

Stop and Remove Volumes (if needed):
If you want to remove the persistent ClickHouse data volumes (e.g., for a clean slate), use:

docker-compose down -v

-v: Also removes named volumes defined in the volumes section of docker-compose.yml. Use with caution as this will delete your ClickHouse data.

This comprehensive documentation covers the intricacies of the Dockerized infrastructure, providing a solid foundation for understanding, maintaining, and extending the project.
