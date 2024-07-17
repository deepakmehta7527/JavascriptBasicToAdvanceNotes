//immediately Invoked function Expressions(IIFE)

//******* when we want "db connection" should be fast and whatever we declare inside function that time we don't want any global variable create problem for that function example functin(local variable as work like child they can ask for global(father) for getting access) :- that is called 'global variable pollute'*/


(function chai() {
  console.log(`DB connected`);
})();//after execute paranthesis use 'semicolon' that means you have terminate then you woulb be able to run other same type of function
//************************************************************************************************************ */
//first paranthesis () tell where define function and second paranthesis () use to execute function
//interview ask question give reply:-when function execute immediatly and also face globle scope problem so that have to remove use "IIFE"
//********************************* *******************************************************************************

((name)=>{  //above after execute use semicolon so this function is executing
  console.log(`DB CONNECTED TWO ${name}`);
})(`Deepak`);  //end this functin use semi-colon





























