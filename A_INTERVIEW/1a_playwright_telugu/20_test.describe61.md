# Playwright `test.describe()` — Simple English + Telugu + Real-Time Example

## 1. What is `test.describe()`?

English: `test.describe()` is used to group related test cases into a single test suite.

తెలుగులో: ఒకే feature‌కు సంబంధించిన multiple test cases‌ను ఒక group‌లో పెట్టడానికి `test.describe()` ఉపయోగిస్తాం.

Real-time example: In an e-commerce application, we have multiple login tests:

- Verify login with valid credentials.
- Verify login with invalid credentials.
- Verify the forgot password link.

Instead of keeping these tests separately, we group them using `test.describe()`.

## 2. Basic syntax

```
import { test, expect } from '@playwright/test';

test.describe('Login Test Suite', () => {

  test('Valid login', async ({ page }) => {
    // Test steps
  });

  test('Invalid login', async ({ page }) => {
    // Test steps
  });

  test('Forgot password', async ({ page }) => {
    // Test steps
  });

});
```

Here, `Login Test Suite` is the group name, and the three `test()` calls are individual test cases.

## 3. Real-time Playwright example

Imagine we are testing the login functionality of a banking application.

```
import { test, expect } from '@playwright/test';

test.describe('Bank Login Tests', () => {

  test('Verify login page title', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Verify page heading', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(
      page.getByRole('heading', { name: 'Example Domain' })
    ).toBeVisible();
  });

});
```

This example uses a public demonstration website. In a real project, replace the URL and locators with your application's details.

### How does it work?

1. Playwright identifies the `Bank Login Tests` group.
2. It discovers the test cases inside the group.
3. It executes each test according to the Playwright configuration.
4. It reports the result of each test separately.

Important: `test.describe()` groups tests; it does not automatically log in or run setup code only once.

## 4. Using `test.beforeEach()` inside `test.describe()`

Suppose every login test needs to open the login page. Instead of repeating the same code in every test, use `test.beforeEach()`.

```
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Verify heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Example Domain' })
    ).toBeVisible();
  });

});
```

తెలుగులో: `beforeEach()` లో ఉన్న code ప్రతి test ప్రారంభానికి ముందు execute అవుతుంది. అందువల్ల repeated code తగ్గుతుంది.

## 5. Difference between `test.describe()` and `test.beforeEach()`

| Feature             | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| `test.describe()`   | Related tests‌ను group చేస్తుంది                            |
| `test.beforeEach()` | ప్రతి test‌కు ముందు code execute చేస్తుంది                  |
| `test.beforeAll()`  | ఆ group‌లో tests ప్రారంభమయ్యే ముందు ఒకసారి execute అవుతుంది |
| `test.afterEach()`  | ప్రతి test పూర్తయిన తర్వాత execute అవుతుంది                 |
| `test.afterAll()`   | ఆ group‌లో tests పూర్తయిన తర్వాత ఒకసారి execute అవుతుంది    |

## 6. SDET interview answer

Question: Why do we use `test.describe()` in Playwright?

Answer in simple English:

“We use `test.describe()` to group related test cases into a test suite. For example, in a login module, we can group valid login, invalid login, and forgot password tests. It improves test organization and readability. We can also use hooks like `beforeEach()` inside the group to perform common setup steps.”

Easy memory trick:

- `describe` = Group tests.
- `beforeEach` = Before every test.
- `beforeAll` = Before all tests in the group.
- `afterEach` = After every test.
- `afterAll` = After all tests in the group.
