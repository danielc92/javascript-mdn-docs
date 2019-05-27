/*
LOOPS AND ITERATION
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

// Basic iteration
let nums = [2,3,4,5,1,2,123,43,233,54,44];

console.log('Iterating through the nums array');
for (let i = 0; i < nums.length; i++ ) {
    console.log(`\tIteration number ${i}. Item is ${nums[i]}.`)
}



// forEach statements
let names = ['Harry', 'Lisa', 'George'];
names.forEach(function(item) {
    console.log('\tFor each',item);
});



// For Of statements
for (let n of names) {
    console.log(n);
}


// Do while loops
let counter = 1

do {
    console.log('Counter being multiplied', counter * 2);
    counter += 4;
} while (counter <= 30);



// While loops
let while_counter = 0

console.log('Entering the while loop');
while (true) {
    
    console.log('\tStill in the while loop');
    while_counter += 13;
    console.log('\tThe value of counter is ', while_counter);

    if ((while_counter >= 100)) {
        console.log('Exiting the while loop');
        break;
    }
}