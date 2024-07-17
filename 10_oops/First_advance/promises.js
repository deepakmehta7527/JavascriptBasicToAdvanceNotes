// in promises something will complete but take time ex:if password encrypt then take time and update in future,fetch file and perform some operation and give back you result,android phone if it want to turn on camera then take time


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


//*****resolve :it means work will be and reject:-work will not be
const promiseOne=new Promise(function(resolve,reject){  //new keyword use to make fresh object
  //****first we will do async task :it can be 'Data base calls',cryptogorphy(encryption and decryption)

  setTimeout(function() {
    console.log('Async task is compelete');
     resolve();
  }, 1000);

})


promiseOne.then(function(){
// console.log('Promise consumed') //after above task complete then consumed run .when consumed value printout that means task done successfully
})


//***without store promise into variable calling  */

// new Promise(function(resolve,reject){
//   setTimeout(() => {
//      console.log("second promises run")
//       resolve();
//   }, 2000);
// }).then(function(){
//   console.log("promise2 consumed successful");
// })


//let see how to pass parameter in resolve

promisethree=new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve({username:"chai",email:"chai@gmail.com"})
  },2000);
})

promisethree.then(function(user){  //pass any name of argument and that argument will store 'resolve' value
console.log(user)
})

promisefour=new Promise(function(resolve,reject){
  setTimeout(function(){
    const error=false;
    if(!error){
       resolve({username:"deepak",password:"1234"});
    }else{
       reject('Error:something went wrong');
    }
  });
})

promisefour.then(function(user){  //you can use then as much as you want
       return user.username;  //whenever return anything so you can "printout" in the next ".then" property
}).then(function(u){
  console.log(u);
}).catch((error)=>{console.log(error)})
.finally((final)=>(console.log("The promise is either resolved or rejected")));

promisefive=new Promise(function(resolve,reject){
       setTimeout(
        function(){
          let error=false;
          if(!error){
           resolve({name:"krishna",email:"krishna@gmail.com"})
          }else{
             reject({rejection:"it can neither be load "})
          }
        },2000
       );
})

async function consume(){  //asynch either give result or directly give error so we use "try and catch block"
  try{
     const response=await promisefive;
     console.log(response);
  }catch(error){
     console.log(error);
  }
}



//*********let fetch using "asynch and await" */


async function fetchalldata(){
  try{
     const response=await fetch("https://api.github.com/users/deepakmehta");
     const data=await response.json();
     console.log(data);
  }catch(error){
     console.log(error)
  }
}

//fetchalldata();  //i think some problem .vs code so again and again "fecthalldata" call then it fetch "i don't know why like 'comment' and again "uncomment" then fetch data work


//this is seocond way to fetch
fetch("https://api.github.com/users/deepakmehta").then((response)=>{
     return response.json();
}).then((data)=>{
  console.log(data);
}).catch((error)=>{console.log("cerror")})



// *******promise.all
// yes this is also available, kuch reading aap b kro.

//*****read :promises,using promises ,fetch  ream form mdn document


//********theory concept again watch for revision time line (6:31:01) to (6:38:21)  youtube "chai aur code"*/




