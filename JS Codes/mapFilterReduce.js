// Polyfill for map
Array.prototype.myMap = function(cb) {
  let resultantArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      resultantArray.push(cb(this[i], i, this));
    }
  }
  return resultantArray;
};

const myMapResult = [1, 2, 3].myMap((e, i) => e * i);
console.log("myMap polyfill:", myMapResult);

// Polyfill for filter
Array.prototype.myFilter = function(cb) {
  let resultantArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
      resultantArray.push(this[i]);
    }
  }
  return resultantArray;
}

const myFilterResult = [0, 1, 2, 3, 4, 5, 6].myFilter((e, i) => e%2 === 0);
console.log("myFilter polyfill:", myFilterResult);

// Polyfill for reduce
Array.prototype.myReduce = function(cb, initialValue) {
  let context = this;
  for(let i=0;i<context.length;i++) {
    initialValue = cb(initialValue, context[i]);
  }
  return initialValue;
}

console.log('Array reduce: [1,2,3,4] -> ', [1,2,3,4].reduce((a,b) => a + b, 0));
console.log('myReduce: [1,2,3,4] -> ', [1,2,3,4].myReduce((a,b) => a + b, []));