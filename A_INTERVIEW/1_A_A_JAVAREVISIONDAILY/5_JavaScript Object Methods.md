# JavaScript Object Methods – Interview Cheat Sheet

SDET / Playwright Interview Revision

## 1. Object Methods – One-Line Revision

| Method                         | Meaning                             | Memory Trick   |
| ------------------------------ | ----------------------------------- | -------------- |
| `Object.keys()`                | Returns all keys                    | Keys           |
| `Object.values()`              | Returns all values                  | Values         |
| `Object.entries()`             | Returns key-value pairs             | Both           |
| `Object.fromEntries()`         | Converts entries into object        | Array → Object |
| `Object.assign()`              | Copies / merges objects             | Merge          |
| `Object.freeze()`              | Prevents adding, deleting, updating | Full Lock      |
| `Object.seal()`                | Prevents adding and deleting        | Partial Lock   |
| `Object.hasOwn()`              | Checks own property                 | Exists?        |
| `Object.create()`              | Creates object with prototype       | Create         |
| `Object.defineProperty()`      | Defines property settings           | Define         |
| `Object.isFrozen()`            | Checks frozen object                | Freeze Check   |
| `Object.isSealed()`            | Checks sealed object                | Seal Check     |
| `Object.getPrototypeOf()`      | Gets prototype                      | Get Prototype  |
| `Object.setPrototypeOf()`      | Sets prototype                      | Set Prototype  |
| `Object.getOwnPropertyNames()` | Gets own property names             | Property List  |

## 2. Syntax Cheat Sheet

```
let user = {
    name: "Satya",
    age: 30,
    role: "QA"
};

// 1. Get keys
Object.keys(user);

// 2. Get values
Object.values(user);

// 3. Get key-value pairs
Object.entries(user);

// 4. Entries to object
Object.fromEntries([["name", "Satya"]]);

// 5. Copy / merge objects
Object.assign({}, user);

// 6. Freeze object
Object.freeze(user);

// 7. Seal object
Object.seal(user);

// 8. Check property
Object.hasOwn(user, "name");

// 9. Create object
Object.create(user);

// 10. Define property
Object.defineProperty(user, "city", {
    value: "Bangalore"
});

// 11. Check frozen
Object.isFrozen(user);

// 12. Check sealed
Object.isSealed(user);

// 13. Get prototype
Object.getPrototypeOf(user);

// 14. Set prototype
Object.setPrototypeOf(user, {});

// 15. Get property names
Object.getOwnPropertyNames(user);
```

## 3. Most Important Interview Differences

| Comparison                     | Difference                                   |
| ------------------------------ | -------------------------------------------- |
| `keys()` vs `values()`         | Keys vs Values                               |
| `entries()` vs `fromEntries()` | Object → Entries vs Entries → Object         |
| `freeze()` vs `seal()`         | Freeze prevents updates; Seal allows updates |
| `assign()` vs Spread           | Both can shallow-copy objects                |
| `Object.hasOwn()` vs `in`      | Own property vs Own + inherited property     |

## 4. Freeze vs Seal – Must Remember

| Operation       | Freeze | Seal |
| --------------- | ------ | ---- |
| Add property    | ❌      | ❌    |
| Delete property | ❌      | ❌    |
| Update property | ❌      | ✅    |
| Read property   | ✅      | ✅    |

## 5. Quick Memory Tricks

KEYS → Names

VALUES → Data

ENTRIES → Both

FROMENTRIES → Convert to Object

ASSIGN → Merge

FREEZE → Full Lock

SEAL → Add/Delete Lock

HASOWN → Property Check

CREATE → New Object

DEFINEPROPERTY → Property Rules

## 6. Top 10 Interview Questions

1. How do you get all keys from an object? — `Object.keys()`
2. How do you get all values? — `Object.values()`
3. How do you merge two objects? — `Object.assign()` or spread.
4. How do you convert an object into an array? — `Object.entries()`
5. How do you convert entries into an object? — `Object.fromEntries()`
6. What is Object.freeze()? — Prevents changes to an object's own properties.
7. What is Object.seal()? — Prevents adding or deleting properties.
8. Can we update a sealed object? — Yes.
9. How do you check whether a property belongs directly to an object? — `Object.hasOwn()`
10. What is a shallow copy? — A copy where nested objects are still shared references.

