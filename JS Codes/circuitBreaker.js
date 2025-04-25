// implement a circuit breaker, that halts the function for 'delay' time if it fails for y count.

const circuitBreaker = function(fn, failureCount, delay) {
  let flag = true;
  let totalFailures = 0;

  return (...args) => {
    if (!flag) {
      console.log("Circuit is broken due to errors, please try some time later.");
      return;
    }

    try {
      const result = fn(...args);
      totalFailures = 0;
      return result;
    } catch (err) {
      totalFailures++;
      console.log("Error:", err);

      if (totalFailures >= failureCount) {
        flag = false;
        console.log("Failure threshold reached. Circuit is now open.");
        setTimeout(() => {
          flag = true;
          console.log("Circuit closed. You can try again.");
        }, delay);
      }
    }
  };
};

const mightFail = (x) => {
  if (x < 5) throw new Error("x too small!");
  return x * 2;
};

const safeCall = circuitBreaker(mightFail, 3, 5000);

// Try multiple failing calls
safeCall(2); // fail
safeCall(3); // fail
safeCall(1); // fail -> circuit breaks
safeCall(10); // immediately blocked

