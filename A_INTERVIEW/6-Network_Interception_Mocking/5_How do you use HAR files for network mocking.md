# Q5. How do you use HAR files for network mocking?

## 1. Telugu Concept

HAR అంటే **HTTP Archive File**.

ఒక Application లో జరిగే అన్ని Network Requests మరియు Responses ని HAR File లో Store చేయవచ్చు.

Playwright లో `routeFromHAR()` ఉపయోగించి ఆ HAR File ని Replay చేయవచ్చు.

దీనివల్ల:

✅ Real Backend అవసరం ఉండదు

✅ Faster Execution

✅ Stable Tests

✅ Offline Testing

✅ Third-party APIs Mock చేయవచ్చు

ఉదాహరణకు Checkout Flow లో:

* Login API
* Product API
* Payment API
* Order API

అన్నీ HAR File లో Record అవుతాయి.

తర్వాత Test Run సమయంలో Backend కి Calls వెళ్లకుండా HAR File నుంచే Responses వస్తాయి.

---

## 2. Easy to Remember

✅ HAR = HTTP Archive

✅ Records Network Traffic

✅ Replay Requests Later

✅ No Real Backend Required

✅ Faster Test Execution

✅ Useful for Third-Party APIs

### One-Line Summary

**HAR files record real network traffic once and replay it later for stable and fast testing.**

---

## 3. Telugu Interview Answer

Playwright లో HAR Files ఉపయోగించి Network Mocking చేయవచ్చు.

HAR File అనేది Application యొక్క Network Requests మరియు Responses యొక్క Snapshot లాంటిది.

మొదట Real Environment లో HAR File Record చేస్తాము.

తర్వాత `routeFromHAR()` ఉపయోగించి అదే Responses ని Replay చేస్తాము.

దీనివల్ల Backend Availability మీద Dependency తగ్గుతుంది మరియు Tests మరింత Stable గా Run అవుతాయి.

ప్రత్యేకంగా Payment Gateways, Shipping APIs, Address Validation APIs వంటి Third-Party Integrations Testing లో HAR చాలా Useful.

---

## 4. Simple English Answer

HAR stands for HTTP Archive.

It records all network requests and responses from a real application session.

Using `routeFromHAR()`, Playwright can replay the recorded traffic without calling the real backend.

This makes tests faster, stable, and independent of external services.

---

## 5. English Interview Answer

HAR files are used to record real network traffic and replay it during test execution.

In Playwright, I use `routeFromHAR()` to mock API responses from a previously recorded HAR file.

The main advantage is that tests become independent of backend availability and execute much faster.

HAR files are especially useful when testing third-party integrations such as payment gateways, shipping services, and external APIs where we don't have control over the backend.

I usually record the HAR file once in a stable environment and reuse it across multiple test runs to ensure deterministic behavior.

---

## 6. Real-Time Project Example

In my Playwright automation project, if a payment or external API is unstable, I can record the network traffic once and save it as a HAR file.

Instead of calling the real API during every test execution:

* Playwright reads responses from HAR
* Tests run faster
* No dependency on backend uptime
* Results remain consistent

This is very useful when running regression suites in CI/CD pipelines.

---

## 7. Code Example (TypeScript)

### Record HAR File

```typescript
import { test } from '@playwright/test';

test('record checkout flow', async ({ page }) => {

  await page.routeFromHAR(
    'fixtures/checkout.har',
    { update: true }
  );

  await page.goto('/checkout');

  // Complete checkout flow

});
```

### Replay HAR File

```typescript
import { test, expect } from '@playwright/test';

test('checkout using HAR', async ({ page }) => {

  await page.routeFromHAR(
    'fixtures/checkout.har',
    {
      url: '**/api/**',
      notFound: 'fallthrough'
    }
  );

  await page.goto('/checkout');

  await page.getByRole('button', {
    name: 'Place Order'
  }).click();

  await expect(
    page.locator('#order-confirmation')
  ).toBeVisible();

});
```

### Replay All Network Requests

```typescript
await page.routeFromHAR(
  'fixtures/app.har'
);
```

---

## Interview Short Answer

> "HAR files allow us to record real network traffic and replay it later using Playwright's `routeFromHAR()` method. This helps create stable and fast tests without depending on a real backend. I use HAR files mainly for complex flows and third-party integrations where backend availability can affect test execution."
