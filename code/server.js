//Create a Server using node.js

const http = require("http") 
const server = http.createServer((req,res)=>{    
    res.writeHead(200, {'Content-Type':'text/html'});   
    res.write("<h2>Hello from server.js</h2>")             
    res.write("<h1>This is Nitish Kumar from nodejs Server</h1>")
    res.end();
});

server.listen(3000);

//Explanation of this code:

//server is created by "http" module.

//"require" is a built-in function in Node.js used to import modules(files, built-in  libraries, or npm packages) into your program.http is core module.

//createServer() creates a new web server.
//It takes a callback function with two arguments:
//req → request coming from the client (browser)
//res → response we send back to the client

//res.write() sends HTML content to the browser
//res.end() finishes the response (every response must end)

//server.listen(3000) This tells the server to listen on port 3000.



// // we can also create two server in one file like this:

// const http = require("http") 
// const server1 = http.createServer((req,res)=>{                   
//     res.write("<h1>This is Nitish Kumar from nodejs Server</h1>")
//     res.end();
// });

// server1.listen(3000);

// const server2 = http.createServer((req,res)=>{                   
//     res.write("<h1>This is Nitish Kumar</h1>")
//     res.end();
// });

// server2.listen(4000);



