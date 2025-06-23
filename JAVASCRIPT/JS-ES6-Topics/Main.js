//Logical Operators

// function dispName(name) {
//   return name;
// }

// console.log(dispName("Poojitha"));

//Assignment Operator
var a = 10;
var b = 20;
var y = 40;
var results;
console.log(results);

function addNum() {
  results = a + b;
  console.log(results);
}
addNum();

// == Compare the Value and it ignore the type
// === campare the value and the type

// SCOPE Difference between Var , Let & Const

function addNumbers() {
  var english = 60;
  var maths = 80;
  results = english + maths;
  console.log(results);
}
addNumbers();

// function totalMarks() {
//   results = a + maths;
//   console.log(results);
// }
// totalMarks();

function addBill() {
  let banana = 30,
    mango = 50;
  results = banana + mango;
  console.log(results);
}
addBill();

const person1 = "KM";
const person = {
  name: "Poojitha",
};

console.log(person);

// console.log(person);
// console.log(person1);
