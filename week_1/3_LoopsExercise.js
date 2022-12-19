// Week 1 Exercise 3: Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers) --------------------------------------------
// between 1 and 5 (inclusive).

let i = 1;
while (i <= 5) {  //will be using <= as this will include 5
console.log(i);
i++;  //++ will let us increment as we go
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers) -----------------------------------------
// between 1 and 5 (inclusive).

let j = 1;
do {
  console.log(j);
  j++;  //++ will let us increment as we go
} while (j <= 5);  //will be using <= as this will include 5

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers) ----------------------------------------------
// between 1 and 5 (inclusive).

for (let k = 1; k <= 5; k++) {  //will be using <= as this will include 5, ++ will let us increment as we go
  console.log(k);
}

// Exercise 4. Now we want a loop that prints the integers --------------------------------------------------------------
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let l = 11;  //starting it from 11 at the beginning so that it can decrement to 10
while (l > 1) {
  l--;
  console.log(l); 
}

let m = 10;  //starting from 10 since the do loop will ensure 10 is included
do {
  console.log(m);
  m--;
} while (m > 0);

for (let n = 10; n > 0; n--) {  //will start from 10 as for loop will include 10
  console.log(n);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this ------------------------------------------
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let o = 6;  //will start from 6 so that it will run through and print 7 in the beginning
while (o <= 26) {  //will include 26 which will increment to 27 
  o++;  //will increment from 6
  console.log(o);  
}

let p = 7;  //will start from 7 as do will print out the 7 first 
do {
  console.log(p);
  p++; //will increment from 7
} while (p <= 27);  //will increment until 27

for (let q = 7; q <= 27; q++) {  //will increment starting from 7 and until it reaches 27
  console.log(q);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens. ------------------------------------
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let r = 0;  //will start from 0 so our first output is 10
while (r <= 80) {  //will end at 80 so that our last output is 90
  r += 10;  //will increment by 10
  console.log(r); 
}

let s = 10;  //will start from 10 as our do section will output 10 first
do {
  console.log(s);
  s += 10;  //will increment by 10
} while (s <= 90);  //will increment until 90

for (let t = 10; t <= 90; t += 10) {  //will increment starting from 10 and until it reaches 90
  console.log(t);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will -------------------------------------
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//let counterFour = 1;
//while (counterFour < 2) {
 // console.log("HELP ME!");
//counterFour--;
//}
/*

The function above will run infinitely because it does not specify a minimum number for counterFour, only a maximum (< 2). So to fix it, we will need to add the minimum number for it to stop at -100 ( > -100). To make sure, we can console.log counterFour to see if it equals -100.

*/

let counterFour = 1;
while (counterFour < 2 && counterFour > -100) {
 console.log("HELP ME!");
counterFour--;
}
console.log(counterFour);

// Exercise 8. Make a variable that contains your favorite integer. Write a loop ----------------------------------------
// (your choice which type) that prints the integers from 0 to that number.

var myInteger = 15;
for (let u = 0; u <= 15; u++) {  //starting from 0 and incrementing until we get 15
  console.log(u)
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's ----------------------------
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)


var myInteger = 15;
for (let v = 0; v <= 100; v++)   //starting from 0 and incrementing until we get 100
  if (v === myInteger) {
    console.log(v + " my favorite number!")  //will print 15 my favorite number
  } else {
    console.log(v + " not my favorite number")  //will print all other numbers + "not my favorite number"
  }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice. --------------------
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

/*
The best loop to use would depend on the situation that you are using your code for. 
- for loop: best to use when the situation is more structured (ie. one knows how many iterations one wants to go through)
- while loop: less structured than for loop, best when one does not know how many iterations one is going to go through
- do while loop: best for when the code is necessary to execute, even if the input does not satisfy any conditions
*/

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)! ------------------------------------
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {  // will start us at 0 and go until 3
  console.log("counting down from", outsideCounter); // will print our string 
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) { //will begin at number that outer counter is at, making sure that it does not go below 0 and that it decrements
    console.log("inside " + insideCounter);  // will print our string
  }
  console.log("***********************************"); // will print the string after each iteration
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
/*
From a difficulty of 1-10 (10 being the most difficult), I would give these a 5.5. These challenges were more somewhat difficult but were a great reminder of the basics of loops! I double-checked my answers through google (FCC, W3 schools, stack overflow, Techtonica's code samples), my cohortmates, and through my "Javascript for Kids" book. 
*/