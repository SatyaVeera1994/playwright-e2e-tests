# Q1. What are all the web-first assertions in Playwright?

## 1. Telugu Concept

Playwright లో **Web-First Assertions** అనేవి Auto-Retry అయ్యే Assertions.

అంటే Assertion execute చేసిన వెంటనే Fail అవ్వదు.

Condition Match అయ్యే వరకు Playwright Wait చేసి Retry చేస్తుంది.

ఉదాహరణ:

```typescript
await expect(page.locator('#status'))
  .toHaveText('Order Confirmed');
```

Element text వెంటనే రాకపోయినా Playwright కొంతసేపు Retry చేస్తుంది.

అందువల్ల Flaky Tests తగ్గుతాయి.

### Common Web-First Assertions

### Visibility Assertions

```typescript
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
```

### State Assertions

```typescript
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
```

### Text Assertions

```typescript
await expect(locator).toHaveText('Success');
await expect(locator).toContainText('Success');
```

### Input Value Assertions

```typescript
await expect(locator).toHaveValue('Satya');
```

### Count Assertions

```typescript
await expect(locator).toHaveCount(5);
```

### Attribute Assertions

```typescript
await expect(locator)
  .toHaveAttribute('type', 'email');
```

### URL Assertions

```typescript
await expect(page)
  .toHaveURL('/dashboard');
```

### Title Assertions

```typescript
await expect(page)
  .toHaveTitle('Dashboard');
```

---

## 2. Easy to Remember

✅ toBeVisible()

✅ toBeHidden()

✅ toBeEnabled()

✅ toBeDisabled()

✅ toHaveText()

✅ toContainText()

✅ toHaveValue()

✅ toHaveCount()

✅ toHaveAttribute()

✅ toHaveURL()

✅ toHaveTitle()

### One-Line Summary

**Web-First Assertions automatically retry until the condition passes or timeout occurs.**

---

## 3. Telugu Interview Answer

Playwright లో Web-First Assertions అనేవి Auto-Retry Mechanism తో పనిచేస్తాయి.

DOM లో Element వెంటనే Available కాకపోయినా Assertion Fail అవ్వకుండా Condition Match అయ్యే వరకు Wait చేస్తుంది.

నేను ఎక్కువగా toBeVisible(), toHaveText(), toHaveCount(), toHaveURL() వంటి Assertions ఉపయోగిస్తాను.

ఇవి Tests ని Stable గా ఉంచి Flaky Failures ని తగ్గిస్తాయి.

అలాగే Form Validation లేదా Multiple Checks ఉన్నప్పుడు expect.soft() ఉపయోగించి అన్ని Assertions Run అయ్యేలా చేస్తాను.

---

## 4. Simple English Answer

Web-first assertions automatically retry until the expected condition is met.

They make Playwright tests more stable and reduce flaky failures.

Common assertions are:

* toBeVisible()
* toHaveText()
* toHaveCount()
* toHaveURL()
* toBeEnabled()

---

## 5. English Interview Answer

Web-first assertions are Playwright assertions that automatically retry until the expected condition is satisfied or the timeout is reached.

Unlike traditional assertions, they do not fail immediately. They continuously poll the DOM and wait for the application state to become correct.

Common examples include:

* toBeVisible()
* toBeHidden()
* toHaveText()
* toContainText()
* toHaveCount()
* toHaveAttribute()
* toHaveURL()
* toHaveTitle()

These assertions improve test reliability and reduce flaky failures caused by timing issues.

I also use `expect.soft()` when I want to execute multiple validations and collect all failures in a single test run.

---

## 6. Real-Time Project Example

In my Playwright project, after creating a user, I verify:

* Success message is visible
* User count is updated
* URL navigates correctly

```typescript
await expect(successBanner)
  .toBeVisible();

await expect(userRows)
  .toHaveCount(5);

await expect(page)
  .toHaveURL(/users/);
```

Because these assertions retry automatically, the tests remain stable even when the application responds slowly.

---

## 7. Code Example (TypeScript)

### Visibility Assertion

```typescript
await expect(
  page.locator('#success-message')
).toBeVisible();
```

### Text Assertion

```typescript
await expect(
  page.locator('#status')
).toHaveText('Order Confirmed');
```

### Count Assertion

```typescript
await expect(
  page.locator('.product-card')
).toHaveCount(10);
```

### URL Assertion

```typescript
await expect(page)
  .toHaveURL('/dashboard');
```

### Title Assertion

```typescript
await expect(page)
  .toHaveTitle(/Dashboard/);
```

### Soft Assertions

```typescript
await expect.soft(
  page.locator('#name')
).toHaveText('Alice');

await expect.soft(
  page.locator('#email')
).toHaveText('alice@test.com');

await expect.soft(
  page.locator('#role')
).toHaveText('Admin');
```

---

## Interview Short Answer

> "Web-first assertions are Playwright assertions that automatically retry until the expected condition is met. Common assertions include toBeVisible(), toHaveText(), toHaveCount(), toHaveURL(), and toHaveTitle(). They improve test stability and reduce flaky failures. I also use expect.soft() when I want multiple validations to run in a single test execution."
