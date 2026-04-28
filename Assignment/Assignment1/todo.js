// const fs =require("fs");
// const path = require("path");
// const TODO_FILE = path.join(__dirname, "todos.json");
// console.log(TODO_FILE);

// function readTodos(){
//   const data = fs.readFileSync(TODO_FILE, "utf-8");
//   return JSON.parse(data);
// }
// function writeTodos(todos){
//   fs.writeFileSync(TODO_FILE, JSON.stringify(todos));

// }
// //add todos 
// function addTodo(task){
//   const todos = readTodos();
//   const newTodo ={
//     id : Date.now(),
//     task: task,
//     done : false

//   };
//   todos.push(newTodo);
//   writeTodos(todos);
//   console.log("Todo added:",task);
// }
// function listTodos(){
//   const todos = readTodos();
//   if(todos.length ===0){
//     console.log("No todos found.");
//     return;
//   }
//   todos.forEach((todos, index) => {

//     const status = todos.done ? "[x]" : "[ ]";
//     console.log(`${index + 1}. ${status} ${todos.task}`);
//   }
// });
// function markDone(index){
//   const todos = readTodos();
//   if(index <1 || index > todos.length){
//     console.log("Invalid index.");
//     return;
//   }
//   todos[index -1].done = true;
//   writeTodos(todos);
//   console.log("Todo marked as done:",todos[index -1].task);
// } 








// const fs = require("fs");

// const readTodo = function(){
//     const data = fs.readFileSync("C:/Users/ril/Desktop/Backend/Backend/Assignment/Assignment1/todo.json" , "utf-8");
//     return JSON.parse(data);
// }

// const writeTodos = function(newTodos){
//     const data = fs.writeFileSync("C:/Users/ril/Desktop/Backend/Backend/Assignment/Assignment1/todo.json" , JSON.stringify(newTodos) );
    
// }

// function addTodo(task){
//     const currentTodos = readTodo();
//     const newTodo = {
//         task : task,
//         id : Date.now(),
//         status : false,
//     }
//     currentTodos.push(newTodo);
//     writeTodos(currentTodos);
// }

// addTodo("Say hi to class!");

// const fs = require ("fs");
// const data = fs.readFileSync("C:/Users/ril/Desktop/Backend/Backend/Assignment/Assignment1/todo.json" , "utf-8");
// return JSON.parse(data);
// const writeTodos = function(newTodos))

// const fs = require("fs");
// const data = fs.readFileSync("a.txt", "utf-8");
// console.log(data);

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8" ,(err , data)=>{
//     if(err){
//         console.log("error aaya");
//     }else{
//         console.log(data);
//     }
// });


// //write
// const fs = require("fs");
// const data = writeFileSync("a.txt","jeee","utf-8");
// console.log("file written successfully");



// const fs = require("fs");
// fs.writeFile("a.txt", "hello","utf-8"(err , data)=>{
//     if(err){
//         console.log("error aabgya");

//     }else{
//         console.log("file written successfully");
//     }
// });

// const fs = require("fs");
// const data = fs.appendFileSync("a.txt", "b.txt\n" , "utf-8");
// console.log("fil aapenkdnfjkdsnfjeks");


// const fs = require("fs");
// fs.appendFile("a.txt", "b.txt\n" (err , data)=>{
//     if(err){
//         console.log("error aabgya");
//     }else{        console.log("file aapenkdnfjkdsnfjeks");
//     }
// });

// const fs= require("fs");
// const data = fs.unlinkSync("a.txt", "utf-8");
// console.log("file deleted successfully");

// const fs = require("fs");
// fs.unlinkFile("a.txt", "utf-8" , (err , data)=>{
//     if(err){
//         console.log("error aabgya");
//     }else{
//         console.log("file deleted successfully");
//     }   


///status
// const fs= require("fs");
// fs.stat("a.txt" (err, stat) => {
//     console.log(stat);
//     console.log(stat.isFile());
// });

// console.log(stat.isdirectry());

// const fs = require("fs");
// fs.mkdir("new",(err)=>{
//     if(err){
//         console.log("error aabgya");
//     }else{
//         console.log("folder created successfully");
//     }
// });


// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req , res))=>{
//     if(req.url === "/"){
//         Response.writeHead(204);
//         res.end();

//     }
//     const date = new Date();
//     fs.appendFileSync("c.txt", ${date}:request is on this\n , (err)=>{
//         if(err){
//             console.log("error aabgya");
//         }else{
//             console.log("file aapenkdnfjkdsnfjeks");
//         }

// )
// }