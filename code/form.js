const http = require('http');
const fs = require('fs');
    http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8', (error,data)=>{ 
        if(error){
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.write("internal server error");
        
            return;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        if(req.url == '/')
        {
            res.write(data);
        }
        else if(req.url.startsWith('/submit'))
        {
            res.write('Data submitted');
        }
        res.end();

    })
}).listen(6800)