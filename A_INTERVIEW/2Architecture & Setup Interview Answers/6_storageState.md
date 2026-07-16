# Q6. What is `storageState` and how do you implement authentication in Playwright Frameworks?

## 1. Telugu Concept

### storageState అంటే ఏమిటి?

`storageState` అనేది Browser Session ను Save చేసే Playwright Feature.

ఇందులో:

✅ Cookies

✅ Local Storage

✅ Session Storage

Save అవుతాయి.

---

### Problem Without storageState

ప్రతి Test ముందు Login చేయాలి.

```text id="p1"
Test 1 → Login

Test 2 → Login

Test 3 → Login

Test 4 → Login
```

Time Waste.

---

### Solution

ఒకసారి Login చేయాలి.

Session Save చేయాలి.

అన్ని Tests Reuse చేయాలి.

```text id="p2"
Login Once
    │
    ▼
Save storageState
    │
    ▼
Reuse In All Tests
```

---

### Authentication Flow

```text id="p3"
Login
   │
   ▼
Cookies Created
   │
   ▼
storageState.json
   │
   ▼
All Tests Use Same Session
```

---

### Benefits

✅ Faster Execution

✅ No Repeated Login

✅ Stable Tests

✅ Better CI/CD

✅ Role-Based Testing

---

## 2. Easy to Remember

✅ Login Once

✅ Save Session

✅ Reuse Everywhere

✅ Stores Cookies

✅ Stores Local Storage

✅ Faster Execution

### One-Line Summary

**storageState saves authenticated browser sessions and allows tests to start already logged in.**

### Selenium vs Playwright

| Selenium                | Playwright            |
| ----------------------- | --------------------- |
| Login Every Test        | Login Once            |
| Slower Execution        | Faster Execution      |
| Manual Session Handling | Built-in storageState |

---

## 3. Telugu Interview Answer

storageState అనేది Playwright లో Authentication Session ను Save చేసే Feature.

Login Success అయిన తర్వాత Browser Cookies, Local Storage మరియు Session Information ను JSON File గా Save చేస్తుంది.

తర్వాత అన్ని Tests ఆ File ను Reuse చేసి Direct గా Authenticated State లో Start అవుతాయి.

దీనివల్ల ప్రతి Test ముందు Login చేయాల్సిన అవసరం ఉండదు.

మా Project లో Admin మరియు User Roles కోసం Separate storageState Files Create చేశాము.

Global Setup లో Login చేసి Session Save చేసేవాళ్ళం.

అన్ని Tests అదే Authentication State ను Reuse చేసేవి.

దీనివల్ల Execution Time చాలా తగ్గింది మరియు CI/CD Execution Fast అయింది.

---

## 4. Simple English Answer

storageState is a Playwright feature that saves browser authentication data.

It stores:

* Cookies
* Local Storage
* Session Information

Instead of logging in before every test, we log in once, save the session, and reuse it in all tests.

This makes execution faster and more reliable.

---

## 5. English Interview Answer

storageState is a Playwright feature used to save authenticated browser sessions.

After a successful login, Playwright stores cookies, local storage, and session data into a JSON file.

This file can then be reused across multiple tests, allowing tests to start in an already authenticated state.

Instead of performing login repeatedly, authentication is executed once during Global Setup and shared across the entire test suite.

In my project, I implemented role-based authentication using separate storageState files for Admin and User accounts. This significantly reduced execution time and improved test stability.

For large automation suites, storageState is one of the most effective techniques for optimizing authentication workflows.

---

## 6. Real-Time Project Example

In my Playwright automation project:

Without storageState:

```text id="p4"
300 Tests
    │
Login Every Test
    │
25+ Minutes Wasted
```

With storageState:

```text id="p5"
Login Once
    │
Save Session
    │
Run 300 Tests
```

We created:

```text id="p6"
auth/admin.json

auth/user.json
```

Admin tests used admin.json.

User tests used user.json.

This reduced execution time significantly.

---

## 7. Code Example (TypeScript)

### Step 1: Login and Save storageState

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

### Step 2: Configure Playwright

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {

    storageState: 'auth/admin.json'

  }

});
```

### Step 3: Run Authenticated Test

```typescript
import { test, expect } from '@playwright/test';

test('Dashboard Test', async ({ page }) => {

  await page.goto('/dashboard');

  await expect(page.locator('h1'))
      .toHaveText('Dashboard');

});
```

### Multiple Roles Example

```typescript
projects: [

{
  name: 'admin',
  use: {
    storageState: 'auth/admin.json'
  }
},

{
  name: 'user',
  use: {
    storageState: 'auth/user.json'
  }
}

]
```

---

✅ **Next: Q7. What are Playwright Fixtures and why are they better than beforeEach()?**
(Very important framework question for 3+ years Playwright interviews.)
