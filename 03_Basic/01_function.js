function sayMyName(){
  console.log("hii");
  console.log("bye");
}

// sayMyName //****it indicate function will reference *****
// sayMyName()  //***it indicate function will ready for execute*** *

function add(n1,n2){
  console.log(n1+n2);
}

// const result=add(3,4);
// console.log(result); //function doesn't return anything we had print inside function so again print function it will give result "undefined"

function add2(n1,n2){

  return n1+n2;  //after return anything you want to print that will not work because when you return it will terminate but before whatever you write it will execute

  console.log("hii");
}


// const result=add2(3,4);
// console.log(result);

function userloggin(user="userid"){ //even by default you can defined username
  if(!user){
    return "please defined user name";
  }
  return `user logged in ${user}`
}

const userp=userloggin()
console.log(userloggin())

//**********rest operator *******and spread operator define same way but work different and it depend where which one u are using

function calculate(...num1){ //after use rest operator multiple value can pass and that will store in the form of array
  return num1;
}

// console.log(calculate(200,400,500,2000));

//*************interview purpose of question can ask */

function cal(val1,val2,...num1){
  let num=[val1,val2,num1]
  return num;  //first two value will store val1 and val2 and other will store rest operator
}

// console.log(cal(200,400,2000,8000));

//let see how to handle object using function
const user={
  username:'deepak',
  price:199
}

function handleobject(anyobject){

  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// console.log(handleobject(user));// first way pass object
console.log(handleobject({username:"deepak",price:100}));  //second way directly object pass into function

//*********let see how can we pass array in object *

const myNewArray=[200,300,500];

function returnSecondValue(getArray){
  return getArray;
}

// console.log(returnSecondValue(myNewArray));//indirectly pass array
// console.log(returnSecondValue([300,4550,200])); //directly pass array

























