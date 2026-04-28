// http_server.js

const http = require('http');

const server = http.createServer((req, res) => {
    // Response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Response body
    res.write("Hello from Node.js Server!\n");
    res.write("URL: " + req.url + "\n");
    res.write("Method: " + req.method);

    res.end(); // response end
});

// Server listen on port 8080
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});