## JavaScript Operators – Introduction (తెలుగులో)

### Operators అంటే ఏమిటి?

**Operator** అనేది ఒక **symbol** లేదా **keyword**. ఇది values (operands) పై ఒక operation చేసి ఫలితాన్ని (result) ఇస్తుంది.

**Example:**

```javascript
let x = 10;
let y = 20;

console.log(x + y);
```

**Output:**

```
30
```

ఇక్కడ:

* `+` → Operator
* `10` మరియు `20` → Operands
* `30` → Returned Value (Result)

---

# Operator ఉపయోగించే ముందు తెలుసుకోవాల్సిన విషయాలు

## 1. Operator (Notation & Syntax)

ఏ operator ఎలా వాడాలో తెలుసుకోవాలి.

**Example:**

```javascript
x + y
```

`+` అంటే Addition Operator.

---

## 2. Operands

Operator ఏ values పై పని చేస్తుందో వాటిని Operands అంటారు.

Example

```javascript
10 + 20
```

Operands:

* 10
* 20

---

## 3. Returned Value

Operation చేసిన తర్వాత వచ్చే Result.

Example

```javascript
10 + 20
```

Returned Value = **30**

---

# Types of Operators

## 1. Unary Operator

Unary అంటే **ఒక Operand** మీద మాత్రమే పని చేస్తుంది.

Example

```javascript
typeof "Hello"
```

Output

```
string
```

ఇక్కడ

* Operator → `typeof`
* Operand → `"Hello"`

---

## 2. Binary Operator

Binary అంటే **రెండు Operands** మీద పని చేస్తుంది.

Example

```javascript
10 + 20
```

Output

```
30
```

ఇక్కడ

* Operator → `+`
* Operands → 10,20

---

## 3. Ternary Operator

Ternary అంటే **మూడు భాగాలు** ఉంటాయి.

Syntax

```javascript
condition ? value1 : value2
```

Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output

```
Adult
```

---

# Most Used JavaScript Operators

---

# 1. Assignment Operators

Variable కి value assign చేయడానికి.

Operators

```
=
+=
-=
*=
/=
```

Example

```javascript
let count = 10;

count += 5;

console.log(count);
```

Output

```
15
```

---

# 2. Arithmetic Operators

Math calculations కోసం.

Operators

```
+
-
*
/
%
**
++
--
```

Example

```javascript
10 + 5
```

Output

```
15
```

Example

```javascript
10 % 3
```

Output

```
1
```

Example

```javascript
2 ** 3
```

Output

```
8
```

---

## ++ Increment

```javascript
let i = 1;

i++;

console.log(i);
```

Output

```
2
```

---

## -- Decrement

```javascript
let i = 5;

i--;

console.log(i);
```

Output

```
4
```

---

# 3. Comparison Operators

రెండు values compare చేస్తాయి.

Operators

```
==
===
!=
!==
>
<
>=
<=
```

Example

```javascript
10 > 5
```

Output

```
true
```

---

# Difference Between `==` and `===`

## `==` (Loose Equality)

Value మాత్రమే compare చేస్తుంది.

```javascript
10 == "10"
```

Output

```
true
```

---

## `===` (Strict Equality)

Value + Data Type రెండింటినీ compare చేస్తుంది.

```javascript
10 === "10"
```

Output

```
false
```

---

# 4. Logical Operators

Operators

```
&&
||
!
```

### AND (`&&`)

రెండు conditions true అయితే మాత్రమే true.

```javascript
10 > 5 && 20 > 10
```

Output

```
true
```

---

### OR (`||`)

ఏదైనా ఒకటి true అయితే true.

```javascript
10 > 20 || 20 > 10
```

Output

```
true
```

---

### NOT (`!`)

True ను False గా, False ను True గా మారుస్తుంది.

```javascript
!true
```

Output

```
false
```

---

# 5. String Operator

Strings ని కలపడానికి `+` ఉపయోగిస్తారు.

Example

```javascript
let first = "Hello";

let second = "World";

console.log(first + " " + second);
```

Output

```
Hello World
```

---

# 6. Ternary Operator

Short if-else.

```javascript
let age = 18;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);
```

Output

```
Eligible
```

---

# 7. Unary Operators

### typeof

```javascript
typeof 100
```

Output

```
number
```

---

### delete

Object property తొలగిస్తుంది.

