/**
 * Logging server for DeviMarket Zero
 * 
 * This server receives logs from the frontend application and writes them to files
 * in the logs directory, organized by date.
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3002;

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

// Start server
app.listen(PORT, () => {
  console.log(`Logging server running on port ${PORT}`);
  console.log(`Logs will be stored in ${path.resolve(logsDir)}`);
}); 