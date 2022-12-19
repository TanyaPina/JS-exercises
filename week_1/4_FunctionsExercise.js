// Week 1 Exercise 4: Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log). -------
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
    console.log("Hello!"); //will print out our string 
  }
  
  logGreeting();  //will call our function
  
  // Exercise 2. Define a function called getName() that *returns* a string that is your name.
  // Remember, this function should return the string -- not print it.
  // Then print your name in the console by passing getName() into the console.log() function.
  
  function getName() {
    return "Tanya"; //will return our string 
  }
  
  getName(); //called function to make sure that it did not print by itself
  console.log(getName()); //will print out our function
  
  // Exercise 3. Call a function within a function -- Write a function called logGreeting2() --------------------
  // that prints a full sentence that contains your name: "Hello! My name is <name>."
  // logGreeting2 should call myName() to get your name.
  // Then print your greeting to the console by calling logGreeting2().
  
  function logGreeting2() {
    console.log("Hello! My name is " + getName() + "."); //prints out concactinated string
  }
  
  logGreeting2(); //calls function
  
  // Exercise 4. Write a function that takes 3 parameters that are all numbers. ---------------------------------
  // The function should return the sum of the 3 numbers.
  // Then write some function calls you would use to test your function.
  
  function threeNum(num1, num2, num3) {
    return num1 + num2 + num3; //will return the sum of the three parameters but not print it
  }
  
  console.log (threeNum(1, 2, 3));  //will test our function
  console.log (threeNum(10, 20, 30)); //will test our function
  console.log (threeNum(10, -10, 10)); //will test our function
  
  // Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older. ----
  // Write a function that takes in a person's age and returns true if they should get a discount.
  // Otherwise it should return false.
  // Then write some function calls you would use to test your function.
  
  
  function discountAge(num) {
    if (num >= 65) {  //for ages 65 or older
      return true;
    } else if (num < 0) { //for ages 0 or older to ensure that number is a positive number
      return false;
    } else if (num <= 14) { //for ages 14 or younger
      return true;
    } else {
      return false;
    }
  }
  
  console.log(discountAge(5)); //will test our code
  console.log(discountAge(20)); //will test our code
  console.log(discountAge(65)); //will test our code
  console.log(discountAge(-10)); //will test our code
  
  // Exercise 6. Write a function that takes 2 parameters -- one number and one string. -------------------------
  // The function should print the string the given number of times.
  // Then write some function calls you would use to test your function.
  
  function repeatString(str, num) {
    var newString = "" //will make an empty variable in which we will repeat our string into
    while (num > 0) { //starts after zero so that we can have a positive number - can't repeat something negative times
      newString = newString + str; //adds our repeatedString variable to the string to repeat it once more
      num--; // decreases the iterations
    }
    return newString; 
  }
  
  console.log(repeatString("cool ", 3));  //will test our code
  console.log(repeatString("hello! ", 2)); //will test our code
  console.log(repeatString("ho! ", 4)); //will test our code
  
  // Exercise 7. Read the following code (don't run it yet) -----------------------------------------------------
  function mysteryFunction1(p1) {
    return p1 * 2;
  }
  const y = 4;
  const z = mysteryFunction1(y);
  console.log("The value of y is " + y);
  console.log("The value of z is " + z);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction1 does 
  // This function multiplies the parameter by 2 nd returns it
  // 2. What prints out for the value of y
  // This function prints out "The value of y is 4" for the value of y as y is set to be 4 and does not pass through the function.
  // 3. What prints out for the value of z
  // This function prints out "The value of z is 8" for the value of z because z passes y through the function, so 4 * 2 = 8
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  // Yes I was correct, although I can see how this question might be tricky as y is not initially passed 
  // through the function by itself as a value.
  
  // Exercise 8. Read the following code (don't run it yet) -----------------------------------------------------
  function mysteryFunction2(p1, p2) {
    const x = p1 - p2;
    return x;
  }
  const a = mysteryFunction2(10, 4);
  const b = mysteryFunction2(a, 1);
  console.log("The value of a is " + a);
  console.log("The value of b is " + b);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction2 does
  // This function subtracts parameter2 from parameter1 and returns it
  // 2. What prints out for the value of a
  // This function prints out "The value of a is 6" for the value of a as 10-4 is equal to 6
  // 3. What prints out for the value of b
  // This function prints out "The value of b is 5"  for the value of b since a is 6 and 6-1 is 5.
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  // I was correct, although at first the parameter a in the second test case did cause me to pause until I remmbered that the problem had declared a to equal 6.
  
  // Exercise 9. This exercise is to practice reading the documentation for functions. --------------------------------------------
  // String.split() is a function in the JavaScript standard library that you can use in your code.
  // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Try to use it to solve the following challenges:
  
  // Here's a string I made representing my grocery list.
  // Using split() and groceryList, make an array of my grocery list items
  const groceryList = "eggs,carrots,orange juice";  
  const arrGroceryList = groceryList.split(",");  //makes an array using the .split()method
  console.log(arrGroceryList) //tests our function
  
  // Here's a string I made representing my morning schedule.
  // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
  // There are multiple ways to do this, but try doing it using only the split() function.
  const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
  const myMorningSchedule = mySchedule.split("--->", 2); //makes an array  of the first two items 
  console.log(myMorningSchedule); //tests our code
  
  // Congrats, you made it to the end!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  /*
  From a difficulty of 1-10 (10 being the most difficult), I would give these a 4. Some of them were tricky but were a good review for functions. References were: google (W3 schools, stack overflow), my "Javascript for Kids" book, and my fellow cohortmates. 
  */