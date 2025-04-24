// Deep cloning means creating a new object/array with all nested objects/arrays also cloned recursively

const obj = {
  a: [{ day: 24 }, { month: 4 }, { year: 2025 }],
  b: 'Hello, trying deep clone here',
  c: [{ day: 31 }, { month: 12 }, { year: 2025 }],
};

const getDeepClone = (input) => {
  if (input === null || typeof input !== 'object') return input;

  let result = Array.isArray(input) ? [] : {};
  Object.keys(input).forEach(key => {
    result[key] = getDeepClone(input[key]);
  });

  return result;
};

console.log("Original object is", obj);
const cloned = getDeepClone(obj);
console.log("Deep cloned object:", cloned);
