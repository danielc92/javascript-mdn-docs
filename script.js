/* GRAMMAR AND TYPES
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types */



// Declarations //
var name = 'Daniel';
const setting = true;
let age = 50;



// Evaluating variables //

console.log('The value of name is ' + name);
console.log(`The value of name is ${name}`);



// Scope // 

// var has a global scope
if (true) {
    var x = 10;
}

console.log(x);

// let cannot be used outside function scope
if (true) {
    let x2 = 10;
}

// console.log(x2);



// Constants //
// a constants array or dictionary can be modified
// a constant set to one value cannot be reassigned
const student = {'name':'daniel', 'class':'math'};
const students = ['daniel', 'george', 'anna'];
const classroom = '5A';

student.age = 50;
students.push('jeff');
// this produces an error 
// classroom = '6A';


// Parsing
let string_int = '3';
let string_float = '3.54';

let float_string = parseFloat(string_float);
let int_string = parseInt(string_int);

console.log(typeof float_string, float_string);
console.log(typeof int_string, int_string);

// Special Characters
console.log('\t This line is tabbed');
console.log('This line \n has two \n new lines');
console.log('Escaping \'characters \" \' \" ');
console.log('A windows path: C:\\folder\\to\\images\\');

