// File: server.js
// ------------------
// This file contains main file to initialize  server and set up application's routes

// Author: Heavendeep kaur
// Date: February 2, 2024

// src/server.js

// We want to gracefully shutdown our server
const stoppable = require('stoppable');

// Get our logger instance
const logger = require('./logger');

// Get our express app instance
const app = require('./app');
//To get the desird  port in which our server is being initiaized
// Get the desired port from the process environment. Default to `8080`
const port = parseInt(process.env.PORT || 8080, 10);

// Start a server listening on this port
const server = stoppable(
  app.listen(port, () => {
    // Log a message that the server has started, and which port it's using.
    logger.info({ port }, `Server started`);
  })
);

// Export our server instance so other parts of our code can access it if necessary.
module.exports = server;