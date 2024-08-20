What is Garbage Collection?

JS is a garbage collector language

Garbage collection involves identifying objects that are no longer needed and releasing their memory.
Garbage collection is performed by JS engine which uses a technique called Mark and sweep alogorithm to identify and remove objects and variable that are no longer in use.




To prevent memory leaks, it’s important to understand how JavaScript manages memory and what causes leaks. JavaScript is a garbage-collected language, meaning that the browser automatically frees up memory that is no longer needed by the program. However, if a program holds onto references to objects that are no longer needed, the garbage collector cannot free up that memory, leading to a memory leak.