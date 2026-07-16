# Q2. What are the timeout levels in Playwright and how should you configure them?

## 1. Telugu Concept

Playwright లో Different Types of Timeouts ఉంటాయి.

Timeout అంటే ఒక Action లేదా Assertion Complete అవ్వడానికి Playwright ఎంతసేపు Wait చేయాలో నిర్ణయించే Time Limit.

Main గా 4 Types:

### 1. Test Timeout

మొత్తం Test Case Complete అవ్వడానికి Maximum Time.

Default:

```typescript id="3j1xv9"
30 seconds
```

---

### 2. Action Timeout

Click, Fill, Select వంటి Actions కోసం Wait చేసే Time.

Example:

```typescript id="yhjqln"
click()
fill()
check()
```

---

### 3. Navigation Timeout

Page Navigation కోసం.

Example:

```typescript id="6uv2k6"
goto()
reload()
waitForURL()
```

---

### 4. Expect Timeout

Assertions కోసం.

Example:

```typescript id="t7u6we"
toBeVisible()
toHaveText()
toHaveURL()
```

Default:

```typescript id="nd7vkt"
5 seconds
```

---

## 2. Easy to Remember

✅ Test Timeout → Entire Test

✅ Action Timeout → Click/Fill

✅ Navigation Timeout → Page Load

✅ Expect Timeout → Assertions

✅ Configure Globally

✅ Override When Needed

### One-Line Summary

**Playwright provides separate timeout settings for tests, actions, navigation, and assertions.**

---

## 3. Telugu Interview Answer

Playwright లో నాలుగు ముఖ్యమైన Timeout Levels ఉంటాయి.

Test Timeout మొత్తం Test Execution Time ని Control చేస్తుంది.

Action Timeout Click, Fill వంటి User Actions కోసం ఉపయోగిస్తాము.

Navigation Timeout Page Loading మరియు Navigation Operations కోసం ఉపయోగిస్తాము.

Expect Timeout Assertions కోసం ఉపయోగిస్తాము.

నేను సాధారణంగా Global Configuration లో Reasonable Timeouts Set చేస్తాను.

Slow Test Cases కోసం Global Timeout Increase చేయకుండా test.slow() ఉపయోగిస్తాను.

దీనివల్ల Performance Issues త్వరగా Detect చేయగలుగుతాము.

---

## 4. Simple English Answer

Playwright provides different timeout levels for different operations.

* Test Timeout → Entire test
* Action Timeout → Clicks and fills
* Navigation Timeout → Page loading
* Expect Timeout → Assertions

I configure them globally and override them only when required.

---

## 5. English Interview Answer

Playwright provides multiple timeout levels to control different parts of test execution.

Test Timeout controls the maximum execution time for the entire test.

Action Timeout controls individual actions such as click(), fill(), and selectOption().

Navigation Timeout controls page navigation operations like goto() and waitForURL().

Expect Timeout controls how long assertions wait before failing.

In my projects, I configure reasonable global timeouts and use specific overrides only for slow workflows. This helps identify performance issues early instead of masking them with very large timeout values.

---

## 6. Real-Time Project Example

In my project, report generation takes longer than normal pages.

Instead of increasing the global timeout for all tests, I used:

```typescript id="g5ewyo"
test.slow();
```

Only the report-related tests got extra time.

This kept normal tests fast while supporting slow business flows.

---

## 7. Code Example (TypeScript)

### Global Configuration

```typescript id="abnjf7"
import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 60000,

  expect: {
    timeout: 10000
  },

  use: {
    actionTimeout: 15000,
    navigationTimeout: 30000
  }

});
```

---

### Test Timeout

```typescript id="98l75h"
test('Report Test', async ({ page }) => {

  test.slow();

  await page.goto('/reports');

});
```

---

### Action Timeout

```typescript id="azbxdf"
await page
  .locator('#submit')
  .click({
    timeout: 45000
  });
```

---

### Expect Timeout

```typescript id="bprxqd"
await expect(
  page.locator('#success-message')
).toBeVisible({
  timeout: 20000
});
```

---

### Navigation Timeout

```typescript id="of4l6w"
await page.goto(
  'https://example.com',
  {
    timeout: 30000
  }
);
```

---

### Interview Short Answer (30 Seconds)

> "Playwright provides four timeout levels: Test Timeout, Action Timeout, Navigation Timeout, and Expect Timeout. I configure them globally in playwright.config.ts and override them only for specific slow scenarios. This keeps tests fast, reliable, and easier to maintain."
