import axios from 'axios';

/**
 * The base URL for the API.
 * It is configured to use a relative path, which will be resolved by the
 * Vite development proxy or the production server's reverse proxy.
 * This avoids CORS issues and keeps the code environment-agnostic.
 */
const API_BASE_URL = '/api';

/**
 * A pre-configured instance of axios for making API requests.
 *
 * It includes the base URL and any other default settings
 * that should be applied to all requests.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a response interceptor to handle errors
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API Error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

// You can also add interceptors for handling requests or responses globally
// For example, to add an auth token to every request:
/*
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
*/

export default apiClient; 