/**
 * @file Defines types related to product scanning.
 */

/**
 * The payload for a product scan request.
 */
export interface ProductScanPayload {
  barcode: string;
  scan_timestamp: string;
}

/**
 * The expected response from the product scan endpoint.
 * NOTE: This is a placeholder. Update it with the actual response structure.
 */
export interface ProductScanResponse {
  success: boolean;
  message: string;
  // Add other fields from the actual response
  [key: string]: unknown;
} 