Interview tip: First memorize `keys()`, `values()`, `entries()`, `assign()`, `freeze()`, `seal()`, and `hasOwn()`. These are the first methods to practise for SDET coding rounds.


# JavaScript – Object Methods (Telugu + Interview Cheat Sheet)

JavaScript లో Object Methods అంటే Objects లో ఉన్న properties and values ను access, add, update, delete, check, compare చేయడానికి ఉపయోగించే built-in methods.

SDET / Playwright interviews లో ఇవి చాలా ముఖ్యమైనవి.

## 1. First understand Object

```
let employee = {
    name: "Satya",
    age: 30,
    role: "QA Engineer"
};
```

ఇక్కడ:

- `name`, `age`, `role` → Properties (keys)
- `"Satya"`, `30`, `"QA Engineer"` → Values

## 2. Important Object Methods – Cheat Sheet

| Method                         | Purpose                      | Easy memory   |
| ------------------------------ | ---------------------------- | ------------- |
| `Object.keys()`                | Get all keys                 | Keys          |
| `Object.values()`              | Get all values               | Values        |
| `Object.entries()`             | Get key-value pairs          | Both          |
| `Object.fromEntries()`         | Entries → Object             | Convert       |
| `Object.assign()`              | Copy / merge objects         | Merge         |
| `Object.freeze()`              | Prevent changes              | Lock          |
| `Object.seal()`                | Prevent add/delete           | Seal          |
| `Object.isFrozen()`            | Check frozen object          | Check         |
| `Object.isSealed()`            | Check sealed object          | Check         |
| `Object.hasOwn()`              | Check own property           | Exists?       |
| `Object.create()`              | Create object with prototype | Create        |
| `Object.defineProperty()`      | Define property rules        | Define        |
| `Object.getOwnPropertyNames()` | Get own property names       | Property list |
| `Object.getPrototypeOf()`      | Get prototype                | Prototype     |
| `Object.setPrototypeOf()`      | Set prototype                | Set prototype |

## 3. Important Methods with Examples

### 1. `Object.keys()`

Object లో అన్ని property names తీసుకోవడానికి.

```
let employee = {
    name: "Satya",
    age: 30,
    role: "QA"
};

console.log(Object.keys(employee));

// ["name", "age", "role"]
```

### 2. `Object.values()`

Object లో అన్ని values తీసుకోవడానికి.

```
console.log(Object.values(employee));

// ["Satya", 30, "QA"]
```

### 3. `Object.entries()`

Keys మరియు values రెండింటినీ array format లో ఇస్తుంది.

```
console.log(Object.entries(employee));

// [
//   ["name", "Satya"],
//   ["age", 30],
//   ["role", "QA"]
// ]
```

### 4. `Object.fromEntries()`

Key-value pairs ఉన్న array ను Object గా మారుస్తుంది.

```
let entries = [
    ["name", "Satya"],
    ["role", "QA"]
];

console.log(Object.fromEntries(entries));

// { name: "Satya", role: "QA" }
```

### 5. `Object.assign()`

Objects ను copy లేదా merge చేయడానికి.

```
let obj1 = { name: "Satya" };
let obj2 = { role: "QA" };

let result = Object.assign({}, obj1, obj2);

console.log(result);

// { name: "Satya", role: "QA" }
```

### 6. `Object.freeze()`

Object లో properties add, delete, update చేయకుండా నిరోధిస్తుంది.

```
let user = {
    name: "Satya",
    age: 30
};

Object.freeze(user);

user.age = 35;

console.log(user.age); // 30
```

### 7. `Object.seal()`

Existing properties update చేయవచ్చు. కానీ new properties add చేయలేము, existing properties delete చేయలేము.

```
let user = {
    name: "Satya",
    age: 30
};

Object.seal(user);

user.age = 35;       // Allowed
user.city = "Bangalore"; // Not allowed
delete user.name;    // Not allowed

console.log(user);
```

