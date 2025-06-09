1. What is Node JS?
Node js is a run time environment to execute JS code outside of the brower and its built on chromes v8 engine.

2. difference between node js and js?
Javascript is a progromming language
Node js is a run time environment that allows js code to run outside of the browser
API Access- JS is limited to DOM and web API's where as node js provides access to file system, network and database.
Execution -	Runs in the browser (Chrome, Firefox, Edge, etc.).	Runs on the V8 engine

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
    -  Buffer is a **built-in global class** that **provides a way to work with binary data directly**. 
    -  It represents a chunk of memory allocated outside of the V8 JavaScript engine but can be interacted with via a JavaScript interface. 
    -  Buffers are particularly useful because JavaScript initially did not have a mechanism for dealing with binary data, which is **essential for tasks such as interacting with file systems, network communications, or handling binary protocols**.

8. what are the core modules of node js?
a. File systems.
   Handles the file operations like reading, writing, and modifying files.
   Example : fs.readFile(), fs.writeFile()

b. Path(path)
   Provides utilities for working with file and directory paths.
   Example : path.join(),path.resolve()