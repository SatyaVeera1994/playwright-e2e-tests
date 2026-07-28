ఈ స్లైడ్‌లో **JavaScript Data Types – Summary Points** గురించి ఉంది. ప్రతి పాయింట్‌ను సులభంగా తెలుగులో చూద్దాం.

---

# JavaScript Data Types – Summary (తెలుగులో)

## 1. JavaScript లో మొత్తం 8 Data Types ఉన్నాయి.

వాటిలో:

* **7 Primitive Data Types**
* **1 Object Data Type**

### Primitive Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

### Object Type

* Object
* Array
* Function
* Date (ఇవన్నీ Object type కిందే వస్తాయి.)

---

## 2. `typeof` Operator

ఒక variable ఏ data type లో ఉందో తెలుసుకోవడానికి `typeof` ఉపయోగిస్తారు.

**Example**

```javascript
let age = 25;
console.log(typeof age);
```

Output

```
number
```

మరొకటి

```javascript
let name = "Ajay";
console.log(typeof name);
```

Output

```
string
```

---

## 3. `typeof` ఎప్పుడూ చిన్న అక్షరాల్లో (lowercase) String ను return చేస్తుంది.

Examples

```javascript
typeof 10
```

Output

```
"number"
```

```javascript
typeof true
```

Output

```
"boolean"
```

```javascript
typeof "Hello"
```

Output

```
"string"
```

---

## 4. Data ను మూడు విధాలుగా Represent చేయవచ్చు.

### Literal

```javascript
100
"Hello"
true
```

### Variable

```javascript
let age = 25;
```

### Expression

```javascript
10 + 20
```

Output

```
30
```

---

## 5. JavaScript లో False గా Consider చేసే Values (Falsy Values)

ఈ 6 values Boolean Context లో **false** అవుతాయి.

* `false`
* `undefined`
* `null`
* `0`
* `NaN`
* `""` (Empty String)

Example

```javascript
if("") {
   console.log("True");
}
else{
   console.log("False");
}
```

Output

```
False
```

---

## 6. Data Type Conversion

### parseInt()

String → Integer

```javascript
parseInt("25")
```

Output

```
25
```

---

### parseFloat()

```javascript
parseFloat("25.75")
```

Output

```
25.75
```

---

### toString()

Number → String

```javascript
let age = 25;

age.toString();
```

Output

```
"25"
```

---

## 7. ఈ Symbols గురించి తెలుసుకోవాలి

### `{ }`

Object

```javascript
let student = {
   name:"Ajay"
}
```

---

### `[ ]`

Array

```javascript
let marks = [10,20,30];
```

---

### `/abc/`

Regular Expression (Regex)

```javascript
let pattern = /abc/;
```

---

### `" "` లేదా `' '`

String

```javascript
let name = "Ajay";
```

---

## 8. Primitive Data Types Immutable

Immutable అంటే Value మార్చలేము.

Example

```javascript
let str = "Hello";

str[0] = "Y";

console.log(str);
```

Output

```
Hello
```

String మారలేదు.

---

## 9. ఎందుకు `let` లేదా `const` ఉపయోగించాలి?

ఎందుకంటే:

* Block Scope ఉంటుంది.
* Bugs తక్కువ వస్తాయి.
* Modern JavaScript లో `var` కంటే `let`, `const` వాడటం మంచిది.

Example

```javascript
if(true){
   let age = 25;
}

console.log(age);
```

Output

```
ReferenceError
```

`age` block బయట అందుబాటులో ఉండదు.

---

## 10. Wrapper Objects

`undefined` మరియు `null` తప్ప మిగతా Primitive Types కి Wrapper Objects ఉంటాయి.

| Primitive | Wrapper Object |
| --------- | -------------- |
| string    | String         |
| number    | Number         |
| boolean   | Boolean        |
| symbol    | Symbol         |
| bigint    | BigInt         |

Example

```javascript
let name = "Ajay";

console.log(name.length);
```

ఇక్కడ `name` ఒక string అయినా, JavaScript తాత్కాలికంగా `String` object ని సృష్టించి `.length` property ని ఉపయోగిస్తుంది.

---

## ఇంటర్వ్యూ కోసం గుర్తుంచుకోవాల్సిన ముఖ్యమైన పాయింట్లు

