const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle GET requests to /ping
app.get('/ping', (req, res) => {
    console.log("Message")
  res.json({ message: 'pong' });
});

app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'report.html'));

});

// app.get('/report', (req, res) => {
//   res.sendFile(path.join(__dirname, 'report.html'));

// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
