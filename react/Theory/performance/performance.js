// 1.How do you optimize the performance of a React application ?

// a) - Code Splitiing with lazy load
//  >> Code Splitiing is a technique which allow to divide the application code into smaller chunks.These chunks can then be loaded on demand, reducing the initial load time and improving
// the overall user experience.
// >> React provides  built -in support for code Splitiing using the React.lazy and Suspsense components.React.lazy allows you to dynamically import components, while Suspsense provide a way to handle the loading state of these components with fallback UI

// Example:

// import React, { Suspsense, lazy } from 'react';

// const LazyCompoennt = import("./dshjs");

// function App() {
//     return (
//         <Suspsense fallback={<>Loading.....</>}>
//             <LazyCompoennt />
//         </Suspsense>
//     )
// }

// b)- Memoization(Avoid unncessary Renders)

// >> React.memo
// It is a HOC that helps to optimize the performance by memoizing functional components.
// Using memo will cause react to skip the rendering a compoennt if its props have not changed.

// import { memo } from "react";

// const Todos = ({ todos }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </>
//   );
// };

// export default memo(Todos);

// c) - useMemo hook

// The useMemo hook is used to optimize the performance by memoizing the result of the computation that is by caching it and recalculating only when necessary.

// const memoizedValue = useMemo(() => comuteValue(a, b), [a, b]);

// >> Runs the function passed to it only when the dependencies change.
// >> Returns the cached value on subsequent renders if dependencies haven't changed.

// d)- useCallback() hook

// The useCallback hook in React is used to memoize a function, so that it doesn't get recreated on every render — unless its dependencies change.

// import { memo, useCallback } from "react";

// const Todos = ({ todos, addTodo }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   );
// };

// export default memo(Todos);

// Every time a component re-renders, its functions get recreated.
// To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
// import { useState, useCallback } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// c) - Debouncing and throltling
//     >> Debouncing is performance optimizing technique that ensures that a function is only executed after a certain delay has passed.
//       refer custoom hook useDebounce
// >> throtlling is used to control how often a function is executed over time, especially during events that can fire frequently and continously(like scroll, resize or mousemove).THis
// prevent performance bottelnecks.

// d) - Optimize the images.

// >> SVG for icons -
// Lightweight, Scales well on any screen and can be styled via css.
// Better than PNG icons for performance and scalability.

// >> Use loading="lazy" in <img/> tag
// Example:<img src="abanner.jpg" loading="lazy"/>
// Only loads images when they appear in the viewport, improving initial page speed

// >> Virtualize long lists
// Using react - window library we can only render part of a large data set(just enough to fill the viewport).
// This helps reduces the amount of work required to render the initial view and to process updates.

// import { FixedSizeList } from 'react-window';

// <FixedSizeList height={400} itemCount={1000} itemSize={35} width={300}>
//   {({ index, style }) => <div style={style}>Item {index}</div>}
// </FixedSizeList>

// Prevents the DOM from rendering 1000+ elements at once

// e)- Analyze the Performance

// >>React Devtools Profiler.

// What it does?
// It records render timings of each component in your React tree.

// How to use?
// Install the react developer tools extension.
// go to the profiler tab in Dev tools.
// Click 'record' and interact wiht your app.
// Stop recording to see:
// Component render times.
// why a component re-rendered.
// Flame graphs and ranked views.

// Usefull for:
// Detecting unnecessary re-renders.
// Finding slow comopennts.


// >> Chrome devtools.(performance tab)

// what it does?
// Captures JS execution,layout shifts,paint timings and network performance.
// How to use??
// 1. Open devtools > performance tab.
// 2.Click 'Record' and use your app for few seconds.
// 3.Stop recording to analyze:
// Fps(frames per second),long tasks,layout calculations,repaints and reflows.

// 📉 Useful for:
// Identifying jank (UI stutter)
// Spotting heavy script execution
// Detecting layout thrashing or slow DOM updates.

// >> Lighthouse (web vital Report):
// What it does?
// Analyzes overall performance, accessibility,best pratices and SEO.
// How to use?
// 1.Open Chrome devTools -> Light hosue tab
// 2. Run the analyze page load.
// 3. revuew the score and suggestions,


// USe for 
// Seeing how your site performs on slow networks or mobile




