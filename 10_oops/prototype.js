/*
js ka default behavious "prototype" behaviour hai when you find anything it
 will search deeply untill like "first prototype" where you find collection
of property and method then if in this prototype doesn't have then it will
search next prototype


    array=>object=>null
    function=>object=>null (everthing object in js)

    array=>first prototype=>again click you will find next
     prototype(object)=>null(so stop further prototype not exist)

*/

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); //********we want 'trueLength' property bydefault should come with all string now let's make "method"
//*******property is:.trueLenght and "method" is "method()" */

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()   //this method used for all
// myHeros.hitesh()     //this method used for all
// myHeros.heyHitesh()   //this method power only used array type object
// heroPower.heyHitesh()  //not will use on other prototype object of array prototype object

//******above we had talk power of path/

// inheritance (agar do object ke important property ko link krna ho tho kese kare above jaise hummen dekha object ko link krne ke liye "prototype" ka use kiya but pehle kya hota tha)

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //pehle ye use kiya jata tha inheritance krne ke liye classes ko
};

Teacher.__proto__ = User;

// modern syntax  (ab aise kiya jata hai below given)
Object.setPrototypeOf(TeachingSupport, Teacher); //prototype inheritance

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
