# JavaScript – Basic Array Methods (Cheat Sheet)

JavaScript Arrays are very important for SDET / Playwright coding interviews. Let's learn all 16 methods with Telugu explanations, syntax, examples and a quick revision cheat sheet.

## 1. Array methods – Part 1

### 1. `length`

Array లో ఎన్ని elements ఉన్నాయో తెలుసుకోవడానికి ఉపయోగిస్తాం.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3
```

### 2. `toString()`

Array elements అన్నింటినీ comma-separated string గా మారుస్తుంది.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.toString());
// Apple,Banana,Mango
```

### 3. `at()`

Index ఆధారంగా element తీసుకోవడానికి ఉపయోగిస్తాం. Negative index కూడా support చేస్తుంది.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(0));  // Apple
console.log(fruits.at(-1)); // Mango
```

### 4. `join()`

Array elements మధ్య మనకు కావాల్సిన separator పెట్టి string గా మారుస్తుంది.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(" - "));
// Apple - Banana - Mango
```

### 5. `pop()`

Array చివరి element ను remove చేస్తుంది.

```
let numbers = [10, 20, 30, 40];

let result = numbers.pop();

console.log(result);  // 40
console.log(numbers); // [10, 20, 30]
```

### 6. `push()`

Array చివర కొత్త element add చేస్తుంది.

```
let numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
// [10, 20, 30, 40]
```

### 7. `shift()`

Array మొదటి element ను remove చేస్తుంది.

```
let numbers = [10, 20, 30];

numbers.shift();

console.log(numbers);
// [20, 30]
```

### 8. `unshift()`

Array మొదట కొత్త element add చేస్తుంది.

```
let numbers = [20, 30];

numbers.unshift(10);

console.log(numbers);
// [10, 20, 30]
```

## 2. Array methods – Part 2

### 9. `Array.isArray()`

ఒక variable Array అవునా కాదా అని check చేస్తుంది.

```
let fruits = ["Apple", "Banana"];
let name = "Satya";

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(name));   // false
```

### 10. `delete`

Array లో ఒక particular index element ను delete చేస్తుంది.

```
let numbers = [10, 20, 30];

delete numbers[1];

console.log(numbers);
// [10, empty, 30]

console.log(numbers.length); // 3
```

Important: `delete` చేస్తే element మాత్రమే తొలగుతుంది. Array length మారదు. అందుకే సాధారణంగా element remove చేయడానికి `splice()` ఉపయోగించడం మంచిది.

### 11. `concat()`

రెండు లేదా అంతకంటే ఎక్కువ arrays ను కలుపుతుంది.

```
let a = [10, 20];
let b = [30, 40];

let result = a.concat(b);

console.log(result);
// [10, 20, 30, 40]
```

### 12. `copyWithin()`

Array లోని elements ను అదే Array లో మరో position కి copy చేస్తుంది.

Syntax:

```
array.copyWithin(target, start, end);
```

Example:

```
let numbers = [10, 20, 30, 40, 50];

numbers.copyWithin(0, 3);

console.log(numbers);
// [40, 50, 30, 40, 50]
```

- `target = 0` → Copy చేయాల్సిన destination.
- `start = 3` → Copy ఎక్కడి నుంచి మొదలవ్వాలి.
- `end` → End index (exclusive).

### 13. `flat()`

Nested arrays ను ఒక single-level array గా మారుస్తుంది.

```
let numbers = [10, [20, 30], [40, 50]];

console.log(numbers.flat());
// [10, 20, 30, 40, 50]
```

Deep nested arrays కోసం:

```
let arr = [10, [20, [30, 40]]];

console.log(arr.flat(2));
// [10, 20, 30, 40]
```

### 14. `slice()`

Array లోని కొంత భాగాన్ని తీసుకుని కొత్త Array ఇస్తుంది. Original Array మారదు.

Syntax:

```
array.slice(start, end);
```

```
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);  // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]
```

### 15. `splice()`

Array లో elements add, remove లేదా replace చేయవచ్చు. Original Array మారుతుంది.

Syntax:

```
array.splice(start, deleteCount, item1, item2);
```

Remove:

```
let numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers);
// [10, 40]
```

Add:

```
let numbers = [10, 30, 40];

numbers.splice(1, 0, 20);

console.log(numbers);
// [10, 20, 30, 40]
```

Replace:

```
let numbers = [10, 20, 30];

numbers.splice(1, 1, 99);

console.log(numbers);
// [10, 99, 30]
```

### 16. `toSpliced()`

ఇది `splice()` లాంటిదే. కానీ Original Array ను మార్చదు. కొత్త Array return చేస్తుంది.

```
let numbers = [10, 20, 30, 40];

let result = numbers.toSpliced(1, 2);

console.log(result);  // [10, 40]
console.log(numbers); // [10, 20, 30, 40]
```



Important for interviews

`toSpliced()` is a non-mutating alternative to `splice()`. It is supported in modern JavaScript runtimes.



## 3. Quick Revision – Array Methods Cheat Sheet

ఈ table interview ముందు quick revision కి ఉపయోగపడుతుంది.

| Method         | Purpose                | Original Array changes?  |
| -------------- | ---------------------- | ------------------------ |
| `length`       | Count elements         | No                       |
| `toString()`   | Convert to string      | No                       |
| `at()`         | Get element by index   | No                       |
| `join()`       | Join with separator    | No                       |
| `pop()`        | Remove last            | Yes                      |
| `push()`       | Add at end             | Yes                      |
| `shift()`      | Remove first           | Yes                      |
| `unshift()`    | Add at beginning       | Yes                      |
| `isArray()`    | Check Array type       | No                       |
| `delete`       | Delete indexed value   | Yes (creates empty slot) |
| `concat()`     | Combine arrays         | No                       |
| `copyWithin()` | Copy within same array | Yes                      |
| `flat()`       | Flatten nested array   | No                       |
| `slice()`      | Extract elements       | No                       |
| `splice()`     | Add / Remove / Replace | Yes                      |
| `toSpliced()`  | Non-mutating splice    | No                       |

## 4. Most Important Interview Difference

push vs pop

- `push()` → Add at end.
- `pop()` → Remove from end.

shift vs unshift

- `shift()` → Remove from beginning.
- `unshift()` → Add at beginning.

slice vs splice

- `slice()` → Extract elements; original unchanged.
- `splice()` → Add / Remove / Replace; original changed.

splice vs toSpliced

- `splice()` → Modifies original.
- `toSpliced()` → Returns a new array.

## 5. Playwright Real-time Example

Suppose API response లో users list వస్తుంది. మనం active users మాత్రమే తీసుకోవాలి.

```
const users = [
    { name: "Satya", active: true },
    { name: "Ravi", active: false },
    { name: "Kiran", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

Output: Satya and Kiran మాత్రమే వస్తారు.

## 6. Practice Questions

Array Methods – Mini Test

0/5 answered

1\. Which method adds an element at the end?

pop()

push()

shift()

slice()



2\. Which method removes the first element?

pop()

unshift()

shift()

splice()



3\. Which method does NOT modify the original array?

splice()

push()

slice()

pop()



4\. What is the output of [10,20,30].at(-1)?

10

20

30

undefined



5\. What happens when you use delete arr[1]?

Length decreases

An empty slot is created

Entire array is deleted

Element shifts left



Submit answers

Next topic: Advanced Array Methods – `map()`, `filter()`, `find()`, `findIndex()`, `reduce()`, `some()`, `every()`, `forEach()`.

ఇవి Playwright SDET coding interviews లో చాలా ముఖ్యమైనవి.