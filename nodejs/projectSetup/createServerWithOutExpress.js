const http = require('http');

// Define server port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');

  // Simple routing
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('About Us Page');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Start listening
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
