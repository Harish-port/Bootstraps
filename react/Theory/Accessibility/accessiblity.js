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

// ✅ Tip: Use ARIA only when native HTML doesn’t do the job.

// 3. Keyboard Navigation
// Why it matters:
// Some users can't use a mouse. Your app must be fully navigable with just a keyboard.
// 🔧 Good Practices:
// Use tabIndex={0} on custom focusable elements

// Handle onKeyDown or onKeyPress for actions

// Provide visible focus styles (outline, etc.)

// <div
//   role="button"
//   tabIndex={0}
//   onKeyDown={(e) => e.key === 'Enter' && doAction()}
//   onClick={doAction}
// >
//   Press Enter or Click
// </div>

// 4:Alt Text for Images
//  Why it matters:
// Screen readers rely on alt text to describe images.

// 5:Form Accessibility
// ✅ Good Practices:
// Use label with htmlFor to link labels to inputs

// Provide feedback (error messages) with aria-describedby

// Add aria-invalid="true" on invalid fields

// 🔧 Example:
// jsx
// Copy
// Edit
// <label htmlFor="email">Email</label>
// <input id="email" type="email" aria-describedby="emailHelp" />
// <p id="emailHelp">We'll never share your email.</p>

// Screen readers will read the label and hint message
