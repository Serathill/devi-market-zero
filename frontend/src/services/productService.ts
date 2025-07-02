import apiClient from './api';
import type { Product } from '../types/product';
import logger from '../utils/logger';

/**
 * @file This file contains functions for interacting with the products API.
 */

/**
 * Fetches all products from the API.
 * @param {AbortSignal} signal - The AbortSignal to cancel the request.
 * @returns {Promise<Product[]>} A promise that resolves to an array of products.
 */
export const getProducts = async (signal: AbortSignal): Promise<Product[]> => {
  const startTime = new Date();
  logger.info('API Call: Fetching all products', { 
    endpoint: '/products',
    method: 'GET',
    timestamp: startTime.toISOString()
  });
  
  try {
    const response = await apiClient.get<Product[]>('/products', { signal });
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Log successful response with details
    logger.info('API Response: Successfully fetched products', { 
      endpoint: '/products',
      method: 'GET',
      status: response.status,
      statusText: response.statusText,
      duration: `${duration}ms`,
      itemCount: response.data.length,
      timestamp: endTime.toISOString()
    });
    
    // Log the full response data (can be large)
    logger.info('API Response Data: Products', { 
      endpoint: '/products',
      responseData: JSON.stringify(response.data)
    });
    
    return response.data;
  } catch (err) {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Enhanced error logging with detailed information
    logger.error(err, { 
      context: 'getProducts',
      endpoint: '/products',
      method: 'GET',
      duration: `${duration}ms`,
      timestamp: endTime.toISOString(),
      errorDetails: err instanceof Error ? {
        name: err.name,
        message: err.message,
        stack: err.stack
      } : 'Unknown error type'
    });
    
    // Re-throw the error so the UI layer can handle it
    throw err;
  }
};

/**
 * Fetches a single product by its ID from the API.
 * @param {string} id - The ID of the product to fetch.
 * @param {AbortSignal} signal - The AbortSignal to cancel the request.
 * @returns {Promise<Product>} A promise that resolves to the product object.
 */
export const getProductById = async (id: string, signal: AbortSignal): Promise<Product> => {
  const startTime = new Date();
  logger.info('API Call: Fetching product by ID', { 
    endpoint: `/products/${id}`,
    method: 'GET',
    productId: id,
    timestamp: startTime.toISOString()
  });
  
  try {
    const response = await apiClient.get<Product>(`/products/${id}`, { signal });
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Log successful response with details
    logger.info('API Response: Successfully fetched product', { 
      endpoint: `/products/${id}`,
      method: 'GET',
      status: response.status,
      statusText: response.statusText,
      duration: `${duration}ms`,
      productId: id,
      productName: response.data.name,
      timestamp: endTime.toISOString()
    });
    
    // Log the full response data
    logger.info('API Response Data: Product details', { 
      endpoint: `/products/${id}`,
      productId: id,
      responseData: JSON.stringify(response.data)
    });
    
    return response.data;
  } catch (err) {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Enhanced error logging with detailed information
    logger.error(err, { 
      context: 'getProductById',
      endpoint: `/products/${id}`,
      method: 'GET',
      productId: id,
      duration: `${duration}ms`,
      timestamp: endTime.toISOString(),
      errorDetails: err instanceof Error ? {
        name: err.name,
        message: err.message,
        stack: err.stack
      } : 'Unknown error type'
    });
    
    throw err;
  }
}; 