const express = require('express');
const app = express()
require("dotenv").config({path:"./.env"})

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.listen(process.env.PORT,()=>{
    console.log("server is listening to port 8000......");
})