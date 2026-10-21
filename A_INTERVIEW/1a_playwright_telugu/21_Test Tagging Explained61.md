# Playwright Test Tagging — Smoke vs Regression

Let’s learn Playwright test tagging in simple English and Telugu with real-time project examples and interview answers.

## 1. What is test tagging?

English: Test tagging means assigning labels to test cases so we can run a specific group of tests when needed.

తెలుగులో: మన project‌లో చాలా test cases ఉంటాయి. వాటిలో Smoke tests మాత్రమే లేదా Regression tests మాత్రమే run చేయాలంటే, వాటికి tags పెడతాం.

For example:

- `@smoke` — Important tests to verify the application’s basic functionality.
- `@regression` — Tests to verify existing features still work after code changes.
- `@login` — Tests related to login functionality.

## 2. How to add tags in Playwright

We can add tags using the `tag` option in `test()`.

```
import { test, expect } from '@playwright/test';

test('Login with valid credentials', {
  tag: ['@smoke', '@login'],
}, async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
});

test('Verify page heading', {
  tag: ['@regression'],
}, async ({ page }) => {
  await page.goto('https://example.com');

  await expect(
    page.getByRole('heading', { name: 'Example Domain' })
  ).toBeVisible();
});
```

Explanation:

- The first test has two tags: `@smoke` and `@login`.
- The second test has the `@regression` tag.
- These tags help us select tests when executing the suite.

The example uses a demo website. Replace the URL and locators with your actual application details.

## 3. How to run Smoke tests only

Run this command:

```
npx playwright test --grep "@smoke"
```

తెలుగులో: `@smoke` tag ఉన్న tests మాత్రమే execute అవుతాయి.

## 4. How to run Regression tests only

```
npx playwright test --grep "@regression"
```

తెలుగులో: `@regression` tag ఉన్న tests మాత్రమే run అవుతాయి.

## 5. How to exclude Smoke tests

```
npx playwright test --grep-invert "@smoke"
```

This runs tests that do not match the `@smoke` tag.

## 6. Real-time project example

Imagine you are working on an e-commerce application.

Smoke Testing — `@smoke`

Run after a new deployment or build.

- Application launches
- User can log in
- Products page opens
- Add-to-cart works

Regression Testing — `@regression`

Run after code changes to check existing functionality.

- Login validations
- Product search and filters
- Cart quantity updates
- Discount calculations
- Checkout and payment validations

## 7. Difference between Smoke and Regression

| Smoke Testing                              | Regression Testing                              |
| ------------------------------------------ | ----------------------------------------------- |
| Checks basic, critical functionality       | Checks existing functionality more broadly      |
| Usually a smaller test suite               | Usually a larger test suite                     |
| Often runs after a new build or deployment | Often runs after code changes or before release |
| Helps identify major issues quickly        | Helps identify unintended side effects          |

Remember: Smoke = Is the application basically working? Regression = Did our changes break anything?

## 8. Can one test have multiple tags?

Yes. A test can have multiple tags.

```
test('Verify user login', {
  tag: ['@smoke', '@regression', '@login'],
}, async ({ page }) => {
  await page.goto('https://example.com');
});
```

Now you can run it using any matching tag:

```
npx playwright test --grep "@smoke"
```

```
npx playwright test --grep "@login"
```

Both commands select this test because it has both tags.

## 9. Interview answer

Question: How do you implement test tagging in Playwright?

Simple English answer:

“In Playwright, I use tags such as `@smoke`, `@regression`, and `@login` to categorize test cases. I add tags using the test options and execute selected tests with the `--grep` command-line option. For example, `npx playwright test --grep "@smoke"` runs only Smoke tests. This helps us run critical tests quickly after deployments and execute broader Regression tests before releases.”

## Quick revision

Practice question: You want to run only Regression tests. Which command should you use?

`npx playwright test`

`npx playwright test --grep "@smoke"`

`npx playwright test --grep "@regression"`

Check answer

Correct!`--grep "@regression"` selects tests matching the Regression tag.
