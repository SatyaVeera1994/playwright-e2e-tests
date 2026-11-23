# ## Playwright Locators –

A ## Locator## in Playwright is used to identify web elements such as buttons, textboxes, links, dropdowns, and checkboxes so that we can perform actions and validations.

## Telugu:## Application lo username enter cheyyali, Login button click cheyyali ante munduga aa elements ni identify cheyyali. Elements ni identify cheyyadaniki Locators use chestham.

## ## Quick revision table##

| Locator       | Example                         | Purpose            |
| ------------- | ------------------------------- | ------------------ |
| ID            | `#username`                     | ID                 |
| Tag           | `button`                        | Tag name           |
| Class         | `.login-btn`                    | Class              |
| Attribute     | `[name="email"]`                | Attribute          |
| Combined CSS  | `button#login.primary-btn`      | Multiple selectors |
| XPath         | `xpath=//input[@id="username"]` | XPath              |
| `:text()`     | `:text("Login")`                | Partial text       |
| `:has-text()` | `div:has-text("Yotta")`         | Contains text      |
| `:text-is()`  | `:text-is("Login")`             | Exact text         |

## ## Interview questions – Important##
## Q1. What is page.locator() in Playwright?

"page.locator() is a method used to identify web elements using CSS selectors, XPath, and other supported selectors. We use it to perform actions and assertions on web elements."

## Q1. What are locators in Playwright?##

"Locators are used to identify web elements and interact with them. We use locators to perform actions like click, fill, check, and verify elements."

## Q2. What is the difference between ID and Class locators?##

"ID locators use a hash symbol (#), whereas class locators use a dot (.). ID is generally unique, while the same class can be used by multiple elements."

## Q3. What is the difference between&#x20;## `:text()`## &#x20;and&#x20;## `:text-is()`## ?##

"`:text()` identifies elements using partial text, whereas `:text-is()` identifies elements using exact text."

## Q4. What is the difference between CSS and XPath?##

"CSS selectors identify elements using tag names, IDs, classes, and attributes. XPath can identify elements using attributes, text, and relationships between elements in the DOM."

## Q5. Which locator do you prefer in Playwright?##

"I prefer user-facing locators like `getByRole()`, `getByLabel()`, and `getByPlaceholder()` because they are readable and more closely represent how users interact with the application. I use CSS or XPath when required."

Note: `:text()`, `:has-text()`, and `:text-is()` are Playwright-specific CSS extensions. For new tests, prefer the recommended user-facing locator APIs where possible.

## ## 1. ID Locator –&#x20;## `#id`

## English Explanation:## \

An ID locator is used to identify an element using its unique ID attribute.

## HTML:##

```
<input id="username" />
```

## Playwright:##

```
await page.locator("#username").fill("Satya");
```

## Telugu:## HTML lo `id="username"` unte, ID mundu `#` symbol use chesi element ni identify chestham. Taruvatha `fill()` tho value enter chestham.

## Interview Question: What is an ID locator?##

"An ID locator is used to identify an element using its ID attribute. We use the hash symbol (#) before the ID."

## ## 2. Tag Name Locator##

## English Explanation:## \

A tag name locator identifies an element using its HTML tag name.

## HTML:##

```
<button>Login</button>
```

## Playwright:##

```
await page.locator("button").click();
```

## Telugu:## HTML lo `button` tag unte, `button` ani locator lo mention chesi element ni identify chestham.

More examples:

```
page.locator("input");
page.locator("div");
page.locator("a");
page.locator("h1");
```

## Interview Question: What is a Tag Name locator?##

"It identifies an element using its HTML tag name, such as input, button, div, or anchor."

## ## 3. Class Name Locator –&#x20;## `.classname`

## English Explanation:## \

A class locator identifies an element using its class attribute. We use a dot (`.`) before the class name.

## HTML:##

```
<button class="login-btn">Login</button>
```

## Playwright:##

```
await page.locator(".login-btn").click();
```

## Telugu:## HTML lo `class="login-btn"` unte, class name mundu dot (`.`) petti element ni identify chestham.

## Remember:##

- ID → `#`
- Class → `.`

## Interview Question: How do you identify an element using a class?##

"We use a dot before the class name. For example, `page.locator('.login-btn')`."

## ## 4. Attribute Locator##

## English Explanation:## \

An attribute locator identifies an element using its HTML attribute name and value.

