/**
 * @file This file contains constants used throughout the application.
 *
 * It helps in avoiding "magic strings" by providing a single source of truth
 * for values like API endpoints, keys, action types, etc.
 */

/**
 * The number of products to display per page on the product list page.
 */
export const PRODUCT_PAGE_LIMIT = 12;

/**
 * Navigation items for the main header.
 */
export const HEADER_NAV_ITEMS = [
  { label: "Acasă", to: "/" },
  { label: "Produse", to: "/products" },
  { label: "Scan", to: "/scan" },
  { label: "Despre noi", to: "/about" },
]; 