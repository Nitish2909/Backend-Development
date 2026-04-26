
const express = require("express");
const app= express();

app.get("",(req,res)=>{
    res.send("<h1>Hello from express js");
});
app.listen(3400,()=>{
    console.log("Server is Running on port 3400");
});