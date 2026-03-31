const  express = require('express');
const app =express();

const userModel=  require('./usermodel'); //('../models/user')


app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
})

app.get('/update', async (req, res) => {
    // let updateduser = await userModel.findOneAndUpdate({username: "adi"},{name: "Adi Singh"}, {new: true})
    //
    // res.send(updateduser);
    //console.log("hey");
})

app.get("/read",async(req, res) => {
    let users = await userModel.find();
    res.send(users);
})
app.listen(3000);