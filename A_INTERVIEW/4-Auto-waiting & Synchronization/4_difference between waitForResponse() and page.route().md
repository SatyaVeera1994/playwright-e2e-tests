# Q4. What is the difference between waitForResponse() and page.route()?

## 1. Telugu Concept

Playwright లో **waitForResponse()** మరియు **page.route()** రెండూ Network/API Testing కోసం ఉపయోగిస్తాము.

కానీ వాటి Purpose వేర్వేరుగా ఉంటుంది.

### waitForResponse()

API Response ని Observe చేయడానికి ఉపయోగిస్తాము.

మన Application Real Backend కి Request పంపుతుంది.

మనం Response ని Capture చేసి Validate చేస్తాము.

```text id="s4vrf7"
UI
 ↓
Real API
 ↓
Response
 ↓
Validation
```

---

### page.route()

API Request ని Intercept చేసి Control చేయడానికి ఉపయోగిస్తాము.

మనమే Response పంపవచ్చు.

```text id="3sdm3l"
UI
 ↓
Intercept
 ↓
Mock Response
 ↓
Validation
```

---

## 2. Easy to Remember

✅ waitForResponse() = Observe

✅ page.route() = Control

✅ waitForResponse() = Real API

✅ page.route() = Mock API

✅ waitForResponse() = Validation

✅ page.route() = Simulation

### One-Line Summary

**waitForResponse() observes real API responses, while page.route() intercepts and controls API responses.**

---

## 3. Telugu Interview Answer

Playwright లో waitForResponse() మరియు page.route() రెండూ API Testing కోసం ఉపయోగిస్తాము కానీ వాటి Usage Different.

waitForResponse() ఉపయోగించి Real API Response ని Observe చేసి Validate చేస్తాను.

Request Payload, Response Status Code, Response Data వంటి వాటిని Verify చేయవచ్చు.

page.route() ఉపయోగించి API Calls ని Intercept చేసి Mock Responses Return చేయవచ్చు.

Backend Dependency లేకుండా UI Testing చేయడానికి ఇది ఉపయోగపడుతుంది.

మా Project లో Integration Testing కోసం waitForResponse() ఉపయోగించాము.

Error Scenarios అయిన 401, 404, 500 Responses Validate చేయడానికి page.route() ఉపయోగించి Mock Responses ఇచ్చాము.

---

## 4. Simple English Answer

waitForResponse() is used to observe and validate real API responses.

page.route() is used to intercept requests and return custom or mocked responses.

I use waitForResponse() for API validation and page.route() for mocking backend behavior.

---

## 5. English Interview Answer

waitForResponse() and page.route() serve different purposes in Playwright.

waitForResponse() is used to observe and validate actual API responses coming from the backend. It helps verify response status codes, payloads, and API behavior.

page.route() is used to intercept network requests and control the response returned to the application. It is commonly used for mocking APIs and testing edge cases.

In my projects, I use waitForResponse() when validating real backend integration and page.route() when I need to simulate specific scenarios such as API failures, empty responses, or timeout conditions.

A simple way to remember this is:

**waitForResponse() = Observe**

**page.route() = Control**

---

## 6. Real-Time Project Example

### Scenario 1: Validate Order Creation API

User clicks:

```text id="9pk5eh"
Place Order
```

Application calls:

```text id="cg54uz"
/api/orders
```

I use:

```typescript id="s8uh5u"
waitForResponse()
```

To verify:

* Status Code = 201
* Order ID Generated
* Correct Payload Sent

---

### Scenario 2: Test Payment Failure

Backend unavailable.

I use:

```typescript id="spfrhb"
page.route()
```

And return:

```json
{
  "error": "Payment Failed"
}
```

Then verify error message on UI.

---

## 7. Code Example (TypeScript)

### waitForResponse() Example

```typescript id="rxyjlwm"
const [response] = await Promise.all([

  page.waitForResponse(
    res =>
      res.url().includes('/api/orders') &&
      res.status() === 201
  ),

  page.getByRole('button', {
    name: 'Place Order'
  }).click()

]);

expect(response.status()).toBe(201);
```

---

### page.route() Example

```typescript id="b8lw3m9"
await page.route('**/api/payments', async route => {

  await route.fulfill({
    status: 402,
    contentType: 'application/json',
    body: JSON.stringify({
      error: 'Card Declined'
    })
  });

});
```

---

### Verify Error Message

```typescript id="mr5w8g4"
await expect(
  page.locator('.error-message')
).toHaveText('Card Declined');
```

---

### Interview Short Answer (30 Seconds)

> "waitForResponse() is used to observe and validate real API responses from the backend. page.route() is used to intercept requests and return mocked responses. I use waitForResponse() for integration testing and page.route() for mocking API behavior and testing error scenarios."
