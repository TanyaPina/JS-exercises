// Pre-Work Week 1 Exercise 5 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals -----------------------------------------------------

let animals = [];

// Exercise 2. Add the string "frog" to the array ----------------------------------------------------

animals.push("frog"); //push method adds values to the end of an array
console.log(animals); //tests our code

// Exercise 3. Add 4 more animals of your choice to the array. ---------------------------------------
//Try to add all of them in one line of  code.

animals.push("koala", "bear", "wolf", "sheep");  //push method adds values to the end of an array
console.log(animals); //tests our code

// Exercise 4. Update the first item in the array to be "gorilla" ------------------------------------

animals[0] = "gorilla";  //puts our value in the first index of our array
console.log(animals); //tests code

// Exercise 5. Print the number of items in the array (use the array property that will give you this information) ------------------------------------------------------------------------------------------

console.log(animals.length); //uses length method to find the number of values in the array

// Exercise 6. Print the first item in the array ------------------------------------------------------

console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above) -------------------------------------------------------------------------

console.log(animals[animals.length - 1]);

// Exercise 8. Remove the last item from the array ----------------------------------------------------

animals.pop(); //pop method removes the last item from an array
console.log(animals);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers. ---------------------------------------------------------------------------------------------

let assortedThings = ["llama", "turtle", "tarantula", 30, 40, 19];
console.log(assortedThings); //tests our code

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as: ------------------------------------------------------------------------------------
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

let arr = assortedThings;
for (let i = 0; i < arr.length; i++) {  //iterates though our array
  console.log("Item #" + i + " is "+ arr[i]); //prints our string as we iterate through the array
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array, ---------------------------------------------------------------------------------------------
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.


function numSizes(arr1) {
  for  (let j = 0; j < arr1.length; j++) {  //iterates through our array
    if (arr1[j] > 100){ //for numbers over 100
      console.log(arr1[j] + " BIG");
    } else if (arr1[j] < 0) { //for negative numbers 
      console.log(arr1[j] + " negative");
    } else if (arr1[j] > -1) { //for positive numbers until 100
      console.log(arr1[j] + " small");
    }
  }
}
numSizes([-2, 200, 50]); //testing our code
numSizes([-50, 500, 50]); //testing our code
numSizes([0, 100, -1, 101]); //testing our code

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber -----------------------------
// The values of those keys can be whatever you choose.

let me = {
  name: "Tanya",
  "favoriteAnimal": "Red Panda", //both need to be in quotations since red panda has a space
  favoriteNumber: 15, 
};
console.log(me); //tests and prints our code

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.favoriteFood = "tamales";  
me.favoriteColor = "burgundy";

console.log(me);  //tests and prints our code

// Exercise 14. Update the favoriteAnimal value to something different

me["favoriteAnimal"] = "cat";
console.log(me);  //tests and prints our code

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me["favoriteAnimal"]);
console.log(me.favoriteAnimal);  

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?

/*
From a difficulty of 1-10 (10 being the most difficult), I would give these a 2. These challenges were a great refresher on arrays and objects. References were: google (W3 schools, stack overflow) and my "Javascript for Kids" book. 
*/