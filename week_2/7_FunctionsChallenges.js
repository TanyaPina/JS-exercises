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
let configuredStr1 = str1.toLowerCase(); //makes our first string all lowercase 
let configuredStr2 = str2.toLowerCase();  //makes our second string all lowercase 
let stringCheck = configuredStr1.split(""); //will make an array of our first string and store it in a variable
if (stringCheck.indexOf(configuredStr2) > -1) {  //will compare the indexOf value, if over -1 it is present, if -1 it is not
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
- need to find the last instance of character, can loop backwards with for loop to find it

*/
function stringLastIndexOf(str, char) {
for (let i = str.length - 1; i > 0; i-- ) {  //will loop backwards through out string 
    if (char == str[i]) {  //will compare the part of the string that we are looping through to the character parameter
    return i;  //will return the index if the character is found
    }  
} 
return -1;  //if character is not found it will return -1
}

console.log(stringLastIndexOf('awesome', 'e'));
console.log(stringLastIndexOf('awesome', 'z'));

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

/*
pseudocode:
functon: indexOf
input: 2 - 1 array, 1 number
output: return the first index at which value exists or -1 if it does not
- cannot use array.indexOf() method
- arrays can be looped through to see what values lie at each index
- can compare those values to the number and return the index
*/

function indexOf (arr, num) {
for (let i = 0; i < arr.length; i++){  //loops through the array 
    if (num === arr[i]){ // compares number to the value that is being looped through at the current index
        return i; //returns index number if it matches
    }
} return -1;  //if it does not match it will return -1
}

let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // --> 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // --> 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 100)); // --> -1
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
/*
pseudocode:
function: includes
input: 1 collection, 1 value, 1 optional starting index
output: true if value is in the collection and when starting from the starting index
        false if otherwise
- cannot use .includes() method since it does not work for objects (only strings and arrays)
- can use type of and Array.isArray to determine if parameter 1 is a string or an array
- if it is a string or array, we can loop through it and compare it to our second parameter to see if it is present
- if parameter 1 is an object, we can access items in an object and compare it to our second parameter to see if it is present
*/

function includes(par1, par2, par3 = 0 ) {  //default index would be 0
let par1Type = typeof par1; //checks to see if parameter 1 is a string or an object (object here includes arrays and objects)
let isArr = Array.isArray(par1); //checks to see if parameter 1 is specifically an array object (as opposed to simply an object)
if (par1Type === "string" || isArr) { //sets a loop for if parameter 1 is a string or an array
    for (let i = par3; i < par1.length; i++) { //carries out the loop
        if (par1[i] === par2) {  //compares the value at the certain index to the second parameter value
            return true;  //if it matches, it will return true
        }
    }
} 
else if (par1Type === "object") { //if it does not match and the parameter is an object then we will execute another loop
    for (let item in par1) {  //loops through the items in an object
        if (par1[item] === par2) {  //compares the items in an onject at a certain index to the second parameter value 
            return true;  //if it matches, it will return true
        }
    }
}
return false; //if nothing has matched so far, the function will return false
}

console.log(includes([1, 2, 3], 1)); // --> true
console.log(includes([1, 2, 3], 1, 2)); // --> false
console.log(includes([1, 2, 3], 6)); // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')); // --> false
console.log(includes('abcd', 'b')); // --> true
console.log(includes('abcd', 'e')); // --> false
console.log(includes('abcd', 'a', 2)); // --> false

// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false
