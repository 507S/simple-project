const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.listen(8000,()=>{
    console.log("server is listening to port 8000");
})