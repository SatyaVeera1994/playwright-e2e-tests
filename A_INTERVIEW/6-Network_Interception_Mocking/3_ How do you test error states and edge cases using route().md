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

