/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  distDir: 'dist', // Custom output directory for the build
  experimental: {
    appDir: true, // Enable the App Router
  },
};
