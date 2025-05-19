// What is XXS Attack ?
//     - XSS(Cross - site Scripting) is a vulnerability that lets an attacker inject malicious Javascript into a trusted website.When a user visits that page the malicious script runs in their browser.

// 🧨 What does an XSS attack do?
// Here’s what it can lead to:
// Stealing cookies or session tokens
// The attacker can steal your session cookie and impersonate you.
// E.g., if you're logged into your bank, the attacker might hijack your session.
// Defacing websites
// They can inject messages or change the appearance of a site for users.
// Phishing
// They can inject a fake login form that looks real, tricking users into entering credentials.
// Redirecting users
// Users can be silently redirected to malicious or phishing sites.
// Running actions on behalf of users
// If you're logged in, the attacker can use XSS to perform actions as you (like sending messages or making purchases).


// Tyoes of XSS:

// 1. Stored XSS

// Malicious code is stored on the server (e.g., in a comment, profile field) and then shown to users.

// 2. Reflected XSS

// Malicious code is part of a URL or query parameter and reflected back immediately (e.g., in a search result).

// 3. DOM-based XSS

// The vulnerability is in the client-side JavaScript, not the server.

// How to prevent it?

// 1. Escape or Sanitize the user Input/output fields.
// 2. Use Security libraries like DOMPurify for front end.
// 3. Set proper Content Security Policy(CSP) Headers.
// 4. Validate and encode the inputs on both frontend and backend.

// for setting the CSP in Node js (because you can only set it in the client side)
// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy",
//       "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self';");
//     next();
//   });

// This means:
// 1. only load content from the same origin('self').
// 2. Block all scripts, styles, and objects from external source.
// 3. No embedding of the page in <ifrome>.


// >>>>>> What is CORS?
// CROS stands for Cross Origin Resource Sharing. It's a browser security feature that controls which domains are allower to access resources on your web server.
// why does it exist?
// To protect users from malicious sites trying to access sensitive data from another site
// // Example of a potential issue:
// You're logged into https://yourbank.com
// A malicious site http://badsite.com tries to fetch your data from yourbank.com using JavaScript
// CORS blocks this request unless yourbank.com explicitly allows badsite.com

// On your backend, allow the frontend origin.

// const cors = require('cors');
// app.use(cors({
//     origin: "http://localhost:3000",  // allow requests from your react app
//     credentials: true // if you're using cookies
// }));
// or Allow all origins
// app.use(cors());



