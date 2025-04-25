// deepEquals checks if two values are deeply equal (including nested objects and arrays)

const deepEquals = (a,b) => {
  if(a === b) return true;
  if(typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }

  // Arrays
  if(Array.isArray(a) && Array.isArray(b)) {
    // check for lengths first
    if(a.length !== b.length) return false;
    // recursively check for each of a's objects
    for(let i=0;i<a.length;i++) {
      if(!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }

  // if one is array and other is not
  if((Array.isArray(a) && !Array.isArray(b)) || (!Array.isArray(a) && Array.isArray(b))) return false;

  // Objects
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if(aKeys.length !== bKeys.length) return false;

  for(let key of aKeys) {
    if(!b.hasOwnProperty(key) || !(deepEquals(a[key], b[key]))){
      return false;
    }
  }
  return true;
}