```javascript
let person = {
    name: "Ajay",
    age: 25
};

delete person.age;

console.log(person);
```

Output

```javascript
{
 name: "Ajay"
}
```

---

### void

Expression ను evaluate చేసి ఎప్పుడూ `undefined` return చేస్తుంది.

```javascript
void(5)
```

Output

```
undefined
```

---

# 8. Relational Operators

## `in`

Property object లో ఉందా అని check చేస్తుంది.

```javascript
let person = {
    name: "Ajay"
};

console.log("name" in person);
```

Output

```
true
```

---

## `instanceof`

Object ఏ class కి చెందినదో check చేస్తుంది.

```javascript
let arr = [];

console.log(arr instanceof Array);
```

Output

```
true
```

---

# 9. Comma Operator

ఒకే statement లో multiple expressions execute చేయడానికి ఉపయోగిస్తారు.

```javascript
let a = (1, 2, 3);

console.log(a);
```

Output

```
3
```

చివరి expression విలువనే return చేస్తుంది.

---

# 10. Bitwise Operators

Binary bits మీద operations చేస్తాయి.

Operators

```
&
|
^
~
<<
>>
>>>
```

ఇవి low-level programming లేదా performance-related operations లో ఎక్కువగా ఉపయోగిస్తారు.

---

# Interview Tip – Strict Equality (`===`)

**ఎప్పుడూ `===` (Strict Equality) ఉపయోగించడం మంచిది.**

**Reason:**

* `==` value మాత్రమే compare చేస్తుంది మరియు type conversion (type coercion) చేస్తుంది.
* `===` value మరియు data type రెండింటినీ compare చేస్తుంది, కాబట్టి unexpected results రావు.

**Example:**

```javascript
10 == "10"     // true
10 === "10"    // false
```

---

## Interview Summary (Easy to Remember)

* **Unary** → 1 Operand (`typeof x`)
* **Binary** → 2 Operands (`x + y`)
* **Ternary** → 3 Parts (`condition ? value1 : value2`)
* **Assignment** → `=`, `+=`, `-=`
* **Arithmetic** → `+`, `-`, `*`, `/`, `%`, `**`
* **Comparison** → `==`, `===`, `!=`, `!==`
* **Logical** → `&&`, `||`, `!`
* **String** → `+`
* **Relational** → `in`, `instanceof`
* **Unary** → `typeof`, `delete`, `void`
* **Best Practice** → Use `===` instead of `==` whenever possible.
# JavaScript Operators – Introduction and Types

## What is an Operator?

An **operator** is a symbol or keyword that performs an operation on one or more values (operands) and returns a result.

**Example:**

```javascript
let x = 10;
let y = 20;

console.log(x + y);
```

**Output:**

```
30
```

Here:

* `+` → Operator
* `10` and `20` → Operands
* `30` → Returned Value (Result)

---

# Key Things to Know When Using an Operator

## 1. Operator (Notation & Syntax)

Understand how an operator is written and used.

Example:

```javascript
x + y
```

Here, `+` is the addition operator.

---

## 2. Operands

Operands are the values or variables on which an operator performs an operation.

Example:

```javascript
10 + 20
```

Operands:

* 10
* 20

---

## 3. Returned Value

The value produced after the operation is called the returned value (result).

Example:

```javascript
10 + 20
```

Returned value:

```
30
```

---

# Types of Operators

## 1. Unary Operator

A **Unary Operator** works with **one operand**.

Example:

```javascript
typeof "Hello"
```

Output:

```
string
```

Here:

* Operator → `typeof`
* Operand → `"Hello"`

---

## 2. Binary Operator

A **Binary Operator** works with **two operands**.

Example:

```javascript
10 + 20
```

Output:

```
30
```

Here:

* Operator → `+`
* Operands → `10` and `20`

---

## 3. Ternary Operator

A **Ternary Operator** works with **three parts**.

Syntax:

```javascript
condition ? value1 : value2
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```
Adult
```

---

# Most Common JavaScript Operators

## 1. Assignment Operators

Used to assign values to variables.

Operators:

```
=
+=
-=
*=
/=
%=
```

Example:

```javascript
let count = 10;

count += 5;

