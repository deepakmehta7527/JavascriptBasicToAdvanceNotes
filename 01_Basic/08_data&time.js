// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   //total millisecond from 1 jan 1970 to current date

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //how to get current millisecond
// console.log(Math.floor(Date.now()/1000));  //you can convert millisecond to second using this formula

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {   //it same work like localdatastring but here you can customize
    weekday: "long",

})

