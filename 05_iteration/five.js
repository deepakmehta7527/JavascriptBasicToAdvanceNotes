const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   //for each loop take call back
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)



// coding.forEach( (item, index, arr)=> {  //first item,index no,full array //2nd item,index no,full array continue untill end array
//     console.log(item, index, arr);
// } )



//very importatn to understand there iteration
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//*******very important to understand iteration */
myCoding.forEach( (item) => {

    console.log(item.languageName); //each object name consider "item"
} )