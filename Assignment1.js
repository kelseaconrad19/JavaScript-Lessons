// Assignment 1

let studentName = "Lilly";
let studentAge = 22;
let studentGrade = 92;
let isPresent = true;

console.log(studentName);
console.log(studentAge);
console.log(studentGrade);
console.log(isPresent);

// Assignment 2
// Tasks 1 -3
let num1 = 3;
let num2 = 4;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

// Task 4

console.log(`Updated num1: ${(num1 += 2)}`);
console.log(`Updated num1=2: ${(num2 *= 3)}`);

// Task 5

let result = "none";

if (num1 == num2) {
	result = "equal";
} else if (num1 > num2) {
	result = "greater";
} else if (num1 < num2) {
	result = "less than";
}

console.log(`Is num1 equal to num2? ${result}`);
console.log(`Is num1 greater than num2? ${result}`);
console.log(`Is num1 not equal to num2? ${result}`);

// Task 6

let isPositive = true;
let isEven = true;

if (num1 > 0 && num2 > 0) {
	isPositive = true;
} else {
	isPositive = false;
}

if (num1 % 2 == 0 || num2 % 2 == 0) {
	isEven = true;
} else if (num1 % 2 == 0 && num2 % 2 == 0) {
	isEven = true;
} else {
	isEven = false;
}

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
