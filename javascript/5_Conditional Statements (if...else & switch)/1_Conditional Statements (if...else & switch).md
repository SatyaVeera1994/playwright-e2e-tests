# JavaScript Conditional Statements (if...else & switch) – తెలుగు వివరణ

## Conditional Statements అంటే ఏమిటి?

**Conditional Statements** అంటే ఒక **condition (షరతు)** ఆధారంగా ఏ code execute చేయాలో నిర్ణయించే statements.

ఉదాహరణకు:

* మార్కులు 35 కంటే ఎక్కువ అయితే **Pass**.
* లేకపోతే **Fail**.

ఇలాంటి నిర్ణయాల కోసం `if...else` మరియు `switch` ఉపయోగిస్తారు.

---

# 1. if Statement

### Syntax

```javascript
if (condition) {
    // code
}
```

### Example

```javascript
let marks = 80;

if (marks >= 35) {
    console.log("PASS");
}
```

### Output

```
PASS
```

**తెలుగులో:**

* `marks >= 35` true అయితే మాత్రమే `PASS` print అవుతుంది.

---

# 2. if...else Statement

### Syntax

```javascript
if (condition) {
    // true block
} else {
    // false block
}
```

### Example

```javascript
let marks = 25;

if (marks >= 35) {
    console.log("PASS");
} else {
    console.log("FAIL");
}
```

### Output

```
FAIL
```

---

# 3. if...else if...else

