Awesome! Let's continue with **Q3**.

# Q3. What are Playwright Fixtures and why are they better than beforeEach()?



## 4. English Interview Answer

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

Instead of writing repetitive setup code inside `beforeEach()`, fixtures allow us to declare only the resources required by a test. Playwright then initializes those resources before the test starts and disposes of them after execution.

Fixtures are composable, meaning one fixture can depend on another. For example, an authenticated page fixture can extend the page fixture, which itself depends on the browser context.

Playwright also supports worker-scoped fixtures, where expensive operations such as authentication are executed only once per worker instead of once per test. This significantly improves execution speed.

In my project, we created custom fixtures for authenticated users and page objects. Tests simply requested the required fixture, which made the framework more modular, reusable, and easier to maintain compared to using `beforeEach()`.

---### ✅ English Answer

“Fixtures provide dependency injection and automatically handle setup and teardown, making tests reusable.”

### One-Line Summary

**Fixtures automatically create, manage, and clean up test dependencies, making tests cleaner, reusable, and easier to maintain than beforeEach().**

## 5. Real-Time Project Example

In my Playwright automation framework, every test required user authentication before validating application functionality.

Initially, we used `beforeEach()` to perform login before every test. This increased execution time because the application logged in repeatedly.

We later implemented a custom authenticated fixture. The fixture handled browser creation, login, and page initialization automatically.

All test files simply requested the authenticated fixture, allowing us to remove duplicate setup code. This reduced execution time, improved code readability, and made the framework easier to maintain.


## 1. Telugu Concept

### Fixtures అంటే ఏమిటి?

Playwright లో **Fixtures** అనేవి **Dependency Injection (DI) System**.

అంటే Test కి ఏ Objects లేదా Resources అవసరమో వాటిని Playwright Automatically Create చేసి, Test పూర్తయిన తర్వాత Automatically Cleanup చేస్తుంది.

Simple గా చెప్పాలంటే,

> **Fixture అంటే Test కి అవసరమైన Setup మరియు Cleanup ని Automatically Handle చేసే Mechanism.**

---

### beforeEach() ఎలా పనిచేస్తుంది?

Suppose ప్రతి Test ముందు Login చేయాలి.

Selenium లేదా Jest లో ఇలా రాస్తాం.

```typescript
test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.click('#login');
});
```

ప్రతి Test ముందు ఇదే Code Run అవుతుంది.

100 Tests ఉంటే Login 100 సార్లు జరుగుతుంది.

దీనివల్ల

* Duplicate Code
* Slow Execution
* Difficult Maintenance

---

### Fixtures ఎలా పనిచేస్తాయి?

Fixtures లో ఒకసారి Setup చేస్తాం.

ఏ Test కి అవసరమో అది మాత్రమే Declare చేస్తాం.

```typescript
test('Dashboard Test', async ({ authenticatedPage }) => {

});
```

Playwright

* Browser Create చేస్తుంది
* Context Create చేస్తుంది
* Login చేస్తుంది
* Dashboard Open చేస్తుంది

అన్నీ Automatically చేస్తుంది.

---

### Fixture Hierarchy

```text
Browser
    │
    ▼
Context
    │
    ▼
Page
    │
    ▼
Authenticated Page
    │
    ▼
Dashboard Page
```

ప్రతి Fixture ఇంకో Fixture మీద ఆధారపడవచ్చు.

దీనిని **Composable Fixtures** అంటారు.

---

### Worker Fixture

Worker Fixture ఒక Worker కి ఒక్కసారి మాత్రమే Run అవుతుంది.

ఉదాహరణకు

100 Tests

↓

1 Login

↓

100 Tests Execute

Login ఒక్కసారి మాత్రమే అవుతుంది.

Execution చాలా Fast అవుతుంది.

---

## 2. Easy to Remember

### Key Points

✅ Fixture = Dependency Injection

✅ Automatic Setup

✅ Automatic Cleanup

✅ Reusable

✅ Less Duplicate Code

✅ Faster Execution using Worker Fixtures

### One-Line Summary

**Fixtures automatically create, manage, and clean up test dependencies, making tests cleaner, reusable, and easier to maintain than beforeEach().**

---

## 3. Telugu Interview Answer

Playwright లో Fixtures అనేవి Dependency Injection System.

మనం Test కి అవసరమైన Browser, Context, Page లేదా Authenticated Session వంటి Resources ను Manually Create చేయాల్సిన అవసరం లేదు.

Fixture ద్వారా Playwright వాటిని Automatically Create చేసి Test పూర్తయిన తర్వాత Automatically Cleanup చేస్తుంది.

beforeEach() ఉపయోగిస్తే ప్రతి Test ముందు అదే Setup Code Execute అవుతుంది. దీని వల్ల Duplicate Code పెరుగుతుంది మరియు Maintenance కష్టమవుతుంది.

Fixtures Composable కావడం వల్ల ఒక Fixture ఇంకో Fixture మీద ఆధారపడవచ్చు.

మా Project లో మేము Authenticated Page Fixture Create చేశాం. Login ఒక్కసారి మాత్రమే జరిగేది. అన్ని Tests అదే Authenticated Session ను ఉపయోగించేవి. దీని వల్ల Execution Time తగ్గింది మరియు Framework చాలా Clean గా మారింది.

---

## 4. English Interview Answer

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

Instead of writing repetitive setup code inside `beforeEach()`, fixtures allow us to declare only the resources required by a test. Playwright then initializes those resources before the test starts and disposes of them after execution.

Fixtures are composable, meaning one fixture can depend on another. For example, an authenticated page fixture can extend the page fixture, which itself depends on the browser context.

Playwright also supports worker-scoped fixtures, where expensive operations such as authentication are executed only once per worker instead of once per test. This significantly improves execution speed.

In my project, we created custom fixtures for authenticated users and page objects. Tests simply requested the required fixture, which made the framework more modular, reusable, and easier to maintain compared to using `beforeEach()`.

---

## 5. Real-Time Project Example

In my Playwright automation framework, every test required user authentication before validating application functionality.

Initially, we used `beforeEach()` to perform login before every test. This increased execution time because the application logged in repeatedly.

We later implemented a custom authenticated fixture. The fixture handled browser creation, login, and page initialization automatically.

All test files simply requested the authenticated fixture, allowing us to remove duplicate setup code. This reduced execution time, improved code readability, and made the framework easier to maintain.

---

## 6. Code Example (TypeScript)

### Custom Fixture

```typescript
import { test as base } from '@playwright/test';

export const test = base.extend({

  authenticatedPage: async ({ page }, use) => {

    await page.goto('https://example.com/login');

    await page.fill('#username', 'admin');

    await page.fill('#password', 'admin123');

    await page.click('#login');

    await use(page);

  }

});
```

### Using Fixture in Test

```typescript
import { test, expect } from '../fixtures/auth.fixture';

test('Dashboard Test', async ({ authenticatedPage }) => {

  await expect(authenticatedPage.locator('h1'))
    .toHaveText('Dashboard');

});
```

---

📘 **Next:** **Q4. How does Network Interception work in Playwright?** This is one of the most frequently asked Playwright interview questions, especially for engineers with 4–6 years of automation experience.
