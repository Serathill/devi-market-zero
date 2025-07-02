/**
 * Script to start both the development server and logging server
 * 
 * This script starts the logging server first, then the development server.
 * It handles graceful shutdown of both servers when the process is terminated.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
  console.log('Created logs directory');
}

console.log('Starting logging server...');
const loggingServer = spawn('node', ['server.cjs']);

loggingServer.stdout.on('data', (data) => {
  console.log(`[Logging Server]: ${data.toString().trim()}`);
});

loggingServer.stderr.on('data', (data) => {
  console.error(`[Logging Server ERROR]: ${data.toString().trim()}`);
});

// Wait a moment for the logging server to start
setTimeout(() => {
  console.log('Starting development server...');
  const devServer = spawn('npm', ['run', 'dev']);

  devServer.stdout.on('data', (data) => {
    console.log(`[Dev Server]: ${data.toString().trim()}`);
  });

  devServer.stderr.on('data', (data) => {
    console.error(`[Dev Server ERROR]: ${data.toString().trim()}`);
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('Shutting down servers...');
    loggingServer.kill();
    devServer.kill();
    process.exit();
  });
}, 1000);

console.log('Starting servers. Press Ctrl+C to stop both servers.'); 