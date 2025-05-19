let name = "Nani";
console.log(" Hello " + name + " Welcome to the show.");

// Now lets go the numbers
console.log(" The list of numbers from 1-10 are:");

// Numbers from 1-10 by loops

for(i = 1; i < 11; i++) {
      console.log( i);
}

// Boolean 

let isHeSleeping = true;
if(isHeSleeping) {
     console.log("He is sleeping");
}else {
       console.log("He is not sleeping");
}

// Function:- is a block of code that performs a specific task
// A, Function Decleration:- it hoisted, we call before the defined in the code.

function greet(name) {
      console.log("Hello " + name);
}
greet(" Nani");


function add(a, b) {
      return a + b;
}
console.log(add(10, 20));


//B, Function Expression:- a function that stored in variables
const sayHello = function(fName) {
      console.log("Hello " + fName + " Welcome to the show.");
};
sayHello("Hermon Mahari,");

//We can also use like this:
const multiply = function(c, d) {
      return c * d;
};
console.log(multiply(2, 4));

// C, Arrow Function:- Shorter way(syntax) to write function
const divide = (e, f) => {
      return e/f;
};


// Control Flow:- is the order in which the computer excutes statements in a program.
// 1, If else if else statements

let age = 18;
if(age > 18) {
      console.log("You are enough to vote.");
}else {
      console.log("You are underage.");
}

// 2, Switch Statements
let day = 2;
switch(day) {
      case 1:
            console.log("Monday");
            break;
      case 2:
            console.log("Tuesday");
            break;
            
      case 3:
            console.log("Wednesday");
            break;
}

// Loops:- is a block of code that runs repeatedly until a specified condition is met.
// 1, For loop

for(let i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
      }else if(i % 5 === 0){
            console.log("Buzz");
      }else if(i % 3 === 0) {
            console.log("Fizz");
      }else {
            console.log(i);
      }
}

// 2, While Loop
console.log("The numbers from 1-10 are:");
let j = 1;
while(j <= 10) {
      console.log(j);
      j++;
}

// 3, Do While Loop

console.log("The numbers from 11-20 are:");
let k = 11;
do {
      console.log(k);
      k++;
}while(k <= 20);


// Arrays:- are a data structure that stores multiple values in a single variable.
// Array methods:- push, pop, shift, unshift, splice, slice, indexof, join, concat, reverse, sort, filter, map, reduce...etc.
// 1, Array Declaration
const fruits = ["Apple", "Bannana", "Orange"];
console.log(fruits);

//2, Array Methods:- 
//a, Push:- adds an element to the end of an array
let person = ["Jhon", "Nani"];
person.push("Moss");
console.log(person);

//B, pop:- removes the last element of an array
person.pop();
console.log(person);

//C, Shift:- removes the first element of an array
person.shift();
console.log(person);

//D, Unshift:- add an element to the beginning of an array
person.unshift("Jhon", "Moss");
console.log(person);
console.log('');
console.log('');

//Objects:- are a data structure that stores key-value pairs.
//1, Object Decleration
const perInfo = {
      name: "Nani",
      age: 26,
      isMarried: false,
      profession: "Web Developer"

};
console.log("This is my Personal Information");
console.log(perInfo);

//2, Object Methods:- functions as values in an object

const car = {
      name: "BMW",
      color: "White and Black",
      modelYear: 2024,
      start: function() {
            console.log("The car is starting");

      
      },
      stop: function() {
            console.log("The car is stopping");
            
      }

}
console.log("My car is " + car.name + " with a color of " + car.color + " model of " +  car.modelYear);
car.stop();

