function customSetTimeout(callback, delay) {
    if (typeof requestAnimationFrame === "undefined") {
        globalThis.requestAnimationFrame = function (callback) {
          return setTimeout(() => callback(performance.now()), 16); // Approx. 60FPS
        };
      
        globalThis.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
      }
      
    const startTime = performance.now();
    let requestId; // To track the animation frame request
  
    function checkTime(timestamp) {
      if (timestamp - startTime >= delay) {
        callback();
      } else {
        requestId = requestAnimationFrame(checkTime);
      }
    }
  
    requestId = requestAnimationFrame(checkTime);
  
    // Return an ID to allow cancellation
    return requestId;
  }
  
  function clearCustomTimeout(requestId) {
    cancelAnimationFrame(requestId);
  }
  
  // Usage
  const timerId = customSetTimeout(() => {
    console.log('Executed after delay');
  }, 4000);
  
  // To cancel the timeout before execution
  // clearCustomTimeout(timerId);
  