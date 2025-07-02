import apiClient from './api';
import type { ProductScanPayload, ProductScanResponse } from '../types/scan';
import logger from '../utils/logger';

/**
 * @file This file contains functions for interacting with the scanner API.
 */

/**
 * The specific endpoint for the product scan API.
 */
const SCAN_API_ENDPOINT = "/scanner/product_scan/product_scan";

/**
 * Sends product scan data to the API.
 *
 * @param {ProductScanPayload} payload - The data to be sent.
 * @param {AbortSignal} signal - The AbortSignal to cancel the request.
 * @returns {Promise<ProductScanResponse>} A promise that resolves to the scan response.
 */
export const postProductScan = async (payload: ProductScanPayload, signal: AbortSignal): Promise<ProductScanResponse> => {
  const startTime = new Date();
  logger.info('API Call: Sending product scan data', { 
    endpoint: SCAN_API_ENDPOINT,
    method: 'POST',
    barcode: payload.barcode,
    timestamp: startTime.toISOString(),
    requestPayload: JSON.stringify(payload)
  });
  
  try {
    const response = await apiClient.post<ProductScanResponse>(SCAN_API_ENDPOINT, payload, { signal });
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Log successful response with details
    logger.info('API Response: Successfully sent product scan data', { 
      endpoint: SCAN_API_ENDPOINT,
      method: 'POST',
      status: response.status,
      statusText: response.statusText,
      duration: `${duration}ms`,
      barcode: payload.barcode,
      success: response.data.success,
      timestamp: endTime.toISOString()
    });
    
    // Log the full response data
    logger.info('API Response Data: Scan result', { 
      endpoint: SCAN_API_ENDPOINT,
      barcode: payload.barcode,
      responseData: JSON.stringify(response.data)
    });
    
    return response.data;
  } catch (err) {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    
    // Enhanced error logging with detailed information
    logger.error(err, { 
      context: 'postProductScan',
      endpoint: SCAN_API_ENDPOINT,
      method: 'POST',
      barcode: payload.barcode,
      scanTimestamp: payload.scan_timestamp,
      duration: `${duration}ms`,
      timestamp: endTime.toISOString(),
      requestPayload: JSON.stringify(payload),
      errorDetails: err instanceof Error ? {
        name: err.name,
        message: err.message,
        stack: err.stack
      } : 'Unknown error type'
    });
    
    throw err;
  }
}; 