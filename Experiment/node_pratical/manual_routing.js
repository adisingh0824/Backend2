// manual_routing.js

const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Routing logic
    switch (url) {
        case '/':
            res.end("Welcome to Home Page");
            break;

        case '/home':
            res.end("This is Home Page");
            break;

        case '/login':
            if (method === 'GET') {
                res.end("Login Page (GET)");
            } else if (method === 'POST') {
                res.end("Login Data Received (POST)");
            }
            break;

        case '/data':
            res.end("Here is your data");
            break;

        default:
            res.writeHead(404);
            res.end("404 Page Not Found");
    }
});

// server start
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});