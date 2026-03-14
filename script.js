const express = require('express');
const app = express();
//middleware
app.use(function(req, res, next){
    console.log(req);
// till it it's middleware
});//ane wale har request will execute for all
app.get('/', function(req, res){
    res.send('Hello World');
})
app.get('/profile', function (req, res){
    res.send('Hello from profile');
})
app.listen(3000);