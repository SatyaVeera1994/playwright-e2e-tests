# Q5. How does page.waitForLoadState() work and when do you use each option?

## 1. Telugu Concept

Playwright లో `waitForLoadState()` Page Loading పూర్తయ్యే వరకు Wait చేయడానికి ఉపయోగిస్తాము.

ముఖ్యంగా 3 Load States ఉంటాయి.

### 1. domcontentloaded

HTML పూర్తిగా Parse అవుతుంది.

Images, CSS, Fonts పూర్తిగా Load అవ్వాల్సిన అవసరం లేదు.

ఇది Fastest Option.

```text
HTML Ready
✓
Images
✗
```

---

### 2. load

HTML + CSS + Images + Resources అన్నీ Load అవుతాయి.

ఇది Default Behavior.

```text
HTML
✓

CSS
✓

Images
✓
```

---

### 3. networkidle

500ms పాటు Network Requests లేకపోతే Ready అని Consider చేస్తుంది.

AJAX Heavy Applications కోసం ఉపయోగిస్తారు.

```text
No Network Calls
for 500ms
```

---

## 2. Easy to Remember

✅ domcontentloaded → HTML Ready

✅ load → Full Page Ready

✅ networkidle → No Network Requests

✅ load = Default

✅ networkidle = AJAX Pages

✅ Prefer Element Waits

### One-Line Summary

**waitForLoadState() waits for different levels of page loading completion.**

---

## 3. Telugu Interview Answer

Playwright లో waitForLoadState() Page Loading Synchronization కోసం ఉపయోగిస్తాము.

మూడు Options ఉన్నాయి.

domcontentloaded HTML Parse పూర్తైన వెంటనే Continue అవుతుంది.

load అనేది HTML, CSS, Images వంటి Resources పూర్తిగా Load అయిన తర్వాత Continue అవుతుంది.

networkidle 500 milliseconds పాటు Network Activity లేకపోతే Continue అవుతుంది.

నా Project లో సాధారణంగా domcontentloaded తర్వాత Specific Element Visible అయ్యే వరకు Wait చేస్తాను.

networkidle చాలా తక్కువగా ఉపయోగిస్తాను ఎందుకంటే Background API Calls లేదా Polling ఉంటే అది Unstable గా ఉండవచ్చు.

---

## 4. Simple English Answer

Playwright provides three load states:

* domcontentloaded → HTML loaded
* load → All resources loaded
* networkidle → No network requests for 500ms

I usually use domcontentloaded and then wait for a specific element to become visible.

---

## 5. English Interview Answer

Playwright's waitForLoadState() waits for different stages of page loading.

The domcontentloaded state waits until the HTML document is parsed.

The load state waits until all page resources such as images, stylesheets, and scripts are loaded.

The networkidle state waits until there are no network requests for 500 milliseconds.

In my projects, I usually prefer waiting for domcontentloaded followed by a business-specific element because it is more reliable than relying only on network activity.

I use networkidle only when testing pages that depend heavily on AJAX requests.

---

## 6. Real-Time Project Example

In my project, after login the Dashboard page loaded multiple widgets.

Instead of waiting for the entire page, I used:

```typescript
await page.waitForLoadState('domcontentloaded');
await expect(page.locator('#dashboard-stats')).toBeVisible();
```

This made the tests faster and more stable.

---

## 7. Code Example (TypeScript)

### domcontentloaded

```typescript
await page.goto('/dashboard');

await page.waitForLoadState('domcontentloaded');
```

### load

```typescript
await page.goto('/dashboard');

await page.waitForLoadState('load');
```

### networkidle

```typescript
await page.goto('/reports');

await page.waitForLoadState('networkidle');
```

### Recommended Approach

```typescript
await page.waitForLoadState('domcontentloaded');

await expect(
  page.locator('#dashboard-stats')
).toBeVisible();
```

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
