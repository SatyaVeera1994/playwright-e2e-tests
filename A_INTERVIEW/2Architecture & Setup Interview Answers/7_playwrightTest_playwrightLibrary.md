# Q7. What is the difference between `@playwright/test` and the `playwright` library?

## 1. Telugu Concept

Playwright Ecosystem లో రెండు ముఖ్యమైన Packages ఉన్నాయి:

### 1. @playwright/test

ఇది Complete Testing Framework.

ఇందులో:

✅ Test Runner

✅ Assertions

✅ Fixtures

✅ Parallel Execution

✅ Retries

✅ Reports

అన్నీ Built-in గా ఉంటాయి.

```text id="x1"
@playwright/test
      │
      ├── test()
      ├── expect()
      ├── fixtures
      ├── retries
      ├── reports
      └── parallel execution
```

---

### 2. playwright

ఇది Browser Automation Library మాత్రమే.

ఇందులో:

✅ Browser Launch

✅ Page Actions

✅ Screenshots

ఉంటాయి.

కానీ:

❌ test()

❌ expect()

❌ fixtures

❌ reports

ఉండవు.

```text id="x2"
playwright
      │
      ├── browser
      ├── page
      └── automation
```

---

### Example

Using playwright:

```typescript id="x3"
const browser =
 await chromium.launch();
```

Browser Automation మాత్రమే.

---

Using @playwright/test:

```typescript id="x4"
test('Login Test', async ({ page }) => {

});
```

Complete Testing Framework.

---

## 2. Easy to Remember

✅ @playwright/test = Testing Framework

✅ playwright = Automation Library

✅ @playwright/test has test()

✅ @playwright/test has expect()

✅ @playwright/test has fixtures

✅ playwright only controls browser

### One-Line Summary

**@playwright/test is a complete testing framework, while playwright is only a browser automation library.**

### Comparison

| @playwright/test | playwright      |
| ---------------- | --------------- |
| Test Runner      | No Test Runner  |
| Assertions       | No Assertions   |
| Fixtures         | No Fixtures     |
| Retries          | No Retries      |
| Reports          | No Reports      |
| Full Framework   | Automation Only |

---

## 3. Telugu Interview Answer

Playwright Ecosystem లో `@playwright/test` మరియు `playwright` అనే రెండు Packages ఉన్నాయి.

`@playwright/test` అనేది Complete Testing Framework. ఇందులో Test Runner, Assertions, Fixtures, Parallel Execution, Retries మరియు Reporting Features Built-in గా ఉంటాయి.

`playwright` Package మాత్రం Browser Automation Library మాత్రమే. Browser Launch చేయడం, Navigation, Screenshot Capture వంటి Automation Operations కోసం ఉపయోగిస్తాము.

Automation Framework Development కోసం నేను ఎప్పుడూ `@playwright/test` ఉపయోగిస్తాను, ఎందుకంటే Testing కి అవసరమైన అన్ని Features ఇందులో అందుబాటులో ఉంటాయి.

`playwright` Package ను Standalone Scripts, Web Scraping, Screenshot Generation లేదా Utility Tools కోసం ఉపయోగించవచ్చు.

మా Project లో మొత్తం Automation Framework `@playwright/test` పై Build చేశాము.

---

## 4. Simple English Answer

`@playwright/test` is a complete testing framework.

It provides:

* test()
* expect()
* fixtures
* retries
* reports

`playwright` is only a browser automation library.

It can launch browsers and automate pages but does not provide testing features.

For automation frameworks, I use `@playwright/test`.

---

## 5. English Interview Answer

The key difference is that `@playwright/test` is a complete testing framework, while `playwright` is only a browser automation library.

The `@playwright/test` package includes a built-in test runner, assertion library, fixtures, retries, parallel execution, reporting, and test configuration support.

The `playwright` package provides low-level browser automation capabilities such as launching browsers, navigating pages, taking screenshots, and interacting with web elements.

For automation frameworks, I always use `@playwright/test` because it provides everything required for scalable test automation.

The lower-level `playwright` package is useful for standalone scripts, web scraping tools, PDF generation utilities, and custom browser automation solutions.

In my projects, the entire automation framework was built using `@playwright/test` because of its built-in framework features and maintainability advantages.

---

## 6. Real-Time Project Example

In my Insurance Automation Project:

We used:

```text id="x5"
@playwright/test
       │
       ├── Fixtures
       ├── POM
       ├── Reports
       ├── Parallel Execution
       └── Retries
```

because we needed a complete automation framework.

However, for a utility script that captured screenshots of URLs, we used:

```text id="x6"
playwright
     │
Browser Launch
     │
Screenshot
     │
Exit
```

No test runner was required.

---

## 7. Code Example (TypeScript)

