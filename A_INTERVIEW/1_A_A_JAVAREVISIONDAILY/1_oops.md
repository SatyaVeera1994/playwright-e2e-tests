# JavaScript OOPS Concepts – Complete Interview Preparation

JavaScript OOPS అంటే Object-Oriented Programming System.

OOPS లో 4 important pillars ఉంటాయి:

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

1️⃣ Abstraction

Abstraction means hiding implementation details and showing only essential functionality to the user.

Telugu Explanation:

Abstraction అంటే internal implementation ఎలా జరుగుతుందో hide చేసి, user కి అవసరమైన functionality మాత్రమే చూపించడం

2️⃣ Encapsulation

Encapsulation means wrapping data and methods into a single unit and restricting direct access to data.

Telugu Explanation:

Data మరియు methods ని ఒకే class లో combine చేయడాన్ని Encapsulation అంటారు.

అలాగే data ని direct గా access చేయకుండా protect చేయవచ్చు

3️⃣ Inheritance

Inheritance allows one class to acquire properties and methods from another class.

Telugu Explanation:

ఒక class యొక్క properties మరియు methods ని ఇంకొక class reuse చేసుకోవడాన్ని Inheritance అంటారు.

4️⃣ Polymorphism

Polymorphism means one name with many forms.

Telugu Explanation:

Polymorphism అంటే ఒకే method name different situations లో different behavior ఇవ్వడం.

## 1. Introduction to OOPS

English Definition:

OOPS is a programming approach based on objects and classes. It helps us write reusable, maintainable, and organized code.

Telugu Explanation:

OOPS అంటే మన code ని Classes మరియు Objects రూపంలో organize చేయడం.

దీనివల్ల:

- Code reuse చేయవచ్చు.
- Code maintain చేయడం easy.
- Duplicate code తగ్గుతుంది.
- Application structured గా ఉంటుంది.

## What is an Object in JavaScript?

"An object in JavaScript is a collection of key-value pairs. It is used to store related data and functions in a single variable. We can access object properties using dot notation or bracket notation."

Simple ga cheppalante, object ante one entity ki related information ni store cheyadam.

### Object in Playwright – Real-time example

In Playwright, we commonly use objects to store test data.

```
const loginData = {
    username: "admin",
    password: "admin123",
    url: "https://example.com"
};

await page.goto(loginData.url);

await page.locator("#username").fill(loginData.username);

await page.locator("#password").fill(loginData.password);
```

### What is a Class?

"A class is a blueprint for creating objects. It contains properties and methods. We use the constructor to initialize object properties and the new keyword to create objects."

Class = Blueprint (Design)
Object = Real instance created using that blueprint.

Telugu: Class అంటే ఒక blueprint. దాని ఆధారంగా మనం objects create చేస్తాం.

```
class Car {
    start() {
        console.log("Car started");
    }
}

let myCar = new Car();

myCar.start();
```

Output:

```
Car started
```

Explanation:

- `class Car` → Car అనే class create చేశాం.
- `start()` → Method.
- `new Car()` → Object create చేశాం.
- `myCar.start()` → Method call చేశాం.

### What is an Object?

English: An object is an instance of a class.

Telugu: Class ఆధారంగా create చేసిన instance ని Object అంటారు.

```
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new Student("Satya", 25);

console.log(student1.name);
console.log(student1.age);
```

Output:

```
Satya
25
```

# 2. Four Pillars of OOPS

## 1️⃣ Abstraction

Important interview question

English Definition:

Abstraction means hiding implementation details and showing only essential functionality to the user.

Telugu Explanation:

Abstraction అంటే internal implementation ఎలా జరుగుతుందో hide చేసి, user కి అవసరమైన functionality మాత్రమే చూపించడం.

### Real-time Example

