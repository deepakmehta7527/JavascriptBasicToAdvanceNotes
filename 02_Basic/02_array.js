const marvelheroes=["thor","spiderman",'iron-man'];
const DcHeroes=['superman','batman','flash',1,4,true];

marvelheroes.push("hulk");
// console.log(marvelheroes);  //one array occupy other array as single data that is not good
//then you can acess in this way
// console.log(marvelheroes[3][0]); //so that is not good to merge and access array


//***************Let see how can we merge two array in sigle array *
// const newarray=marvelheroes.concat(DcHeroes);
// console.log(newarray); //but "concat" doesn't use more then ,use other method let see below


//********let see most uses method 'spread' method to combine two array****** *
const newarray=[...marvelheroes,...DcHeroes]; //just use three dot before using any array to combine
// console.log(newarray);

//********let see if subsequence of array and you want to split array using flat method ******* *
const DcMarvelsuper=['thor','superman',['flash','hulk',['iron-man','spiderman']],['thanous','loki']];
const sigleArray=DcMarvelsuper.flat(Infinity); //depth pass how many subsequence array exist above case 2(depth) or even you can pass infinity

// console.log(sigleArray);

//*********let convert into array,check given value is array or not*** *
const num="hello";
// console.log(Array.isArray(num)); //false it is not array
// console.log(Array.from(num)); //convert into array

//important question interview can ask
// console.log(Array.from({name:"deepak"})); //in this place result will be empty array because we have to tell whose key value we want to convert ,in this case not tell so empty array we have

//let see how to convert single variable store data into array withod
const n1=100;
const n2=200;
const n3=300;
// console.log(Array.of(n1,n2,n3)); //**************all data store in array form*********



