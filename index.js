const express = require('express');

const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
let server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Example signal handling code
process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Shutting down gracefully...');
  // Perform cleanup and graceful shutdown tasks here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal. Shutting down gracefully...');
  // Perform cleanup and graceful shutdown tasks here
  process.exit(0);
});

// Perform cleanup and graceful shutdown tasks here
const shutdown = (signal, value) => {
  console.log("shutdown!");
  server.close(() => {
      //loggers
  });
};


