//03_objects where we had talk about object literals
//&&&&&&&&&&&&&&&&&& now we are talking "object Singleton" like below
//***** */ const tinderUser1=new object();

const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sagar";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

// ****************nested object***********

const username = {
  email: "some@gmail.com",
  fullname: {
    usefullname: {
      firstname: "deepak",
      lastname: "mehta",
    },
  },
};

// console.log(username)
// console.log(username.fullname.usefullname.firstname);

//let see multiple object merge
const obj3={1:'a',2:'b'}
const obj2={2:'a',4:'b'}

const obj1={obj2,obj3};  //if you do in this way all object merge in nested object way

 //*******we use assign method where pass "destination and source" */
 const obj4={3:'c',5:'d'}
 const obj=Object.assign({},obj3,obj2); //empty object:it is target And which object we want to add that is source,it store according to unique key

// console.log(obj);


//######### above merging operation use more ,use below "spread" merge operation most of time
const obj5={...obj3,...obj2,...obj4};
// console.log(obj5);


//************whenever data come from database we deal in this way */
//********data come from database in this way below given  */
const uses=[
  {
    id:1,
    email:"h@gmail.com"
  },{

  },{

  }
]

uses[1].email  //in this way you can access database data

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //in this way you can store all key in array and after perform operation
// console.log(Object.values(tinderUser)); //even you can also store value in array form
// console.log(Object.entries(tinderUser)); //all key and value store in group together in form of array(it doesn't use more)
// console.log(tinderUser.hasOwnProperty('isloggedIn')); //you are asking this property exist or not

//##############Concept of Destructuring*****************

const course={
  courseof:"Ai",
  courseCharge:"10K",
  courseInstructor:"Deepak"
}

//in normaly we access in this way
course.courseCharge; //so if you want to print 5 time then you have to write again and again

//let see how can we access destructing way
// const {courseInstructor}=course;
const {courseInstructor:callthem,courseof}=course; //even you can modify name of accessing


console.log(courseof)


//*******Api received in the form of json object
// {
//   "name":"deepak",
//   "coursePrice":"free"
// }

//******some time api also received in the form of array*******
// [
//   {},
//   {

//   },
//   {}
// ]




































