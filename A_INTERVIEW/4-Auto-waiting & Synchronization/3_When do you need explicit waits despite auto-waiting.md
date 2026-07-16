# Q3. When do you need explicit waits despite auto-waiting?

## 1. Telugu Concept

Playwright Auto-Waiting చాలా Scenarios Handle చేస్తుంది.

కానీ కొన్ని ప్రత్యేక పరిస్థితుల్లో Explicit Waits అవసరం అవుతాయి.

### Common Scenarios

### 1. URL Change

Button Click చేసిన తర్వాత New Page కి Navigate అయితే.

```typescript
await page.waitForURL('/checkout');
```

---

### 2. Loading Spinner Disappear

Loading పూర్తయ్యే వరకు Wait చేయాలి.

```typescript
await page.locator('#spinner')
  .waitFor({ state: 'hidden' });
```

---

### 3. API Response Wait

Button Click చేసిన తర్వాత API Response Verify చేయాలి.

```typescript
await page.waitForResponse();
```

---

### 4. Custom JavaScript State

Application Ready అయ్యిందా లేదా Check చేయాలి.

```typescript
await page.waitForFunction();
```

---

## 2. Easy to Remember

✅ URL Change

✅ Spinner Disappear

✅ API Response

✅ Custom JS State

✅ Avoid waitForTimeout()

✅ Use Smart Waits

### One-Line Summary

**Auto-waiting handles element readiness, but explicit waits are needed for application state changes.**

---

## 3. Telugu Interview Answer

Playwright Auto-Waiting Element Actions కోసం సరిపోతుంది.

కానీ Application State Changes కోసం Explicit Waits అవసరం అవుతాయి.

ఉదాహరణకు Navigation తర్వాత URL Verify చేయడానికి waitForURL() ఉపయోగిస్తాను.

Loading Spinner పూర్తిగా disappear అయ్యే వరకు waitFor() ఉపయోగిస్తాను.

API Response Verification కోసం waitForResponse() ఉపయోగిస్తాను.

Custom Application Ready State కోసం waitForFunction() ఉపయోగిస్తాను.

మా Project లో Dashboard Loading సమయంలో Spinner కనిపించేది. Spinner Hidden అయిన తర్వాత మాత్రమే Assertions Execute చేసేలా Explicit Wait ఉపయోగించాము.

---

## 4. Simple English Answer

Playwright auto-waiting handles element interactions automatically.

However, explicit waits are still needed for:

* URL changes
* Loading spinners
* API responses
* Custom JavaScript conditions

I use targeted waits instead of hard waits.

---

## 5. English Interview Answer

Playwright's auto-waiting handles element actionability, but it does not automatically handle every application state change.

I use explicit waits when waiting for URL changes, loading indicators to disappear, API responses, or custom JavaScript conditions.

For example, after clicking a Checkout button, I may use waitForURL() to confirm navigation.

For API validation, I use waitForResponse() with Promise.all().

In my projects, I avoid waitForTimeout() and prefer condition-based waits because they are more reliable and faster.

---

## 6. Real-Time Project Example

In my project, after clicking "Generate Report", a loading spinner appeared.

The report data was displayed only after the spinner disappeared.

So I used:

```typescript
await page.locator('#loading-spinner')
  .waitFor({ state: 'hidden' });
```

This ensured that validation started only after the report was fully loaded.

---

## 7. Code Example (TypeScript)

### Wait For URL

```typescript
await page
  .getByRole('button', {
    name: 'Checkout'
  })
  .click();

await page.waitForURL('/checkout');
```

---

### Wait For Spinner

```typescript
await page.locator('#spinner')
  .waitFor({
    state: 'hidden'
  });
```

---

### Wait For Response

```typescript
const [response] = await Promise.all([

  page.waitForResponse(
    res =>
      res.url().includes('/orders') &&
      res.status() === 201
  ),

  page.getByRole('button', {
    name: 'Place Order'
  }).click()

]);
```

---

### Wait For Function

```typescript
await page.waitForFunction(() => {
  return window['APP_READY'] === true;
});
```

---

### Interview Short Answer

> "I use explicit waits when waiting for URL changes, loading spinners, API responses, or custom application states. I prefer condition-based waits like waitForURL(), waitForResponse(), and waitForFunction() instead of hard waits because they are more reliable and maintainable."

---

Next: **Q4. What is the difference between waitForResponse() and page.route()?** (Very important Playwright API interview question.)
