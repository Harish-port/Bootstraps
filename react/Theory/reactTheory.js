// 1. How can we handle errors in React?
// a)- for Synchrounous code - try/catch block.
// b)- for Async operations - async/await + try/catch.
// c)- Render phase errors - Error Bounderies.
// d)- Event handlers - try/catch inside handler.
// e)- Production logging - Error monitoring tool such as Sentry.io.


// 2.What is ESlint?
// ESlint is a Javascript/Typescript linter - a tool that analyzes   your code to find and fix problems.
// 📌 Why Use ESLint?
// ✅ Catch bugs early (e.g., undefined variables)

// ✅ Enforce coding standards (e.g., semicolons, spacing)

// ✅ Improve code quality and consistency

// ✅ Prevent runtime errors

// ✅ Supports custom rules and plugins (e.g., for React, accessibility, TypeScript)

// 🛠️ How Does ESLint Work?
// It scans your .js or .ts files and compares them against a set of rules. If anything violates a rule, it shows a warning or error.

// 📁 Example.eslintrc Config:
// json
// Copy
// Edit
// {
//     "extends": ["react-app", "eslint:recommended"],
//         "rules": {
//         "no-unused-vars": "warn",
//             "semi": ["error", "always"],
//                 "react/jsx-uses-react": "off"
//     }
// }

// 3. Difference between package.json and package.lock.json?

// package.json lists all the dependencies your project needs that specifies the package names and versions.
// package.lock.json it will lock the exact versions of all packages and their dependencies ensuring consistent installs across all machines/environments

