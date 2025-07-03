import apiClient from './api';
import axios from 'axios';
import type { Product } from '../types/product';
import logger from '../utils/logger';

/**
 * @file This file contains functions for interacting with the products API.
 */

// Tipul pentru produsele care vin din API
interface ApiProduct {
  id: string;
  barcode?: string;
  barcodes?: string[];
  name: string;
  description?: string;
  price: number;
  currency: string;
  category?: string;
  sub_category?: string;
  brand?: string;
  stock_quantity?: number;
  image_url?: string;
  source_etl?: string;
  attributes?: Record<string, string>;
  tags?: string[];
  is_active?: number;
  created_at?: unknown;
  updated_at?: unknown;
  external_product_id?: string;
}

// Local data pentru backup în caz că API-ul eșuează
const LOCAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Laptop Gaming Pro',
    description: 'Laptop de gaming performant cu procesor modern și placă video dedicată, perfect pentru gaming și aplicații intense.',
    price: 4999.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/ILEU18M.jpg',
    brand: 'Asus',
    category: 'Electronice',
    subCategory: 'Laptopuri',
    stock_quantity: 10,
    features: [
      'Procesor AMD Ryzen 7',
      'Placă video NVIDIA RTX 3070',
      '16GB RAM DDR4',
      '1TB SSD NVMe'
    ]
  },
  {
    id: 2,
    name: 'Smartphone UltraPlus',
    description: 'Smartphone premium cu ecran AMOLED, cameră de înaltă rezoluție și baterie de lungă durată.',
    price: 2499.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/wXuQ7bm.jpg',
    brand: 'Samsung',
    category: 'Electronice',
    subCategory: 'Telefoane',
    stock_quantity: 15,
    features: [
      'Display 6.7" AMOLED',
      'Cameră 108MP',
      'Baterie 5000mAh',
      'Procesor Octa-core'
    ]
  },
  {
    id: 3,
    name: 'Monitor Gaming 27"',
    description: 'Monitor LED de 27 inch cu refresh rate de 144Hz, ideal pentru gaming și aplicații profesionale.',
    price: 1299.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/J01RKXA.jpg',
    brand: 'LG',
    category: 'Electronice',
    subCategory: 'Monitoare',
    stock_quantity: 5,
    features: [
      'Display 27" IPS',
      'Refresh rate 144Hz',
      'Timp de răspuns 1ms',
      'Rezoluție 2560x1440'
    ]
  },
  {
    id: 4,
    name: 'Tastatură Mecanică RGB',
    description: 'Tastatură mecanică RGB pentru gaming cu switch-uri mecanice și iluminare personalizabilă.',
    price: 399.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/PzwYSsC.jpg',
    brand: 'Logitech',
    category: 'Accesorii',
    subCategory: 'Periferice',
    stock_quantity: 20,
    features: [
      'Switch-uri mecanice',
      'Iluminare RGB',
      'Anti-ghosting',
      'Profil de aluminiu'
    ]
  },
  {
    id: 5,
    name: 'Mouse Gaming Profesional',
    description: 'Mouse gaming cu senzor optic de mare precizie și design ergonomic pentru sesiuni lungi de joc.',
    price: 249.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/UUgBCIe.jpg',
    brand: 'Razer',
    category: 'Accesorii',
    subCategory: 'Periferice',
    stock_quantity: 12,
    features: [
      'Senzor optic 16000 DPI',
      'Butoane programabile',
      'Iluminare RGB',
      'Design ergonomic'
    ]
  },
  {
    id: 6,
    name: 'Căști Gaming Surround',
    description: 'Căști de gaming cu sunet surround 7.1, microfon detașabil și design confortabil.',
    price: 349.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/MWYrgfo.jpg',
    brand: 'HyperX',
    category: 'Accesorii',
    subCategory: 'Audio',
    stock_quantity: 8,
    features: [
      'Sunet surround 7.1',
      'Microfon detașabil',
      'Pernuțe din memory foam',
      'Compatibilitate multiplă'
    ]
  },
  {
    id: 7,
    name: 'SSD NVMe 1TB',
    description: 'SSD NVMe ultra-rapid pentru stocare și performanță optimă a sistemului.',
    price: 699.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/RSlPWDF.jpg',
    brand: 'Samsung',
    category: 'Componente',
    subCategory: 'Stocare',
    stock_quantity: 30,
    features: [
      'Capacitate 1TB',
      'Interfață PCIe 4.0',
      'Viteză citire 7000 MB/s',
      'Viteză scriere 5000 MB/s'
    ]
  },
  {
    id: 8,
    name: 'Placă Video Gaming',
    description: 'Placă video de înaltă performanță pentru gaming și aplicații profesionale.',
    price: 3499.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/uVCcLDv.jpg',
    brand: 'NVIDIA',
    category: 'Componente',
    subCategory: 'Plăci Video',
    stock_quantity: 5,
    features: [
      'NVIDIA RTX 3080',
      '10GB GDDR6X',
      'Ray Tracing',
      'DLSS AI'
    ]
  },
  {
    id: 9,
    name: 'Scaun Gaming Ergonomic',
    description: 'Scaun gaming ergonomic cu suport lombar și tetieră ajustabilă pentru confort maxim.',
    price: 999.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/hMvaYAq.jpg',
    brand: 'DXRacer',
    category: 'Mobilier',
    subCategory: 'Scaune',
    stock_quantity: 7,
    features: [
      'Design ergonomic',
      'Suport lombar ajustabil',
      'Tetieră cu pernă',
      'Materiale premium'
    ]
  },
  {
    id: 10,
    name: 'Boxe PC 2.1',
    description: 'Sistem audio 2.1 pentru PC cu subwoofer puternic și calitate excelentă a sunetului.',
    price: 299.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/uQrCgZc.jpg',
    brand: 'Logitech',
    category: 'Accesorii',
    subCategory: 'Audio',
    stock_quantity: 14,
    features: [
      'Sistem 2.1 cu subwoofer',
      'Putere 200W',
      'Conectivitate Bluetooth',
      'Control volum și bas'
    ]
  },
  {
    id: 11,
    name: 'Router Gaming WiFi 6',
    description: 'Router de gaming cu WiFi 6 pentru conexiuni ultra-rapide și stabilitate în timpul jocurilor.',
    price: 899.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/RUZnBoj.jpg',
    brand: 'ASUS',
    category: 'Networking',
    subCategory: 'Routere',
    stock_quantity: 9,
    features: [
      'WiFi 6 (802.11ax)',
      'Tri-band',
      'Gaming QoS',
      'VPN integrat'
    ]
  },
  {
    id: 12,
    name: 'Procesor Gaming',
    description: 'Procesor de înaltă performanță pentru gaming și multitasking, cu overclocking eficient.',
    price: 1799.99,
    currency: 'RON',
    image_url: 'https://i.imgur.com/VkykYTI.jpg',
    brand: 'AMD',
    category: 'Componente',
    subCategory: 'Procesoare',
    stock_quantity: 11,
    features: [
      '8 core / 16 thread',
      'Frecvență turbo 4.8GHz',
      'Cache L3 36MB',
      'TDP 105W'
    ]
  }
];