console.log(count);
```

Output:

```
15
```

---

## 2. Arithmetic Operators

Used for mathematical calculations.

Operators:

```
+
-
*
/
%
**
++
--
```

Example:

```javascript
10 + 5
```

Output:

```
15
```

Example:

```javascript
10 % 3
```

Output:

```
1
```

Example:

```javascript
2 ** 3
```

Output:

```
8
```

### Increment (++)

```javascript
let i = 1;

i++;

console.log(i);
```

Output:

```
2
```

### Decrement (--)

```javascript
let i = 5;

i--;

console.log(i);
```

Output:

```
4
```

---

## 3. Comparison Operators

Used to compare two values.

Operators:

```
==
===
!=
!==
>
<
>=
<=
```

Example:

```javascript
10 > 5
```

Output:

```
true
```

### Difference Between `==` and `===`

### `==` (Loose Equality)

Compares only values (allows type conversion).

```javascript
10 == "10"
```

Output:

```
true
```

### `===` (Strict Equality)

Compares both value and data type.

```javascript
10 === "10"
```

Output:

```
false
```

**Interview Tip:** Always prefer `===` over `==`.

---

## 4. Logical Operators

Operators:

```
&&
||
!
```

### AND (`&&`)

Returns `true` only if **both conditions are true**.

```javascript
10 > 5 && 20 > 10
```

Output:

```
true
```

### OR (`||`)

Returns `true` if **at least one condition is true**.

```javascript
10 > 20 || 20 > 10
```

Output:

```
true
```

### NOT (`!`)

Reverses the Boolean value.

```javascript
!true
```

Output:

```
false
```

---

## 5. String Operator

The `+` operator is used to concatenate strings.

Example:

```javascript
let first = "Hello";
let second = "World";

console.log(first + " " + second);
```

Output:

```
Hello World
```

---

## 6. Ternary Operator

A shorthand for `if...else`.

```javascript
let age = 18;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);
```

Output:

```
Eligible
```

---

## 7. Unary Operators

### `typeof`

Returns the data type.

```javascript
typeof 100
```

Output:

```
number
```

### `delete`

Deletes an object property.

```javascript
let person = {
    name: "Ajay",
    age: 25
};

delete person.age;

console.log(person);
```

Output:

```javascript
{
  name: "Ajay"
}
```

### `void`

Evaluates an expression and always returns `undefined`.

```javascript
void(5)
```

Output:

```
undefined
```

---

## 8. Relational Operators

### `in`

Checks whether a property exists in an object.

```javascript
let person = {
    name: "Ajay"
};

console.log("name" in person);
```

Output:

```
true
```

### `instanceof`

Checks whether an object belongs to a specific class or constructor.

```javascript
let arr = [];

console.log(arr instanceof Array);
```

Output:

```
true
```

---

## 9. Comma Operator

Executes multiple expressions and returns the **last expression's value**.

```javascript
let a = (1, 2, 3);

console.log(a);
```

Output:

```
3
```

---

## 10. Bitwise Operators

Used for operations on binary (bit-level) values.

Operators:

```
&
|
^
~
<<
>>
>>>
```

These are commonly used in low-level programming and performance-critical applications.

---

# Interview Summary

| Operator Type | Purpose              | Example                    |               |       |
| ------------- | -------------------- | -------------------------- | ------------- | ----- |
| Assignment    | Assign values        | `=` `+=`                   |               |       |
| Arithmetic    | Math operations      | `+` `-` `*` `/`            |               |       |
| Comparison    | Compare values       | `==` `===` `>`             |               |       |
| Logical       | Combine conditions   | `&&` `                     |               | ` `!` |
| String        | Concatenate strings  | `+`                        |               |       |
| Ternary       | Short `if...else`    | `condition ? a : b`        |               |       |
| Unary         | One operand          | `typeof`, `delete`, `void` |               |       |
| Relational    | Check relationships  | `in`, `instanceof`         |               |       |
| Comma         | Multiple expressions | `(a, b, c)`                |               |       |
| Bitwise       | Binary operations    | `&`, `                     | `, `<<`, `>>` |       |

### Important Interview Points

* **Unary Operator** → Works with **1 operand** (`typeof x`)
* **Binary Operator** → Works with **2 operands** (`x + y`)
* **Ternary Operator** → Works with **3 parts** (`condition ? value1 : value2`)
* **Use `===` (Strict Equality)** instead of `==` because it compares both **value and data type**.
* The **`typeof`** operator returns the data type as a lowercase string.
* The **`+`** operator is used for both **addition** and **string concatenation**.
