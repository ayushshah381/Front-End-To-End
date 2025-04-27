function cachedApiCall(time) {
  const cache = {};

  return (url, config) => {
    const key = `${url}${JSON.stringify(config)}`;

    return new Promise((resolve, reject) => {
      const cacheVal = cache[key];

      if(cacheVal?.expiry > Date.now()) {
        console.log("Already cached...");
        return resolve(cacheVal.res);
      }

      fetch(url)
      .then((res) => res.json)
      .then(res => {
        console.log("New call...");
        cache[key] = {res, expiry: Date.now() + time}
        resolve(res);
      })
    })
  }
}

// cache api calls and if same url is called within 1500ms then return the result from cache
const call = cachedApiCall(1500);
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("1", a));
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("2", a));
}, 800);
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("3", a));
}, 1900);