//Logical Operators

// function dispName(name) {
//   return name;
// }

// console.log(dispName("Poojitha"));

//Assignment Operator
// var a = 10;
// var b = 20;
// var y = 40;
// var results;
// console.log(results);

// function addNum() {
//   results = a + b;
//   console.log(results);
// }
// addNum();

// // == Compare the Value and it ignore the type
// // === campare the value and the type

// // SCOPE Difference between Var , Let & Const

// function addNumbers() {
//   var english = 60;
//   var maths = 80;
//   results = english + maths;
//   console.log(results);
// }
// addNumbers();

// // function totalMarks() {
// //   results = a + maths;
// //   console.log(results);
// // }
// // totalMarks();

// function addBill() {
//   let banana = 30,
//     mango = 50;
//   results = banana + mango;
//   console.log(results);
// }
// addBill();

// const person1 = "KM";
// const person = {
//   name: "Poojitha",
// };

// console.log(person);

// console.log(person);
// console.log(person1);

// Logical Operator && or ||

function getName(name) {
  return name;
}
let a = false;
let b = false;
//&& if first one is true , it will check the next value
// console.log(a && getName("Leela"));

console.log(a || getName("Leela"));

//Template Literals it will manipulate any kind of string with dynamic values

let name1 = "Poojitha";
let name2 = "Kumar";

console.log(name1 + " " + name2, `${name1} ${name2}`);

//Ternary Operator
let showMovies = false;

function showFirstMovie(movieName) {
  return movieName;
}

function showSecondMovie(movieName) {
  return movieName;
}

// if (showMovies) {
//   console.log(showFirstMovie("Kubera"));
// } else {
//   console.log(showSecondMovie("Kannappa"));
// }

showMovies
  ? console.log(showFirstMovie("Kubera"))
  : console.log(showSecondMovie("Kannappa"));

// Destructuring

const id = 1;
const productName = "HP Laptop";
const rate = 40000;

const product = {
  id,
  productName,
  rate,
};
// console.log(product);

const product2 = {
  description: "Product2 Description",
  id,
  productName,
  rate,
};
const { description } = product2;
console.log(product, description);

//Array Destructuring
const numbers = [1, 2, 3];

let getArryFirstValue = numbers[0];
let getArrySecondValue = numbers[3];
console.log(getArryFirstValue, getArrySecondValue);

const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement,
] = numbers;

console.log(
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement
);

// Default Parmetor, Spread Operator, Rest Operator

function mulTwoNumbers(num1 = 4, num2 = 5) {
  return num1 * num2;
}
console.log(mulTwoNumbers(2));

//spread Operator

const array1 = [2, 3, 4, 5];
console.log(...array1);

const array2 = [10, 20, 40, 50];

console.log(...array1, ...array2);
console.log(80, ...array1, 90, ...array2, 7867);

//rest operator
function getInfo(a, b, c) {
  console.log(a, b, c);
  return "Leela";
}
console.log(1, 2, 4);

function getInfo2(a, b, ...xyz) {
  console.log(a, b);
  console.log(xyz);
  return a, b;
}
console.log(1, 2, 4, 6, 7, 8, 9, 7, 8, 90, 10);
