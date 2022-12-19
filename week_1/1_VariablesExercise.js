// Week 1 Exercise 1: Variables
// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'-------------------------------------------------

//my answer below:
var emptyVariable;

// Exercise 2. Declare a variable called 'myName'--------------------------------------------------------------

var myName;

// Exercise 3. Assign your name as the value for 'myName'------------------------------------------------------

myName = "Tanya";
console.log(myName);  //using console.log to verify my answer

// Exercise 4. Declare a variable called dreamDestination and give it the value -------------------------------
// of what your dream vacation destination is. 

var dreamDestination = "Ireland";
console.log(dreamDestination);  //using console.log to verify my answer

// Exercise 5. Make the following variables and assignments ---------------------------------------------------
// - a variable called num1 with a value greater than 1 and less than 10

var num1 = 2;
console.log(num1);  //using console.log to verify my answer

// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10

var num2 = 10; 
console.log(num2);  //using console.log to verify my answer

// Exercise 6. Write a comment below explaining the difference between the rules -------------------------------
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?
/*
 - num1 rules exclude numbers 1 and 10 because it has to be a number greater than 1 or less than 10. Following this logic, num1 can therefore be 2, 3, 5, 5, 6, 7, 8, or 9.
 
 - num2 rules include numbers 1 and 10 because it can be a number greater than or equal to 1 or less than or equal to 10. Following this logic, num2 can be 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10. 
 
*/
// Exercise 7. Now we will try some addition. -----------------------------------------------------------------
// a. Assign the values of 4 and 6 to num1 and num2, respectively.

var num1 = 4;
var num2 = 6;

console.log(num1);  //using console.log to verify my answer
console.log(num2);  //using console.log to verify my answer

// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.

var theSum = num1 + num2;
console.log(theSum);  //using console.log to verify my answer

// Exercise 8. Now we will try some multiplication. ------------------------------------------------------------
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.

var theProduct = num1 * num2;
console.log(theProduct);  //using console.log to verify my answer

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

var statement = "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";
console.log(statement);  //using console.log to verify my answer

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination', ---------------------------------
// place your answer in the quotes below:

const myAnswerForExercise10 = "a string type";
console.log(typeof(dreamDestination));  //using console.log to verify my answer

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "a number type";
console.log(typeof(theProduct));  //using console.log to verify my answer

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";
console.log(typeof(emptyVariable));  //using console.log to verify my answer

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
console.log(B + C);  //using console.log to verify my answer

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
console.log(A + "n" + D);  //using console.log to verify my answer

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
console.log(A + B * 2 + D + C / 2);  //using console.log to verify my answer

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
console.log(A * B);  //using console.log to verify my answer

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true";
console.log( true || false);  //using console.log to verify my answer

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";
console.log( 1 === "1");  //using console.log to verify my answer

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";
console.log(1 == "1");  //using console.log to verify my answer

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";
console.log(1 < 1);  //using console.log to verify my answer

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log(1 < 2 < 3);  //using console.log to verify my answer

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";
console.log(2 < 1 < 3);  //using console.log to verify my answer

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
/*
From a difficulty of 1-10 (10 being the most difficult), I would give these a 1. These challenges were easy but were a great reminder of the basics! I double-checked my answers by using console.log and by looking through my "Javascript for Kids" book. 
*/