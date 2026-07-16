# Q2. How do you mock API responses for an entire test suite?

## 1. Telugu Concept

ప్రతి Test లో Route Mocking రాయకుండా Fixture Level లో Mock Setup చేయడం Suite-Level API Mocking.

ఒకసారి Fixture లో Mock Configure చేస్తే అన్ని Tests కి Apply అవుతుంది.

ఇది Large Frameworks లో చాలా Useful.

---

## 2. Easy to Remember

✅ Centralized Mocking

✅ Reusable Across Tests

✅ Less Duplicate Code

✅ Faster Execution

✅ Stable Testing

✅ Fixture Based Setup

### One-Line Summary

**Define API mocks in fixtures so all tests automatically use them.**

---

## 3. Telugu Interview Answer

Large Automation Frameworks లో ప్రతి Test లో Route Setup చేయడం Maintain చేయడం కష్టం.

అందుకే నేను Fixtures లో Common API Mocking Configure చేస్తాను.

Users API, Products API వంటి Common Endpoints Fixture Level లో Mock చేస్తాను.

Analytics Calls ని Abort చేస్తాను.

దీనివల్ల అన్ని Tests Consistent Mock Data ఉపయోగిస్తాయి.

Maintenance కూడా చాలా Easy అవుతుంది.

---

## 4. Simple English Answer

I create API mocks in fixtures.

All tests automatically use the mocked responses.

This reduces duplicate code and improves maintainability.

---

## 5. English Interview Answer

For suite-level API mocking, I define route handlers inside Playwright fixtures.

The fixture automatically applies API mocks before each test.

This ensures all tests use the same mocked data.

I also block analytics and tracking requests to avoid polluting production dashboards.

This approach improves stability, speed, and maintainability.

---

## 6. Real-Time Project Example

In my Playwright framework, I can keep:

```text
users.json
products.json
dashboard.json
```

inside a mock folder.

Fixtures automatically load these responses.

All tests run using the same controlled data.

---

## 7. Code Example (TypeScript)

### mocks.fixture.ts

```typescript
import { test as base } from '@playwright/test';
import usersData from '../data/users.json';

export const test = base.extend({

  page: async ({ page }, use) => {

    await page.route(
      '**/api/users',
      async route => {

        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(usersData)
        });

      }
    );

    await use(page);

  }

});
```

---

### Interview Short Answer

> "I implement suite-level API mocking using Playwright fixtures. Common API mocks are configured once in the fixture file and automatically applied to all tests. This reduces duplication and improves test stability."

---