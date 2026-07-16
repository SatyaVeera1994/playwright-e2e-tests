# Q9. How do you implement POM (Page Object Model) in Playwright TypeScript?
### ✅ English Answer

“I implement POM using TypeScript classes with reusable methods and inject them using fixtures.”

## 1. Telugu Concept

### POM అంటే ఏమిటి?

POM (Page Object Model) అనేది Automation Framework Design Pattern.

Web Page లో ఉన్న:

* Locators
* Actions
* Methods

అన్నింటిని Separate Class లో Store చేస్తాము.

Test Case లో Direct Locators ఉపయోగించము.

---

### Without POM

```typescript
await page.locator('#username').fill('admin');

await page.locator('#password').fill('admin123');

await page.locator('#login').click();
```

ఇలా అన్ని Tests లో Repeat అవుతుంది.

---

### With POM

```typescript
await loginPage.login('admin', 'admin123');
```

Simple మరియు Clean Code.

---

### POM Structure

```text
tests/
pages/
    LoginPage.ts
    DashboardPage.ts
fixtures/
```

---

### LoginPage

Contains:

* Locators
* Actions

```text
Login Page
      │
      ├── Username
      ├── Password
      └── Login Button
```

---

### Advantages

✅ Reusable Code

✅ Easy Maintenance

✅ Better Readability

✅ Less Duplication

✅ Framework Scalability

---

### Best Practice

Page Class లో

✅ Locators

✅ Actions

ఉండాలి

❌ Assertions ఉండకూడదు

❌ Test Logic ఉండకూడదు

---

## 2. Easy to Remember

### Key Points

✅ POM = Design Pattern

✅ Separate Page Classes

✅ Reusable Methods

✅ Less Duplicate Code

✅ Easy Maintenance

✅ Better Framework Structure

### One-Line Summary

**POM separates page locators and actions into dedicated classes, making automation frameworks scalable, maintainable, and reusable.**

---

## 3. Telugu Interview Answer

Page Object Model అనేది Automation Framework లో ఎక్కువగా ఉపయోగించే Design Pattern.

దీనిలో ప్రతి Web Page కి ఒక Separate Class Create చేస్తాము.

ఆ Class లో Page Locators మరియు Page Actions మాత్రమే ఉంచుతాము.

Tests లో Direct గా Locators ఉపయోగించకుండా Page Methods ను Call చేస్తాము.

దీనివల్ల Code Reusability పెరుగుతుంది మరియు Maintenance సులభమవుతుంది.

ఉదాహరణకు Login Page Locator Change అయితే అన్ని Test Files మార్చాల్సిన అవసరం ఉండదు. LoginPage Class లో మాత్రమే Update చేస్తే సరిపోతుంది.

మా Project లో మేము LoginPage, DashboardPage, UserManagementPage వంటి Separate Page Classes Create చేశాము. Custom Fixtures ద్వారా వాటిని Inject చేశాము.

దీనివల్ల Framework చాలా Clean గా మరియు Maintainable గా మారింది.

---

## 4. English Interview Answer

Page Object Model, or POM, is a widely used design pattern in automation frameworks.

In this approach, each application page is represented by a separate class containing page locators and page-specific actions.

Instead of directly interacting with locators inside test scripts, tests call reusable methods exposed by page objects.

This improves code readability, maintainability, and reusability.

One of the biggest advantages is centralized maintenance. If a locator changes, only the corresponding page object needs to be updated instead of modifying multiple test files.

In my Playwright framework, I implemented page classes for major application modules and injected them through custom fixtures. This reduced code duplication and improved framework scalability as the application grew.

---

## 5. Real-Time Project Example

In my insurance automation project, multiple test cases required login functionality.

Initially, login steps were duplicated across many test files.

After implementing POM:

* Login functionality moved to LoginPage.
* Dashboard actions moved to DashboardPage.
* Policy operations moved to PolicyPage.

Tests became much cleaner:

```typescript
await loginPage.login(username, password);

await dashboardPage.verifyDashboard();
```

When the login button locator changed, we updated only one file instead of dozens of test cases.

This significantly reduced maintenance effort.

---

## 6. Code Example (TypeScript)

### LoginPage.ts

```typescript
import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    username = this.page.locator('#username');

    password = this.page.locator('#password');

    loginButton = this.page.locator('#login');

    async login(user: string, pass: string) {

        await this.username.fill(user);

        await this.password.fill(pass);

        await this.loginButton.click();

    }
}
```

### Login Test

```typescript
import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://example.com/login');

    await loginPage.login(
        'admin',
        'admin123'
    );

});
```

### Advanced POM with Fixtures

```typescript
import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    }

});
```

---

✅ **Next: Q10. How do you integrate Playwright with CI/CD?** (GitHub Actions, Jenkins, Reports, Traces, Sharding, Docker, Pipeline Design) — the final question in the Top 10 Playwright Interview Series. 🚀
