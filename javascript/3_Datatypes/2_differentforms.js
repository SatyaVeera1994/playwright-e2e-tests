/*
Different forms of data
1. Literals 
2. Variable (Assigned to a variable)
3. Expression (Evaluates to, mostly using operators or return statement)
*/

const { type } = require("os");



//string
console.log("hello"); //Literals 
let str  = "hello"  //2. Variable (Assigned to a variable)
console.log(str);
console.log("he"+"llo");//3. Expression (Evaluates to, mostly using operators or return statement)

//boolen
console.log(true);
let bool = false
console.log(bool);
console.log(5>5);

//function
function sum(num1,num2){
    return num1+num2
}

sum(2,2)
console.log(sum(2,2));
console.log(typeof(sum(2,2)));


