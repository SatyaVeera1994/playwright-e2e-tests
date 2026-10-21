# Playwright Hooks — Simple English + Telugu + Real-Time Examples

Playwright hooks are used to execute common code before or after tests. They help us avoid repeating the same code in every test case.

## 1. What are hooks?

English: Hooks are special functions that execute at specific stages of test execution.

తెలుగులో: Test run అయ్యే ముందు లేదా test పూర్తయిన తర్వాత కొన్ని common actions చేయడానికి hooks ఉపయోగిస్తాం.

Example: In a login module, every test needs to open the login page. Instead of writing `page.goto()` in every test, we can put it inside `beforeEach()`.

## 2. `beforeEach()` — Before every test

English: `beforeEach()` runs before each test in its scope.

తెలుగులో: ప్రతి test ప్రారంభమయ్యే ముందు ఈ hook execute అవుతుంది.

Real-time example: Open the login page before every login test.

```
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Verify page heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Example Domain' })
    ).toBeVisible();
  });

});
```

Execution flow:

1. `beforeEach()` opens the page.
2. The first test executes.
3. `beforeEach()` opens the page again.
4. The second test executes.

Memory trick: `beforeEach` = Before every test.

## 3. `afterEach()` — After every test

English: `afterEach()` runs after each test, including when a test fails.

తెలుగులో: ప్రతి test పూర్తయిన తర్వాత cleanup లేదా logging వంటి actions చేయడానికి `afterEach()` ఉపయోగిస్తాం.

Real-time example: Log the result of every test.

```
import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Test: ${testInfo.title}`);
  console.log(`Status: ${testInfo.status}`);
});

test('Verify page title', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
});

test('Verify page heading', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(
    page.getByRole('heading', { name: 'Example Domain' })
  ).toBeVisible();
});
```

Here, `testInfo.title` gives the test name, and `testInfo.status` gives its final status.

Memory trick: `afterEach` = After every test.

## 4. Real-time project example

Imagine you are testing a banking application.

`beforeEach()`

- Navigate to the login page.
- Prepare the required test data.
- Perform common setup actions.

Test case

- Verify valid login.
- Verify invalid login.
- Verify forgot password.

`afterEach()`

- Log the test result.
- Capture additional diagnostics if needed.
- Clean up test data when appropriate.

## 5. Difference between `beforeEach()` and `afterEach()`

| `beforeEach()`           | `afterEach()`                 |
| ------------------------ | ----------------------------- |
| Runs before every test   | Runs after every test         |
| Used for setup           | Used for cleanup or reporting |
| Example: Open login page | Example: Log test result      |

## 6. What about `beforeAll()` and `afterAll()`?

Playwright has four commonly used hooks.

| Hook           | When does it execute?          |
| -------------- | ------------------------------ |
| `beforeAll()`  | Once before tests in its scope |
| `beforeEach()` | Before each test               |
| `afterEach()`  | After each test                |
| `afterAll()`   | Once after tests in its scope  |

Example:

```
test.describe('User Tests', () => {

  test.beforeAll(async () => {
    console.log('Starting user test suite');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test.afterEach(async ({}, testInfo) => {
    console.log(`${testInfo.title}: ${testInfo.status}`);
  });

  test.afterAll(async () => {
    console.log('User test suite completed');
  });

  test('Test 1', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Test 2', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible();
  });

});
```

Note: `beforeAll()` and `afterAll()` run once per worker for that scope, not necessarily once for the entire test run. With retries or multiple workers, they may execute more than once.

## 7. SDET interview answer

Question: What are hooks in Playwright? Explain `beforeEach()` and `afterEach()`.

Simple English answer:

“Playwright hooks help us execute common setup and cleanup actions during test execution. I use `beforeEach()` to perform setup steps before every test, such as navigating to a page. I use `afterEach()` for actions such as logging test results or cleaning up test data. This reduces code duplication and improves test maintainability.”

Easy memory trick:

- `beforeAll` → Before all tests in the scope.
- `beforeEach` → Before every test.
- `afterEach` → After every test.
- `afterAll` → After all tests in the scope.
