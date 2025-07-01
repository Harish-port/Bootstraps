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

// 4. What is Context API?
// Context API is a way to pass data through the component tree without having to pass props manually at every level.

// 📌 Use Cases
// Theme (dark/light)

// Language settings (i18n)

// Authentication state (user, token)

// Concept	Description
// createContext()	Creates a Context object
// Provider	Makes the context data available to children
// useContext()	Hook to consume context in functional components

// 5.Why use Context API?
// To avoid prop drilling and share global state easily across components.

// 6. What are the limitations?
// Causes re-renders of all components that consume the context when value changes.
// Not ideal for high-frequency updates (e.g., mouse position or input state).
// Best for static or rarely changing data like theme, locale, auth.

// 7. How to optimize Context re-renders?
// Split contexts (e.g., one for user, one for theme)
// Use React.memo or useMemo for provider value
// Avoid putting large/rapidly changing data in context

// 8. when to use Context API and Redux?
// ✅ Use Context API when:
// You have simple global state like:
// Theme (dark/light)
// Language preference
// Auth status (isLoggedIn)
// Modal visibility
// Your app is small or medium-sized
// You want a quick setup with minimal dependencies
// You don’t need advanced debugging or middleware

// ✅ Use Redux (or Redux Toolkit) when:
// You have complex state logic, especially involving:
// Nested or interdependent state
// State shared across many deeply nested components
// Data from multiple APIs
// Undo/redo, caching, optimistic updates
// You want centralized control over state and actions
// You need middleware (e.g., for async calls, logging, error handling)
// You need powerful dev tools to debug state changes
// You’re building a large-scale app with multiple contributors

// 9.V/S

// Feature	Context API	Redux
// 🔄 Data Flow	One-way (via Provider)	One-way, but more structured
// 🧠 Best For	Small to medium apps, simple global state	Medium to large apps, complex state logic
// ⚙️ Setup	Minimal	Requires boilerplate (store, actions, reducers)
// 📦 State Type	UI state (theme, auth status, language)	App state (user data, API cache, forms, etc.)
// 🚀 Performance	May rerender more than needed	Can optimize with middleware & selectors
// 🔧 Dev Tools	Basic debugging	Powerful Redux DevTools support
// 🔁 Async Handling	Requires useEffect or libraries	Built-in support with middleware (e.g. thunk, saga)


// 10. what is controlled and uncontrolled component
