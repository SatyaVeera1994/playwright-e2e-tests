Great! Let's continue with **Q4** in the same README format.

````markdown
# Q4. How does Network Interception work in Playwright?
### ✅ English Answer
### One-Line Summary

**Playwright Network Interception allows us to capture, modify, mock, or block network requests before they reach the server.**
“Using page.route(), we can intercept API calls and mock or modify responses.”

## 1. Telugu Concept

### Network Interception అంటే ఏమిటి?

Network Interception అంటే Browser నుండి Server కి వెళ్లే **HTTP Requests** లేదా Server నుండి Browser కి వచ్చే **Responses** ను మధ్యలో Capture చేసి, Modify చేయడం, Mock చేయడం లేదా Block చేయడం.

Playwright లో దీనిని `page.route()` ఉపయోగించి చేస్తాము.

```text
Browser
   │
   │ Request
   ▼
Playwright (page.route())
   │
   ├── Continue Request
   ├── Modify Request
   ├── Mock Response
   └── Abort Request
   │
   ▼
Server
```

Playwright Request Server కి వెళ్లే ముందు దానిని Intercept చేస్తుంది.

అప్పుడు మనం ఈ Operations చేయవచ్చు.

### 1. route.continue()

Original Request ని Server కి పంపుతుంది.

```text
Browser
   │
   ▼
Playwright
   │
Continue
   │
   ▼
Server
```

---

### 2. route.fulfill()

Server కి Request పంపకుండా మనమే Fake Response ఇస్తాము.

దీనిని **Mock API Response** అంటారు.

```text
Browser
   │
   ▼
Playwright
   │
Mock Response
   │
   ▼
Browser
```

Backend Down ఉన్నా కూడా UI Testing చేయవచ్చు.

---

### 3. route.abort()

Request ని పూర్తిగా Cancel చేస్తుంది.

దీనితో Network Failure ని Test చేయవచ్చు.

ఉదాహరణ

- API Failure
- Internet Failure
- Analytics Request Block

---

### 4. route.fetch()

Original Response తీసుకుని కొన్ని Fields మార్చి Browser కి పంపుతుంది.

ఇది Response Modification కోసం ఉపయోగిస్తారు.

---

### Network Interception ఎందుకు ఉపయోగిస్తాము?

✅ API Mocking

✅ Backend Dependency Remove

✅ Faster Execution

✅ Error Scenario Testing

✅ Offline Testing

✅ Analytics Blocking

---

## 2. Easy to Remember

### Key Points

✅ page.route() → Intercepts Network Requests

✅ route.continue() → Send Original Request

✅ route.fulfill() → Return Mock Response

✅ route.abort() → Block Request

✅ route.fetch() → Modify Original Response

✅ Used for API Mocking and Error Testing

### One-Line Summary

**Playwright Network Interception allows us to capture, modify, mock, or block network requests before they reach the server.**

---

## 3. Telugu Interview Answer

Playwright లో Network Interception అనేది ఒక Powerful Feature.

దీనివల్ల Browser నుండి Server కి వెళ్లే Requests ను మధ్యలో Capture చేసి Modify చేయవచ్చు లేదా Mock చేయవచ్చు.

దీనిని `page.route()` ద్వారా Implement చేస్తాము.

మనకు నాలుగు ముఖ్యమైన Methods ఉన్నాయి.

- `route.continue()` → Original Request పంపుతుంది.

- `route.fulfill()` → Fake Response ఇస్తుంది.

- `route.abort()` → Request Cancel చేస్తుంది.

- `route.fetch()` → Original Response Modify చేస్తుంది.

మా Project లో Frontend Testing సమయంలో Backend Team API ఇంకా Complete చేయలేదు.

అప్పుడు మేము Mock Responses ఉపయోగించి UI Automation Complete చేశాము.

500 Error, 401 Unauthorized మరియు Empty Data వంటి Scenarios కూడా route.fulfill() ఉపయోగించి Test చేశాము.

Analytics Requests ను route.abort() ద్వారా Block చేశాము. అందువల్ల Test Runs వల్ల Production Analytics Data Pollute కాలేదు.

---

## 4. English Interview Answer

Network Interception is one of the most powerful features available in Playwright.

It allows us to intercept HTTP requests before they reach the server and either continue, modify, mock, or abort those requests.

This is implemented using the `page.route()` API.

Playwright provides four important methods:

- **route.continue()** forwards the original request to the server.
- **route.fulfill()** returns a mocked response without contacting the server.
- **route.abort()** blocks the request and simulates network failures.
- **route.fetch()** retrieves the real response, allowing us to modify it before returning it to the browser.

In my project, we used Network Interception extensively to decouple frontend automation from backend dependencies. We mocked API responses to validate UI behavior, simulated HTTP 500 and 401 responses for negative testing, and blocked analytics requests during automation runs to avoid polluting production dashboards.

This approach improved execution speed, increased test reliability, and allowed us to validate scenarios that were difficult to reproduce using live backend services.

---

## 5. Real-Time Project Example

In my Playwright automation project, our frontend team often completed UI development before backend APIs were fully available.

Instead of waiting for backend development, we used `page.route()` with `route.fulfill()` to mock API responses.

For example:

- Customer Details API
- Policy List API
- Premium Calculation API

We also tested:

- HTTP 500 Internal Server Error
- HTTP 401 Unauthorized
- Empty Response
- Invalid Data

Additionally, we blocked third-party analytics requests using `route.abort()`, ensuring that automation executions did not affect production analytics reports.

This allowed our UI automation to run independently of backend availability and significantly reduced execution failures caused by unstable APIs.

---

## 6. Code Example (TypeScript)

### Mock API Response

```typescript
import { test, expect } from '@playwright/test';

test('Mock Customer API', async ({ page }) => {

  await page.route('**/api/customers', async route => {

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 1,
          name: 'Satya'
        },
        {
          id: 2,
          name: 'Durga'
        }
      ])
    });

  });

  await page.goto('https://example.com/customers');

  await expect(page.locator('text=Satya')).toBeVisible();

});
```

### Block Analytics Request

```typescript
await page.route('**/analytics/**', route => {
    route.abort();
});
```

### Continue Original Request

```typescript
await page.route('**/api/**', route => {
    route.continue();
});
```

### Modify Response using route.fetch()

```typescript
await page.route('**/api/user', async route => {

    const response = await route.fetch();

    const json = await response.json();

    json.name = 'Playwright User';

    await route.fulfill({
        response,
        json
    });

});
```
````

---

✅ **Next:** **Q5. What is `storageState` and how does it save authentication time?** This is another very common Playwright interview question, and we'll follow the same detailed README format.
