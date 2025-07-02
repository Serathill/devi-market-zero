# Logging System Documentation

## Overview

The DeviMarket Zero application implements a comprehensive logging system that captures logs at different levels and stores them in daily log files. The system consists of:

1. A centralized logger module in the frontend
2. A dedicated logging server that receives log entries and writes them to files
3. Daily log files stored in the `logs` directory

## Log Levels

The logging system supports three levels of logs:

- **INFO**: General application flow events, such as component mounting, user actions, or API call initiations
- **WARN**: Non-critical issues that might indicate a problem but do not break the application
- **ERROR**: Critical errors, typically from caught exceptions, API failures, or other critical issues

## Log Storage

Logs are stored in the following way:

- Each day's logs are stored in a separate file named `YYYY-MM-DD.log`
- Files are stored in the `logs` directory at the project root
- Each log entry includes a timestamp, log level, message, and optional context data

## Log Format

Each log entry follows this format:

```
[HH:MM:SS] [LEVEL] Message {Context Object}
```

For example:

```
[14:25:30] [INFO] User logged in {"userId":"123","username":"john_doe"}
[14:26:15] [ERROR] Failed to fetch products {"endpoint":"/api/products","statusCode":500}
```

## Logging Server

The logging server is a simple Express application that:

1. Listens on port 3002
2. Accepts POST requests to `/api/logs`
3. Writes log entries to the appropriate daily log file
4. Creates the logs directory if it doesn't exist

To start the logging server:

```bash
node server.js
```

## Frontend Logger

The frontend logger module (`src/utils/logger.ts`) provides three methods:

- `logger.info(message, context?)`: For informational messages
- `logger.warn(message, context?)`: For warning messages
- `logger.error(error, context?)`: For error messages

The logger:
1. Logs to the browser console (with color formatting)
2. Sends logs to the logging server to be stored in files

## Usage Examples

```typescript
// Import the logger
import logger from '../utils/logger';

// Log an informational message
logger.info('User viewed product details', { productId: '123', userId: '456' });

// Log a warning
logger.warn('API returned deprecated field', { field: 'oldField', apiVersion: '1.2' });

// Log an error
try {
  // Some operation that might fail
} catch (error) {
  logger.error(error, { context: 'fetchProductData', productId: '123' });
}
```

## Viewing Logs

Log files can be found in the `logs` directory at the project root. They are named according to the date they were created (e.g., `2023-11-15.log`).

You can view logs using any text editor or with command line tools:

```bash
# View the most recent log file
cat logs/$(date +%Y-%m-%d).log

# Search for error logs
grep "\[ERROR\]" logs/*.log

# Follow logs in real-time
tail -f logs/$(date +%Y-%m-%d).log
``` 