// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
/*
Pseudo-code:
- function: keys
- input: object
- output: an array of all the keys
- cannot: use object.keys() function
- can loop through object with a for ..in loop
- can push the keys into an empty array
*/

function keys(obj) {
    let arr = [];  //sets up an empty array 
    for (let key in obj) { //iterates through our object
        arr.push(key);  //pushes keys into empty array at every loop
        }
        return arr;  // returns array 
    }
   
// Examples:
let obj = { a: 1, b: 2, c: 3 };
 console.log(keys(obj)); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
let obj3 = {};
console.log(keys(obj3)); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
/*
Pseudo-code:
- function: values
- input: object
- output: an array of all the values
- cannot: use object.values() function
- can loop through object with a for ..in loop
- can push the values into an empty array
*/

function values(obj) {
    let arr = [];  //sets up an empty array
    for (let value in obj) {  //iterates through our object
        arr.push(obj[value]); //pushes values of each key into the empty array
    }
    return arr;    //returns array
}
// Examples:
let obj4 = { a: 1, b: 2, c: 3 };
console.log(values(obj4)); // [1,2,3]
let obj5 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj5)); // ["Matt", "Lane", true]
let obj6 = {};
console.log(values(obj6)); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
/*
Pseudo-code:
- function: entries
- input: object
- output: an array of arrays of key-value pairs
- cannot: use object.entries function
- can loop through object with a for ..in loop
- can push the key-value pair into an empty array
*/

function entries(obj) {
    let pairArr = [];  //sets up an empty array 
    for (let property in obj) { //iterates through our object
        pairArr.push([property, obj[property]]);  //pushes keys and values array into empty array at every loop
        }
        return pairArr;  // returns array 
    }
// Examples:
let obj7 = { a: 1, b: 2, c: 3 };
console.log(entries(obj7)); // [["a",1], ["b",2], ["c",3]]
let obj8 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj8)); // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
let obj9 = {};
console.log(entries(obj9)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
/*
Pseudo-code:
- function: pluck
- input: an array of objects and the name of a key 
- output: an array that has the value associated with the key of each object, or undefined if it is not present 
- will need an array returned, will set up an empty array 
- can loop an array with a for loop
- can push the value of the object as it iterates if it belongs to the key name 

*/
 
function pluck (arrOfObj, name) {
    let arr = []; //sets up an empty array 
    for (let i = 0; i < arrOfObj.length; i++) {  //loops through the arrrays of objects
        arr.push(arrOfObj[i][name]);    //acessess each name of key in the array of objects
    }
return arr; 
}
// Examples:
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
//["Tim", "Matt", "Elie"]
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'))
//[true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
/*
Pseudocode: 
- function: stringFromObject
- input: object
- output: a string from the object that looks like this: - "key = value, key = value". 
        - Must be seperated by a comma and space except for the last pair.
- can set up an empty array to push the key and values
- can turn them into strings and then then concat them with template literals

*/
function stringFromObject(obj) {
    let pairArr = [];  //sets up an empty array 
     for (let property in obj) { //iterates through our object
        let str = `${property} = ${obj[property]}`; //sets our key and value in a string and in the syntax we want 
        pairArr.push(str);  //pushes our string into the empty array 

   }
return `”${pairArr}”`;  //returns our results
}    
console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})); // ""


// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
/*
Pseudo-code:
- function: minMaxKeyInObject
- input: object with numeric keys
- output: array that looks like this: [lowestKey, highestKey]
- can loop through object with a for ..in loop
- can push the key values into an empty array
- can then use the Math.min and Math.max methods to get the min and max keys
- can then push these keys into another empty array and return it
*/

function minMaxKeyInObject(obj) {
    let minMaxArr= [];  //sets up an empty array for the min and max key
    let minKey; //sets our minKey starting at 0
    let maxKey; //sets our maxKey starting at 0
    for (let key in obj) {  //iterates through our object
        if ( minKey === undefined || Number(key) < Number(minKey) ) { //if minKey is undefined or 
            minKey = Number(key);
        }
        if ( maxKey === undefined || Number(key) > Number(maxKey)) {
            maxKey = Number(key);
        }
    }
    minMaxArr.push(minKey); //pushes the min key into the empty array
    minMaxArr.push(maxKey);  //pushes the max key into the empty array
    return minMaxArr;   //returns the new array formed by the min and max key
}
// Examples:
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
// [1, 4]