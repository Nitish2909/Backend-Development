# Node.js :
Node.js a C++ application (CLI) which can understand and run JavaScript code outside of the browser. It provides a runtime environment built on Chrome's V8 JavaScript engine, enabling developers to execute JavaScript on the server side.And is widely used to build fast,scalable,high performance web applications and APIs.
It was first developed by Ryan Dhal.
<br>
<b>What is Node.js Used For?</b>
1.Web Servers and APIs.
<br>
2.Command-Line Tools for example, (npm, TypeScript, Webpack, ESLint, Babel, Yarn, Create React App, Vue CLI, Angular CLI, Prettier, and more ).
<br>
3.Internet of Things (IoT).
<br>
4.Real-time apps (chats, collaboration tools, live notifications)
<br>
5.Streaming apps (Netflix, YouTube)

# Why do we need Node.js & how is it different from JS in browser?
Node.js extends the capabilities of JavaScript beyond what is possible when running JavaScript solely in a browser environment. Here's what Node.js can do that normal JavaScript cannot, which makes it suitable for building backends.
<br><br>
<b>1.Access to File System:</b>
<br>
Node.js-> Provides APIs to interact with the file system, allowing you to read, write, delete, and manipulate files and directories on the server.
<br>
Normal JavaScript-> In a browser, JavaScript is sandboxed for security reasons, meaning it cannot directly access the file system of the client device.
<br><br>
<b>Networking Capabilities:</b>
<br>
Node.js -> Enables the creation of web servers, handles network requests, and supports low-level networking features like creating TCP/UDP servers, handling sockets, etc.
<br>
Normal JavaScript -> In the browser, JavaScript can make HTTP requests (via fetch or XMLHttpRequest), but it cannot create servers or handle low-level networking tasks.
<br><br>
<b>Process Management:</b><br>
Node.js -> Can spawn child processes, manage multiple threads, and handle system-level tasks like interacting with operating system processes.
<br>
Normal JavaScript -> In the browser, JavaScript is limited to running in a single thread and cannot spawn processes or directly interact with the operating system.
<br>
<b>Interacting with Operating System:</b><br>
Node.js-> Can interact with the operating system to perform tasks like reading environment variables, interacting with system processes, scheduling tasks, etc.
<br>
Normal JavaScript -> In the browser, JavaScript is sandboxed and cannot interact with the operating system directly, limiting its capabilities to browser-related tasks.
<br>

# A brief history of Node.js

<b>2009: Initial Release by Ryan Dahl</b><br>
Creator: Ryan Dahl introduced Node.js in 2009. He aimed to build a lightweight, efficient system for building web applications that could handle many connections simultaneously.
<br>
Inspiration: Ryan Dahl was frustrated with the limitations of Apache HTTP Server, particularly the way it handled multiple connections by creating a separate thread for each request. He wanted a non-blocking, event-driven architecture.
<br>
First Version: Node.js was initially released with support for Linux and MacOS, using Google's V8 JavaScript engine, which was chosen for its high performance.
<br>
<b>2009: Initial Release by Ryan Dahl</b><br>
npm Launch: In 2010, npm (Node Package Manager) was released, providing a way to share and manage libraries and dependencies in Node.js projects, significantly boosting its ecosystem.
<br>
Windows Support: In 2011, Node.js added support for Windows, broadening its adoption across different operating systems
<br>
<b>2012: Support of Joyent Company</b><br>
Joyent Sponsorship: Joyent, a cloud infrastructure company, became the corporate sponsor of Node.js, providing financial and organizational support, which accelerated its development.
<br>
<b>2014-2015: Fork and Foundation</b><br>
io.js Fork: In 2014, due to disagreements over the pace and direction of Node.js development, a group of developers forked Node.js to create io.js. This fork was meant to offer faster development and better collaboration with the community.
<br>
Node.js Foundation: In 2015, to resolve the fork and unify the community, the Node.js Foundation was created under the Linux Foundation. io.js and Node.js were merged back together, bringing in the best features from both projects.
<br>
<b>2016-Present: Modern Node.js and LTS Releases</b><br>
Version 4.0 and LTS: The merger led to the release of Node.js version 4.0, marking the beginning of a more stable release cycle with Long-Term Support (LTS) versions, which ensured more predictable and stable updates.
<br>
Rapid Growth: Node.js continued to evolve with the addition of features like async/await, HTTP/2 support, and improvements to performance and security. Its popularity grew, becoming one of the most widely used platforms for server-side JavaScript.
<br>
Node.js 14 (LTS): In 2020, Node.js 14 was released, including features like optional chaining, nullish coalescing, and a new implementation of the Streams API.
<br>
<b>Current State</b><br>
Ecosystem: Today, Node.js powers millions of websites and applications, with a vast ecosystem of libraries and tools. It is used by companies of all sizes and has become a key technology in modern web development.
<br>
Community: Node.js remains open-source and community-driven, with an active community that continuously contributes to its growth and development.
<br>
Node.js has transformed the way JavaScript is used, making it a dominant force in backend development and enabling JavaScript developers to work on both client and server sides with a unified language.
<br>

