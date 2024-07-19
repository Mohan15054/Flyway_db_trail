const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle GET requests to /ping
app.get('/ping', (req, res) => {
    console.log("Message")
  res.json({ message: 'pong' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
