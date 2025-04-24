const user = {
  name: 'Ayush'
}

function printFullName(surname, typeOfCall) {
  console.log("For the type " + typeOfCall + ": Name is " + this.name +  " " + surname);
}

// Bind
const printBindName = printFullName.bind(user, "Shah");
printBindName('bind');

// Call
printFullName.call(user, 'Shah', 'call');

// Apply
printFullName.apply(user, ['Shah', 'apply']);

// Custom polyfills for all of these
Function.prototype.myBind = function(context, ...args) {
  const fn = this; // printFullName will be this
  return function(...args2) { // arguements passed to binded function
    fn.call(context, ...args, ...args2);
  }
}

const printFullNameMyBind = printFullName.myBind(user, 'Shah');
printFullNameMyBind('myBind');


Function.prototype.myCall = function(context, ...args) {
  if (typeof this !=="function"){
    throw new Error(this, "invalid call")
  }

  context.fn = this;
  context.fn(...args);
  delete context.fn;
}

printFullName.myCall(user, 'Shah', 'myCall');

Function.prototype.myApply = function(context, [...args]) {
    if (typeof this !=="function"){
        throw new Error(this, "invalid call")
    }

    context.fn = this;
    context.fn(...args);
    delete context.fn;
}

printFullName.myApply(user,['Shah', 'myApply']);

// Outputs:
// For the type bind: Name is Ayush Shah
// For the type call: Name is Ayush Shah
// For the type apply: Name is Ayush Shah
// For the type myBind: Name is Ayush Shah
// For the type myCall: Name is Ayush Shah
// For the type myApply: Name is Ayush Shah