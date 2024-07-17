
//outside block declare data type is globale scope
//inside block declare date type is local scope

const a=3;
let ab=39;
if(true){
  const a=2;
let  b=12
// console.log('inner scope',a);
// console.log(ab);  //you can access global scope value but block varibale you couldn't access outside of block
  // var c=20;
}

// console.log('global scope',a);


// console.log(a);
// console.log(b);
// console.log(c); //we dont use 'var' keyword because it access local scope

// ************window global scope and node global scope both are different


//let see some example based on global and local scope
function one(){
  const jump="20km";
   function two(){
    let jump_Over=30;
    console.log(jump);
   }
  //  console.log(jump_Over);   //not access local variable data outside block
   two();
}
// console.log(jump);  //block variabe not able to access outside(globale)
// one()


//&&&&&&&&&&& let see other example related of if else
if(true){
  let name='deep';
   if(name==='deep'){
     let surname=name+" mehta";
    //  console.log(surname);
   }
  //  console.log(surname); //not able to access outside
}

// console.log(name);  //not able to access

//&&&&&&&&&&&&&&&&&&& Let see some interesting concept $$$$$$$$$$$$$$$$$$$


console.log(add(5));  //you can able to access after declaration before  in this way
function add(num1){   //add two number
  return num1+4;
}




// console.log(subtract(5))   //you can't access before function in this condition
const subtract=function sub(num1){  //store function in variable
  return num1-2;
}








