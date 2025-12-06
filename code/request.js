const http = require("http");
http.createServer((req,res)=>{
    //console.log(req);
    if("/")
    {
        res.write("")
    }
    res.write("<h1>Home Page</h1>")
    res.end();
}).listen(4400)