//chaining of map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )     //first map operation complete then second map operation will be run
                .map( (num) => num + 1)    //first map operation complete it will not store in newNum ,it will run on second map whatever operation done
                .filter( (num) => num >= 40) //after complete second map then filter apply after that it will store in 'newNums' variable

console.log(newNums);