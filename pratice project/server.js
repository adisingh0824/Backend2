//Jab api /data path r get request aayegi tab hame data.json file ko read krkeus data koresponse me bhejna h
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello");
// });
// const PORT = 3000;
// server.listen(3000,()=>{
//   console.log("server running on http://localhost:3000");
//  });
//   const method = req.method;
//   const url = req.url;
//   if(method === "GET" && url === "/API/data"){
//     res.writeHead(200,{"Content-Type": "application/json"});
//     res.end(JSON.stringify({message: "Hello, this is your data!"}));
//   } 
//     res.writeHead(200,{"Content-Type": "text/plain"});
//     res.end("Welcome to Home Page");


//     const http = require("http");
// const fs = require("fs");






// const http = require("http");

// const server = http.createServer((req, res) => {

// if (req.method === "GET" && req.url === "/Api/data") {

// fs.readFile("data.json", "utf-8", (err, data) => {

// if (err) {
// res.writeHead(500, {"Content-Type": "text/plain"});
// res.end("Error reading file");
// return;
// }

// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(data);

// });

// }

// });

// server.listen(3000, () => {
// console.log("Server running on port http://localhost:3000");
// });





// const http = require("http");
// const fs = require("fs");

// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     const time = new Date().toLocaleString();
//     console.log(`Time: ${time} | Method: ${req.method} | URL: ${req.url}`);

//     //jab /api/data path par get request aayegi tab hume data.json file ko read kar kar uss datat ko response me bhejna hai
//     if (req.method === "GET" && req.url === "/api/data") {

//         fs.readFile("data.json", "utf-8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "text/plain" });
//                 res.end("Error reading file");
//             } else {
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(data);
//             }
//         });

//     } else {

//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Server chal raha hai...");

//     }

// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

//client mujhe jab post request bhejega /api/data path pr tab wo mujhe user ka data bhejega json format me  us data ko me pahsle request.on event listener se collect krunga ab iske baad mujhe isko likhna h data.json ke andar ak empty erry h usme pust krna h 
//iske liye pahle read krenge file ke data
//json data ko convert krenge js object me
//user ka data ko bhi convert krunga json object me
//uske baad is data ko arrya me push kr dunga


//   const http = require("http");
// const fs = require("fs");

// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     const time = new Date().toLocaleString();
//     console.log(`Time: ${time} | Method: ${req.method} | URL: ${req.url}`);

   
//     if (req.method === "GET" && req.url === "/api/data") {

//         fs.readFile("data.json", "utf-8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "text/plain" });
//                 res.end("Error  file");
//             } else {
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(data);
//             }
//         });

//     }

  
//     else if (req.method === "POST" && req.url === "/api/data") {

//         let body = "";

        
//         req.on("data", (chunk) => {
//             body += chunk;
//         });

//         req.on("end", () => {

//             const userData = JSON.parse(body); 

//             fs.readFile("data.json", "utf-8", (err, data) => {

//                 let users = [];

//                 if (!err && data) {
//                     users = JSON.parse(data); 
//                 }

//                 users.push(userData); 

//                 fs.writeFile("data.json", JSON.stringify(users), (err) => {

//                     if (err) {
//                         res.writeHead(200, { "Content-Type": "text/plain" });
//                         res.end("Error");
//                     } else {
//                         res.writeHead(200, { "Content-Type": "application/json" });
//                         res.end(JSON.stringify({ message: "User added" }));
//                     }

//                 });

//             });

//         });

//     }

//     else {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Server");
//     }

// });

// req.on("end", () => {

//     console.log(body);   // check kya data aaya

//     const userData = JSON.parse(body);
// server.listen(3000, () => {
// console.log("Server running on port http://localhost:3000");
// });
// });




// //express se related 
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Home Route
// app.get("/", (req, res) => {
//     res.send("Server is running");
// });

// // About Route
// app.get("/about", (req, res) => {
//     res.send("This is about page");
// });

// // Time Route
// app.get("/time", (req, res) => {
//     const time = new Date();
//     res.send("Current Time: " + time);
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });






// //express middleware
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // middleware
// app.use(express.json());

// // home route
// app.get("/", (req, res) => {
//     res.send("Server is running 🚀");
// });

// // users route
// app.get("/users", (req, res) => {
//     const users = [
//         {id:1, name:"Rahul"},
//         {id:2, name:"Meena"},
//         {id:3, name:"Aman"}
//     ];

//     res.json(users);
// });

// // create user
// app.post("/users", (req, res) => {
//     const newUser = req.body;

//     res.json({
//         message: "User created successfully",
//         user: newUser
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const http = require("http");
const fs = require("fs");

const PORT = 5000;
const DATA_FILE = "./student.json";

function getStudents() {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

function saveStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}

const server = http.createServer((req, res) => {
  // CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // HANDLE PREFLIGHT
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // GET all students
  if (req.method === "GET" && req.url === "/api/student") {
    const students = getStudents();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  }

  // ADD student
  else if (req.method === "POST" && req.url === "/api/student") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newStudent = JSON.parse(body);

      const students = getStudents();

      newStudent.id = Date.now();

      students.push(newStudent);

      saveStudents(students);

      res.end(JSON.stringify({ message: "Student added" }));
    });
  }

  // DELETE student
  else if (req.method === "DELETE") {
    const id = parseInt(req.url.split("/")[3]);

    let students = getStudents();

    students = students.filter((s) => s.id !== id);

    saveStudents(students);

    res.end(JSON.stringify({ message: "Deleted" }));
  }

// EDIT student
  else if (req.method === "PUT") {
    const id = parseInt(req.url.split("/")[3]);

    let body = "";

    req.on("data", (chunk) => (body += chunk));

    req.on("end", () => {
      const updated = JSON.parse(body);

      let students = getStudents();

      students = students.map((s) => (s.id === id ? { ...s, ...updated } : s));

      saveStudents(students);

      res.end(JSON.stringify({ message: "Updated" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