[Are keyless cars such a great idea? | Antwis Engineering](https://images.openai.com/static-rsc-4/Mvq8EsIWcvXF6wTr-Q7483Satug3V_qrNUH3sgSWb6VWhL2MSdk17x1FqqI4Ez2C7LhXDAn5q-DzVjb5Djvkdc2PTDSCk56CVCQ736craswfqwdgZAaF9oM19XVwtbvLabn81iDIIK4dGRe_FdcF57LvakrDSgBMfn-Nxqx3PRY?purpose=inline)

[antwisengineering.net](https://antwisengineering.net/blog/are-keyless-cars-a-great-idea/?utm_source=chatgpt.com)

మనము car start button press చేస్తాము.

- మనకు car start అవుతుంది.
- Engine internally ఎలా పని చేస్తుంది అనేది మనకు తెలియాల్సిన అవసరం లేదు.
- Internal implementation hidden గా ఉంటుంది.

ఇదే Abstraction.

### JavaScript Code

JavaScript లో direct `abstract class` keyword లేదు. కానీ abstract-like behavior ని సాధారణ classes ద్వారా implement చేయవచ్చు.

```
class Car {
    start() {
        console.log("Car started");
        this.#engineStart();
    }

    #engineStart() {
        console.log("Engine started internally");
    }
}

let car = new Car();

car.start();
```

Output:

```
Car started
Engine started internally
```

Here:

- `start()` → User access చేయగల method.
- `#engineStart()` → Private method. Outside నుంచి access చేయలేము.

Interview Answer – English:

"Abstraction is the process of hiding internal implementation details and showing only essential functionality to the user. For example, when we start a car, we don't need to know how the engine works internally."

Telugu Interview Answer:

Internal implementation hide చేసి, user కి required functionality మాత్రమే చూపించడాన్ని Abstraction అంటారు.

## 2️⃣ Encapsulation

Important interview question

English Definition:

Encapsulation means wrapping data and methods into a single unit and restricting direct access to data.

Telugu Explanation:

Data మరియు methods ని ఒకే class లో combine చేయడాన్ని Encapsulation అంటారు.

అలాగే data ని direct గా access చేయకుండా protect చేయవచ్చు.

### Real-time Example

[AGS Transact Technologies moves half of its ATMs back to banks](https://images.openai.com/static-rsc-4/K1UghAVMxscupCRTBCOA_pKUCOIYgvMcSd4OSDemOD13d25uJ8rbiwK7NOboF07bvs3nbkgiKu9VdPdYWs3kEEYLqamffH5h9byf4A_3U7nyI3l6Nz9QmUjib61BJhj1vHxkDa1RjFMDt1-Xa07y8NYEKMXQOuPkBGE81NIgJQc?purpose=inline)

[moneycontrol.com](https://www.moneycontrol.com/news/business/companies/ags-transact-technologies-moves-half-of-its-atms-back-to-banks-12962398.html?utm_source=chatgpt.com)

ATM Example:

- మనం PIN enter చేస్తాము.
- Account balance check చేస్తాము.
- Money withdraw చేస్తాము.
- కానీ bank internal account data ని direct గా modify చేయలేము.

### JavaScript Code

```
class BankAccount {

    #balance = 10000;

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
}

let account = new BankAccount();

console.log(account.getBalance());

account.deposit(5000);

console.log(account.getBalance());
```

Output:

```
10000
15000
```

### Explanation

- `#balance` → Private variable.
- `getBalance()` → Balance చూడటానికి.
- `deposit()` → Money deposit చేయడానికి.
- `account.#balance` → Outside నుంచి access చేయలేము.

Interview Answer – English:

"Encapsulation is the process of wrapping data and methods into a single unit and protecting data from direct access. In JavaScript, we can use private fields to achieve encapsulation."

Telugu:

Data మరియు methods ని ఒకే class లో ఉంచి, data ని direct access చేయకుండా protect చేయడాన్ని Encapsulation అంటారు.

## 3️⃣ Inheritance

Very common interview question

English Definition:

Inheritance allows one class to acquire properties and methods from another class.

Telugu Explanation:

ఒక class యొక్క properties మరియు methods ని ఇంకొక class reuse చేసుకోవడాన్ని Inheritance అంటారు.

### Real-time Example

[Family With One Son Standing And Holding Hands Together.](https://images.openai.com/static-rsc-4/W6hJ4-Cbp45ZoCO8oaiA_rLeosaBZ7t1d1P1CrMBHTsdHpl-GLOnUJ-5JYmmse3U-DQvsYkZemk-Pg02mg27OKAdmOeh8yutOWlRelry1R1-XT0qkTEq1PKRNPnS8uK1mDyBOPBZTzxDEM_qgDw0YEH2J76C2F22ItQ44PlsV6rbjKKl9PhdPUozug1DIbTv?purpose=inline)

Parent → Child

Child కొన్ని properties మరియు characteristics ని Parent నుంచి పొందుతుంది.

### JavaScript Code

```
class Parent {

    house() {
        console.log("Parent has a house");
    }
}

class Child extends Parent {

    bike() {
        console.log("Child has a bike");
    }
}

let obj = new Child();

obj.house();
obj.bike();
```

Output:

```
Parent has a house
Child has a bike
```

### Explanation

- `Parent` → Parent class.
- `Child` → Child class.
- `extends` → Parent class నుంచి inherit చేసుకోవడానికి.
- `new Child()` → Child object create చేశాం.
- `obj.house()` → Parent method access చేశాం.
- `obj.bike()` → Child method access చేశాం.

Interview Answer – English:

"Inheritance allows a child class to reuse the properties and methods of a parent class. In JavaScript, we use the extends keyword to implement inheritance."

Telugu:

Parent class లో ఉన్న properties మరియు methods ని Child class reuse చేసుకోవడాన్ని Inheritance అంటారు. JavaScript లో `extends` keyword ఉపయోగిస్తాం.

## 4️⃣ Polymorphism

Frequently asked in SDET interviews

English Definition:

Polymorphism means one name with many forms.

Telugu Explanation:

Polymorphism అంటే ఒకే method name different situations లో different behavior ఇవ్వడం.

### Real-time Example

[25 Best Music Apps for Android | Rokform](https://images.openai.com/static-rsc-4/vT63i7G6DUp8lCgk56vQ-QCIJxXEgYpMzaqlmzu8aGXsiCEyHjxDbt8r43tGv-lO7CZ9ukrjrXTfJT8d3dBOaRxxdYGCTFz008jMkoZ7EWlbDI1OMi8d5vB3ro4Ulq4oZcAiqNJxzMKkl_amzbxttJl8npuustUm543jIxivcYo?purpose=inline)

[rokform.com](https://www.rokform.com/blogs/rokform-blog/best-music-apps-for-android?utm_source=chatgpt.com)

ఒకే mobile device తో:

- Call చేయవచ్చు.
- Photos తీసుకోవచ్చు.
- Music వినవచ్చు.

ఒకే device, different functionalities.

### JavaScript Code – Method Overriding

```
class Animal {

    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {

    sound() {
        console.log("Cat meows");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();
```

Output:

```
Dog barks
Cat meows
```

### Explanation

- `Animal` → Parent class.
- `Dog` → Child class.
- `Cat` → Child class.
- Both child classes have the same method name `sound()`.
- But each method gives a different output.

ఇదే Polymorphism.

Interview Answer – English:

"Polymorphism means one method can have different implementations. In JavaScript, we can achieve runtime polymorphism using method overriding."

Telugu:

ఒకే method name different classes లో different functionality ఇవ్వడాన్ని Polymorphism అంటారు.

# 3. Important Difference Between Four Pillars

| Concept       | Simple English        | Telugu                         |
| ------------- | --------------------- | ------------------------------ |
| Abstraction   | Hiding implementation | Internal details hide చేయడం    |
| Encapsulation | Protecting data       | Data protect చేయడం             |
| Inheritance   | Reusing code          | Parent code reuse చేయడం        |
| Polymorphism  | Many forms            | ఒకే method, different behavior |

# 4. SDET / Playwright Real-time Example

మీ Playwright automation framework లో OOPS concepts ఇలా ఉపయోగించవచ్చు.

| OOPS Concept  | Playwright Example                                                     |
| ------------- | ---------------------------------------------------------------------- |
| Abstraction   | Reusable login method లో internal steps hide చేయడం                     |
| Encapsulation | Page locators and methods ను Page Class లో organize చేయడం              |
| Inheritance   | BasePage నుంచి LoginPage inherit చేయడం                                 |
| Polymorphism  | Different pages లో same method name కి different implementation ఇవ్వడం |

### Example: Playwright Page Object Model

```
import { Page } from '@playwright/test';

class BasePage {

    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }
}

class LoginPage extends BasePage {

    async login(username: string, password: string) {

        await this.page.locator('#username').fill(username);

        await this.page.locator('#password').fill(password);

        await this.page.locator('#login').click();
    }
}
```

Here:

- Encapsulation: Login-related locators and methods are grouped inside `LoginPage`.
- Inheritance: `LoginPage extends BasePage`.
- Abstraction: Test can call `login()` without knowing every internal step.
- Polymorphism: If different page classes override a common method, they can provide different implementations.

# 5. Interview Practice Questions

ఈ questions కి answers practice చేయండి.

Q1. What is OOPS in JavaScript?

Q2. What are the four pillars of OOPS?

Q3. What is the difference between Abstraction and Encapsulation?

Q4. What is inheritance in JavaScript?

Q5. What is polymorphism?

Q6. Does JavaScript support multiple inheritance through classes?INTERVIEW ANSWERJavaScript classes do not support multiple inheritance directly. Similar behavior can be achieved using mixins or composition.

## 6. How we will learn next

నా suggestion: ముందుగా JavaScript OOPS fundamentals strong చేసుకుందాం. తర్వాత TypeScript మరియు Playwright framework లో ఎలా use చేస్తారో నేర్చుకుందాం.

Next lesson: Abstraction vs Encapsulation – practical coding examples, line-by-line Telugu explanation.