## HTML:##

```
<input type="text" name="email" />
```

## Playwright:##

```
await page.locator('[name="email"]').fill("test@gmail.com");
```

## Telugu:## Element ki `name`, `type`, `placeholder` laanti attributes untayi. Attribute name and value use chesi element ni identify chestham.

More examples:

```
page.locator('[type="password"]');

page.locator('[placeholder="Enter email"]');

page.locator('[name="username"]');
```

## Interview Question: What is an Attribute locator?##

"An attribute locator is used to identify an element based on its HTML attribute and value."

## ## 5. Combining Multiple Locators##

## English Explanation:## \

We can combine multiple CSS selectors like tag name, ID, and class to identify a specific element more accurately.

## HTML:##

```
<button id="login" class="primary-btn">
  Login
</button>
```

## Playwright:##

```
await page.locator("button#login.primary-btn").click();
```

## Telugu Explanation:##

Indulo three selectors combine chesam:

- `button` → Tag name
- `#login` → ID
- `.primary-btn` → Class name

Ila multiple selectors combine chesi specific element ni identify chestham.

## Interview Question: Can we combine multiple CSS selectors?##

"Yes, we can combine tag name, ID, and class selectors to identify an element more precisely."

## ## 6. XPath Locator##

## English Explanation:## \

XPath is used to locate web elements based on the HTML structure, attributes, and relationships between elements.

## HTML:##

```
<input id="username" />
```

## Playwright:##

```
await page.locator(
  'xpath=//input[@id="username"]'
).fill("Satya");
```

## Telugu Explanation:##

- `xpath=` → XPath selector ani identify chesthundi.
- `//input` → Input element ni search chesthundi.
- `[@id="username"]` → ID condition apply chesthundi.

Another example:

```
await page.locator(
  'xpath=//button[text()="Login"]'
).click();
```

## Interview Question: What is XPath?##

"XPath is a locator strategy used to identify elements based on their attributes and relationships in the HTML DOM."

## ## 7.&#x20;## `:text("desired text")`

## English Explanation:## \

The `:text()` selector identifies an element based on a portion of its text.

## HTML:##

```
<button>Login to Application</button>
```

## Playwright:##

```
await page.locator(':text("Login")').click();
```

## Telugu:## Button text `Login to Application` undi. Manam `Login` ane partial text tho element ni identify chesthunnam.

## ## 8.&#x20;## `:has-text("desired text")`

## English Explanation:## \

The `:has-text()` selector identifies an element that contains the specified text anywhere inside its content, including descendant elements.

## HTML:##

```
<div class="message">
  Welcome to Yotta Dashboard
</div>
```

## Playwright:##

```
await page.locator(
  'div:has-text("Yotta")'
).click();
```

## Telugu:## Div lo `Yotta` ane word ekkada unna, aa text contain chese div ni identify chestham.

## ## 9.&#x20;## `:text-is("exact text")`

## English Explanation:## \

The `:text-is()` selector identifies an element whose own text exactly matches the specified text.

## HTML:##

```
<button>Login</button>
```

## Playwright:##

```
await page.locator(
  ':text-is("Login")'
).click();
```

## Telugu:## Element text exact ga `Login` undali. `Login to Application` unte exact match avvadu.

## ## Quick revision table##

| Locator       | Example                         | Purpose            |
| ------------- | ------------------------------- | ------------------ |
| ID            | `#username`                     | ID                 |
| Tag           | `button`                        | Tag name           |
| Class         | `.login-btn`                    | Class              |
| Attribute     | `[name="email"]`                | Attribute          |
| Combined CSS  | `button#login.primary-btn`      | Multiple selectors |
| XPath         | `xpath=//input[@id="username"]` | XPath              |
| `:text()`     | `:text("Login")`                | Partial text       |
| `:has-text()` | `div:has-text("Yotta")`         | Contains text      |
| `:text-is()`  | `:text-is("Login")`             | Exact text         |
# **Playwright&#x20;**`page.locator()`**&#x20;– English Explanation + Telugu Examples + Interview Questions**

## **1. What is&#x20;**`page.locator()`**?**

**English Explanation:**

`page.locator()` is a Playwright method used to find web elements using CSS selectors, XPath, and other supported selectors. We use it to interact with elements and perform actions like click, fill, check, and verify.

**Telugu Explanation:**

