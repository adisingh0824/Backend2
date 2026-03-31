const  express = require('express');
const app =express();

const userModel=  require('./usermodel'); //('../models/user')


app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "adi",
        email: "adi@gmail.com",
        username: "adi"
    })
    res.send(createduser);
    //console.log("hey");
})
app.listen(3000);