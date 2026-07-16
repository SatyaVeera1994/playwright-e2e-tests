# Q4. How does Global Setup work and what should you put in it?

## 1. Telugu Concept

### Global Setup అంటే ఏమిటి?

Global Setup అనేది అన్ని Tests Run అవ్వడానికి ముందు ఒక్కసారి మాత్రమే Execute అయ్యే Function.

ఇది Entire Test Suite కోసం Common Setup చేస్తుంది.

```text id="c7r2k8"
Global Setup
      │
      ▼
All Tests
      │
      ▼
Test Execution
```

---

### Why Use Global Setup?

ప్రతి Test ముందు Login చేస్తే:

```text id="x4m8p3"
Test 1 → Login

Test 2 → Login

Test 3 → Login
```

Time Waste అవుతుంది.

---

Global Setup ఉపయోగిస్తే:

```text id="v6n1q9"
Login Once
     │
Save Session
     │
Reuse Everywhere
```

Execution Fast అవుతుంది.

---

### What Should Be Put in Global Setup?

#### Authentication

```text id="z9w3h5"
Login
  │
  ▼
Storage State Save
```

---

#### Environment Health Check

Application Up ఉందా లేదా Check చేయడం.

---

#### Test Data Creation

Common Test Data Create చేయడం.

---

#### Database Setup

DB Connection Validate చేయడం.

---

#### Environment Validation

Required Configurations ఉన్నాయా Verify చేయడం.

---

### What Should NOT Be Put?

❌ Test Assertions

❌ Business Logic Validation

❌ Test Specific Data

---

### Benefits

✅ Faster Execution

✅ One-Time Login

✅ Common Initialization

✅ Better CI/CD Performance

---

## 2. Easy to Remember

✅ Runs Once Before All Tests

✅ Login & Save Storage State

✅ Environment Health Check

✅ Test Data Setup

✅ Faster Test Execution

✅ Used by Entire Test Suite

### One-Line Summary

**Global Setup performs one-time initialization before the entire Playwright test suite starts.**

---

## 3. Telugu Interview Answer

Global Setup అనేది Playwright లో అన్ని Tests Start అయ్యే ముందు ఒక్కసారి Run అయ్యే Function.

ఇది Common Initialization Tasks కోసం ఉపయోగిస్తాము.

సాధారణంగా Login చేసి Storage State Generate చేయడం, Environment Health Check చేయడం, Common Test Data Create చేయడం మరియు Configuration Validation చేయడం Global Setup లో చేస్తాము.

మా Project లో Admin మరియు User Roles కోసం Login చేసి Storage State Files Generate చేసేవాళ్ళం. అన్ని Tests అదే Authentication State ను Reuse చేసేవి.

అలాగే Application Health Endpoint Check చేసి Environment Available లేకపోతే Test Execution Start కాకుండా Fail Fast Mechanism Implement చేశాము.

దీనివల్ల Execution Time తగ్గింది మరియు CI/CD Stability Improve అయింది.

---

## 4. Simple English Answer

Global Setup runs once before all tests.

It is mainly used for:

* Login
* Storage State Creation
* Environment Checks
* Test Data Setup

Instead of performing these actions in every test, we do them once and reuse the results.

This makes execution faster and more efficient.

---

## 5. English Interview Answer

Global Setup is a Playwright feature that runs once before the entire test suite starts.

It is commonly used for suite-level initialization tasks such as authentication, environment validation, test data creation, and health checks.

One of the most common use cases is generating storage state files. Instead of logging in before every test, we perform login once in Global Setup and reuse the saved authentication state across all tests.

In my project, I implemented Global Setup to generate authentication states for multiple user roles and perform environment health checks before test execution. This reduced execution time significantly and prevented unnecessary test failures when environments were unavailable.

Global Setup should contain only shared initialization logic and should not contain test-specific validations or assertions.

---

## 6. Real-Time Project Example

In my Playwright automation framework:

```text id="r5f2w1"
Global Setup
      │
      ▼
Admin Login
      │
      ▼
Save admin.json
      │
      ▼
User Login
      │
      ▼
Save user.json
      │
      ▼
Run 200+ Tests
```

Without Global Setup:

```text id="k3n8m6"
200 Tests
   │
Login Every Time
```

Execution became much slower.

Using Global Setup reduced overall execution time and improved CI performance.

---

## 7. Code Example (TypeScript)

### globalSetup.ts

```typescript
import { chromium, FullConfig } from '@playwright/test';

export default async function globalSetup(
  config: FullConfig
) {

  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto(`${config.projects[0].use.baseURL}/login`);

  await page.fill('#username', 'admin');

  await page.fill('#password', 'admin123');

  await page.click('#login');

  await page.context().storageState({
    path: 'auth/admin.json'
  });

  await browser.close();

}
```

### playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({

  globalSetup: './globalSetup.ts',

  use: {
    storageState: 'auth/admin.json'
  }

});
```

### Environment Health Check Example

```typescript
const response = await fetch(
  'https://example.com/health'
);

if (!response.ok) {

  throw new Error(
    'Environment is not healthy'
  );

}
```

---

✅ **Next Question: Q5. How do you manage multiple environments in Playwright?**

This is a very common framework interview question, especially when discussing `.env` files, staging, QA, UAT, and production environments.