# Asynchronous and non blocking I/O model:
<br>
<b>Node.js works on these two concepts :</b>
<br>
Asynchronous model = Nodejs takes multiple request and doesn't wait for one to finish before starting another. It uses a single-threaded event loop to manage multiple concurrent tasks.
<br><br>
Non-blocking I/O = Instead of waiting for I/O operations (like file reads, database queries, or network requests) to complete, Node.js initiates the operation and continues executing other code. When the operation finishes, a callback (or a Promise) handles the result. This makes Node.js highly efficient and scalable, especially for I/O-heavy applications.
<br>

# What is node_modules:
node_modules is a folder where all the dependencies (packages or modules) required by our project are stored.

<br>
# package-lock.json
<br>
It provides a detailed snapshot of the entire dependency tree, including the specific versions of each installed package and their sub-dependencies. The main purpose of package-lock.json is to ensure consistent installs across different environments by "locking" the dependency versions. It is useful for the local system on which we are making our node application.

# Modules and Its types:

<B>Module:</B>
<br>
A module in Node.js is a reusable block or self contined block  of code that performs a specific task and can be exported and imported into other files and apllications.In Nodejs every file is treated as a separate module.
<br>

<b>Types of Modules in Nodejs:</b>

<br>

<b>1.Core Module:</b> => Core Module is also known as Built-in Module.Built-in Modules is provided by Nodejs.No need to install however you need to import Built-in modules in your file or application.
<br>
Some important core module in Nodejs are:

```bash
1. fs  => file system module for reading ,writing and manipulating File and Directories.

2. http => Provide HTTP server and client functionality to create web Servers and make http requests.

3. https => Similar to http ,but Supports secure HTTP over TLS/SSL. 

4. os => provide operating sysytem information.

5. path => Handling and Transforming file Paths.

6. events => for Event Handling.

7.Streams => Handle Streaming data(audio,video and large files)

8. url => Parse and work with URLs.

9. dns => Domain name system operations (resolve domains).

10. net => Create TCP or socket servers.

11. child_process => Run system commands or create subprocesses.

These modules are built into Node.js and can be imported using:

syntax:
const http = require("<module_name>");
 example:
const http = require("http");


```
<br>
<b>Example of core module using http With explanation </b>

```bash

const http = require("http") 
const server = http.createServer((req,res)=>{                   
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

```
<br>

<b>2.Local Module(Usre defined module):</b>

<br>
A local module is a user-defined module stored as a JavaScript file in the project. It is created by the developer and imported using require("./filename"). Local modules help organize code and make it reusable.
<br>
<b>Example:</b>

```bash

Step 1: Create a file -> math.js

function add(a, b) {
  return a + b;
}
module.exports = add;

Step 2: Use (import) local module in another file

const add = require("./math");

console.log(add(5, 3));     // Output: 8

```
<br>

<b>3.Third Party Module:</b>

<br>
A third-party module is a package created by developers (not built into Node.js) and published on npm (Node Package Manager).
You must install these modules before using them.They add extra features that are not available in core modules.
<br>
Some Third Party Module:

```bash

1. Express => Used to build web servers and APIs easily.
 
installation:

npm install express

import:

const express = require("express");

2. Mongoose => Used to connect Node.js with MongoDB.

3.Nodemon => Automatically restarts server when code changes.

installation:
npm install -g nodemon

4.JWT (jsonwebtoken) => Creates and verifies tokens for authentication.

installation:
npm install jsonwebtoken

5.Bcrypt => Encrypts passwords.

npm install bcrypt

```
# Nodemon:
<br>
Nodemon is a third-party tool for Node.js that automatically restarts your server whenever you make changes to your code.
<br>
Without Nodemon:
<br>
You must stop and restart your server manually every time.
<br>
With Nodemon:
<br>
It restarts automatically — no manual restart needed.
<br>

