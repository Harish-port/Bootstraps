// Accessibility in react ensures that the your app is usable by everyone, including people with disabilities- such as those using screen readers,keyboard navigation,or assistive technologies.
// 1.Sematic HTML.

// What it means?
// using the right HTML tags that carry meaning and structure- so the screen readers and browsers understand the UI properly.

// Exmaple:
// // ✅ Good
// <button onClick={handleClick}>Submit</button>

// // ❌ Bad (div used as button)
// <div onClick={handleClick}>Submit</div>
// ✅ Benefits:

// Screen readers automatically know what a <button> does.

// Keyboard users can tab and "click" it with Enter/Space.

// 2. ARIA Attributes
// ARIA (Accessible Rich Internet Applications) provides extra labels and roles to help assistive tech understand custom UI components.

// 🔧 Common attributes:
// Attribute	Purpose
// role	Defines the purpose (e.g., role="dialog")
// aria-label	Label for screen readers
// aria-hidden	Hides from assistive tech
// aria-live	Announces content changes
// aria-expanded	Shows toggle state (e.g., dropdowns)