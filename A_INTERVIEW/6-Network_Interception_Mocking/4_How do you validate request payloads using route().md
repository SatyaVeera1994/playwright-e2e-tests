# Q4. How do you validate request payloads using route()?

## 1. Telugu Concept

`page.route()` ద్వారా API Request ని Intercept చేసినప్పుడు Request Details మొత్తం Access చేయవచ్చు.

### Request నుండి పొందగలిగే వివరాలు

✅ Method (GET, POST, PUT)

✅ Headers

✅ Request Body

✅ URL

✅ Query Parameters

Request Body ని Capture చేసి UI సరైన Data పంపుతున్నదా Verify చేయవచ్చు.

ఇది UI Testing మరియు API Contract Validation రెండింటికీ ఉపయోగపడుతుంది.

ఉదాహరణకు Checkout Page లో User "Place Order" Click చేసినప్పుడు:

* Items Correct గా పంపించాయా?
* Payment Method Correct గా పంపించిందా?
* Address Details పంపించాయా?

అనేవి Validate చేయవచ్చు.

---

## 2. Easy to Remember

✅ Capture Request Body

✅ Validate Payload

✅ Check Headers

✅ Verify API Contract

✅ No Backend Required

✅ Find UI Serialization Bugs

### One-Line Summary

**route() allows us to capture and validate API request payloads before sending a response.**

---

## 3. Telugu Interview Answer

Playwright లో route() ఉపయోగించి API Request Payload ని Validate చేయవచ్చు.

Route Handler లో `route.request()` ద్వారా Request Details Access చేస్తాము.

POST Requests కోసం `postDataJSON()` ఉపయోగించి Request Body Capture చేస్తాను.

తర్వాత UI నుండి పంపిన Data Correct గా ఉందో Verify చేస్తాను.

ఉదాహరణకు Checkout Flow లో Order API కి Items Count, Payment Method, Shipping Address వంటి Fields సరైన Values తో పంపబడుతున్నాయా Validate చేస్తాను.

దీనివల్ల UI మరియు API మధ్య Contract Issues త్వరగా గుర్తించవచ్చు.

---

## 4. Simple English Answer

I use route() to capture API requests and validate the request payload.

It helps verify that the UI sends the correct data to the backend.

I commonly validate request body fields, headers, and API methods.

---

## 5. English Interview Answer

Playwright's route() allows me to intercept API requests and inspect the request payload before returning a response.

Using `route.request().postDataJSON()`, I can capture the request body and verify that the application sends the correct data.

For example, in an order creation flow, I validate the items array, payment method, and shipping details.

This approach helps bridge UI testing and API contract testing because I can verify frontend behavior without relying on a real backend.

It is especially useful for complex forms where incorrect payload mapping can cause production issues.

---

## 6. Real-Time Project Example

In my Playwright project, I validate API payloads when users submit forms.

For example:

### User Creation API

```json
{
  "name": "Satya",
  "email": "satya@test.com",
  "role": "Admin"
}
```

After clicking **Create User**, I capture the request and verify:

* Name is correct
* Email is correct
* Role is correct

This ensures the frontend sends the expected API payload.

---

## 7. Code Example (TypeScript)

### Capture and Validate Request Payload

```typescript
import { test, expect } from '@playwright/test';

test('validate order request payload', async ({ page }) => {

  let requestBody: any;

  await page.route('**/api/orders', async route => {

    requestBody = route.request().postDataJSON();

    await route.fulfill({
      status: 201,
      body: JSON.stringify({
        orderId: 'ORD-001',
        status: 'pending'
      })
    });

  });

  await page.goto('/checkout');

  await page.getByRole('button', {
    name: 'Place Order'
  }).click();

  expect(requestBody.items).toHaveLength(2);

  expect(requestBody.paymentMethod)
    .toBe('credit_card');

  expect(requestBody.shippingAddress)
    .toBeDefined();

});
```

### Validate Request Method

```typescript
await page.route('**/api/orders', async route => {

  const method =
    route.request().method();

  expect(method).toBe('POST');

  await route.fulfill({
    status: 201
  });

});
```

### Validate Request Headers

```typescript
await page.route('**/api/orders', async route => {

  const headers =
    route.request().headers();

  expect(headers['content-type'])
    .toContain('application/json');

  await route.fulfill({
    status: 201
  });

});
```

---

### Interview Short Answer

> "I use route() to intercept API requests and validate the request payload using `route.request().postDataJSON()`. This helps verify that the UI sends the correct data, headers, and request method without depending on a real backend. It's very useful for validating complex form submissions and API contracts."
