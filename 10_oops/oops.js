//object literals
const user = {
  username: "hitesh", //this is property
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);  //'"this" key means we are saying we want to access "current users" value
    console.log(this); //we are accessing whole current context
  },
};

//console.log(user.username)  //call property
//console.log(user.getUserDetails());  //call method
// console.log(this);  //global context empty but when you run in browser you will see "collection of context"

//example of construtor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {  //you can also create method
    console.log(`Welcome ${this.username}`);
  };

  return this; //all value return
}

//constructor:-when you use "new" keyword  that allow same object literal se multiple instance(constructor) bna sako
//tho jo "new" keyword hai eska istemal naya context banane main kaam aata jisse constructor function kehte hai
const userOne = new User("hitesh", 12, true); //without "new" keyword "this" function ke bahut sare value printout ho jate hai tho after use 'new" keyword wohi value print hote hai jo chahiye ,without use "new" keyword again and again different function call krne pe bhi woh replace kr deta hai jaise "userone" and "usertwo" main pass kiya argument tho jab without "new" keyword call kroge "userone" tho automaic "usertwo" ka argument aw jayega
const userTwo = new User("ChaiAurCode", 11, false); //but after user "new" keyword now we are using duplicate not original
console.log(userOne.constructor);  //constructor property ek reference hota hai jaise yaha reference "User" Hai
// console.log(userTwo.constructor);

/* *******jaise hi 'new' keyword ka istemal kiya jata hai tho naya empty object create hota hai after constructor function call hota
hai new keyword ke saath,aur ye kya krtha hai jitne bhi argument hote hai sab ko wrap karke,'this' keyword ko inject kr dete hai,
aur eske baad function se result mil jate hai


*/
