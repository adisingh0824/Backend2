// MIDDLEWARE
const express=require('express');
const app = express();
app.use(function(req, res, next){
   console.log('middleware is working ');
   next();
});
app.use(function(req, res, next){
   console.log('middleware is working again ');
   next();
});
app.get("/", function(req,res){
   res.send("Champion mera adii");
});
app.get("/about", function(req,res){
   res.send("Champion mera adiiiiiiiiiii");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
