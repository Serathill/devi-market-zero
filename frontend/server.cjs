/**
 * Logging server for DeviMarket Zero with Mock API
 * 
 * This server receives logs from the frontend application and writes them to files
 * in the logs directory, organized by date. It also provides mock API endpoints.
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to get current date formatted as YYYY-MM-DD
const getFormattedDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// Helper function to get current time formatted as HH:MM:SS
const getFormattedTime = () => {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
};

// Log endpoint
app.post('/api/logs', (req, res) => {
  const { level, message, context } = req.body;
  
  if (!level || !message) {
    return res.status(400).json({ error: 'Missing required fields: level and message' });
  }
  
  const date = getFormattedDate();
  const time = getFormattedTime();
  const logFileName = `${date}.log`;
  const logFilePath = path.join(logsDir, logFileName);
  
  const logEntry = `[${time}] [${level.toUpperCase()}] ${message} ${context ? JSON.stringify(context) : ''}\n`;
  
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      return res.status(500).json({ error: 'Failed to write log' });
    }
    
    res.status(200).json({ success: true });
  });
});

// Mock products data
const mockProducts = [
  {
    id: '1',
    name: 'Laptop Gaming',
    description: 'Laptop de gaming puternic pentru gameri profesionisti',
    price: 4999.99,
    currency: 'RON',
    image_url: 'https://via.placeholder.com/300x200?text=Laptop',
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Smartphone cu camera de ultima generatie',
    price: 2499.99,
    currency: 'RON',
    image_url: 'https://via.placeholder.com/300x200?text=Smartphone',
  },
  {
    id: '3',
    name: 'Monitor LED',
    description: 'Monitor LED de 27 inch cu refresh rate de 144Hz',
    price: 1299.99,
    currency: 'RON',
    image_url: 'https://via.placeholder.com/300x200?text=Monitor',
  },
  {
    id: '4',
    name: 'Tastatura mecanica',
    description: 'Tastatura mecanica RGB pentru gaming',
    price: 399.99,
    currency: 'RON',
    image_url: 'https://via.placeholder.com/300x200?text=Tastatura',
  },
  {
    id: '5',
    name: 'Mouse gaming',
    description: 'Mouse gaming cu senzor optic de mare precizie',
    price: 249.99,
    currency: 'RON',
    image_url: 'https://via.placeholder.com/300x200?text=Mouse',
  }
];

// API endpoints for products
app.get('/api/products', (req, res) => {
  // Add a small delay to simulate network latency
  setTimeout(() => {
    res.json(mockProducts);
  }, 500);
});

app.get('/api/products/:id', (req, res) => {
  const product = mockProducts.find(p => p.id === req.params.id);
  
  if (product) {
    // Add a small delay to simulate network latency
    setTimeout(() => {
      res.json(product);
    }, 300);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Mock API available at http://localhost:${PORT}/api/products`);
  console.log(`Logs will be stored in ${path.resolve(logsDir)}`);
}); 