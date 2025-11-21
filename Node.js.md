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
Node.js -> Enables the creation of web servers, handles network requests, and supports low-level networking features like creating TCP/UDP servers, handling sockets, etc.
<br>
Normal JavaScript -> In the browser, JavaScript can make HTTP requests (via fetch or XMLHttpRequest), but it cannot create servers or handle low-level networking tasks.
<br><br>
<b>Process Management:</b>
Node.js -> Can spawn child processes, manage multiple threads, and handle system-level tasks like interacting with operating system processes.
<br>
Normal JavaScript -> In the browser, JavaScript is limited to running in a single thread and cannot spawn processes or directly interact with the operating system.
<b>Interacting with Operating System:</b>
Node.js-> Can interact with the operating system to perform tasks like reading environment variables, interacting with system processes, scheduling tasks, etc.
<br>
Normal JavaScript -> In the browser, JavaScript is sandboxed and cannot interact with the operating system directly, limiting its capabilities to browser-related tasks.
<br>

# A brief history of Node.js

<b>2009: Initial Release by Ryan Dahl</b>
Creator: Ryan Dahl introduced Node.js in 2009. He aimed to build a lightweight, efficient system for building web applications that could handle many connections simultaneously.
<br>
Inspiration: Ryan Dahl was frustrated with the limitations of Apache HTTP Server, particularly the way it handled multiple connections by creating a separate thread for each request. He wanted a non-blocking, event-driven architecture.
<br>
First Version: Node.js was initially released with support for Linux and MacOS, using Google's V8 JavaScript engine, which was chosen for its high performance.
<b>2009: Initial Release by Ryan Dahl</b>
npm Launch: In 2010, npm (Node Package Manager) was released, providing a way to share and manage libraries and dependencies in Node.js projects, significantly boosting its ecosystem.
<br>
Windows Support: In 2011, Node.js added support for Windows, broadening its adoption across different operating systems
<b>2012: Support of Joyent Company</b>
Joyent Sponsorship: Joyent, a cloud infrastructure company, became the corporate sponsor of Node.js, providing financial and organizational support, which accelerated its development.
<br>
<b>2014-2015: Fork and Foundation</b>
io.js Fork: In 2014, due to disagreements over the pace and direction of Node.js development, a group of developers forked Node.js to create io.js. This fork was meant to offer faster development and better collaboration with the community.
<br>
Node.js Foundation: In 2015, to resolve the fork and unify the community, the Node.js Foundation was created under the Linux Foundation. io.js and Node.js were merged back together, bringing in the best features from both projects.
<b>2016-Present: Modern Node.js and LTS Releases</b>
Version 4.0 and LTS: The merger led to the release of Node.js version 4.0, marking the beginning of a more stable release cycle with Long-Term Support (LTS) versions, which ensured more predictable and stable updates.
<br>
Rapid Growth: Node.js continued to evolve with the addition of features like async/await, HTTP/2 support, and improvements to performance and security. Its popularity grew, becoming one of the most widely used platforms for server-side JavaScript.
<br>
Node.js 14 (LTS): In 2020, Node.js 14 was released, including features like optional chaining, nullish coalescing, and a new implementation of the Streams API.
<b>Current State</b>
Ecosystem: Today, Node.js powers millions of websites and applications, with a vast ecosystem of libraries and tools. It is used by companies of all sizes and has become a key technology in modern web development.
<br>
Community: Node.js remains open-source and community-driven, with an active community that continuously contributes to its growth and development.
<br>
Node.js has transformed the way JavaScript is used, making it a dominant force in backend development and enabling JavaScript developers to work on both client and server sides with a unified language.





