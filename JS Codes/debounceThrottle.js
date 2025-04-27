// Debounce function: delays calling the function for `delay` milliseconds having passed since last call
function debounce(func, delay) {
  let timer;

  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.call(context, ...args);
    }, delay);
  }
}

// Throttle function: ensures `func` is called at most once every `delay` milliseconds
function throttle(func, delay) {
  let timer = null;

  return function (...args) {
    const context = this;
    if (!timer) {
      func.call(context, ...args);

      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}

const logMessage = () => console.log('Debounced/Throttled at', new Date().toLocaleTimeString());

const debouncedLog = debounce(logMessage, 1000);
const throttledLog = throttle(logMessage, 1000);

// Debounced: only fires 1s after you stop calling it
window.addEventListener('input', debouncedLog);

// Throttled: fires at most once every 1s
window.addEventListener('scroll', throttledLog);
