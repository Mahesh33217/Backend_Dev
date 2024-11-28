const express = require("express")

const app = express()

const port = 3000

app.get('/',(req,res) =>{
    res.send("Hello World");
})

app.get('/login',(req,res) =>{
    res.send("You Login Succesfully!!!!");
} )

app.get('/register',(req,res)=>{
    res.send("<h1>Please Register Successfully!!</h1>")
})

app.listen(port, () =>{
    console.log(`Port running on the port ${port}`);
})