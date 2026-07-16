# Q1. How does page.route() work in depth?

## 1. Telugu Concept

`page.route()` అనేది Playwright లో Network Interception Feature.

Browser నుండి API Request వెళ్ళే ముందు Request ని Intercept చేసి మనం Control చేయవచ్చు.

### page.route() ద్వారా చేయగలిగేవి

✅ Mock Response ఇవ్వవచ్చు

✅ Request Modify చేయవచ్చు

✅ Request Block చేయవచ్చు

✅ Real Response Modify చేయవచ్చు

### Main Methods

### route.fulfill()

Mock Response Return చేస్తుంది.

### route.continue()

Original Request ని Server కి పంపుతుంది.

### route.abort()

Request ని Block చేస్తుంది.

### route.fetch()

Real API Call చేసి Response Modify చేస్తుంది.

---

## 2. Easy to Remember

✅ fulfill() → Mock Response

✅ continue() → Forward Request

✅ abort() → Block Request

✅ fetch() → Modify Real Response

✅ API Mocking

✅ Error Testing

### One-Line Summary

**page.route() intercepts and controls network requests before they reach the server.**

---

## 3. Telugu Interview Answer

Playwright లో page.route() ఉపయోగించి API Requests ని Intercept చేయవచ్చు.

దీని ద్వారా Mock Responses ఇవ్వడం, Requests Modify చేయడం, Network Failures Simulate చేయడం సాధ్యమవుతుంది.

నేను UI Testing సమయంలో Backend Dependency తగ్గించడానికి route() ఉపయోగిస్తాను.

fulfill() ద్వారా Mock Data Return చేస్తాను.

abort() ద్వారా Failed Network Scenarios Test చేస్తాను.

continue() ద్వారా Headers Modify చేసి Request Forward చేస్తాను.

Complex Scenarios కోసం route.fetch() ఉపయోగించి Real Response Modify చేయవచ్చు.

ఇది Fast మరియు Reliable Automation కోసం చాలా Useful Feature.

---

## 4. Simple English Answer

page.route() allows us to intercept and control network requests.

We can mock responses, block requests, modify requests, or modify real API responses.

It is mainly used for API mocking and testing error scenarios.

---

## 5. English Interview Answer

page.route() is Playwright's network interception feature.

It allows us to intercept requests before they reach the server.

Using route.fulfill(), we can return mock responses.

Using route.abort(), we can simulate network failures.

Using route.continue(), we can modify and forward requests.

Using route.fetch(), we can fetch the real response, modify it, and return the modified response.

I use route() to isolate frontend testing from backend dependencies and to validate different API scenarios.

---

## 6. Real-Time Project Example

In my Playwright project, some UI screens depend on API responses.

Instead of depending on backend availability, I mock API responses using page.route().

For example:

* Product API
* User API
* Dashboard API

This makes test execution faster and more stable.

---

## 7. Code Example (TypeScript)

### Mock API Response

```typescript
await page.route('**/api/users', async route => {

  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([
      {
        id: 1,
        name: 'Satya'
      }
    ])
  });

});
```

### Block Request

```typescript
await page.route(
  '**/analytics/**',
  route => route.abort()
);
```

### Modify Request

```typescript
await page.route(
  '**/api/**',
  route =>
    route.continue({
      headers: {
        ...route.request().headers(),
        'X-Test': 'Playwright'
      }
    })
);
```

### Modify Real Response

```typescript
await page.route(
  '**/api/products',
  async route => {

    const response =
      await route.fetch();

    const data =
      await response.json();

    data.push({
      id: 999,
      name: 'Test Product'
    });

    await route.fulfill({
      response,
      json: data
    });

  }
);
```

---

### Interview Short Answer

> "page.route() allows me to intercept and control network requests. I use fulfill() for API mocking, abort() for failure scenarios, continue() for request modification, and fetch() for modifying real responses. It helps create fast and reliable UI tests without backend dependency."

---

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

# Q3. How do you test error states and edge cases using route()?

## 1. Telugu Concept

Error Scenarios Testing అనేది route() యొక్క Biggest Advantage.

Real Backend లో Trigger చేయడం కష్టమైన Scenarios ని Mock చేయవచ్చు.

### Examples

✅ 500 Server Error

✅ 401 Unauthorized

✅ 404 Not Found

✅ Empty Data

✅ Slow Response

---

## 2. Easy to Remember

✅ 500 Error Testing

✅ 401 Session Expiry

✅ Empty Data Testing

✅ No Backend Dependency

✅ Fast Execution

✅ Better Coverage

### One-Line Summary

**route() makes error and edge-case testing easy and reliable.**

---

## 3. Telugu Interview Answer

Real Systems లో Error Scenarios ని Reproduce చేయడం చాలా కష్టం.

Playwright route() ఉపయోగించి నేను 500 Errors, 401 Session Expiry మరియు Empty State Scenarios ని Test చేయగలను.

Backend Changes అవసరం లేదు.

Mock Response ద్వారా Error State Trigger చేసి UI Properly Handle చేస్తున్నదా Verify చేస్తాను.

ఇది Application Reliability Testing కి చాలా Important.

---

## 4. Simple English Answer

I use route() to simulate API failures and edge cases.

This helps validate how the UI behaves during unexpected situations.

---

## 5. English Interview Answer

I use route() to test error scenarios such as server errors, unauthorized access, and empty responses.

These scenarios are difficult to trigger reliably in real environments.

By mocking API responses, I can verify that the UI correctly displays error messages, redirects users, or handles empty states.

This improves application reliability and test coverage.

---

## 6. Real-Time Project Example

In a dashboard application:

* API returns 500 → Show Error Banner
* API returns 401 → Redirect Login
* API returns [] → Show Empty State

All these scenarios can be tested without modifying backend data.

---

## 7. Code Example (TypeScript)

### 500 Error

```typescript
await page.route(
  '**/api/orders',
  route =>
    route.fulfill({
      status: 500
    })
);
```

### 401 Unauthorized

```typescript
await page.route(
  '**/api/**',
  route =>
    route.fulfill({
      status: 401
    })
);
```

### Empty State

```typescript
await page.route(
  '**/api/products',
  route =>
    route.fulfill({
      status: 200,
      body: JSON.stringify([])
    })
);
```

---

### Interview Short Answer

> "I use route() to simulate error scenarios such as 500 server errors, 401 unauthorized responses, and empty datasets. This helps validate UI behavior under real-world failure conditions without depending on backend systems."
