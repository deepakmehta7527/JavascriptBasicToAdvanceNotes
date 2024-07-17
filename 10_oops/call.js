/*
interviewer can ask question:-
window(browser)={this=window} window main sabhi type ke method hote defined hote hai
node={}
*/






function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
  // SetUsername(username) //**when call this way then call stack execute but after complete stack top popout and you wouldnot empty result

  SetUsername.call(this, username) //so we use 'call" it store reference of other object and whatever result all result hold "this" keyword

  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);