/*
before classes getter and setter how was working

//function behave two way 1)as like function 2)as like object

// defineProperty :it is getter and setter property

//before classes using function based "getter and setter"
//you can also make object based "getter and setter"
*/

function User(email, password){
  this._email = email;  //property were defined directly
  this._password = password

  Object.defineProperty(this, 'email', {  //(a)"this":-pass global value,(b)modify "email",(c)define property
      get: function(){
          return this._email.toUpperCase()
      },
      set: function(value){
          this._email = value
      }
  })
  Object.defineProperty(this, 'password', {
      get: function(){
          return this._password.toUpperCase()
      },
      set: function(value){
          this._password = value
      }
  })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);