const user={
  username:"deepak",
  price:99,
  welcomemessage:function() {
   console.log(`${this.username}, welcome to website`);  //"this":-it is keyword that used to access above property value
   console.log(this); //if you print it tell you what current user hold property
  }
}

// user.welcomemessage()

//global doesn't have content so result empty
// console.log(this); //**imporant question:- interview purpose $$$$$$$$$ if you print in here it just show empty object but 'when you print on window there will show " " */

//***********when you print in window there show different result because before it was running everything in window and there was engine that execute javascript that engines come with browser but now seprate and give name different like node,bun etc now stand alone engine
//&&&&&&&&&&&&&&& so when you run console.log(this) in window there come result "window" object where you find most of event



//****************************************lets now other concept ************

// function value(){
//   let username="deepak"
  // console.log(this.username);  //inside function "this" key used to not access value .only it work on "object" inside

  // console.log(this);  //inside function when you run it print many object  value that you can use
// }
// value();


// const fun=function(){
//   let username='deepak'
//   console.log(this);
// }
// fun()


//arrow function
const fun=()=>{
  let username='deepak'
  console.log(this);  //it is not printing object as like other type of function printing further more information search
}

// fun()

const addTwo=(n1,n2)=>{
  return n1+n2;
}
// console.log(addTwo(2,3));

const add2=(n1,n2)=>n1+n2; //assuming we are returning value
// console.log(add2(4,5));

//in react this function most uses
const addn=(n1,n2)=>(n1+n2); //assuming we are returnin value in sigle line and when use parenthes we don't need to 'return' value
console.log(addn(3,4));


//************let see which kind some problem type
const value=(n1,n3)=>{username:"hitesh"} //it will not work
// console.log(value(4,5));

//*********always try to wrap in paranthes */
const values=(n1,n3)=>({username:"hitesh"}) // now it will work
console.log(values(4,5));
