### 8. `Object.hasOwn()`

Object లో particular property ఉందా లేదా check చేస్తుంది.

```
let user = {
    name: "Satya",
    age: 30
};

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "city")); // false
```

### 9. `Object.create()`

Specified prototype తో కొత్త Object create చేస్తుంది.

```
let person = {
    greet() {
        return "Hello";
    }
};

let employee = Object.create(person);

console.log(employee.greet()); // Hello
```

### 10. `Object.defineProperty()`

Object property కి ప్రత్యేక rules define చేయడానికి ఉపయోగిస్తాం.

```
let user = {};

Object.defineProperty(user, "name", {
    value: "Satya",
    writable: false
});

console.log(user.name); // Satya
```

`writable: false` అంటే property value మార్చలేము.

## 4. Most Important Interview Differences

Object.keys() vs Object.values() vs Object.entries()

```
let user = { name: "Satya", age: 30 };

Object.keys(user);
// ["name", "age"]

Object.values(user);
// ["Satya", 30]

Object.entries(user);
// [["name","Satya"], ["age",30]]
```

Object.freeze() vs Object.seal()

| Operation       | Freeze | Seal |
| --------------- | ------ | ---- |
| Add property    | No     | No   |
| Delete property | No     | No   |
| Update property | No     | Yes  |

Object.assign() vs Spread Operator

```
let copy1 = Object.assign({}, user);
let copy2 = { ...user };
```

రెండూ shallow copy చేస్తాయి.

## 5. SDET / Playwright Real-time Example

API response లో user details వచ్చాయని అనుకుందాం.

```
const response = {
    id: 101,
    name: "Satya",
    role: "QA Engineer",
    active: true
};

// Get all keys
console.log(Object.keys(response));

// Get all values
console.log(Object.values(response));

// Check property
console.log(Object.hasOwn(response, "name"));

// Validate API response
const expectedKeys = ["id", "name", "role", "active"];

console.log(
    JSON.stringify(Object.keys(response).sort()) ===
    JSON.stringify(expectedKeys.sort())
);
```

ఇలాంటి object validation API testing లో ఉపయోగపడుతుంది.

## 6. Quick Interview Cheat Sheet

| Interview Question                  | Answer                    |
| ----------------------------------- | ------------------------- |
| Get all object keys?                | `Object.keys()`           |
| Get all values?                     | `Object.values()`         |
| Get keys and values?                | `Object.entries()`        |
| Convert entries to object?          | `Object.fromEntries()`    |
| Merge objects?                      | `Object.assign()`         |
| Prevent all property changes?       | `Object.freeze()`         |
| Prevent adding/deleting properties? | `Object.seal()`           |
| Check property exists?              | `Object.hasOwn()`         |
| Create object with prototype?       | `Object.create()`         |
| Define property rules?              | `Object.defineProperty()` |

## 7. Memory Tricks

- KEYS → Property names
- VALUES → Property values
- ENTRIES → Both
- FROMENTRIES → Array to Object
- ASSIGN → Merge
- FREEZE → Complete lock
- SEAL → Add/Delete lock
- HASOWN → Check property
- CREATE → Create object
- DEFINEPROPERTY → Set property rules

## 8. Mini Interview Test

Object Methods Test

0/5

1\. Which method returns all object keys?

Object.values()

Object.keys()

Object.entries()



2\. Which method prevents adding, deleting and updating properties?

Object.seal()

Object.assign()

Object.freeze()



3\. Which method returns key-value pairs?

Object.entries()

Object.keys()

Object.create()



4\. Can we update an existing property after Object.seal()?

Yes

No



5\. Which method checks an object's own property?

Object.hasOwn()

Object.freeze()

Object.values()



Submit Answers

Next recommended topic: Object Destructuring, Optional Chaining (`?.`), Nullish Coalescing (`??`), and Spread / Rest with Objects. ఇవి modern JavaScript మరియు Playwright TypeScript frameworks లో చాలా ఉపయోగపడతాయి.