### Using @playwright/test

```typescript
import { test, expect } from '@playwright/test';

test('Homepage Test', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await expect(page).toHaveTitle(/Playwright/);

});
```

### Using playwright Library

```typescript
import { chromium } from 'playwright';

(async () => {

  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://playwright.dev');

  console.log(await page.title());

  await browser.close();

})();
```

---

# Q6. How does Playwright manage browser downloads and versions?

## 1. Telugu Concept

Playwright యొక్క పెద్ద Advantage ఏమిటంటే **Driver Management అవసరం లేదు**.

Selenium లో:

```text
Chrome Browser
      │
ChromeDriver
      │
Version Match Required
```

Version mismatch వస్తే Tests Fail అవుతాయి.

---

Playwright లో:

```text
Playwright Version
        │
        ▼
Compatible Browser
        │
        ▼
Automatic Download
```

Playwright Browser Versions ని Automatically Manage చేస్తుంది.

---

### Install Browsers

```bash
npx playwright install
```

All Supported Browsers Install అవుతాయి.

---

### Linux CI

```bash
npx playwright install --with-deps chromium
```

Browser + OS Dependencies Install అవుతాయి.

---

### Supported Browsers

✅ Chromium

✅ Firefox

✅ WebKit

---

## 2. Easy to Remember

✅ No Driver Management

✅ No ChromeDriver

✅ Automatic Browser Download

✅ Version Compatibility

✅ Easy CI/CD Setup

✅ Browser Pinned To Playwright Version

### One-Line Summary

**Playwright automatically downloads and manages compatible browser versions, eliminating driver mismatch problems.**

### Selenium vs Playwright

| Selenium                | Playwright        |
| ----------------------- | ----------------- |
| ChromeDriver Needed     | No Driver Needed  |
| Version Mismatch Issues | Auto Managed      |
| Manual Updates          | Automatic Updates |
| More Maintenance        | Less Maintenance  |

---

## 3. Telugu Interview Answer

Playwright Browser Version Management ను Automatically Handle చేస్తుంది.

Selenium లో ChromeDriver మరియు Browser Versions Match కావాలి. Browser Auto Update అయినప్పుడు Driver Mismatch Issues రావచ్చు.

కానీ Playwright లో ప్రతి Release కి Compatible Browser Versions Automatically Download అవుతాయి.

`npx playwright install` Command ద్వారా Browsers Install చేయవచ్చు.

Playwright Upgrade చేసినప్పుడు Compatible Browser Versions కూడా Automatically Update అవుతాయి.

మా CI/CD Pipeline లో Browser Binaries Cache చేశాము. Playwright Version Change అయినప్పుడు మాత్రమే Browsers Re-download అవుతాయి. దీనివల్ల Build Time తగ్గింది.

---

## 4. Simple English Answer

Playwright automatically downloads and manages browser versions.

Unlike Selenium, it does not require ChromeDriver or GeckoDriver management.

When Playwright is upgraded, compatible browser versions are downloaded automatically.

This reduces maintenance and avoids version mismatch issues.

---

## 5. English Interview Answer

One of Playwright's biggest advantages is automatic browser management.

Unlike Selenium, which requires separate browser drivers such as ChromeDriver, Playwright downloads and maintains browser versions that are tested and compatible with the installed Playwright version.

This eliminates driver mismatch issues and reduces maintenance effort.

Using `npx playwright install`, Playwright downloads Chromium, Firefox, and WebKit browsers automatically.

In CI/CD environments, I cache Playwright browser binaries based on the Playwright version to avoid repeated downloads and improve build performance.

This approach provides stable execution and significantly reduces browser-related failures.

---

## 6. Real-Time Project Example

In our earlier Selenium framework:

```text
Chrome Updated
      │
Driver Mismatch
      │
CI Failure
```

This happened frequently.

After moving to Playwright:

```text
Playwright Upgrade
      │
Compatible Browser Downloaded
      │
Tests Run Successfully
```

We also cached browsers in CI to save 2–3 minutes per build.

---

## 7. Code Example (TypeScript)

### Install Browsers

```bash
npx playwright install
```

### Install Chromium with Dependencies

```bash
npx playwright install --with-deps chromium
```

### Launch Browser

```typescript
import { chromium } from '@playwright/test';

(async () => {

  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://playwright.dev');

  console.log(await page.title());

  await browser.close();

})();
```

### GitHub Actions Cache Example

```yaml
- name: Cache Playwright Browsers
  uses: actions/cache@v3
  with:
    path: ~/.cache/ms-playwright
    key: playwright-browsers-${{ hashFiles('package-lock.json') }}
```

---

✅ Next: **Q8. Explain BrowserContext and why it is one of Playwright's most powerful features.**
