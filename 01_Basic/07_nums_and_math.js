const score = 400; //in this case js automatic detect it should be number
// console.log(score);

//you can defined manually you need number type
const balance = new Number(10);
// console.log(balance); //when you print specially written there this is number type

const bal=balance.toString() //after convert into string you can 'access' and use string data function
// console.log(bal.length);

//example if you have 10.0000 after point you need just two more zero
// console.log(balance.toFixed(2)); // 'fixed' means how many decimal point need

const othernumber = 123.678;
// console.log(othernumber.toPrecision(3)); //it will precision only on 3 digit after it will round up so try to count before point digit ex:-123.789 so we pass (3) that after round up and result 124
// console.log(othernumber.toPrecision(2)); //it precison but wrong because remain will give in exponential  so always remember how many you want precision

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //it represent value in special format

//++++++++++++++++++++++++ Maths+++++++++++++++++++

// console.log(Math.abs(-2)); //it convert negative value into positive
// console.log(Math.round(4.6));//*************mostly round uses***********if below 4.5 result 4 and above or equal to 4.5 result 5
// console.log(Math.ceil(4.1)) //it will take highest value 4.1 result 5
// console.log(Math.floor(5.8)); //it doen't consider after decimal point value
// console.log(Math.min(4,3,6,8));//it give minimum value
// console.log(Math.max(2,1,3,5));//it give max value

//*************mostly math library use on "Math.random()"

console.log(Math.random()); //it give random value result between 0.1 to 0.9
console.log(Math.random() * 10 + 1); //it give result between '1' to 'above bvalue' and we had plus 1 so it will except '0' number
console.log(Math.floor(Math.random() * 10) + 1); //it round up number and give result in the form of floor and floor used becaue above giving result in the from of point so avod used floor

const min = 10;
const max = 20;

//*************let see important formula and just above min and max value select and this below formula give result between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //it give result between "10" to "20"
//above code explain 'first generate random number' after multiply with max-min and we added 1 because we when random generate zero and after multily max-min=0 so we add 1 then 0+1=1 and added min means we need number in this range betweeen 10 to 20
