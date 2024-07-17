// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// shallow copy like heap(where perform operation reference) and deep copy like stack(where perform operation just like copy)

//array
const fruit = ["apple", "banana", "lichi", "mango"];
console.log(fruit[0]);

//array object
const mixnum = new Array(1, 2, 3, 5.6, "popcorn", "rice", "sweat");
// console.log(mixnum);

//"unshift()" and "shift" :-it take time more but if somewher need to use then you can use
mixnum.unshift(9); //it will add number starting and move all remaining element right direction
// console.log(mixnum);

mixnum.shift(); //it remove starting value and all remaing element move left direction
// console.log(mixnum);

mixnum.pop();
// console.log(mixnum);
mixnum.push(23);
// console.log(mixnum);

const a = mixnum.includes(2); //it give result true or false
// console.log(a);

const index = mixnum.indexOf("rice"); //check value exist on index if not give result -1 and if exist return index number
console.log(index);

const item = mixnum.join(); //convert array to sting
console.log(item);
console.log(typeof item);

//*******let understand slice and splice*** *

//*************slice **********
console.log("Original array ", mixnum);
console.log("slice array ", mixnum.slice(1, 3)); //it include slice index (1 to 2) and exclude index 3

//************splice ********8
console.log("splice array", mixnum.splice(1, 3)); //after perform operation of splice index (1 to 3) also remove from original array that means it impact on original array
//after splice also print original array
console.log("Original array ", mixnum); //remaining portion printing
