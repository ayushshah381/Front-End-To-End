// Debounce function: delays function execution until after `delay` ms from last call
function debounce(func, delay, options = { leading: false, trailing: true }) {
  let timer = null;
  let isLeadingCalled = false;

  return function (...args) {
    const context = this;

    const callNow = options.leading && !timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (options.trailing && (!options.leading || !isLeadingCalled)) {
        func.apply(context, args);
      }
      timer = null;
      isLeadingCalled = false;
    }, delay);

    if (callNow) {
      func.apply(context, args);
      isLeadingCalled = true;
    }
  };
}

// Throttle function: ensures function is called at most once per `delay` ms
function throttle(func, delay, options = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let context;

  return function (...args) {
    context = this;

    if (!timer) {
      if (options.leading) {
        func.apply(context, args);
      } else if (options.trailing) {
        lastArgs = args;
      }

      timer = setTimeout(() => {
        if (options.trailing && lastArgs) {
          func.apply(context, lastArgs);
          lastArgs = null;
        }
        timer = null;
      }, delay);
    } else if (options.trailing) {
      lastArgs = args;
    }
  };
}

// Example usage:
const logMessage = () =>
  console.log('Fired at', new Date().toLocaleTimeString());

// Debounce example
const debouncedLog = debounce(logMessage, 1000, {
  leading: true,
  trailing: true,
});

// Throttle example
const throttledLog = throttle(logMessage, 1000, {
  leading: true,
  trailing: false,
});

window.addEventListener('input', debouncedLog);
window.addEventListener('scroll', throttledLog);
