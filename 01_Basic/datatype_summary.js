//*******it is important for interview purpose*** *

//******js is dynamic type language because Javascript can hold values with different data types in the same variable during runtime [dynamic]** *

//how does data take in memory space and perform some access,so there is two catogarize Primitive data types are immutable, store single values, do not have methods, cannot be shared, and have default values when not assigned. Non-primitive data types are mutable, store multiple values, have pre-defined methods, can be shared, and their default value is null when not assigned

//  Primitive(call by value):-

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // console.log("Hello world");
  return "hello world";
};

console.log(typeof anotherId);
console.log(typeof myObj);

console.log(typeof myFunction);

//*************you can read type varibale below link

// https://262.ecma-international.org/5.1/#sec-11.4.3
