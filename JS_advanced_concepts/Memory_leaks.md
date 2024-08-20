What is memory leaks?

Memory leaks occurs when a js program holds onto references to objects that are no longer needed, preventing the garbage collector from freeing up the memory, this can cause the amount of memory used by the program to grow over time, eventually leading to performance issues.

The most commomon cause of memory leaks are:

1. Event Listeners.

Clearing Event Listeners
Event listeners are often attached to DOM elements to handle user interactions such as clicks, mouse movements, etc. If these event listeners are not removed properly when the associated DOM elements are removed or no longer needed, they can lead to memory leaks. Remove event listeners using the removeEventListener() method when the associated DOM element is removed or when the event listener is no longer needed.

Syntax:
element.removeEventListener(eventType, eventHandler);

2. Global Variables.

Global variables in js are variables declared outside of any function or block scope.They persist throughout the lifecycle of the application and can potentially lead to memory leaks if they hold references to objects that are no longer needed. Avoiding excessive use of global variables is crucial for managing memory effectively. To avoid memory leaks caused by global variables in JavaScript, it’s essential to minimize their usage and scope. This involves encapsulating variables within functions or modules to limit their visibility and lifespan.

Syntax:
let globalVar = 'This is a global variable'; // this is a global variable

globalVar = null; // free up space

3. Timers

Dont forget to clear the timers
