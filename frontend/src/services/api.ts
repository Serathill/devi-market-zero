import axios from 'axios';

/**
 * The base URL for the API.
 * Using a relative URL to work with the Vite proxy configuration.
 * This avoids CORS issues when making requests to the backend.
 */
const API_BASE_URL = '/api'; // Using relative URL to work with Vite proxy

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
  },
});

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