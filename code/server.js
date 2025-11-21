//Create a Server using node.js

const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("Hello from Node.js server.");
});

server.listen(3000);

