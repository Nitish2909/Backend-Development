const express = require("express");

const app = express();

//middleware
app.use((req,res,next)=>{
    console.log("Request Received");
    next(); // pass control to next middleware/route
})

app.get("/", (req,res)=>{
    res.send("This an Example of Middleware")

});

app.listen(3500);