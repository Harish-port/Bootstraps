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