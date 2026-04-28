// const express = require('express');
// const app = express();
// app.get("/sum",(req,res)=>{
//     console.log(req.query.a);
// });







// app.listen(6000, () => {

//     console.log("Server is running on port 6000");

// });



const express = require("express");
const app = express();
app.get("/sum" , (req,res) => {
    console.log(req.query);
    res.send(parseInt(req.query.a) + parseInt(req.query.b));
});
app.listen(3000 , () =>{
    console.log("server is running on port 3000");
});

