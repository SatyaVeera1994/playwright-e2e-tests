# Q5. What is storageState and how does it save authentication time?

### ✅ English Answer

“storageState saves authentication session and reuses it across tests, avoiding repeated login.”

## 4. English Interview Answer

storageState is a Playwright feature that allows us to save an authenticated browser session and reuse it across multiple tests.

After a successful login, Playwright captures cookies, local storage, and other session-related information and stores them in a JSON file.

Instead of logging in before every test, we can load this saved state and start each test in an already authenticated session.

This significantly improves execution speed and reduces authentication overhead.

For example, if a login process takes five seconds and we have 300 tests, we would spend approximately 25 minutes only on authentication. Using storageState, login is performed once during global setup, and all tests reuse the saved session.

In my project, we maintained separate storage state files for different user roles such as Admin, User, and Support. This improved execution speed, reduced flaky authentication failures, and made our automation framework more efficient.

---

## 5. Real-Time Project Example

In my Playwright automation framework, every test required authentication before validating application functionality.

Initially, each test executed the login flow, which increased execution time significantly.

We implemented storageState in the global setup process.

The framework performed login once for each user role:

* Admin
* Customer
* Support User

The authenticated session was saved into separate JSON files.

All test suites reused these files and started directly from an authenticated state.

This reduced execution time dramatically and improved test stability in CI/CD pipelines.

## 1. Telugu Concept

### storageState అంటే ఏమిటి?

Playwright లో **storageState** అనేది Browser Session ను Save చేసే Feature.

User Login అయిన తర్వాత Browser లో కొన్ని Data Store అవుతాయి.

* Cookies
* Local Storage
* Session Storage

ఈ Data ను JSON File లో Save చేయవచ్చు.

తర్వాత అన్ని Tests ఆ File ను ఉపయోగించి Login లేకుండానే Start అవుతాయి.

---

### Login లేకుండా ఎలా?

Normally

```text
Test 1 → Login → Execute
Test 2 → Login → Execute
Test 3 → Login → Execute
```

ప్రతి Test Login చేస్తుంది.

---

### storageState ఉపయోగిస్తే

```text
Global Setup
      │
      ▼
Login Once
      │
      ▼
Save Session
(auth.json)
      │
      ▼
All Tests Reuse Session
```

Login ఒక్కసారి మాత్రమే జరుగుతుంది.

---

### Example

300 Tests ఉన్నాయి.

ఒక Login కి 5 Seconds పడుతుంది.

```text
300 × 5 Seconds

= 1500 Seconds

= 25 Minutes
```

Login Time మాత్రమే 25 Minutes.

storageState ఉపయోగిస్తే

```text
Login Once

5 Seconds Only 
```

Execution చాలా Fast అవుతుంది.

---

### storageState File

```json
{
  "cookies": [],
  "origins": []
}
```

ఈ File లో Browser Session Details ఉంటాయి.

---

### Benefits

✅ Faster Execution

✅ No Repeated Login

✅ Better Parallel Execution

✅ Stable Authentication

✅ Suitable for CI/CD

---

## 2. Easy to Remember

### Key Points

✅ Saves Login Session

✅ Stores Cookies & Local Storage

✅ Login Once

✅ Reuse Across Tests

✅ Faster Test Execution

✅ Best for Large Test Suites

### One-Line Summary

**storageState saves the authenticated browser session and allows all tests to reuse it without logging in again.**

---

## 3. Telugu Interview Answer

Playwright లో storageState అనేది Browser Session ను JSON File లో Save చేసే Feature.

User Login అయిన తర్వాత Cookies, Local Storage మరియు Session Information ను Capture చేసి File లో Store చేస్తుంది.

తర్వాత అన్ని Tests ఆ Session File ను ఉపయోగించి Direct గా Authenticated State లో Start అవుతాయి.

దీనివల్ల ప్రతి Test Login చేయాల్సిన అవసరం ఉండదు.

మా Project లో Admin, User మరియు Support Roles కోసం Separate storageState Files Create చేశాము.

Global Setup లో ఒక్కసారి Login చేసి Session Save చేసేవాళ్ళం.

తర్వాత అన్ని Tests ఆ Session ను Reuse చేసేవి.

దీనివల్ల Execution Time చాలా తగ్గింది మరియు Authentication Related Failures కూడా తగ్గాయి.

---

## 4. English Interview Answer

storageState is a Playwright feature that allows us to save an authenticated browser session and reuse it across multiple tests.

After a successful login, Playwright captures cookies, local storage, and other session-related information and stores them in a JSON file.

Instead of logging in before every test, we can load this saved state and start each test in an already authenticated session.

This significantly improves execution speed and reduces authentication overhead.

For example, if a login process takes five seconds and we have 300 tests, we would spend approximately 25 minutes only on authentication. Using storageState, login is performed once during global setup, and all tests reuse the saved session.

In my project, we maintained separate storage state files for different user roles such as Admin, User, and Support. This improved execution speed, reduced flaky authentication failures, and made our automation framework more efficient.

---

## 5. Real-Time Project Example

In my Playwright automation framework, every test required authentication before validating application functionality.

Initially, each test executed the login flow, which increased execution time significantly.

We implemented storageState in the global setup process.

The framework performed login once for each user role:

* Admin
* Customer
* Support User

The authenticated session was saved into separate JSON files.

All test suites reused these files and started directly from an authenticated state.

This reduced execution time dramatically and improved test stability in CI/CD pipelines.

---

## 6. Code Example (TypeScript)

### Step 1: Save Authentication State

```typescript
import { chromium } from '@playwright/test';

async function globalSetup() {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto('https://example.com/login');

    await page.fill('#username', 'admin');

    await page.fill('#password', 'admin123');

    await page.click('#login');

    await page.context().storageState({
        path: 'auth/admin.json'
    });

    await browser.close();
}

export default globalSetup;
```

### Step 2: Use storageState in Playwright Config

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({

    use: {
        storageState: 'auth/admin.json'
    }

});
```

### Step 3: Test Without Login

```typescript
import { test, expect } from '@playwright/test';

test('Dashboard Test', async ({ page }) => {

    await page.goto('https://example.com/dashboard');

    await expect(page.locator('h1'))
        .toHaveText('Dashboard');

});
```

---

✅ **Next: Q6. How do you run Playwright in parallel and what is Sharding?** (Very important for CI/CD and commonly asked in Playwright interviews.)
