// debug_server.js

const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {

    // URL parse karne ke liye
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);

    // Request details
    const method = req.method;
    const url = req.url;
    const headers = req.headers;
    const query = Object.fromEntries(fullUrl.searchParams);

    // Console pe print (debugging)
    console.log("Method:", method);
    console.log("URL:", url);
    console.log("Headers:", headers);
    console.log("Query Params:", query);

    // Response set
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Different response based on method
    if (method === 'GET') {
        res.end(JSON.stringify({
            message: "This is GET request",
            method,
            url,
            headers,
            query
        }, null, 2));
    }

    else if (method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.end(JSON.stringify({
                message: "This is POST request",
                method,
                url,
                headers,
                query,
                body
            }, null, 2));
        });
    }

    else {
        res.end(JSON.stringify({
            message: "Other request type",
            method
        }));
    }
});

// server start
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});