---

# Q6. How does Playwright's expect() retry mechanism work?

## 1. Telugu Concept

Playwright Assertions Automatically Retry అవుతాయి.

ఉదాహరణ:

```typescript
await expect(
  page.locator('#status')
).toHaveText('Success');
```

Playwright వెంటనే Fail చేయదు.

Expected Value వచ్చే వరకు Retry చేస్తుంది.

---

### Web-First Assertions

```typescript
toBeVisible()
toHaveText()
toHaveValue()
toHaveURL()
```

ఇవి Retry అవుతాయి.

---

### State Methods

```typescript
isVisible()
isEnabled()
isChecked()
```

ఇవి ఒక్కసారి మాత్రమే Check చేస్తాయి.

Retry చేయవు.

---

## 2. Easy to Remember

✅ expect() = Auto Retry

✅ toBeVisible() = Retry

✅ toHaveText() = Retry

✅ isVisible() = One-Time Check

✅ Web-First Assertions Preferred

✅ Reduces Flaky Tests

### One-Line Summary

**expect() automatically retries until the condition becomes true or timeout occurs.**

---

## 3. Telugu Interview Answer

Playwright Assertions Web-First Approach ను Follow చేస్తాయి.

expect() Assertions వెంటనే Fail కావు.

Expected Condition Match అయ్యే వరకు Retry అవుతాయి.

ఉదాహరణకు toBeVisible() ఉపయోగిస్తే Element Visible అయ్యే వరకు Wait చేస్తుంది.

కానీ isVisible() మాత్రం ఒక్కసారి మాత్రమే Check చేస్తుంది.

అందువల్ల Assertions కోసం ఎల్లప్పుడూ expect() Assertions ఉపయోగిస్తాను.

ఇది Flaky Tests తగ్గించడంలో చాలా సహాయపడుతుంది.

---

## 4. Simple English Answer

Playwright's expect() automatically retries until the expected condition is met.

Methods like toBeVisible() and toHaveText() keep polling until success or timeout.

Methods like isVisible() check only once.

---

## 5. English Interview Answer

Playwright's web-first assertions automatically retry until the assertion passes or the configured timeout is reached.

For example, toBeVisible() continuously checks whether an element becomes visible.

This is different from isVisible(), which performs a single immediate check.

In my projects, I use web-first assertions because they improve reliability and reduce flaky failures caused by timing issues.

---

## 6. Real-Time Project Example

In my project, order status changed from:

```text
Processing
```

to

```text
Completed
```

after an API response.

Instead of hard waits, I used:

```typescript
await expect(
  page.locator('#status')
).toHaveText('Completed');
```

Playwright automatically retried until the status updated.

---

## 7. Code Example (TypeScript)

### Correct

```typescript
await expect(
  page.locator('#result')
).toBeVisible();
```

### Wrong

```typescript
const visible =
  await page.locator('#result')
    .isVisible();

expect(visible).toBe(true);
```

### Conditional Logic

```typescript
const visible =
  await page.locator('#phone')
    .isVisible();

if (visible) {
  await page.locator('#phone')
    .fill('9876543210');
}
```

---

### Interview Short Answer

> "Playwright's expect() uses automatic retrying. Assertions such as toBeVisible() and toHaveText() continuously poll until success or timeout. I use web-first assertions because they make tests more stable and reduce synchronization issues."

For interviews, **Q5 and Q6 are very important**. **Q7 (page.clock)** is advanced and usually asked in senior-level Playwright interviews.
