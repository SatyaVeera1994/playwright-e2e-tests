### JavaScript Variable Rules Notes (English + Telugu)

Based on your slide:

## 1. Variable name should start with a letter, underscore (_) or dollar sign ($)

### English

A variable name must begin with:

* Letter (a-z, A-Z)
* Underscore (_)
* Dollar sign ($)

It cannot start with a number.

### Examples

✅ Valid

```javascript
let name = "Satya";
let _name = "Satya";
let $name = "Satya";
```

❌ Invalid

```javascript
let 1name = "Satya";

Your notes are about the **difference between `var`, `let`, and `const` in JavaScript**. Let me explain in a simple interview-friendly way.

# 1. `var`

### Features

✅ Can declare a variable

```javascript
var student = "Ajay";
```

✅ Can re-declare

```javascript
var student = "Ajay";
var student = "Ram";
```

✅ Can re-assign

```javascript
var student = "Ajay";
student = "Kiran";
```

✅ Function Scope

```javascript
function test() {
    var age = 25;
}
console.log(age); // Error
```

### Hoisting

```javascript
console.log(name);
var name = "Ajay";
```

Output:

```javascript
undefined
```

---

# 2. `let`

### Features

✅ Can declare

```javascript
let school = "Nursery";
```

❌ Cannot re-declare

```javascript
let school = "Nursery";
let school = "UKG"; // Error
```

✅ Can re-assign

```javascript
let school = "Nursery";
school = "UKG";
```

✅ Block Scope

```javascript
if (true) {
    let age = 20;
}
console.log(age); // Error
```

### Hoisting

```javascript
console.log(name);
let name = "Ajay";
```

Output:

```javascript
ReferenceError
```

---

# 3. `const`

### Features

✅ Must assign value while declaring

```javascript
const PI = 3.14;
```

❌ Cannot re-declare

```javascript
const PI = 3.14;
const PI = 3.14159; // Error
```

❌ Cannot re-assign

```javascript
const PI = 3.14;
PI = 5; // Error
```

✅ Block Scope

```javascript
if (true) {
    const age = 20;
}
console.log(age); // Error
```

---

# Important Point

### Primitive Values

```javascript
const age = 25;
age = 30; // Error
```

### Objects

Object properties can change.

```javascript
const student = {
    name: "Ajay"
};

student.name = "Ram";

console.log(student.name);
```

Output:

```javascript
Ram
```

Because `const` prevents changing the reference, not the object's properties.

---

# Easy Interview Table

| Feature        | var             | let       | const     |
| -------------- | --------------- | --------- | --------- |
| Re-declare     | ✅ Yes           | ❌ No      | ❌ No      |
| Re-assign      | ✅ Yes           | ✅ Yes     | ❌ No      |
| Scope          | Function        | Block     | Block     |
| Hoisting       | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Value Required | ❌ No            | ❌ No      | ✅ Yes     |

# Telugu Explanation

**var**

* Declare చేయవచ్చు
* Re-declare చేయవచ్చు
* Re-assign చేయవచ్చు
* Function Scope

**let**

* Declare చేయవచ్చు
* Re-declare చేయలేము
* Re-assign చేయవచ్చు
* Block Scope

**const**

* Declare చేసినప్పుడు value ఇవ్వాలి
* Re-declare చేయలేము
* Re-assign చేయలేము
* Block Scope

### Interview Answer (1 minute)

> "In JavaScript, `var`, `let`, and `const` are used to declare variables. `var` is function-scoped and allows both re-declaration and re-assignment. `let` is block-scoped, does not allow re-declaration, but allows re-assignment. `const` is also block-scoped and does not allow either re-declaration or re-assignment. In modern JavaScript, we generally use `let` and `const` instead of `var`."

```

### Telugu

Variable name **letter**, **underscore (_)** లేదా **dollar sign ($)** తో ప్రారంభం కావాలి.

Number తో start చేయకూడదు.

---

## 2. Reserved Keywords Cannot Be Used

### English

JavaScript reserved words cannot be used as variable names.

Examples:

* if
* else
* break
* throw
* return
* class

❌ Invalid

```javascript
let if = "Satya";
```

✅ Valid

```javascript
let userName = "Satya";
```

### Telugu

JavaScript లో ఇప్పటికే meaning ఉన్న keywords ని variable names గా ఉపయోగించకూడదు.

ఉదాహరణలు:

* if
* else
* break
* throw
* return

---

## 3. Variable Names Are Case-Sensitive

### English

JavaScript treats uppercase and lowercase letters differently.

```javascript
let name = "Satya";
let Name = "Kumar";
```

These are two different variables.

### Telugu

JavaScript లో **name**, **Name**, **NAME** మూడు వేర్వేరు variables.

```javascript
let name = "Satya";
let Name = "Kumar";
```

ఇవి same variables కావు.

---

## 4. Variable Name Should Not Conflict with Other Identifiers

### English

Avoid using the same name for variables, functions, or objects in the same scope.

❌ Example

```javascript
function login() {}

let login = "Admin";
```

This causes conflicts.

### Telugu

ఒకే scope లో function name మరియు variable name ఒకటే ఉండకూడదు.

❌

```javascript
function login() {}

let login = "Admin";
```

Conflict వస్తుంది.

---

## 5. Multiple Variables Can Be Declared in One Line

### English

You can declare multiple variables using commas.

```javascript
let name = "Satya",
    age = 31,
    city = "Hyderabad";
```

### Telugu

ఒకే line లో multiple variables declare చేయవచ్చు.

```javascript
let name = "Satya",
    age = 31,
    city = "Hyderabad";
```

Comma (,) తో separate చేయాలి.

---

## 6. Declared but Not Assigned = Undefined

### English

When a variable is declared without a value, JavaScript assigns `undefined`.

```javascript
let name;

console.log(name);
```

Output:

```javascript
undefined
```

### Telugu

Variable declare చేసి value assign చేయకపోతే, JavaScript default గా `undefined` ఇస్తుంది.

```javascript
let name;

console.log(name);
```

Output:

```javascript
undefined
```

---

## Interview Answer (English)

"JavaScript variable names should start with a letter, underscore, or dollar sign. Reserved keywords cannot be used as variable names. Variable names are case-sensitive, multiple variables can be declared in a single line, and if a variable is declared without a value, JavaScript assigns it as undefined."

## Interview Answer (Telugu)

"JavaScript లో variable names letter, underscore (_) లేదా dollar sign ($) తో ప్రారంభం కావాలి. Reserved keywords ను variable names గా ఉపయోగించకూడదు. Variable names case-sensitive గా ఉంటాయి. Multiple variables ను ఒకే line లో declare చేయవచ్చు. Variable కి value assign చేయకపోతే default గా undefined వస్తుంది."
