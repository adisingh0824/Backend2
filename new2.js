// ///Introduction to express js
// const express = require('express');
// const app=express();
// app.get("/",function(req, res){
//   res.send("hello adi") ;
// });
// ///***express====function***
// /// routing is after domain
// app.get("/profile", function(req, res){
//      res.send("hello adi2");
// });
// app.listen(3000);
// console.log("Listening on port 3000");
const express = require('express');
const app = express();
app.get("/", function(req, res){
    res.send("hello adiii");
});
app.get("/profile", function(req, res){
    res.send("hello adi12");
});
// app.listen(3000, function(){
//     console.log("Listening on port 3000");
// });
app.listen(3000);
