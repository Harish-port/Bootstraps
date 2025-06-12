1. What is Node JS?
   Node js is a run time environment to execute JS code outside of the brower and its built on chromes v8 engine.

2. difference between node js and js?
   Javascript is a progromming language
   Node js is a run time environment that allows js code to run outside of the browser
   API Access- JS is limited to DOM and web API's where as node js provides access to file system, network and database.
   Execution - Runs in the browser (Chrome, Firefox, Edge, etc.). Runs on the V8 engine

3. What does non-blocking architecture mean?
   A non -blocking architecture means that the system does not wait for one task to complete before moving on to the next.Instead, it can handle multiple tasks concurrently, making it highly efficient and scalable.

4. What Are I/O Operations?
   I/o Operations refer to any task that involves reading or writing data to external sources such as:
   .File system
   .database
   .network requests
5. Is Node.js Single-Threaded? If Yes, How? 🚀
   Yes Node js is single threaded meaning it process js code on a single main thread.However it is highly scalable because of its event driven approach and non-blocking architecture.

How does Nodejs work as single threaded system?

1. Event loop mechanism
   you have explain the other screnaio mentioned in the book(event queue)
2. Non-blocking Asynchronous I/o
   Node.js does not block execution while waiting for I/O operations to complete.
   Time-consuming tasks (like reading a file) are handled asynchronously using callbacks, promises, or async/await.
3. Worker Threads in libuv 🔄

Although the main thread is single-threaded, Node.js uses libuv, which manages a thread pool for CPU-intensive tasks.
Tasks like file system operations, DNS lookups, and cryptography run on separate threads in the background.
These tasks return results to the main thread once completed.

6. What is the architecture of node js? (Synchronous or Asynchronous)?
   Node js follows Event driven approach,non-blocking, Asynchronous architecture making it highly efficient for handling multiple concurrent requests.
   components of Node js architecture:
   a). V8 engine
   Node js runs on Google's V8 engine which compiles js into machine code for faster execution
   b). Event driven architecture(event loop)
   Instead of creating multiple threads node js uses single threaded event loop to handle multiple requests asynchronously
   The event loop constantly checks for tasks and executes callbacks when needed.
   c). Thread pool(worker threads)
   For CPU-Intensive tasks (eg. cryptography,file system operations), Node js offloads work to a thread pool using libuv.
   d). Asynchronous APIs 🔗
   Node.js provides built-in asynchronous APIs (e.g., fs.readFile(), http.get()).
   Uses callbacks, Promises, and async/await to handle async operations.

7. What is buffer in node js?

   - Buffer is a **built-in global class** that **provides a way to work with binary data directly**.
   - It represents a chunk of memory allocated outside of the V8 JavaScript engine but can be interacted with via a JavaScript interface.
   - Buffers are particularly useful because JavaScript initially did not have a mechanism for dealing with binary data, which is **essential for tasks such as interacting with file systems, network communications, or handling binary protocols**.

8. what are the core modules of node js?
   a. File systems.
   Handles the file operations like reading, writing, and modifying files.
   Example : fs.readFileSync(), fs.writeFileSync()
   Example:

   const fs = require('fs');
   //write to a file
   fs.writeFileSync("Hello.txt","Hello, Harish");

   // Read from the file

   const data = fs.readFileSync("hello.txt","utf-8");
   console.log(data) // Hello, Harish

b. Path(path)
Provides utilities for working with file and directory paths.
Join paths and get file extension.
Example : path.join(),path.resolve()
const path = require("path");

const filePath = path.join(\_\_dirname, 'folder', 'file.txt');
console.log('Full path:', filePath);

const ext = path.extname(filePath);
console.log('File extension:', ext); // Output: .txt
✅ 1. os – Operating System Module
The os module provides utilities to get information about the underlying operating system: platform, CPU, memory, etc.

📄 Example:
js
Copy
Edit
const os = require('os');

console.log('Operating System:', os.platform()); // e.g., win32, linux, darwin
console.log('OS Architecture:', os.arch());  
✅ 2. process – Process Module
The process module gives access to information and control over the Node.js process itself.

📄 Example:
js
Copy
Edit
console.log('Node Version:', process.version);
console.log('Process ID:', process.pid);
console.log('Platform:', process.platform);
console.log('Current Directory:', process.cwd());
console.log('Memory Usage:', process.memoryUsage());

\_\_dirname is a global variable in Node.js that gives the directory path of the current file. 9. What is fork method in node js?
The fork() specifically creates a new nodejs process and sets up the inter-process-communication(IPC) between the parent and the child processes, allowing them to send and receive messages.
// Create a child process
const child = fork('childScript.js'); // The file to execute

