
// The following problems were sourced from https://javascript.info/object#tasks

//1. Hello, Object
// Write the code, one line for each action:
//          - Create an empty object user.
//          - Add the property name with the value John.
//          - Add the property surname with the value Smith.
//          - Change the value of the name to Pete.
//          - Remove the property name from the object.

let user = {};  //sets up an empty object
user.name = "John"; // adds the key/value pair 'name:"John"' to our empty object
user.surname = "Smith";  //adds the key/value pair 'subname:"Smith"' to our object
user.name = "Pete";  //replaces John with Pete under our "name" property
delete user.name;  // removes the "name" property 

console.log(user);

//2. Check for Emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
for (let property in obj) {  //loops through our object
   return false; // if it is not empty, it loops succesfully through the condition and returns false
}
return true;  // if it is empty, it does not loop and returns true
}

let obj1 = {}; //test case 1
console.log(isEmpty(obj1));
let obj2 = {name: "Tanya", surname: "Pina"}; //test case 2
console.log(isEmpty(obj2));


//3. Sum Object Properties 
// We have an object storing salaries of our team: 
         let salaries = {
                 John: 100,
                 Ann: 160,
                 Ptete :130,
 }        
// Write the code to summ all the summaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let sum = 0;  //setting up an empty variable for the sum

function sumOfSalaries(obj){
for (let property in obj) {  //loops through our object
    if (typeof obj[property] == 'number') {  //makes sure our value is a number 
    sum += obj[property]; //adds our value number to our sum
    }
}
return sum;
}

console.log(sumOfSalaries(salaries));

// 4. Multiply Numeric Property Values By 2
// Create a function multiplyNumberic(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
function multiplyNumeric(obj) {
  for (let property in obj) {  //loops through our object 
    if (typeof obj[property] == 'number') {  //makes sure our values is a number 
    (obj[property] *= 2);  //if it is a number, it will be multiplied by 2
     }
     return obj;  //returns object
}
}
console.log(multiplyNumeric(menu));

//Github is a website that displays the git history.