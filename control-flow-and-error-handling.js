/*
CONTROL FLOW AND ERROR HANDLING
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/



// Proper way to insert conditionals
let value1 = 5
let value2 = 55

if ((value1 < value2)) {
    console.log('value1 is greater');
} else {
    console.log('value1 is lesser');
}



// Switch statements
let type = 'Apricot';

switch (type) {
    case 'Bananas':
        console.log('This fruit is a Banana');
        break;
    case 'Kiwi':
        console.log('This fruit is a Kiwi');
        break;
    case 'Apple':
        console.log('This fruit is an Apple');
        break;
    default:
        console.log('Unknown fruit type. Not in database.');
}



// Error handling
let month = 'January';
let valid_months = ['January', 'March', 'July'];

try {
    
    month_index = valid_months.indexOf(month);
    
    if ((month_index >= 0) && (month_index < valid_months.length)) {
        console.log('This is a valid month');
    } else {
        throw 'Invalid Month';
    }

} catch (exception) {
    console.log('Setting month to default value')
    month = 'Janurary';
    console.log('My exception: ', exception);
}

