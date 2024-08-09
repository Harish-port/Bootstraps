// ### once:

// - is about wrapping a function in another function ***that ensures the original function only executes once***, regardless of how many times the wrapper is called. This can be achieved ***by using a closure to remember whether the function has been called***

function once(func) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

const hello = once((a,b) => console.log("Hello world",a,b));
hello(2,3);
hello();
hello();
hello();
hello();
