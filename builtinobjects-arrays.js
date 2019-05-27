/* 
BUILT IN OBJECTS: ARRAYS
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/



// Creation
let class_names = ['Daniel', 'George', 'Rajesh', 'Boerg'];



// Index Access
console.log(class_names[3]);



// Getting Index
console.log(class_names.indexOf('George'));



// Iteration
class_names.forEach(function(n) {
    console.log(`\tThe name is ${n}`);
});



// Pushing and popping
// The following code removes the last item from array, then adds two more items using push
// Push can take in multiple args
class_names.pop();
class_names.push('Harry');
class_names.push('Will', 'Rebecca');
console.log(class_names);



// Shift and unshift (modifying start of array)
class_names.shift();
class_names.unshift('Jane');
console.log(class_names);



// Shallow copy and array
class_names_copy = class_names.slice();
console.log(class_names_copy);



// toString will convert array to comma separated string
let class_string = class_names.toString();
console.log(class_string);