Application lo username textbox, password textbox, Login button laanti elements ni identify cheyyadaniki `page.locator()` use chestham.

Element ni identify chesina taruvatha click, fill, check laanti actions perform chestham.

## **2. Syntax**

```
page.locator("selector");
```

Example:

```
await page.locator("#username").fill("Satya");
```

Here:

- `page` – Browser page.
- `locator()` – Identifies the element.
- `#username` – CSS ID selector.
- `fill()` – Enters text into the textbox.

## **3. Types of&#x20;**`page.locator()`**&#x20;with examples**

### **1. ID Selector**

**English:** Identifies an element using its ID attribute.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator("#username").fill("Satya");
```

**Telugu:** ID mundu `#` symbol use chestham.

### **2. Class Selector**

**English:** Identifies an element using its class name.

HTML:

```
<button class="login-btn">Login</button>
```

Playwright:

```
await page.locator(".login-btn").click();
```

**Telugu:** Class name mundu dot (`.`) use chestham.

### **3. Tag Name Selector**

**English:** Identifies an element using its HTML tag name.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator("button").click();
```

**Telugu:** Button tag use chesi element ni identify chestham.

### **4. Attribute Selector**

**English:** Identifies an element using its attribute and value.

HTML:

```
<input type="text" name="email" />
```

Playwright:

```
await page.locator('[name="email"]').fill("test@gmail.com");
```

**Telugu:** Attribute name and value use chesi element ni identify chestham.

### **5. Combined CSS Selector**

**English:** Combines multiple CSS selectors to identify an element more precisely.

HTML:

```
<button id="login" class="primary-btn">Login</button>
```

Playwright:

```
await page.locator("button#login.primary-btn").click();
```

**Telugu:** Tag name, ID, Class selectors anni combine chesi specific element ni identify chestham.

### **6. XPath Selector**

**English:** Identifies elements using their HTML structure, attributes, and relationships.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator(
  'xpath=//input[@id="username"]'
).fill("Satya");
```

**Telugu:** XPath expression use chesi element ni identify chestham.

### **7. Text Selector**

**English:** Identifies elements using their text content.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator(':text("Login")').click();
```

**Telugu:** Element lo unna text batti identify chestham.

## **4.&#x20;**`page.locator()`**&#x20;vs&#x20;**`getByRole()`

| `page.locator()`                        | `getByRole()`                                                 |
| --------------------------------------- | ------------------------------------------------------------- |
| CSS and XPath selectors use chestham    | Accessibility role and name use chestham                      |
| Example: `#username`                    | Example: `button`, `Login`                                    |
| HTML structure batti identify cheyyachu | User-facing accessibility information batti identify chestham |

## **5. Important methods used with locator**

| Method            | Purpose                          |
| ----------------- | -------------------------------- |
| `.click()`        | Click element                    |
| `.fill()`         | Enter text                       |
| `.type()`         | Type text character by character |
| `.check()`        | Select checkbox                  |
| `.uncheck()`      | Unselect checkbox                |
| `.isVisible()`    | Check visibility                 |
| `.isEnabled()`    | Check enabled state              |
| `.count()`        | Count matching elements          |
| `.textContent()`  | Get text content                 |
| `.getAttribute()` | Get attribute value              |

## **6. Real-time Login Example**

```
import { test, expect } from "@playwright/test";

test("Login using page.locator()", async ({ page }) => {

  await page.goto("https://your-app-url.com");

  // Enter username
  await page.locator("#username").fill("Satya");

  // Enter password
  await page.locator("#password").fill("Test123");

  // Click login button
  await page.locator("#login-btn").click();

  // Verify dashboard
  await expect(
    page.locator("h1")
  ).toHaveText("Dashboard");

});
```

Telugu: First application open chestham, username and password enter chestham, Login button click chesi Dashboard display avuthundo verify chestham.

Note: Selectors and URL are examples. Mee actual application HTML batti change cheyyali.

## **7. Interview Questions & Answers**

**Q1. What is&#x20;**`page.locator()`**&#x20;in Playwright?**

"`page.locator()` is a method used to identify web elements using CSS selectors, XPath, and other supported selectors. We use it to perform actions and assertions on web elements."

**Q2. How do you identify an element using ID?**

"We use a hash symbol (#) before the ID. For example, `page.locator('#username')`."

**Q3. How do you identify an element using Class?**

