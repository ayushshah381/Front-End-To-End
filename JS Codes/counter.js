/*
    ** Implement a counter function which maintains a count and 
increments it everytime we call the counter function and also 
we can reset the counter by calling a reset function. check below 
for the explanation:


    counter(); // 1
    counter(); // 2
    counter(); // 3

    counter.reset();

    counter(); // 1
    counter(); // 2


*/

const counter = (() => {
    let count = 0;
    const returnCounter = () => {
        count++;
        console.log("Current count value is: " + count);
        return count;
    }
    
    returnCounter.reset = () => {
        count = 0;
    }
    
    return returnCounter;
})()

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter.reset(); // 0
counter(); // 1