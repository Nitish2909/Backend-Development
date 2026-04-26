const express = require("express");

const app = express();

app.get("/",(req,res)=>{
   res.send("hello from express js"   +'<a href="about">Go to About</a>');
});

app.get("/about",(req,res)=>{
   res.send("hello from express js.this is about page");
});

app.listen(3000);