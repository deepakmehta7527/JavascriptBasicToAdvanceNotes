const usermail=NaN;

if(usermail){
  console.log("got uermail");
}else{
  console.log("don't have user mail");
}

//falsy values
//****false,0,-0,bigInt,0,"", null,undefined,NaN** *

//truthy values
//****** "0","false"," ",[],{},function(){} */


//***** you can check other way is it true or false
if(usermail.length===0){
  console.log("array is empty");
}else{ console.log("not empty");}

//*********in this way u can check empty object or not */
const objarr={};
if(Object.keys(objarr).length===0){
  console.log('empty object');
}console.log("not empty object");

//for general knowledge purpose
//->false==''  result=>true,->false==0 result=true,0==' ' resutl=true


// Nullish Coalescing operator (??):null undefined

let val1;
// val1=5??10  //whne you work with database that time two value response receive so during that time if you receive "null" then your code structure can be worst so we use this to handle
// val1=null??10
// val1=undefined??15
val1=null??10??20  //if null defined but corresponding any value have then that value will run
// console.log(val1)


//terniary operator different as compare to coalescing operator
//**** condition?true:false example given below
const icecream=8;
icecream>=10?console.log("greater then 10 icecream"):console.log("less 80");















