const http = require('http');
const { json } = require('stream/consumers');

const userData = [
    {
        name:"Nitish Kumar",
        age:"21",
        city:"Karnal",
        Profession:"Software Engineer"
    },
     {
        name:"Rupesh Kumar",
        age:"20",
        city:"New Delhi",
        Profession:"Doctor"
    },
     {
        name:"Sam",
        age:"23",
        city:"Karnal",
        Profession:"Writer"
    },
     {
        name:"Peter",
        age:"25",
        city:"Panipat",
        Profession:"Director"
    },
]
http.createServer((req,res)=>{
 res.setHeader('Content-Type',"application/json")
 res.write(JSON.stringify(userData));
 res.end();
}).listen(3300);