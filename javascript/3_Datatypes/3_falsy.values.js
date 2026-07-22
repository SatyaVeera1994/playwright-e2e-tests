/*
Truthy, falsy and nullish values
1. What are the falsy values?
a. false 
b. undefined 
c. null
d. 0
e. NaN
f.
“” (empty string)
2. Boolean and non-boolean context of nullish value
Type
Boolean context (e.g. if condition)
undefined false
null
Numeric context
NaN
false
0
Data types conversions
1. The following inbuilt functions can be used to conv
*/

let value1 = true;

if (value1) {
  console.log("condition met...");
} else {
  console.log(`Given ${value1no} is a falsy value..`);
}

let value2 = false;

if (value2) {
  console.log("condition met...");
} else {
  console.log(`Given ${value2} is a falsy value..`);
}

let value3 = undefined;

if (value3) {
  console.log("condition met...");
} else {
  console.log(`Given ${value3} is a falsy value..`);
}

let value4 = null;

if (value4) {
  console.log("condition met...");
} else {
  console.log(`Given ${value4} is a falsy value..`);
}

let value5 = 0;

if (value5) {
  console.log("condition met");
} else {
  console.log(`Given ${value5} is falsy value`);
}

let value6 = NaN;

if (value6) {
  console.log("condition met..");
} else {
  console.log(`Given ${value6} is falsy value`);
}

let value7 = "";
if (value7) {
  console.log("condition met...");
} else {
  console.log(`Given ${value7} is falsy value`);
}


let value8 =6+undefined
console.log(value8);

let value9 =6 + null
console.log(value9);