//Singleton :-Means when anything make with construtor that is called singleton
// example:- object.create

//object litters doesn't use sigleton

const mySym=Symbol("key");

const newObj={   //*********curly braces also called object
   name:"Deepak",  //********key store behind scene in the form of string
   surname:"mehta",
   work:"free",
   [mySym]:"mykey1",  //*******defined symbol in this way then it will work as like symbol always put into bracket
   "email":"Deepakmehta@gmail.com"  //*********this type of [key and value pair] couldnot access using dot point ,access ony using bracket method
}

//*******you can access object two way 1)using dot point 2)using bracket string
// console.log(newObj.name); //first way
// console.log(newObj["surname"]); //second way
// console.log(newObj.email);  //now in this way also working i think some update added js

console.log(newObj[mySym]); // access this way
//**********after use bracket in symbol key then print it will automatically tell 'it is symbol key'
// console.log(newObj);

//*********let see how to modify key ,freeze  */
newObj.email="deepakgoogle@gmail.com"
// console.log(newObj.email);

//********freeze object
// Object.freeze(newObj);


//*********** */ after freeze object then modify it will not work
newObj.name='rohan';
//********now printing
// console.log(newObj); //you can see it have not changed after freezing object

//*************let see how can we define function in object */

newObj.greeting=function(){
  console.log("hello js users");
}

// console.log(newObj.greeting);  //*****it is important concept further it will use more when u print in this way function doesn't execute it does return function reference

newObj.greeting2=function(){
  console.log(`Hello Js user, ${this.name}`); //"this":-it point current object inside property and use to access
}

//now let proint greeting 1 and greeting 2
console.log(newObj.greeting());
console.log(newObj.greeting2());

//$$$$$$ &&&& important point:=most time access object we use "dot point" but some cases use "bracket" if need to access*/







