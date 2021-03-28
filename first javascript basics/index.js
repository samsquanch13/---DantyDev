//this is my first javascript code
console.log('hello world');

//this is a variable
let name = 'Danty'; // string literal
let age = 22; // number literal
let isApproved = true; // boolean literal
let firstName = undefined; // when not used a variable is undefined
//let selectedColors = null; // used when you want to expliciitly clear the value of a variable

// adding person object
let person = {
    label: 'this is an object',
    name: 'Losch',
    age: 25
}

// dot notation
person.name = 'Alex';

// bracket notaion
person['name'] = 'Dustin'

// adding an array
let selectedColors = ['this is an array', 'red', 'blue'];
selectedColors[2] = 'green';

// adding a functions
function greet() {
    console.log('Hello, ' + name + '. This is a function');
}

// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

greet();

console.log(person);

console.log(selectedColors);

console.log(name);

// Cannot be a reserved keyword
// Sould be meningful names
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case sensitive

// Constant vars are useful when you don't want the value to change
const interestRate = 0.3;
// Can only reassign a vauable when 'let' is used
// interestRate = 1;
console.log(interestRate);