```bash
npm install -g nodemon   //install gloally

npm install nodemon --save-dev   //locally


//how to use or run :

nodemon filename

example:
nodemon server.js

```
# Load HTML file in node and show Output in browser:

```bash

const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('html/web.html','utf-8', (err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.write('internal server error');
            res.end();
            return;
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();
    })
}).listen(4300)

```
# How to Create file and directory with synchronous and Asynchronous way:

```bash
//Create a File Synchronously
const fs = require("fs");
fs.writeFileSync("data.txt", "Hello, this is my file!");       //If the file already exists, it will overwrite it.
console.log("File created successfully!");


//Create a File Without Overwriting (append):

const fs = require("fs");
fs.appendFileSync("data.txt", "\nNew line added!");
console.log("Content appended!");


//Create Folder + File Synchronously:
const fs = require("fs");
fs.mkdirSync("myFolder");                 // create folder
fs.writeFileSync("myFolder/info.txt", "Some data");   // create file

```
<br>

<b>Asynchronous Way:</b>

```bash
To create a file in an async (asynchronous) way in Node.js, you use:

 fs.writeFile() 
 fs.appendFile()
 fs.mkdir()
Async functions always take a callback and do NOT block the program.


Example:

const fs = require("fs");

fs.writeFile("data.txt", "Hello async file!", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }
    console.log("File created asynchronously!");
});

```
# Synchronous Programming:
Synchronous programming is a programming model where tasks are executed one after another, and each task must complete before the next task starts.
<br>
In this model, the program waits (blocks) until the current operation finishes.
<br>

<b>Some Important Points:</b>
<br>
1.Code executes line by line.
<br>
2.Next line runs only after the previous line completes.
<br>
3.Blocking behavior -> stops everything until the task is done.

4.Slow for heavy tasks (file reading, database access, API calls).
<br>

Example:

```bash
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

console.log("End");



                    output of this:
                      Start
                      (file is read... program waits)
                      <file content>
                       End

```
<br>

# Asynchronous Programming:
Asynchronous programming is a programming model where tasks can start and run without waiting for other tasks to finish.
<br>
Long-running operations execute in the background, and the program continues with the next instruction.
<br>
The result is returned later via callbacks, promises, or async/await.
<br>

<b>Some Important Points:</b>
<br>
1.Code executes without waiting.
<br>
2.Long tasks run in background.
<br>
3.Results come later via callback, Promise, or async/await.
<br>
4.Non-blocking → other code continues running.
<br>
5.Faster and better for real-world servers.
<br>

Example:

```bash
const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("End");
                  
                         output:
                          Start
                          End
                         (file is read... then callback runs)
                         <file content>

```
<br>

# Node.js Architecture Diagram(How Nodejs works):

```bash

 ┌────────────────────────┐
 │   Your JavaScript Code │
 │  (server.js / app.js)  │
 └──────────┬─────────────┘
            │
            ▼
 ┌────────────────────────┐
 │      V8 Engine         │
 │  (Runs JS line-by-line)│
 └──────────┬─────────────┘
            │ Synchronous tasks
            ▼
       ┌───────────┐
       │ Call Stack│
       └─────┬─────┘
             │
             ▼
   (If task is slow → send to Node APIs)
             │
             ▼
 ┌──────────────────────────┐
 │      Node.js APIs        │
 │ (File System, HTTP, DB)  │
 │      Background threads   │
 └───────────┬──────────────┘
             │ Async tasks
             ▼
 ┌──────────────────────────┐
 │        Event Loop         │
 │ (Checks when JS is free)  │
 └───────────┬──────────────┘
             │ Moves callbacks to queue
             ▼
 ┌──────────────────────────┐
 │    Callback/Task Queue    │
 └───────────┬──────────────┘
             │
             ▼
 ┌──────────────────────────┐
 │ Back to Call Stack        │
 │ (Callback executed)       │
 └──────────────────────────┘

 ```


                           






















