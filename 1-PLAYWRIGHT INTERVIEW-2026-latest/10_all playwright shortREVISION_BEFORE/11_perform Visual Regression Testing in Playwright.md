# Q13. How do you perform Visual Regression Testing in Playwright?

## 1. Concept – Simple English

Visual Regression Testing is used to compare the current UI screenshot with a previously saved baseline screenshot to identify unexpected visual changes.

Playwright provides the `toHaveScreenshot()` assertion for visual comparisons.

## 2. Telugu Explanation

Visual Regression Testing ante application UI lo unwanted changes vachaya ledha ani screenshots compare cheyadam.

Example:

Mana Yotta application lo Dashboard page undhi anukundham.

1. First time Dashboard screenshot capture chestham.
2. Aa screenshot baseline image ga save avuthundhi.
3. Next execution lo malli screenshot capture chestham.
4. Old screenshot and new screenshot compare chestham.
5. UI lo unexpected changes unte test fail avuthundhi.

Simple ga: Old Screenshot vs New Screenshot = Visual Comparison.

## 3. TypeScript Code Examples

Example 1: Full Page Screenshot Comparison

```
import { test, expect } from '@playwright/test';

test('Visual regression testing', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveScreenshot('homepage.png');

});
```

Example 2: Specific Element Screenshot

```
test('Header visual comparison', async ({ page }) => {

  await page.goto('https://example.com');

  const header = page.locator('.header');

  await expect(header).toHaveScreenshot('header.png');

});
```

Example 3: Ignore Dynamic Content Using Mask

```
await expect(page).toHaveScreenshot('dashboard.png', {
  mask: [
    page.locator('.timestamp')
  ],
  fullPage: true
});
```

Telugu: Timestamp, date, advertisements lanti frequently change ayye elements ni mask chesi screenshot comparison nundi exclude chestham.

Example 4: Custom Difference Threshold

```
await expect(page).toHaveScreenshot('homepage.png', {
  maxDiffPixels: 100,
  threshold: 0.2
});
```

- `maxDiffPixels` → Enni pixels difference acceptable ani specify chestham.
- `threshold` → Pixel color difference sensitivity control chesthundhi.

## 4. How do you update baseline screenshots?

Sometimes UI design intentionally change avuthundhi.

Appudu new screenshot ni baseline ga update cheyochu.

```
npx playwright test --update-snapshots
```

Telugu: UI change expected ayithe new screenshot baseline ga save chestham.

Important: Baseline update chese mundhu visual changes intentional ani verify cheyyali.

## 5. Interview-ready Answer

"I perform visual regression testing in Playwright using the `toHaveScreenshot()` assertion. First, I capture and save baseline screenshots. During subsequent executions, Playwright compares the current screenshots with the baseline images and identifies unexpected visual differences. I also use masking for dynamic elements like timestamps and configure pixel difference thresholds when required."

# Q14. How do you handle Browser Contexts for Parallel Test Isolation?

## 1. Concept – Simple English

Playwright provides isolated browser contexts for each test.

Each test gets its own independent browser session with separate cookies, local storage, and session storage.

This prevents one test from interfering with another test during parallel execution.

## 2. Telugu Explanation

Mana project lo 10 test cases unnayi anukundham.

Prathi test case ki separate browser session create avuthundhi.

Example:

- Test 1 → Admin login.
- Test 2 → Customer login.
- Test 3 → Guest user.

Oka test lo login details, cookies, or session information vere test ki affect avvavu.

Dheenine Test Isolation antaru.

Simple ga: Every Test = Independent Browser Context.

## 3. TypeScript Code – Browser Context Isolation

```
import { test, expect } from '@playwright/test';

test('Test 1 - Admin', async ({ page, context }) => {

  await page.goto('https://example.com');

  console.log('Admin test executed');

});

test('Test 2 - Customer', async ({ page, context }) => {

  await page.goto('https://example.com');

  console.log('Customer test executed');

});
```

Here, Playwright automatically creates a separate context for each test.

## 4. Configure Parallel Execution

In `playwright.config.ts`:

```
import { defineConfig } from '@playwright/test';

export default defineConfig({

  fullyParallel: true,

  workers: 4,

  use: {
    browserName: 'chromium',

    viewport: {
      width: 1920,
      height: 1080
    }
  }

});
```

Explanation:

| Configuration         | Purpose                        |
| --------------------- | ------------------------------ |
| `fullyParallel: true` | Allow tests to run in parallel |
| `workers: 4`          | Run up to four workers         |
| `browserName`         | Select browser                 |
| `viewport`            | Configure browser screen size  |

## 5. Browser Context Configuration

We can also configure browser context settings.

```
test.use({

  contextOptions: {

    viewport: {
      width: 1920,
      height: 1080
    },

    locale: 'en-US',

    timezoneId: 'America/New_York',

    geolocation: {
      latitude: 40.7128,
      longitude: -74.0060
    },

    permissions: ['geolocation']

  }

});
```

Telugu: Browser session ki viewport, timezone, location, permissions lanti settings configure cheyochu.

## 6. Real-time Project Example – Yotta DRM

Mana Yotta DRM automation project lo:

Suppose multiple DRM test cases execute chesthunnam.

- Test 1 → License API validation.
- Test 2 → Content key validation.
- Test 3 → Policy validation.

Playwright separate test contexts provide chesthundhi.

Dheenivalla one test session cookies or browser storage another test ni affect cheyyavu.

However, backend lo shared test data or common resources use chesthe separate browser contexts alone are not sufficient. We must also isolate test data.

## 7. Interview-ready Answer

"Playwright provides automatic browser context isolation for each test. Every test gets a fresh browser context with independent cookies, local storage, and session storage. This prevents session conflicts and data sharing between tests. I configure parallel execution using workers and fullyParallel in playwright.config.ts. This improves execution efficiency and test reliability."

## 8. Important Interview Comparison

| Visual Regression    | Parallel Test Isolation         |
| -------------------- | ------------------------------- |
| Compares screenshots | Separates test sessions         |
| `toHaveScreenshot()` | Browser Context                 |
| Detects UI changes   | Prevents session interference   |
| Baseline images      | Independent cookies and storage |
| `--update-snapshots` | `workers`, `fullyParallel`      |

## 9. Quick Interview Memory Tricks

Q13 – Visual Regression

# Screenshot → Compare → Detect

Remember: `toHaveScreenshot()`

Q14 – Parallel Isolation

# Test → New Context → Isolated Session

Remember: `browser.newContext()` for manual contexts; Playwright automatically provides isolated contexts through the test fixtures.

One important interview clarification: Browser context isolation does not mean every test starts a new browser process. Playwright can reuse the browser process while creating independent contexts for tests.

You can practice these two topics using your existing Playwright TypeScript framework.