// Send a message from the parent to the child
child.send({ message: 'Hello from parent' });

// Listen for messages from the child
child.on('message', (msg) => {
console.log('Received message from child:', msg);
});

// Example of child receiving the message
child.on('message', (msg) => {
console.log(msg); // { message: 'Hello from parent' }
});

// Sending message to parent process
process.send({ message: 'Hello from child' });

USE CASE

The fork() method in Node.js is especially useful in situations where you want to run a separate Node.js script as a child process while still being able to communicate with it via messages. Here are some real-world use cases:

✅ 1. Offloading CPU-Intensive Tasks
Node.js is single-threaded, so any CPU-heavy task (like parsing large files, image processing, encryption, etc.) can block the event loop. Using fork() allows you to offload such tasks to a child process.

Example:
You have a web server, and a user uploads a huge CSV file for processing:

Main Process → Web server (non-blocking)
Forked Child → Parses the large CSV in the background

9. How to secure the Rest API's?

1. Use HTTPS
   Always use SSL/TLS (HTTPS) to encrypt data in transit.

const sslOptions = {
key: fs.readFileSync("server.key"),
cert: fs.readFileSync("server.cert"),
};

// ✅ Start HTTPS server
https.createServer(sslOptions, app).listen(port, () => {
console.log(`🚀 HTTPS server is running at https://localhost:${port}`);
});

In production, use Cloudflare or your hosting provider for real HTTPS certs.

2. Authetication and Authorization
   Use JWT (JSON Web Tokens)
   Note:Authentication verifies a user's identity, ensuring they are who they claim to be, while authorization determines what resources they can access after successful authentication.

3. Avoid Sensitive Data in URLs
   Never send tokens or passwords in query params

Use headers or body for sensitive data.

4. Use Environment Variables
   🔐 Never hardcode secrets
   Use .env with dotenv package:

5. Version Your APIs
   /api/v1/users
   /api/v2/users
   This helps manage breaking changes and ensures backward compatibility.

6. CORS Protection
   Cors(cross-origin-reource-sharing) is a browser security feature that blocks frontend apps from making requests to a different domain (or port) unless explicitly allowed by the server.

7. Rate Limiting
      ⛔ Prevent brute-force attacks & abuse
    
      const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
windowMs: 15 _ 60 _ 1000, // 15 minutes
max: 100, // Limit each IP
});
app.use(limiter);

protecting your API from abuse like:

Brute-force attacks (e.g., repeated login attempts)

DDoS attacks (flooding your server)

API scraping (overuse by bots)
const rateLimit = require('express-rate-limit');

// ✅ Create limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 💡 Limit each IP to 100 requests per windowMs
  standardHeaders: true, // ✅ Return rate limit info in headers
  legacyHeaders: false,  // ❌ Disable old headers
});

// ✅ Apply to all requests
app.use(limiter);

🧠 What This Means
windowMs: 15 * 60 * 1000 = 15 minutes

max: 100 → Each IP can make up to 100 requests per 15 minutes

If exceeded, user will get a 429 Too Many Requests response

8.  Security Headers: Use HTTP security headers like `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, and others to add another layer of security.

9. What are JWT tokens? How does it work?
JWT stands for JSON Web Token. It's a compact, URL-safe token used to securely transmit information between parties as a JSON object.

It is most commonly used for:

Authentication (user login)

Authorization (access control)

A JWT has 3 parts, separated by dots (.):
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   ← Header (base64)
eyJ1c2VySWQiOiIxMjM0NTY3ODkwIn0.        ← Payload (base64)
abc12345signatureXYZ==                 ← Signature
It looks like:
<header>.<payload>.<signature>


Part	Description
Header	Metadata (e.g. algorithm: HS256, type: JWT)
Payload	User data (non-sensitive info) like userId, role
Signature	Encrypted hash of header + payload + secret

10. What is indexing in database?
Indexing is a database optimization technique that makes data retrieval faster — similar to an index in a book 📖.

Instead of scanning every row to find a match, the database uses an index to jump directly to the matching data — like jumping to page 232 by checking the index for the word “React”.


MongoDB
db.users.createIndex({ email: 1 }) // 1 = ascending, -1 = descending

📈 Benefits
✅ Benefit	⚙️ Explanation
Fast data retrieval	Speeds up SELECT queries significantly

Downsides
Takes extra space	Indexes consume additional disk space