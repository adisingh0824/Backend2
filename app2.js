const express = require('express');
 const app =express();
 const path=require('path');
 const viewsPath = path.join(__dirname, 'views');

 app.set("view engine","ejs");
 app.set("views", viewsPath);
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(express.static(path.join(__dirname, 'public')));

 app.get('/', (req,res) => {
     res.render("index");
 });

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});