const express = require('express');
const app = express();
const path = require('path');


require('dotenv').config();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
