// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps :-it is holds key-value pairs and remeber original insertion of the keys,any vaue may be used as either key or value
//it have unique value store not duplicate as compare to object value
const map = new Map()   //map itself is object
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //here we declare duplicate value but map will not consider this value and avoid to print this value


// console.log(map);

for (const [key, value] of map) {  //map is not iterable so u couldn't use loop for accessing
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for(key in myObject){  //on object in this way not iterable
//     console.log(key);

// }

/*

special case uses loop:-

// (for in loop) is used for iterating over object properties
let obj={
  name:"deepak",
  class:"23444"
}
for(i in obj){
  console.log(obj[i]);
}


//(for of loop)  is used for iterating over iterable values like map,set,array,string etc
example-
let map=new Map();;

for([key,value] of map){
   console.log(key,value);
}

*/


