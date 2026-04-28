// const http =require("http");
// const server = http.createServer((req, res) => {
//     const method = req.method;
//     const url =new URL(req.url,`http://${req.headers.host}`);
//     const query = url.searchParams;
//     if(method === "GET" && url.pathname.startsWith("/users")){
//         res.end("hello user!");
//     }
//     if(method === "GET" && url.pathname.startsWith("/product")){
//         res.end("hello from the products section!");
//     }
// });
//     server.listen(3000,() => {console.log("server running on port 3000");
//     });


// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const user = {
//   name: "John",
//   age: 25
// };

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
//   const method = req.method;

//   if (method === "GET" && pathname === "/user") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(user));
//   } 
//   else if (method === "POST" && pathname === "/data") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       fs.writeFile("./todo.json", body, () => {
//         const parsed = JSON.parse(body);
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({
//             message: "Data received",
//             data: parsed
//           })
//         );
//       });
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });











/// first task simple task

// const http = require("http");
// const fs = require("fs");
// const path = require("path");


// const filePath = path.join(__dirname, "notes.json");


// const server = http.createServer((req, res) => {

//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const pathname = url.pathname;

 
//   if (req.method === "GET" && pathname === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     return res.end("Welcome to Notes API");
//   }

  
//   if (req.method === "GET" && pathname === "/notes") {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500);
//         return res.end("Error reading notes");
//       }

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(data);
//     });
//   }

 
//   else if (req.method === "POST" && pathname === "/notes") {

//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const newNote = JSON.parse(body);

//       fs.readFile(filePath, "utf8", (err, data) => {

//         const notes = data ? JSON.parse(data) : [];
//         notes.push(newNote);

//         fs.writeFile(filePath, JSON.stringify(notes), (err) => {
//           if (err) {
//             res.writeHead(500);
//             return res.end("Error saving note");
//           }

//           res.writeHead(201, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "Note added" }));
//         });
//       });
//     });
//   }

 
//   else {
//     res.writeHead(404);
//     res.end("Route Not Found");
//   }

// });


// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });




//new code

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const pathname = url.pathname;

//   // HOME
//   if (req.method === "GET" && pathname === "/") {
//     res.end("Welcome to Notes API");
//   }

//   // GET NOTES / GET NOTE BY ID
//   else if (req.method === "GET" && pathname === "/notes") {
//     const id = url.searchParams.get("id");

//     fs.readFile("./notes.json", "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500);
//         return res.end("Error reading file");
//       }

//       const notes = JSON.parse(data);

//       if (id) {
//         const note = notes.find(n => n.id == id);
//         res.end(JSON.stringify(note || {}));
//       } else {
//         res.end(JSON.stringify(notes));
//       }
//     });
//   }

//   // ADD NOTE
//   else if (req.method === "POST" && pathname === "/notes") {
//     let body = "";

//     req.on("data", chunk => body += chunk);

//     req.on("end", () => {
//       const newNote = JSON.parse(body);

//       fs.readFile("./notes.json", "utf8", (err, data) => {
//         const notes = JSON.parse(data);
//         notes.push(newNote);

//         fs.writeFile("./notes.json", JSON.stringify(notes), () => {
//           res.writeHead(201);
//           res.end("Note added successfully");
//         });
//       });
//     });
//   }

//   // 404
//   else {
//     res.writeHead(404);
//     res.end("Route not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });