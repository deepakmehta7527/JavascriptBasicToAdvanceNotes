//*****primitative(stack means most of data perform on data copy) like number,string etc occupy in stack memory****
// non primitative(reference means pointer pointing original data) like array,object etc occupy heap memory that



//stack(primitive) categories

let name="deepak";
let surname=name; //first stored "name" variable in new variable "surname"
surname="kumar";// after modify "surname" so it should modify in original "name" data type but it doesn't happen

//because "surname" not occupy original "data" that occupy copy of original data

// console.log(name);
// console.log(surname);


//*************Reference (non-primitative categories) *******

let userone={
  name:"deepak",
  surname:"kumar"
}

let modify=userone.surname="mehta";  //store data in new variable and modify
console.log(userone);//after modify that also effect on original(object) data because
//it store original value so when u modify that will impact on original data also




