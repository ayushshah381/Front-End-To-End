// Implement a polyfill for getElementByClassName

function findByClassName(root, className) {
  const search = (node) => {
    let result = [];

    // Ensure it's an element and has classList
    if (node.nodeType === 1 && node.classList && node.classList.contains(className)) {
      result.push(node);
    }

    // Recursively check children
    for (let child of node.children) {
      result.push(...search(child));
    }

    return result;
  };

  return search(root);
}

// Sample usage
const root = document.getElementById('root');
const result = findByClassName(root, 'myClassName');

console.log("Result for getElementByClassName polyfill:", result);
