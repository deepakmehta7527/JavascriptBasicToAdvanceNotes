/*
// getter and setter ka use kiya jata hai jab aap kissi ko password access krne ke liye nhi dena chahte hai tho un case main kese error denge
// in array '.length' property also used getter and setter ,there also you can't modify there length

*/

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
        this._email = value;  //we stop competition between "constructor" jo set kar rha hai value aur setter property kr rha hai tho exceed stack aw jayega so we used _(propety name)
  }

  get password() {  //****any property you want to get from outside classes use 'get",we are giving different password to user
    return `${this._password}hitesh`;
  }

  set password(value) {   //*******any  property set inside class then use "set" ,we are taking and set actual password
    this._password = value;
  }

/*
// when getter get different password when user want to access
//set original password and save into the database

*/

}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