// Setează la false pentru a folosi API-ul real
const USE_LOCAL_DATA = false;

/**
 * Mapează obiectul produs de la formatul API la formatul intern
 * @param apiProduct Produsul cum vine din API
 * @returns Produsul în formatul intern
 */
const mapApiProductToProduct = (apiProduct: ApiProduct): Product => {
  // Convertim id-ul în număr sau îl păstrăm ca string, în funcție de caz
  const productId = !isNaN(Number(apiProduct.id)) ? Number(apiProduct.id) : apiProduct.id;
  
  // Mapăm atributele la features dacă există
  const features: string[] = [];
  if (apiProduct.attributes && Object.keys(apiProduct.attributes).length > 0) {
    Object.entries(apiProduct.attributes).forEach(([key, value]) => {
      features.push(`${key}: ${value}`);
    });
  }

  // Adăugăm tag-urile la features dacă există
  if (apiProduct.tags && apiProduct.tags.length > 0) {
    apiProduct.tags.forEach(tag => {
      if (tag && tag.trim().length > 0) {
        features.push(tag);
      }
    });
  }
  
  // Normalizează barcodes
  let barcodes: string[] = [];
  if (Array.isArray(apiProduct.barcodes)) {
    barcodes = apiProduct.barcodes;
  } else if (typeof apiProduct.barcode === 'string') {
    barcodes = [apiProduct.barcode];
  }

  return {
    id: productId,
    name: apiProduct.name || 'Produs fără nume',
    description: apiProduct.description || 'Fără descriere',
    price: apiProduct.price || 0,
    currency: apiProduct.currency || 'RON',
    image_url: apiProduct.image_url || 'https://via.placeholder.com/300x200?text=No+Image',
    brand: apiProduct.brand || '',
    category: apiProduct.category || '',
    subCategory: apiProduct.sub_category || '',
    stock_quantity: apiProduct.stock_quantity !== undefined ? apiProduct.stock_quantity : 0,
    attributes: apiProduct.attributes || {},
    tags: apiProduct.tags || [],
    features: features.length > 0 ? features : undefined,
    barcodes: barcodes
  };
};