"We use a dot (.) before the class name. For example, `page.locator('.login-btn')`."

**Q4. What is the difference between CSS and XPath?**

"CSS selectors identify elements using IDs, classes, tags, and attributes. XPath can also identify elements using text and relationships between elements."

**Q5. What happens if multiple elements match the locator?**

"Playwright uses strict mode for actions like click. If multiple elements match, it throws a strict mode violation. We should make the locator unique."

**Q6. What is the difference between&#x20;**`locator()`**&#x20;and&#x20;**`getByRole()`**?**

"`locator()` supports CSS and XPath selectors, whereas `getByRole()` identifies elements using accessibility roles and accessible names."

## **8. Interview Practice**

**Question 1 of 4**\
Which symbol is used for an ID selector?

.

\#

@

Submit Answer



**Official documentation:** [Playwright Locator Documentation](https://playwright.dev/docs/locators?utm_source=chatgpt.com)
## ## Interview questions – Important##

## Q1. What are locators in Playwright?##

"Locators are used to identify web elements and interact with them. We use locators to perform actions like click, fill, check, and verify elements."

## Q2. What is the difference between ID and Class locators?##

"ID locators use a hash symbol (#), whereas class locators use a dot (.). ID is generally unique, while the same class can be used by multiple elements."

## Q3. What is the difference between&#x20;## `:text()`## &#x20;and&#x20;## `:text-is()`## ?##

"`:text()` identifies elements using partial text, whereas `:text-is()` identifies elements using exact text."

## Q4. What is the difference between CSS and XPath?##

"CSS selectors identify elements using tag names, IDs, classes, and attributes. XPath can identify elements using attributes, text, and relationships between elements in the DOM."

## Q5. Which locator do you prefer in Playwright?##

"I prefer user-facing locators like `getByRole()`, `getByLabel()`, and `getByPlaceholder()` because they are readable and more closely represent how users interact with the application. I use CSS or XPath when required."

Note: `:text()`, `:has-text()`, and `:text-is()` are Playwright-specific CSS extensions. For new tests, prefer the recommended user-facing locator APIs where possible.

Official documentation: [Playwright Locators](https://playwright.dev/docs/locators?utm_source=chatgpt.com)

## ## Interview practice – Answer one question at a time##

## Question 1 of 3##

Interview practice

## How do you identify an element using its ID?##

page.locator('.username')

page.locator('#username')

page.locator('username')

Check Answer

# ## 1. ID Locator –&#x20;## `#id`

## Meaning:## Identify an element using its ID property.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator("#username").fill("Satya");
```

## Telugu:## HTML lo `id="username"` unte, `#username` use chesi textbox ni identify chestham.

# ## 2. Tag Name Locator##

## Meaning:## Identify an element using its tag name.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator("button").click();
```

## Telugu:## HTML lo button tag undi. Kabatti `button` use chesi identify chestham.

Other examples:

```
page.locator("input");
page.locator("div");
page.locator("a");
page.locator("h1");
```

# ## 3. Class Name Locator –&#x20;## `.classname`

## Meaning:## Identify an element using its class name.

HTML:

```
<button class="login-btn">Login</button>
```

Playwright:

```
await page.locator(".login-btn").click();
```

## Telugu:## Class name mundu dot (`.`) pettali.

- ID → `#`
- Class → `.`

# ## 4. Attribute Locator##

## Meaning:## Identify an element using its attribute and value.

HTML:

```
<input type="text" name="email" />
```

Playwright:

```
await page.locator('[name="email"]').fill("test@gmail.com");
```

Other examples:

```
page.locator('[type="password"]');
page.locator('[placeholder="Enter email"]');
page.locator('[name="username"]');
```

## Telugu:## Attribute value batti element ni identify chestham.

# ## 5. Combining Multiple Locators##

## Meaning:## Combine tag name, ID, and class selectors to identify a specific element.

HTML:

```
<button id="login" class="primary-btn">
  Login
</button>
```

Playwright:

```
await page.locator("button#login.primary-btn").click();
```

Explanation:

- `button` → Tag name
- `#login` → ID
- `.primary-btn` → Class name

## Important:## Mee notes lo `#id.classnametagname` ani undi. Correct CSS order example: `tagname#id.classname`.

If elements are nested, space use chestham:

```
page.locator("#login .primary-btn");
```

# ## 6. XPath Locator##

## Meaning:## Identify an element using XPath expression.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator('xpath=//input[@id="username"]').fill("Satya");
```

Explanation:

- `xpath=` → XPath selector ani identify chesthundi.
- `//input` → Input element.
- `[@id="username"]` → ID condition.

Another example:

```
await page.locator('xpath=//button[text()="Login"]').click();
```

## Telugu:## XPath use chesi HTML structure and attributes batti element ni identify chestham.

# ## 7.&#x20;## `:text("desired text")`

## Meaning:## Identify an element using a portion of its text.

HTML:

```
<button>Login to Application</button>
```

Playwright:

```
await page.locator(':text("Login")').click();
```

## Telugu:## Element text lo `Login` ane word unte identify cheyyadaniki use chestham. Idi matching text unna smallest suitable element ni select cheyyadaniki try chesthundi.

# ## 8.&#x20;## `:has-text("desired text")`

## Meaning:## Identify an element containing the given text.

HTML:

```
<div class="message">
  Welcome to Yotta Dashboard
</div>
```

Playwright:

```
await page.locator('div:has-text("Yotta")');
```

## Telugu:## Element text lo `Yotta` ane word ekkada unna aa text unna div ni identify chestham.

# ## 9.&#x20;## `:text-is("exact text")`

## Meaning:## Identify an element using exact text matching.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator(':text-is("Login")').click();
```

## Telugu:## Exact ga `Login` ane text match ayithe element ni identify chesthundi.

## ## Quick revision table##

| Locator      | Example                         | Usage              |
| ------------ | ------------------------------- | ------------------ |
| ID           | `#username`                     | ID                 |
| Tag          | `button`                        | Tag name           |
| Class        | `.login-btn`                    | Class              |
| Attribute    | `[name="email"]`                | Attribute          |
| Combined CSS | `button#login.primary`          | Multiple selectors |
| XPath        | `xpath=//input[@id="username"]` | XPath              |
| Text         | `:text("Login")`                | Partial text       |
| Has text     | `div:has-text("Yotta")`         | Contains text      |
| Text is      | `:text-is("Login")`             | Exact text         |

## ## Interview important point##

Playwright lo `page.locator()` CSS selectors, XPath, and Playwright-specific text selectors support chesthundi. Kani modern Playwright automation lo possible ayithe `getByRole()`, `getByLabel()`, `getByPlaceholder()` prefer chestham because they are more readable and user-facing.

## ## Practice Quiz##

## Q1. HTML lo class='login-btn' unte correct locator enti?##

\#login-btn

.login-btn

login-btn

## Q2. HTML lo id='username' unte correct locator enti?##

.username

\#username

[class='username']

## Q3. Exact text matching kosam mee notes prakaram edi use chestham?##

:has-text()

:text-is()

:text()

## Q4. Attribute name and value use chesi element identify cheyyadaniki edi correct?##

[name="email"]

\#email

.email

Check Answers
# **Playwright&#x20;**`page.locator()`**&#x20;– English Explanation + Telugu Examples + Interview Questions**

## **1. What is&#x20;**`page.locator()`**?**

**English Explanation:**

`page.locator()` is a Playwright method used to find web elements using CSS selectors, XPath, and other supported selectors. We use it to interact with elements and perform actions like click, fill, check, and verify.

**Telugu Explanation:**

Application lo username textbox, password textbox, Login button laanti elements ni identify cheyyadaniki `page.locator()` use chestham.

Element ni identify chesina taruvatha click, fill, check laanti actions perform chestham.

## **2. Syntax**

```
page.locator("selector");
```

Example:

```
await page.locator("#username").fill("Satya");
```

Here:

- `page` – Browser page.
- `locator()` – Identifies the element.
- `#username` – CSS ID selector.
- `fill()` – Enters text into the textbox.

## **3. Types of&#x20;**`page.locator()`**&#x20;with examples**

### **1. ID Selector**

**English:** Identifies an element using its ID attribute.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator("#username").fill("Satya");
```

**Telugu:** ID mundu `#` symbol use chestham.

### **2. Class Selector**

**English:** Identifies an element using its class name.

HTML:

```
<button class="login-btn">Login</button>
```

Playwright:

```
await page.locator(".login-btn").click();
```

**Telugu:** Class name mundu dot (`.`) use chestham.

### **3. Tag Name Selector**

**English:** Identifies an element using its HTML tag name.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator("button").click();
```

**Telugu:** Button tag use chesi element ni identify chestham.

### **4. Attribute Selector**

**English:** Identifies an element using its attribute and value.

HTML:

```
<input type="text" name="email" />
```

Playwright:

```
await page.locator('[name="email"]').fill("test@gmail.com");
```

**Telugu:** Attribute name and value use chesi element ni identify chestham.

### **5. Combined CSS Selector**

**English:** Combines multiple CSS selectors to identify an element more precisely.

HTML:

```
<button id="login" class="primary-btn">Login</button>
```

Playwright:

```
await page.locator("button#login.primary-btn").click();
```

**Telugu:** Tag name, ID, Class selectors anni combine chesi specific element ni identify chestham.

### **6. XPath Selector**

**English:** Identifies elements using their HTML structure, attributes, and relationships.

HTML:

```
<input id="username" />
```

Playwright:

```
await page.locator(
  'xpath=//input[@id="username"]'
).fill("Satya");
```

**Telugu:** XPath expression use chesi element ni identify chestham.

### **7. Text Selector**

**English:** Identifies elements using their text content.

HTML:

```
<button>Login</button>
```

Playwright:

```
await page.locator(':text("Login")').click();
```

**Telugu:** Element lo unna text batti identify chestham.

## **4.&#x20;**`page.locator()`**&#x20;vs&#x20;**`getByRole()`

| `page.locator()`                        | `getByRole()`                                                 |
| --------------------------------------- | ------------------------------------------------------------- |
| CSS and XPath selectors use chestham    | Accessibility role and name use chestham                      |
| Example: `#username`                    | Example: `button`, `Login`                                    |
| HTML structure batti identify cheyyachu | User-facing accessibility information batti identify chestham |

## **5. Important methods used with locator**

| Method            | Purpose                          |
| ----------------- | -------------------------------- |
| `.click()`        | Click element                    |
| `.fill()`         | Enter text                       |
| `.type()`         | Type text character by character |
| `.check()`        | Select checkbox                  |
| `.uncheck()`      | Unselect checkbox                |
| `.isVisible()`    | Check visibility                 |
| `.isEnabled()`    | Check enabled state              |
| `.count()`        | Count matching elements          |
| `.textContent()`  | Get text content                 |
| `.getAttribute()` | Get attribute value              |

## **6. Real-time Login Example**

```
import { test, expect } from "@playwright/test";

test("Login using page.locator()", async ({ page }) => {

  await page.goto("https://your-app-url.com");

  // Enter username
  await page.locator("#username").fill("Satya");

  // Enter password
  await page.locator("#password").fill("Test123");

  // Click login button
  await page.locator("#login-btn").click();

  // Verify dashboard
  await expect(
    page.locator("h1")
  ).toHaveText("Dashboard");

});
```

Telugu: First application open chestham, username and password enter chestham, Login button click chesi Dashboard display avuthundo verify chestham.

Note: Selectors and URL are examples. Mee actual application HTML batti change cheyyali.

## **7. Interview Questions & Answers**

**Q1. What is&#x20;**`page.locator()`**&#x20;in Playwright?**

"`page.locator()` is a method used to identify web elements using CSS selectors, XPath, and other supported selectors. We use it to perform actions and assertions on web elements."

**Q2. How do you identify an element using ID?**

"We use a hash symbol (#) before the ID. For example, `page.locator('#username')`."

**Q3. How do you identify an element using Class?**

"We use a dot (.) before the class name. For example, `page.locator('.login-btn')`."

**Q4. What is the difference between CSS and XPath?**

"CSS selectors identify elements using IDs, classes, tags, and attributes. XPath can also identify elements using text and relationships between elements."

**Q5. What happens if multiple elements match the locator?**

"Playwright uses strict mode for actions like click. If multiple elements match, it throws a strict mode violation. We should make the locator unique."

**Q6. What is the difference between&#x20;**`locator()`**&#x20;and&#x20;**`getByRole()`**?**

"`locator()` supports CSS and XPath selectors, whereas `getByRole()` identifies elements using accessibility roles and accessible names."

## **8. Interview Practice**

**Question 1 of 4**\
Which symbol is used for an ID selector?

.

\#

@

Submit Answer



**Official documentation:** [Playwright Locator Documentation](https://playwright.dev/docs/locators?utm_source=chatgpt.com)