ఒకటి కంటే ఎక్కువ conditions ఉన్నప్పుడు ఉపయోగిస్తారు.

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 75) {
    console.log("B Grade");
} else {
    console.log("C Grade");
}
```

Output

```
B Grade
```

---

# Example 1

```javascript
if (status = "PASS") {

}
```

## ఇది ఎలా చదవాలి?

**status కి "PASS" value assign చేయి.**

ఇక్కడ `=` అనేది **Assignment Operator**.

ఇది comparison కాదు.

```javascript
status = "PASS";
```

అంటే

```
status అనే variable లో PASS ని store చేయి.
```

**Interview Point**

`if(status = "PASS")`

❌ ఇది తప్పు.

ఎందుకంటే `=` Assignment Operator.

---

# Example 2

```javascript
if (status == "PASS") {

}
```

## ఎలా చదవాలి?

**status value PASS కి equal ఉందా?**

`==`

దీనిని **Loose Equality Operator** అంటారు.

Value మాత్రమే compare చేస్తుంది.

Example

```javascript
10 == "10"
```

Output

```
true
```

ఎందుకంటే JavaScript type conversion చేస్తుంది.

---

# Example 3

```javascript
if (status === "PASS") {

}
```

## ఎలా చదవాలి?

**status value మరియు datatype రెండూ PASS కి equal ఉన్నాయా?**

`===`

దీనిని **Strict Equality Operator** అంటారు.

Value + Datatype రెండింటినీ compare చేస్తుంది.

Example

```javascript
10 === "10"
```

Output

```
false
```

ఎందుకంటే

* 10 → Number
* "10" → String

Datatype వేరు.

---

# Difference Between =, ==, ===

| Operator | Meaning         | Example       | Result        |
| -------- | --------------- | ------------- | ------------- |
| `=`      | Assignment      | `x = 10`      | Assigns value |
| `==`     | Loose Equality  | `10 == "10"`  | `true`        |
| `===`    | Strict Equality | `10 === "10"` | `false`       |

---

# switch Statement

ఒక variable కి ఉన్న value ఆధారంగా different cases execute చేయడానికి `switch` ఉపయోగిస్తారు.

### Syntax

```javascript
switch(expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

### Example

```javascript
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

### Output

```
Tuesday
```

---

## Why do we use `break`?

`break` లేకపోతే తరువాత ఉన్న అన్ని `case`లు కూడా execute అవుతాయి.

Example

```javascript
let day = 1;

switch(day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");
}
```

Output

```
Monday
Tuesday
```

కాబట్టి ప్రతి `case` చివర `break` వాడటం మంచిది.

---

# Interview Tips

### Read these correctly:

```javascript
if(status = "PASS")
```

👉 **Assign "PASS" to status.** (Assignment)

```javascript
if(status == "PASS")
```

👉 **Compare only the value.** (Loose Equality)

```javascript
if(status === "PASS")
```

👉 **Compare both value and data type.** (Strict Equality)

---

# Easy Interview Answer

> **Conditional statements** are used to execute different blocks of code based on a condition. JavaScript provides `if`, `if...else`, `if...else if`, and `switch` statements. We should use `===` (strict equality) instead of `==` because it compares both the value and the data type, making the comparison more reliable.


# JavaScript Conditional Statements (if...else & switch)

## What are Conditional Statements?

**Conditional statements** are used to make decisions in a program. They execute different blocks of code depending on whether a condition is **true** or **false**.

**Example:**

* If marks are greater than or equal to 35 → **PASS**
* Otherwise → **FAIL**

JavaScript provides:

* `if`
* `if...else`
* `if...else if`
* `switch`

---

# 1. if Statement

### Syntax

```javascript
if (condition) {
    // code to execute if condition is true
}
```

### Example

```javascript
let marks = 80;

if (marks >= 35) {
    console.log("PASS");
}
```

**Output**

```
PASS
```

**Explanation:**

* If the condition `marks >= 35` is true, the code inside the `if` block executes.

---

# 2. if...else Statement

### Syntax

```javascript
if (condition) {
    // Executes when condition is true
} else {
    // Executes when condition is false
}
```

### Example

```javascript
let marks = 25;

if (marks >= 35) {
    console.log("PASS");
} else {
    console.log("FAIL");
}
```

**Output**

```
FAIL
```

**Explanation:**

* If the condition is true, the `if` block executes.
* Otherwise, the `else` block executes.

---

# 3. if...else if...else Statement

Used when you have multiple conditions.

### Example

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 75) {
    console.log("B Grade");
} else {
    console.log("C Grade");
}
```

**Output**

```
B Grade
```

---

# Example 1

```javascript
if (status = "PASS") {

}
```

### How do you read this?

> **Assign "PASS" to the variable `status`.**

The `=` symbol is the **Assignment Operator**.

It **assigns** a value to a variable; it does **not compare** values.

```javascript
status = "PASS";
```

means:

> Store the value `"PASS"` in the variable `status`.

**Interview Point:**

```javascript
if (status = "PASS")
```

❌ This is usually a mistake because it assigns a value instead of comparing it.

---

# Example 2

```javascript
if (status == "PASS") {

}
```

### How do you read this?

> **Is the value of `status` equal to `"PASS"`?**

The `==` operator is called the **Loose Equality Operator**.

It compares **only the values** and performs **type conversion (type coercion)** if needed.

### Example

```javascript
10 == "10"
```

**Output**

```
true
```

Because JavaScript converts the string `"10"` to the number `10` before comparing.

---

# Example 3

```javascript
if (status === "PASS") {

}
```

### How do you read this?

> **Is the value of `status` exactly equal to `"PASS"` (both value and data type)?**

The `===` operator is called the **Strict Equality Operator**.

It compares:

* Value
* Data Type

### Example

```javascript
10 === "10"
```

**Output**

```
false
```

Because:

* `10` is a **Number**
* `"10"` is a **String**

The data types are different.

---

# Difference Between `=`, `==`, and `===`

| Operator | Name                | Purpose                      | Example       | Result            |
| -------- | ------------------- | ---------------------------- | ------------- | ----------------- |
| `=`      | Assignment Operator | Assigns a value              | `x = 10`      | Assigns 10 to `x` |
| `==`     | Loose Equality      | Compares values only         | `10 == "10"`  | `true`            |
| `===`    | Strict Equality     | Compares value and data type | `10 === "10"` | `false`           |

---

# switch Statement

The `switch` statement is used when you need to compare one variable against multiple possible values.

### Syntax

```javascript
switch (expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

### Example

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

**Output**

```
Tuesday
```

---

# Why Do We Use `break`?

The `break` statement stops the execution after the matching case.

Without `break`, execution continues to the next cases.

### Example

```javascript
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");
}
```

**Output**

```
Monday
Tuesday
```

This is called **fall-through**.

---

# Interview Tips

### Read these statements correctly:

```javascript
if (status = "PASS")
```

**Read as:**

> Assign `"PASS"` to `status`.

---

```javascript
if (status == "PASS")
```

**Read as:**

> Compare the value of `status` with `"PASS"`.

---

```javascript
if (status === "PASS")
```

**Read as:**

> Compare both the value and the data type of `status` with `"PASS"`.

---

# Best Practice

✅ Always use **`===` (Strict Equality)** instead of `==` because it compares both the **value** and the **data type**, making your code more reliable and avoiding unexpected type conversions.

---

# Interview Summary

* **Conditional statements** are used to make decisions in JavaScript.
* `if` executes code when a condition is **true**.
* `if...else` executes one block for **true** and another for **false**.
* `if...else if...else` is used for multiple conditions.
* `switch` is used to check one expression against multiple possible values.
* `=` is used for **assignment**.
* `==` compares **values only** (loose equality).
* `===` compares **both value and data type** (strict equality) and is the recommended operator in modern JavaScript.
