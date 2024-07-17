class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{   //extends use to link merge two classes
  constructor(username, email, password){
      super(username)  //before we were using 'call' method to hold reference of object but here directly pass parameter inside super() method and that handle everything whatever handling before 'call()'
      this.email = email
      this.password = password
  }

  addCourse(){
      console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);   //means chai and user object merged 'yes'