/**
 * Fetches all products from the API, handling pagination to get the complete list.
 * @returns {Promise<Product[]>} A promise that resolves to an array of all products.
 */
export const getProducts = async (signal?: AbortSignal): Promise<Product[]> => {
  if (USE_LOCAL_DATA) {
    logger.info('Using local product data instead of API');
    return Promise.resolve(LOCAL_PRODUCTS);
  }

  const startTime = new Date();
  logger.info('API Call: Fetching and aggregating all products...', {
    timestamp: startTime.toISOString()
  });

  try {
    const response = await apiClient.get<ApiProduct[]>('/products', { signal });
    
    const apiProducts = Array.isArray(response.data) ? response.data : [];

    if (apiProducts.length === 0) {
      logger.warn('API returned no products. Falling back to local data.');
      return LOCAL_PRODUCTS;
    }

    // Agregăm produsele după ID și colectăm toate codurile de bare
    const aggregatedProducts = new Map<string, ApiProduct>();

    for (const product of apiProducts) {
      if (!product || !product.id) continue;

      if (aggregatedProducts.has(product.id)) {
        const existingProduct = aggregatedProducts.get(product.id)!;
        if (product.barcode && !existingProduct.barcodes?.includes(product.barcode)) {
          existingProduct.barcodes = [...(existingProduct.barcodes || []), product.barcode];
        }
      } else {
        // Produs nou, îl adăugăm în map
        const newProduct = { ...product };
        newProduct.barcodes = [];
        if (newProduct.barcode) {
          newProduct.barcodes.push(newProduct.barcode);
        }
        aggregatedProducts.set(product.id, newProduct);
      }
    }

    const products = Array.from(aggregatedProducts.values()).map(mapApiProductToProduct);
    
    const endTime = new Date();
    logger.info('API Response: Successfully fetched and aggregated all products', {
      duration: `${endTime.getTime() - startTime.getTime()}ms`,
      totalUnique: products.length,
    });

    return products;

  } catch (error) {
    const endTime = new Date();
    logger.error('Error fetching all products', {
      duration: `${endTime.getTime() - startTime.getTime()}ms`,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    logger.warn('API error, falling back to local mock data');
    return LOCAL_PRODUCTS;
  }
};

/**
 * Fetches a single product by its ID by filtering the full list of products.
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Product>} A promise that resolves to the product object.
 */
export const getProductById = async (id: string, signal?: AbortSignal): Promise<Product> => {
  logger.info(`Fetching product with id: ${id} by filtering all products`);

  try {
    const allProducts = await getProducts(signal);
    const product = allProducts.find(p => String(p.id) === id);

    if (product) {
      logger.info(`Found product with id: ${id} locally.`);
      return product;
    } else {
      throw new Error(`Produsul cu ID ${id} nu a fost găsit.`);
    }
  } catch (error) {
    logger.error(`Error fetching product by ID ${id}`, {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    // Fallback la datele locale dacă totul eșuează
    const mockProduct = LOCAL_PRODUCTS.find(p => String(p.id) === id);
    if (mockProduct) {
      logger.warn(`Found product with id: ${id} in local mock data as a fallback.`);
      return mockProduct;
    }

    throw new Error(`Produsul cu ID ${id} nu a fost găsit nici în API, nici în datele locale.`);
  }
};

/**
 * Helper to compare product IDs, which can be string or number.
 */
const compareProductIds = (productId: string | number, searchId: string): boolean => {
  return String(productId) === searchId;
}; 