const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

//****interview will ask 'pi' ki value change kyo nhi ki ja skti then you can explain below example of 'chai object'  *** */
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,    //it means you couldn't over write like above 'math.pi' there behind use this one so you couldn't modify
  enumerable: true,   //true means you can use loop but 'false' means you couldn't use loop,mostly enumerable means 'repeat'
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {   //after "defineProperty" of chai object then 'you couldnot define "function" access from "chai object" ,tho handle krne ke liye ye flag lggaya gya hai
    console.log(`${key} : ${value}`);
  }
}