* ✅ JavaScript లో **8 Data Types** ఉన్నాయి.
* ✅ **7 Primitive + 1 Object**.
* ✅ `typeof` తో Data Type తెలుసుకోవచ్చు.
* ✅ `typeof` ఎప్పుడూ lowercase string ను return చేస్తుంది.
* ✅ **Falsy Values:** `false`, `undefined`, `null`, `0`, `NaN`, `""`.
* ✅ `parseInt()`, `parseFloat()`, `toString()` Data Type Conversion కోసం.
* ✅ Primitive Data Types **Immutable**.
* ✅ Modern JavaScript లో `let` మరియు `const` ఉపయోగించడం ఉత్తమ పద్ధతి.
Here's the **JavaScript Data Types – Summary** explained in **simple English**.

---

# JavaScript Data Types – Summary

## 1. JavaScript has 8 Data Types

There are:

* **7 Primitive Data Types**
* **1 Non-Primitive (Object) Data Type**

### Primitive Data Types

* String
* Number
* Boolean
* Undefined
* Null
* Symbol
* BigInt

### Non-Primitive

* Object

Examples:

```javascript
let name = "John";      // String
let age = 25;           // Number
let isActive = true;    // Boolean
let x;                  // Undefined
let y = null;           // Null
let id = Symbol();      // Symbol
let big = 123n;         // BigInt

let person = {          // Object
  name: "John"
};
```

---

# 2. `typeof` Operator

The `typeof` operator is used to check the data type of a variable or expression.

Example:

```javascript
let age = 25;

console.log(typeof age);
```

Output:

```text
number
```

Another example:

```javascript
console.log(typeof "Hello");
```

Output:

```text
string
```

---

# 3. `typeof` Returns a Lowercase String

The `typeof` operator always returns the data type as a **lowercase string**.

Examples:

```javascript
typeof 10
```

Output

```text
"number"
```

```javascript
typeof true
```

Output

```text
"boolean"
```

```javascript
typeof "Hello"
```

Output

```text
"string"
```

---

# 4. Data Can Be Represented in Three Forms

### Literal

A value written directly in the code.

```javascript
100
"Hello"
true
```

### Variable

Stores a value.

```javascript
let age = 25;
```

### Expression

A combination of values and operators that produces a result.

```javascript
10 + 20
```

Output

```text
30
```

---

# 5. Falsy Values

The following six values are treated as **false** in a Boolean context.

* `false`
* `undefined`
* `null`
* `0`
* `NaN`
* `""` (Empty String)

Example:

```javascript
if ("") {
    console.log("True");
} else {
    console.log("False");
}
```

Output:

```text
False
```

---

# 6. Data Type Conversion

### `parseInt()`

Converts a string to an integer.

```javascript
parseInt("25");
```

Output

```text
25
```

---

### `parseFloat()`

Converts a string to a floating-point number.

```javascript
parseFloat("25.75");
```

Output

```text
25.75
```

---

### `toString()`

Converts a number into a string.

```javascript
let age = 25;

age.toString();
```

Output

```text
"25"
```

---

# 7. Be Familiar with These Notations

### `{ }` → Object

```javascript
let student = {
    name: "John"
};
```

---

### `[ ]` → Array

```javascript
let marks = [10, 20, 30];
```

---

### `/abc/` → Regular Expression (Regex)

```javascript
let pattern = /abc/;
```

---

### `" "` or `' '` → String

```javascript
let name = "John";
```

---

# 8. Primitive Data Types Are Immutable

**Immutable** means their values cannot be changed directly.

Example:

```javascript
let str = "Hello";

str[0] = "Y";

console.log(str);
```

Output

```text
Hello
```

The string remains unchanged because strings are immutable.

---

# 9. Why Should We Use `let` or `const`?

Because they support **block scope**, making code safer and reducing bugs.

Example:

```javascript
if (true) {
    let age = 25;
}

console.log(age);
```

Output

```text
ReferenceError
```

The variable `age` is only available inside the block.

---

# 10. Wrapper Objects

Except for **`undefined`** and **`null`**, every primitive data type has a corresponding wrapper object.

| Primitive | Wrapper Object |
| --------- | -------------- |
| string    | String         |
| number    | Number         |
| boolean   | Boolean        |
| symbol    | Symbol         |
| bigint    | BigInt         |

Example:

```javascript
let name = "John";

console.log(name.length);
```

Although `name` is a primitive string, JavaScript temporarily creates a `String` object so you can use properties like `.length`.

---

# Interview Quick Notes

* JavaScript has **8 data types**.
* **7 are primitive**, and **1 is object**.
* Use **`typeof`** to check the data type.
* `typeof` always returns a **lowercase string**.
* **Falsy values:** `false`, `undefined`, `null`, `0`, `NaN`, `""`.
* Use **`parseInt()`**, **`parseFloat()`**, and **`toString()`** for type conversion.
* Primitive data types are **immutable**.
* Prefer **`let`** and **`const`** over `var` because they use **block scope** and help avoid bugs.
