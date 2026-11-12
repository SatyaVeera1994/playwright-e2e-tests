# JavaScript Array Methods – Interview Cheat Sheet



## 1. Basic Array Methods – Quick Memory Table

| Method         | Easy meaning               | Remember      |
| -------------- | -------------------------- | ------------- |
| `length`       | Count elements             | How many?     |
| `toString()`   | Array → String             | Convert       |
| `at()`         | Get element by index       | Position      |
| `join()`       | Join elements              | Separator     |
| `push()`       | Add last element           | Add End       |
| `pop()`        | Remove last element        | Remove End    |
| `unshift()`    | Add first element          | Add Start     |
| `shift()`      | Remove first element       | Remove Start  |
| `isArray()`    | Check array or not         | True / False  |
| `delete`       | Delete an element          | Empty slot    |
| `concat()`     | Combine arrays             | Merge         |
| `copyWithin()` | Copy inside same array     | Internal Copy |
| `flat()`       | Remove nested array levels | Flatten       |
| `slice()`      | Extract array elements     | Copy          |
| `splice()`     | Add / Remove / Replace     | Modify        |
| `toSpliced()`  | Non-mutating splice        | New Array     |

## 2. One-Line Syntax Cheat Sheet

```
let arr = [10, 20, 30, 40];

// 1. Count
arr.length;

// 2. Convert to string
arr.toString();

// 3. Get element
arr.at(-1);

// 4. Join elements
arr.join("-");

// 5. Remove last
arr.pop();

// 6. Add last
arr.push(50);

// 7. Remove first
arr.shift();

// 8. Add first
arr.unshift(5);

// 9. Check array
Array.isArray(arr);

// 10. Delete element
delete arr[1];

// 11. Merge arrays
arr.concat([50, 60]);

// 12. Copy within array
arr.copyWithin(0, 2);

// 13. Flatten array
[10, [20, 30]].flat();

// 14. Extract elements
arr.slice(1, 3);

// 15. Add / Remove / Replace
arr.splice(1, 2, 99);

// 16. Non-mutating splice
arr.toSpliced(1, 2, 99);
```

## 3. Most Important Interview Differences

1\. push() vs pop()

```
let a = [10, 20];
a.push(30); // [10, 20, 30]
a.pop();    // [10, 20]
```

Remember: Push = Add, Pop = Remove.

2\. shift() vs unshift()

```
let a = [20, 30];
a.unshift(10); // [10, 20, 30]
a.shift();     // [20, 30]
```

Remember: Shift = Remove First, Unshift = Add First.

3\. slice() vs splice()

```
let a = [10, 20, 30, 40];

a.slice(1, 3);  // [20, 30]
a.splice(1, 2); // removes 20, 30
```

Remember: Slice = Extract, Splice = Modify.

4\. splice() vs toSpliced()

- `splice()` → Original array changes.
- `toSpliced()` → Original array does not change.

## 4. Mutating vs Non-Mutating Methods

Interview Important

| Modifies original array | Does not modify original array |
| ----------------------- | ------------------------------ |
| push()                  | slice()                        |
| pop()                   | concat()                       |
| shift()                 | flat()                         |
| unshift()               | toString()                     |
| splice()                | join()                         |
| copyWithin()            | toSpliced()                    |
| delete                  | at()                           |

## 5. Interview Questions – Short Answers

| Interview question                     | Answer            |
| -------------------------------------- | ----------------- |
| How to find array length?              | `arr.length`      |
| How to add at the end?                 | `push()`          |
| How to remove at the end?              | `pop()`           |
| How to add at beginning?               | `unshift()`       |
| How to remove at beginning?            | `shift()`         |
| How to merge arrays?                   | `concat()`        |
| How to check array?                    | `Array.isArray()` |
| How to get last element?               | `arr.at(-1)`      |
| How to extract elements?               | `slice()`         |
| How to remove elements?                | `splice()`        |
| How to flatten nested arrays?          | `flat()`          |
| How to avoid modifying original array? | `toSpliced()`     |

## 6. Memory Tricks

Remember these 8 keywords:

- PUSH → Add Last
- POP → Remove Last
- UNSHIFT → Add First
- SHIFT → Remove First
- SLICE → Extract
- SPLICE → Modify
- FLAT → Flatten
- CONCAT → Combine

## 7. Five Coding Questions for SDET Interviews

Try to solve these without looking at the answers.

1. Add `50` at the end of `[10,20,30,40]`.
2. Remove the first element from `[10,20,30]`.
3. Reverse the third word in `"Keep Moving Forward in Your Life"`.
4. Remove `30` from `[10,20,30,40]` using `splice()`.
5. Merge `[1,2,3]` and `[4,5,6]`.

My suggestion: First memorize the 16 methods, then practise coding questions. Next learn `map()`, `filter()`, `find()`, `reduce()`, `some()` and `every()` – these are especially useful in Playwright API response validation.