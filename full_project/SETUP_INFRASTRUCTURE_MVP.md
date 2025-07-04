 🧱 SETUP_INFRASTRUCTURE_MVP.md

Documentul prezintă pașii necesari pentru a configura, construi și rula infrastructura containerizată pentru proiectul **DeviMarket Zero**. Stack-ul cuprinde:

- Frontend React servit prin NGINX cu HTTPS (self-signed)
- Backend simplu (Python HTTP Server)
- ClickHouse ca serviciu de bază pentru date

---

## ✅ Cerințe preliminare

- **Docker** `>= 24.0.0`
- **Docker Compose plugin** `>= 2.20.0`
- Sistem testat: Ubuntu 22.04

```bash
docker -v
docker compose version

📁 Structura Proiectului

team7_infrastructure/
├── backend/
├── certs/
├── docs/
│   └── SETUP_INFRASTRUCTURE_MVP.md
├── frontend/
├── docker-compose.yml
├── Dockerfile.nginx
├── devimarket.conf

🔐 Generare certificat SSL

mkdir -p certs
openssl req -x509 -newkey rsa:4096 -sha256 -days 365 -nodes \
  -keyout certs/devimarket.key \
  -out certs/devimarket.crt \
  -subj "/CN=devimarket.local"


🧾 Fișier docker-compose.yml

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.nginx
    ports:
      - "443:443"
    volumes:
      - ./certs:/etc/nginx/certs
    networks:
      - devimarket_net
    depends_on:
      - backend

  backend:
    image: python:3.11
    command: ["python", "-m", "http.server", "8000"]
    ports:
      - "8000:8000"
    networks:
      - devimarket_net

  clickhouse-server:
    image: clickhouse/clickhouse-server:23.3
    volumes:
      - clickhouse_data:/var/lib/clickhouse
    ports:
      - "8123:8123"
    networks:
      - devimarket_net

volumes:
  clickhouse_data:

networks:
  devimarket_net:

⚙️ Fișier Dockerfile.nginx

FROM node:18 AS builder
WORKDIR /app
COPY frontend/ .
RUN npm install && npm run build

FROM nginx:1.25-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY devimarket.conf /etc/nginx/conf.d/default.conf
COPY certs /etc/nginx/certs

🌐 Fișier devimarket.conf

server {
  listen 443 ssl;
  server_name devimarket.local;

  ssl_certificate /etc/nginx/certs/devimarket.crt;
  ssl_certificate_key /etc/nginx/certs/devimarket.key;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}

🧩 Configurare /etc/hosts

sudo nano /etc/hosts
Adaugă: 127.0.0.1 devimarket.local

🚀 Comenzi utile

docker compose build
docker compose up -d
docker compose down
docker compose down -v

docker compose logs -f frontend
docker compose exec clickhouse-server clickhouse-client

🧯 Troubleshooting


Problemă	                               Soluție
Port 443/8000/8123 ocupat	Rulează sudo lsof -i :PORT și eliberează-l
NGINX returnează 404 sau blank	Asigură-te că build-ul React e complet și copiat corect
SSL handshake error	Verifică .crt și .key în certs/, refă-le dacă e cazul
devimarket.local nu funcționează	Asigură-te că /etc/hosts e setat corect
ClickHouse nu pornește	Șterge volumele cu docker compose down -v și reconstruiește
