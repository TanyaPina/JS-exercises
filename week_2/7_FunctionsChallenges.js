// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
function prependToString(str1, str2) {
let newString = "";  // establishes an empty variable for our new string to go in to
newString = str2 + str1;  //adds second string to first string
return newString;  //returns the new string
}

console.log(prependToString("awesome", "very"));
console.log(prependToString("world", "hello "));
console.log(prependToString("nothing", ""));
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
/*
pseudocode:
function : string includes 
input: two strings - 1st is a word, 2nd is a character 
output: true if character (2nd string) is in the word of the first string, or false if it is not
- would be using an if/else if statement
- cannot use string.includes() method
- can go through the string by turning it into an array with .split() method and seperate each character
- can use .indexOf() method to see if the second string returns a value for its position in the array
- if it is not present in the array, it was therefore not present in the first string and it would have a value of -1 
- therefore, if indexOf() returns -1, if should return false
- if it returns any other number, it means that it was present in a string and should return a number of 0 or over.

*/
function stringIncludes(str1, str2) {  
let configuredStr1 = str1.toLowerCase();
let configuredStr2 = str2.toLowerCase();
let stringCheck = configuredStr1.split(""); //will make an array of our first string and store it in a variable
if (stringCheck.indexOf(configuredStr2) > -1) {
    return true;
} else {
    return false;
}
}


console.log(stringIncludes("awesome", "e"));
console.log(stringIncludes("awesome", "z"));
console.log(stringIncludes("awEsomE", "e"));
console.log(stringIncludes("awesome", "E"));
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!

/*
pseudocode:
function : stringLastIndexOf
input: two strings - 1st is a word, 2nd is a character
output: last index of where str2 character appears in str1. If it is not present it should return -1 
- cannot use .lastIndexOf() method


function stringLastIndexOf(str1, str2){
for (let i = str1.length - 1; i >= 0; i-- ) {
    if (str1(i) == str2) {
      return i;  
    }
    return -1;
}
}

console.log(stringLastIndexOf('awesome', 'e'));
console.log(stringLastIndexOf('awesome', 'z'));
*/
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.

/*
Pseudocode:
function: removeFromString
input: 3 - string, starting index (num), number of characters to remove
output: return a new string with characters removed
- can use .split() method to make string into an array
- can then use .splice() method to remove elements from the array starting at the index indicated in the parameter 
- can then use  .toString() method to return the new string 
*/

function removeFromString(str, num1, num2) {
let deconstructedString = str.split("");  //splits the string input into an array and stores it in a variable
deconstructedString.splice(num1, num2);  //splices the array and removes the elements selected by the 2nd and 3rd parameter
let newString = deconstructedString.join("");  //joins the spliced array back into a string and stores it under a new variable
return newString; 
}

console.log(removeFromString("Elie", 2, 2));
console.log(removeFromString("Elie", 0, 1));
console.log(removeFromString("Hello School", 0, 6));
console.log(removeFromString("Hello School", 2, 4));
console.log(removeFromString("Hello School", 6, 400));
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false