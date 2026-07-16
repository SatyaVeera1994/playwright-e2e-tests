# Q2. How do you use toMatchSnapshot() and toHaveScreenshot() for visual testing?

## 1. Telugu Concept

Playwright లో **Visual Testing** అనేది UI Design, Layout, Colors, Alignment వంటి Visual Changes ని Detect చేయడానికి ఉపయోగిస్తారు.

### toHaveScreenshot()

ఒక Element లేదా Page Screenshot తీసుకుని Baseline Screenshot తో Compare చేస్తుంది.

మొదటి Run లో Baseline Image Create అవుతుంది.

తర్వాత Runs లో Pixel-by-Pixel Compare చేస్తుంది.

### toMatchSnapshot()

Screenshot మాత్రమే కాదు.

Text Files, JSON Files, API Responses వంటి Snapshots ని కూడా Compare చేయవచ్చు.

Visual Regression Testing కి ఎక్కువగా `toHaveScreenshot()` ఉపయోగిస్తారు.

---

## 2. Easy to Remember

✅ Visual Regression Testing

✅ Baseline Screenshot Creation

✅ Pixel-by-Pixel Comparison

✅ Detect UI Changes Automatically

✅ Mask Dynamic Elements

✅ Disable Animations

### One-Line Summary

**toHaveScreenshot() compares screenshots with a baseline image to detect unexpected UI changes.**

---

## 3. Telugu Interview Answer

Playwright లో Visual Regression Testing కోసం `toHaveScreenshot()` ఉపయోగిస్తాను.

మొదటి Execution లో Baseline Screenshot Create అవుతుంది.

తర్వాత ప్రతి Run లో Current Screenshot ని Baseline తో Compare చేస్తుంది.

Unexpected UI Changes, Alignment Issues, CSS Problems, Layout Breaks వెంటనే Detect అవుతాయి.

Real Projects లో Dynamic Data అయిన Prices, Dates, User Names వంటివి Screenshot Comparison ని Fail చేయవచ్చు.

అందుకే Mask Option ఉపయోగించి Dynamic Areas ని Ignore చేస్తాను.

అలాగే `animations: 'disabled'` ఉపయోగించి Animation వల్ల వచ్చే False Failures ని తగ్గిస్తాను.

---

## 4. Simple English Answer

I use `toHaveScreenshot()` for visual testing.

It captures a screenshot and compares it with a baseline image.

If the UI changes unexpectedly, the test fails.

I use masking and disable animations to avoid false failures.

---

## 5. English Interview Answer

Playwright provides visual testing through `toHaveScreenshot()` and snapshot testing through `toMatchSnapshot()`.

The first execution creates a baseline screenshot. Future executions compare the current screenshot against the baseline image.

This helps identify unintended UI changes, styling issues, alignment problems, and layout regressions.

In real projects, I usually mask dynamic content such as timestamps, prices, user-specific data, and counters because they change frequently.

I also disable animations to make visual tests stable and deterministic.

Visual tests are stored in source control, and when UI changes are intentional, I update the baseline snapshots using the update snapshot command.

---

## 6. Real-Time Project Example

In my Playwright project, suppose the Dashboard page contains:

* Statistics Cards
* Charts
* Navigation Menu
* User Information

After a new UI release, I want to ensure that no layout breaks occurred.

I capture a screenshot of the dashboard and compare it with the approved baseline.

If a CSS change accidentally moves a button or breaks the layout, Playwright immediately detects the difference.

This helps catch UI bugs that normal functional tests cannot detect.

---

## 7. Code Example (TypeScript)

### Element Screenshot Comparison

```typescript
import { test, expect } from '@playwright/test';

test('Product card visual validation', async ({ page }) => {

  await page.goto('/products/macbook-pro');

  await expect(
    page.locator('#product-card')
  ).toHaveScreenshot('product-card.png', {
    maxDiffPixelRatio: 0.02
  });

});
```

### Screenshot with Dynamic Content Masking

```typescript
await expect(
  page.locator('#product-card')
).toHaveScreenshot('product-card.png', {

  mask: [
    page.locator('.price-badge'),
    page.locator('.stock-count')
  ],

  maxDiffPixelRatio: 0.02

});
```

### Full Page Screenshot

```typescript
await expect(page).toHaveScreenshot(
  'dashboard-full.png',
  {
    fullPage: true,
    animations: 'disabled'
  }
);
```

### Using toMatchSnapshot()

```typescript
const response = {
  status: 'success',
  count: 10
};

expect(
  JSON.stringify(response, null, 2)
).toMatchSnapshot('response.json');
```

---

## Interview Short Answer

> "I use `toHaveScreenshot()` for visual regression testing in Playwright. It compares the current UI screenshot with a baseline image and detects unexpected visual changes. In real projects, I mask dynamic elements such as prices and timestamps and disable animations to avoid false failures. For non-image snapshot comparisons, I use `toMatchSnapshot()`."
