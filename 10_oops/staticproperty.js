class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`Username: ${this.username}`);
  }

  static createId(){   //'static' keyword use to restrict for use id everyone only use for private member
      return `123`
  }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email){
      super(username)
      this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());