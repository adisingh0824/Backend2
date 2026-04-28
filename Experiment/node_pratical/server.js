// const http = require('http');

// const PORT = 4000;

// const server = http.createServer((req, res) => {
//     res.end(`Server running on port ${PORT}`);
// });

// server.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

// const http = require('http');

// // dynamic port
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.end(`Server running on port ${PORT}`);
// });

// server.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

// server.js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        // HTML file read karo
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading file");
                return;
            }

            // HTML response bhejo
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Page Not Found");
    }

});

// port 5000 pe run
server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});