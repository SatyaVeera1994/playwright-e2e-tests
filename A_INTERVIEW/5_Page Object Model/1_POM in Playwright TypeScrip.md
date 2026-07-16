# Q1. How do you implement production-grade POM in Playwright TypeScript?

## 1. Telugu Concept

POM (Page Object Model) అంటే Application లోని ప్రతి Page కి ఒక Separate Class Create చేయడం.

Page లో ఉన్న:

* Locators
* Actions
* Methods

అన్నీ ఒకే Class లో ఉంచుతాము.

Test File లో Direct Locators ఉపయోగించకుండా Page Methods మాత్రమే Call చేస్తాము.

### Structure

```text id="wks3n6"
LoginPage
   ↓
DashboardPage
   ↓
UsersPage
```

### Benefits

* Reusable Code
* Easy Maintenance
* Better Readability
* Less Duplication

Playwright లో Locators Lazy గా ఉంటాయి కాబట్టి Constructor లో Define చేస్తాము.

---

## 2. Easy to Remember

✅ One Class Per Page

✅ Locators Inside Page Class

✅ Actions Inside Page Class

✅ Reusable Methods

✅ Easy Maintenance

✅ Better Framework Design

### One-Line Summary

**POM separates locators and actions into page classes to make tests clean and maintainable.**

---

## 3. Telugu Interview Answer

Page Object Model అనేది Framework Design Pattern.

నేను ప్రతి Page కి Separate Class Create చేస్తాను.

Page Class లో Locators మరియు Business Actions ఉంచుతాను.

ఉదాహరణకు Login Page లో:

* Email Field
* Password Field
* Login Button

వాటికి సంబంధించిన Actions LoginPage Class లో ఉంటాయి.

Test File లో Direct గా Locators ఉపయోగించకుండా login() Method Call చేస్తాను.

దీనివల్ల Code Reusability పెరుగుతుంది మరియు Maintenance సులభం అవుతుంది.

నా Playwright Framework లో LoginPage, DashboardPage, UsersPage వంటి Separate Page Classes ఉపయోగిస్తున్నాను.

---

## 4. Simple English Answer

POM stands for Page Object Model.

Each application page has its own class containing locators and actions.

Tests call page methods instead of directly interacting with elements.

This improves readability, reusability, and maintenance.

---

## 5. English Interview Answer

I implement POM by creating a separate TypeScript class for each application page.

Each page class contains locators and business actions related to that page.

Locators are defined as readonly properties because Playwright locators are lazy and auto-retrying.

Tests interact only with page methods rather than directly using selectors.

This approach improves maintainability, reduces code duplication, and makes the framework easier to scale.

In my framework, I use separate page classes such as LoginPage, DashboardPage, and UsersPage.

---

## 6. Real-Time Project Example

In my Playwright project, I created:

```text id="1x5nns"
LoginPage
DashboardPage
CarInsurancePage
```

Instead of writing:

```typescript id="f1z4k8"
page.locator('#email')
page.locator('#password')
```

in every test,

I created a reusable:

```typescript id="vk39ci"
login()
```

method inside LoginPage.

All tests use the same method.

---

## 7. Code Example (TypeScript)

### LoginPage.ts

```typescript id="qkgtib"
import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(readonly page: Page) {

    this.emailInput =
      page.getByLabel('Email');

    this.passwordInput =
      page.getByLabel('Password');

    this.loginButton =
      page.getByRole('button', {
        name: 'Sign in'
      });

  }

  async login(
    email: string,
    password: string
  ): Promise<void> {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

  }

}
```

### Test File

```typescript id="9ww1fh"
const loginPage =
  new LoginPage(page);

await loginPage.login(
  'admin@test.com',
  'Admin123'
);
```

---

### Interview Short Answer

> "I implement POM by creating separate page classes for each application page. Each class contains locators and reusable business methods. Tests interact with page methods instead of direct selectors, making the framework scalable, maintainable, and reusable."

---

# Q2. How do you use fixtures for page object dependency injection?

## 1. Telugu Concept

Fixtures అనేవి Playwright Dependency Injection Mechanism.

Page Objects ని Test Files కి Automatically Provide చేస్తాయి.

Test File లో:

```typescript id="8oztw7"
new LoginPage(page)
```

అనే Code రాయకుండా Fixture Create చేస్తాము.

Test కి ఏ Page Object కావాలో అది Automatically వస్తుంది.

---

## 2. Easy to Remember

✅ Dependency Injection

✅ No new Keyword

✅ Reusable Setup

✅ Cleaner Tests

✅ Easy Maintenance

✅ Centralized Object Creation

### One-Line Summary

**Fixtures automatically provide page objects to tests.**

---

## 3. Telugu Interview Answer

Playwright Fixtures ఉపయోగించి Page Objects ని Inject చేస్తాను.

Fixture File లో LoginPage మరియు DashboardPage Objects Create చేస్తాను.

Tests లో Direct Object Creation చేయను.

Test Function Parameters ద్వారా Page Objects Receive అవుతాయి.

దీనివల్ల Tests Clean గా ఉంటాయి మరియు Constructor Changes వచ్చినా Fixture File మాత్రమే Update చేస్తే సరిపోతుంది.

---

## 4. Simple English Answer

Fixtures provide page objects automatically.

Tests receive page objects through parameters.

This removes object creation code from test files.

---

## 5. English Interview Answer

I use custom Playwright fixtures to inject page objects into tests.

Instead of creating page objects in every test, I create them once in the fixture file.

Tests receive page objects as parameters.

This keeps test files clean and improves maintainability.

If a page object constructor changes, only the fixture file needs to be updated.

---

## 6. Real-Time Project Example

In my project, multiple tests use:

```text id="p0z2qw"
LoginPage
DashboardPage
CarInsurancePage
```

Instead of creating them in every test, I inject them through fixtures.

This reduced duplicated setup code significantly.

---

## 7. Code Example (TypeScript)

### pages.fixture.ts

```typescript id="5c6thw"
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({

  loginPage: async ({ page }, use) => {

    await use(
      new LoginPage(page)
    );

  }

});
```

### Test File

```typescript id="4xb7sj"
import { test } from '../fixtures/pages.fixture';

test(
  'Login Test',
  async ({ loginPage }) => {

    await loginPage.login(
      'admin@test.com',
      'Admin123'
    );

  }
);
```

---

### Interview Short Answer

> "I use Playwright fixtures for dependency injection. Page objects are created in a fixture file and injected into tests. This keeps tests clean and improves framework maintainability."

---

Reply **"Next Q3"** for **Abstract BasePage Class** in the same format.
