//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



// Define variables
const string1: string = "apple";
const string2: string = "banana";

const string3: string = "HELLO";
const string4: string = "WORLD";

const num1: number = 5;
const num2: number = 10;

const numArray: number[] = [1, 2, 3, 4, 5];
const numToCheck1: number = 3;
const numToCheck2: number = 6;

// Tests for equality and inequality with strings
// True
console.log(string1 === string1); // True
// False
console.log(string2 !== string2); // False

// Tests using the lower case function
// True
console.log(string3.toLowerCase() === "hello"); // True
// False
console.log(string4.toLowerCase() !== "world"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Equality
// True
console.log(num1 === num1); // True
// False
console.log(num2 === num1); // False

// Inequality
// True
console.log(num2 !== num1); // True
// False
console.log(num1 !== num1); // False

// Greater than
// True
console.log(num2 > num1); // True
// False
console.log(num1 > num2); // False

// Less than
// True
console.log(num1 < num2); // True
// False
console.log(num2 < num1); // False

// Greater than or equal to
// True
console.log(num2 >= num1); // True
// False
console.log(num1 >= num2); // False

// Less than or equal to
// True
console.log(num1 <= num2); // True
// False
console.log(num2 <= num1); // False

// Tests using "and" and "or" operators
// and operator
// True
console.log(num2 > num1 && num2 < 11); // True
// False
console.log(num1 > num2 && num2 > 10); // False

// or operator
// True
console.log(num1 > num2 || num2 > 9); // True
// False
console.log(num1 > num2 || num2 < 10); // False

// Test whether an item is in an array
// True
console.log(numArray.includes(numToCheck1)); // True
// False
console.log(numArray.includes(numToCheck2)); // False

// Test whether an item is not in an array
// True
console.log(!numArray.includes(numToCheck2)); // True
// False
console.log(!numArray.includes(numToCheck1)); // False
