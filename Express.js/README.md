# Express.js
Express (or Express.js) is the most Popular Node.js web application framework used for building back-end server, REST APIs and web applications. It provides a set of features to simplify handling routes, middleware, and HTTP requests/responses.
<br><br>

<b>Some Common companies Using Express.js are:</b>
<br>
1. Netflix
<br>
2. Uber
<br>
3. IBM
<br>
4. PayPal
<br>
5. Mozilla Firefox
<br><br>

<b>Characteristics/Features:</b>

```bash
Fast and lightweight

Simple and flexible

Middleware support

Powerful routing

REST API support

Cross-platform

Large ecosystem

```

```bash

//imports the Express module into your Node.js application.
const express = require('express'); 

// express() initializes an instance of an Express application.
const app = express(); 

// now "app" is the instance that will be used to configure and run the web server.

app.get("route", requesthandler)

```

# Simple Express.js Server Example:

```bash
const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello Express.js');
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

```
# Routing:
Routing in Express.js defines how an application responds to client requests at specific endpoints (URIs) and HTTP methods (GET, POST, PUT, DELETE, etc.). It essentially maps incoming requests to corresponding handler functions that execute the necessary logic and send a response back to the client.
<br><br>
<b>How Routing Works:</b>

```bash
1. Client sends a request (browser or API client).

2. Server checks the URL and HTTP method.

3. Router matches the request with a defined route.

4. Corresponding function executes.

5. Server sends response back to the client.

```
<br>
<b>Example:</b>

```bash
app.get('/home', (req, res) => {
  res.send("Welcome to Home Page");
});


//Explanation:
/home -> route

GET -> HTTP method

Function -> route handler

```
<br>

<b>Types of Routing:</b>

```bash
Static Routing -> Fixed paths
Example: /about, /contact

Dynamic Routing -> Uses parameters
Example: /user/:id

Client-side Routing -> Handled in browser (React, Angular)

Server-side Routing -> Handled on server (Express, Django)

```
# Middleware:
Middleware is a function that runs between the request and the response in a web application. It processes the request before it reaches the final route handler or modifies the response before it is sent back to the client.
<br>
It perform tasks like authentication, logging, validation, or error handling.

```bash
Middleware is useful for: 

Logging requests

Authentication & Authorization

Parsing request bodies (JSON, form-data, etc.)

Error handling

Modifying request & response objects
```
<br>

Generally we don't render any thing inside middleware. We basically do some authentication like check and if any error occurs only then we render some error message.
<br>

```bash

// we can add custom properties to the req object inside middleware.
This is useful for storing user data, request metadata, or pre-processed values before passing the request to the next middleware or route handler.

const express = require('express');
const app = express();

// Custom Middleware to Add a Property
app.use((req, res, next) => {
    req.customData = "Hello from Middleware!"; // Add a custom property
    next(); // Move to the next middleware or route
});

// Route Accessing Custom Property
app.get('/', (req, res) => {
    res.send(req.customData); // Output: "Hello from Middleware!"
});

app.listen(3000, () => console.log('Server running on port 3000'));

```
<br>

<b>Middleware Working Diagram:</b>

```bash
┌──────────────┐
│   Client     │
│ (Browser /   │
│  Postman)    │
└──────┬───────┘
       │  HTTP Request
       ▼
┌──────────────────┐
│  Middleware 1    │
│ (Logger)         │
│ - Logs request   │
│ - Calls next()   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Middleware 2    │
│ (Authentication) │
│ - Checks user    │
│ - Calls next()   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Middleware 3    │
│ (Validation)     │
│ - Validates data │
│ - Calls next()   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Route Handler   │
│ (Controller)    │
│ - Sends response │
└──────┬───────────┘
       │  HTTP Response
       ▼
┌──────────────┐
│   Client     │
└──────────────┘
```
<br>

<b>Step-by-Step Explanation:</b>

```bash

1. Client sends a request
Example: GET /profile

2. Middleware 1 executes

Logs request details

Calls next() -> passes control

3. Middleware 2 executes

Checks authentication

If valid -> next()

If invalid -> sends error response

4. Middleware 3 executes

Validates request data

Calls next()

5. Route handler executes

Processes request

Sends response to client

```