// flatten the array to a depth 'n' 


function flattenWithoutDepth(array) {
    let a = [];

    array.forEach(element => {
        if(Array.isArray(element)) {
            a.push(...flattenWithoutDepth(element))
        } else {
            a.push(element);
        }
    });

    return a;
}

function flatten(array, depth = 1) {
    let a = [];

    array.forEach(element => {
        if(Array.isArray(element) && depth > 0) {
            a.push(...flatten(element, depth - 1));
        } else {
            a.push(element);
        }
    });

    return a;
}



const testArray1 = [1,2, [ 3,[5,[6, 7, [2,3,4]]],[9, [10]], 11]];
const testArray2 = [1,2, [3,4,5], 6, [7,8, [9, 10, [22,99]]], 10];

console.log(flattenWithoutDepth(testArray1));
console.log(flatten(testArray2, 2));