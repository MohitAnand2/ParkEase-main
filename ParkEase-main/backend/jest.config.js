// File: jest.config.js
// ------------------
// This file contains jest configuration 

// Author: Heavendeep kaur
// Date: February 2, 2024

// jest.config.js
// IN ordr to get the order of the parking space in the givn area
// Get the full path to our env.jest file
const path = require('path');
const envFile = path.join(__dirname, 'env.jest');

// Read the environment variables we use for Jest from our env.jest file
require('dotenv').config({ path: envFile });

// Log a message to remind developers how to see more detail from log messages
console.log(`Using LOG_LEVEL=${process.env.LOG_LEVEL}. Use 'debug' in env.jest for more detail`);


module.exports = {
  verbose: true,
  testTimeout: 5000,
};