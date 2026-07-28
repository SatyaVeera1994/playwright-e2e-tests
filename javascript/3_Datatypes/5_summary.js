/*
Data type - Summary points
1. A total of 8 data types where 7 primitives and 1 object type
2. typeof operator can be used to check a data type of variable/expression
3. The typeof operator returns a string value starting with lowercase
4. A data be represented in three forms: Literals, variables and expression
5. Following 6 values will be considered falsy in a boolean context false, undefined, null, 0,
NaN and empty string
6. parseInt(), parseFloat(), .toString() method can be used to convert datatype
7. Be familiar with these notations: {}, [], /abc/, “”
8. All primitive data types are immutable
9. Why do you need to stick with let or const?
a. Because let and const support block scoping
10.Except for ‘undefined’ and ‘null’, every other 5 primitives have wrapper object types (starts
with uppercase
*/


//8. All primitive data types are immutable
 let  day ="sunday"
 console.log(day);
 console.log(day.toUpperCase());
  console.log(day);


  // 10.Except for ‘undefined’ and ‘null’, every other 5 primitives have wrapper object types (startswith uppercase)

  let bool = Boolean(true)
  let num = Number(11)
  let str = String("hiji")
  console.log("bool")
  console.log("num")
  console.log("str")