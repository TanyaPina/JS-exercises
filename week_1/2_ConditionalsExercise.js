// Pre-Work Week 1 Exercise 2: Condtiionals
// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1. --------------------------------------------------------------------------------------
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
    let answer1 = "num1 is small";
    // ------------------------------------------
    // Write your code for exercise 1 below here:
    // ------------------------------------------
    if (num1 > 10) {  //here I use > and not >= because it is not inclusive to 10.
      answer1 = "The value of num1 is " + num1 + " and is greater than 10";
    }
    // ------------------------------------------
    // And above here
    // ------------------------------------------
    return answer1;
  }
  
  console.log(exercise1(6));  //using console.log to verify my answer
  console.log(exercise1(20));  //using console.log to verify my answer
  
  // EXERCISE 2. --------------------------------------------------------------------------------------
  // Write an if/else conditional statement that if given a number will assign
  // a string value of:
  // "<num2 value> is even" to `answer2`,
  // if `num2` is even
  // and a value of "<num2 value> is odd" to `answer2`,
  // if `num2` is odd.
  // ie. if num2 has a value of 4 then the message should read:
  // "4 is even"
  
  function exercise2(num2) {
    let answer2;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (num2 % 2 === 0) {  //will be using % (remainder) operator to see if numbers are even or odd
      answer2 = num2 + " is even";  //if remainder is 0, a number is even 
    } else {
      answer2 = num2 + " is odd";  //if not, it will be infered that the number is odd
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer2;
  }
  
  console.log(exercise2(22));
  console.log(exercise2(11));
  console.log(exercise2(0));
  console.log(exercise2(-11));
  console.log(exercise2(-22));
  
  // EXERCISE 3. --------------------------------------------------------------------------------------
  // Write an if/else if/else block such that if `num3` is positive, then
  // answer3 is assigned the string value of:
  // "<num3 value> is positive"
  // if `num3` is negative, then the value should be:
  // "<num3 value> is negative"
  // otherwise if the value is zero it should return
  // "<num3 value> is zero"
  
  function exercise3(num3) {
    let answer3;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (num3 > 0) {  //will be using > since it is not inclusive to 0 and it has to be more than 0
      answer3 = num3 + " is positive";
    } else if (num3 < 0) { //will be using < since it is not inclusive to 0 and it has to be less than 0
      answer3 = num3 + " is negative";
    } else if (num3 === 0) {  //will be using === to make it strictly equal to the number 0
      answer3 = num3 + " is zero";
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer3;
  }
  
  console.log(exercise3(11));
  console.log(exercise3(0));
  console.log(exercise3(-11));
  
  // EXERCISE 4. --------------------------------------------------------------------------------------
  // Write an if/else statement such that if `varA` and `varB` are strings or
  // numbers and they have equal values, then change the value of answer4 to
  // "varA and varB are equal"
  // otherwise assign a value of "varA and varB differ"
  
  function exercise4(varA, varB) {
    let answer4;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (varA == varB) {  // will be using == since varA and varB can be strings or numbers
      answer4 = varA + " and " + varB + " are equal";
    } else {  // if they are not equal, then they are different and will pass this else statement
      answer4 = varA + " and " + varB + " differ";
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer4;
  }
  
  console.log(exercise4(11, -11));  //using console.log to verify my answer
  console.log(exercise4(0, 11));  //using console.log to verify my answer
  console.log(exercise4(11, "11"));  //using console.log to verify my answer
  
  // EXERCISE 5. -----------------------------------------------------------------------------------------
  // In exercise 4, what are some of the unexpected cases where `varA` and `varB`
  // seemed like they are equal, but would not pass the tests? In your analysis
  // consider other data types beside strings and variables.
  
  //NaN would not equal NaN
  console.log(exercise4(NaN, NaN));  //using console.log to verify my answer
  
  // EXERCISE 6. --------------------------------------------------------------------------------------
  // Here, assign the value of true to answer6 if:
  // `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
  // in the event this is not the case, change the value of answer6 to false
  
  function exercise6(varA, varB, varC) {
    let answer6 = "unassigned";
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (varA === varB && varA != varC && varB != varC) {  // will be using === to strictly compare and an && 
      answer6 = true
    } else { // if first condition does not equal true, it will pass else condition and be false
      answer6 = false; 
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer6;
  }
  
  console.log(exercise6(11, "11", 0));  //using console.log to verify my answer
  console.log(exercise6(11, 11, 11));  //using console.log to verify my answer
  console.log(exercise6(11, 11, 0));  //using console.log to verify my answer
  
  // EXERCISE 7. ---------------------------need to do-------------------------------------------------
  // Use a switch conditional statement with case clauses such that if `num7` is
  // a number and it has a value of 1 that `answer7` is assigned the string:
  // "You won!"
  // if num7 is 7, then answer7 should be:
  // "You are lucky!"
  // if num7 is 101, then answer7 should be:
  // "Welcome to coding 101!"
  // if num7 is 1000000, then answer7 should be:
  // "You are one in a million!"
  // Othewise, assign answer7 a value of:
  // "Thanks for that!"
  
  function exercise7(num7) {
    let answer7;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (typeof num7 === "number") {  //typeof will help us ensure that our input goes through if is a number
      switch (num7) {
        case 1:
          answer7 = "You won!";
          break;
        case 7: 
         answer7 = "You are lucky!";
          break;
        case 101:
          answer7 = "Welcome to coding 101!";
          break;
        case 1000000:
          answer7 = "You are one in a million!";
          break;
        default:
          answer7 = "Thanks for that!";
      } 
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer7;
  }
  
  console.log(exercise7(1));  //using console.log to verify my answer
  console.log(exercise7(7));  //using console.log to verify my answer
  console.log(exercise7(101));  //using console.log to verify my answer
  console.log(exercise7(1000000));  //using console.log to verify my answer
  console.log(exercise7(30));  //using console.log to verify my answer
  
  // EXERCISE 8. --------------------------------------------------------------------------------------
  // Using any conditional assign the value of true to answer8 if:
  // the values of amount1 and amount2 are between the values of
  // minimum and maximum
  // if not, assign a value of false to answer8
  function exercise8(amount1, amount2, minimum, maximum) {
    let answer8;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (minimum < amount1 && amount2 < maximum) {  //will use < and not <=
      answer8 = true;
    } else {
      answer8 = false;
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer8;
  }
  
  console.log(exercise8(8, 10, 1, 15));  //using console.log to verify my answer
  console.log(exercise8(8, 20, 1, 15));  //using console.log to verify my answer
  console.log(exercise8(0, 10, 1, 15));  //using console.log to verify my answer
  console.log(exercise8(20, 8, 1, 15));  //using console.log to verify my answer
  
  // EXERCISE 9. -----------------------------------------------------------------------------------------------
  // In this exercise, if `item` is a number, follow the rules given in Exercise 7
  // except that `answer7` is replaced by `answer9`
  // If `item` is not a number, then assign a value to answer9 of:
  // "Please send a number, that was a <data type>."
  // for example, if item===true, the value should be:
  // "Please send a number, that was a boolean."
  function exercise9(item) {
    let answer9;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
      if (typeof item === "number") {  //typeof will help us ensure that our input goes through if is a number
      switch (item) {
        case 1:
          answer9 = "You won!";
          break;
        case 7: 
         answer9 = "You are lucky!";
          break;
        case 101:
          answer9 = "Welcome to coding 101!";
          break;
        case 1000000:
          answer9 = "You are one in a million!";
          break;
        default:
          answer9 = "Thanks for that!";
      } 
    } else { // else statement will catch everything that is not a number and output the string 
        answer9 = "Please send a number, that was a " + typeof item + ".";
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer9;
  }
  
    console.log(exercise9(1));  //using console.log to verify my answer
    console.log(exercise9(7));  //using console.log to verify my answer
    console.log(exercise9(101));  //using console.log to verify my answer
    console.log(exercise9(1000000));  //using console.log to verify my answer
    console.log(exercise9(true));  //using console.log to verify my answer
    console.log(exercise9(10));  //using console.log to verify my answer
    console.log(exercise9("hi"));  //using console.log to verify my answer
  
    // EXERCISE 10. ---------------------------------------------------------------------------------------
    // This question is a modified version of a classic programming question
    // called "Fizz Buzz"
    // Using a conditional, assign a value of:
    // "Fizz" to `answer10` if the value of `num10` is divisible by 3
    // "Buzz" to `answer10` if the value of `num10` is divisible by 5
    // "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
    // and if none of these conditions are satisfied, then assign the value of
    // `num10` to `answer10`
  
    function exercise10(num10) {
      let answer10;
      // --------------------------------------------
      // Write your code for the exercise below here:
      // --------------------------------------------
      if (num10 % 15 === 0) {  //if the remainder === 0, that means that the number is divisible by 15
        answer10 = "Fizz Buzz";
      } else if (num10 % 3 === 0) {  //if the remainder === 0, that means that the number is divisible by 3
        answer10 = "Fizz";
      } else if (num10 % 5 === 0) {  //if the remainder === 0, that means that the number is divisible by 3
        answer10 = "Buzz";
      } else { // will catch other numbers
        answer10 = num10;
      }
      // --------------------------------------------
      // And above here
      // --------------------------------------------
      return answer10;
    }
  
    console.log(exercise10(30));  //using console.log to verify my answer
    console.log(exercise10(33));  //using console.log to verify my answer
    console.log(exercise10(35));  //using console.log to verify my answer
    console.log(exercise10(11));  //using console.log to verify my answer
  
  // Congrats, you made it to the end! You rock!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  /*
  From a difficulty of 1-10 (10 being the most difficult), I would give these a 5.5. These challenges were not the most difficult but did require me to brush up on certain syntax and logic. References were: google (W3 schools, stack overflow), my "Javascript for Kids" book, and my fellow cohortmates. 
  */