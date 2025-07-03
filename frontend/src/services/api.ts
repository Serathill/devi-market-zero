import axios from 'axios';

/**
 * Client API configurat pentru a face cereri către serverul real
 */
const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60000, // 60 secunde timeout pentru a permite încărcarea tuturor produselor
});

// Add a request interceptor to debug outgoing requests
apiClient.interceptors.request.use(
  config => {
    console.log(`Making API request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config);
    // Add cors mode to allow cross-origin requests
    config.withCredentials = false;
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Adăugăm interceptori pentru a gestiona erorile și a face log
apiClient.interceptors.response.use(
  response => {
    console.log(`API request successful: ${response.config.method?.toUpperCase()} ${response.config.url}`, 
      `Data received: ${response.data ? (Array.isArray(response.data) ? response.data.length + ' items' : 'Object') : 'No data'}`);
    return response;
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error('API Error:', error.message);
      if (error.response) {
        console.error(`Status: ${error.response.status}`, error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient; 