// const fs=require('fs');
// fs.appendFile("hey.txt","ma to achha hu", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// });
// const fs=require('fs');
// fs.rename("hey.txt","hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })qq
// const fs=require('fs');
// fs.copyFile("hello.txt","./copy /chacha.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rmdir("hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })
// fs.readFile("./new.js","utf-8", function(err, data){
//     if(err) console.error(err);
//     else console.log(data);
// });
//HTTPS & HTTP

const http=require('http');
const server=http.createServer(function(req, res){
    res.end("hello adi");
})
server.listen(3000);
console.log("Listening on port 3000");
////
