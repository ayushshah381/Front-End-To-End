// Polyfill for Promise.all: resolves when all promises (or values) are resolved, rejects if any promise fails

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let totalPromises = promises.length;
    let results = [];

    if (totalPromises === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((data) => {
          results[i] = data;
          count++;
          if (count === totalPromises) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const promises = [
  Promise.resolve(1),
  2, // plain value
  new Promise((res) => setTimeout(() => res(3), 1000)),
];

promiseAll(promises)
  .then((res) => console.log(res)) // [1, 2, 3]
  .catch((err) => console.error(err));
