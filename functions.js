/*
FUNCTIONS
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/



// Defining functions
function getName(name) {
    console.log('The name is ', name);
}

function returnAddition(num1, num2) {
    return num1 + num2;
}



// Calling functions
getName('Daniel Corcoran');
let result = returnAddition(num1=33, num2=46);
console.log(result);



// Setting default parameters, 'undefined' is default
function multiply(x1, x2) {

    let x1_type = typeof x1
    let x2_type = typeof x2

    if ((x1_type == 'number') && x2_type == 'number') {
        return x1 * x2;
    } else {
        console.log(x1_type, x2_type);
    }
    
}

console.log(multiply(333, 403));



// Arrow functions and mapping
let elements = ['gold', 'silver', 'helium', 'copper', 'zinc'];
let mapped_elements = elements.map(function(item) { return item.length });

console.log(mapped_elements);

const length_logger = (item) => { return item.length};

console.log(length_logger('Daniel'));