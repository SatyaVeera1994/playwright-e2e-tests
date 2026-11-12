## Q19: How do you implement retry logic and test stability?

I use Playwright's built-in retry mechanism by configuring `retries: 2` in CI and `retries: 0` locally. To improve test stability, I use reliable locators, auto-waiting, proper timeouts, and independent test cases. I also analyze flaky tests using Trace Viewer and fix the root cause instead of depending only on retri

## 1. ✅ English Interview Answer

“Playwright provides built-in retry functionality through the `retries` option in `playwright.config.ts`.

In CI environments, I configure two retries to handle temporary failures. I also improve test stability by using auto-waiting, reliable locators, proper timeouts, and independent tests.

I avoid unnecessary hard waits and investigate the root cause of flaky tests instead of depending only on retries.”

## 2. 🇮🇳 Telugu Explanation

Playwright lo test fail ayithe malli execute cheyyadaniki Retry mechanism use chestam.

Example:

- First execution → Test fail.
- First retry → Test malli execute avutundi.
- Second retry → Malli fail ayithe final ga failed ani report avutundi.

CI environment lo 2 retries configure cheyyachu.

## 3. Built-in Retry Configuration

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: process.env.CI ? 2 : 0,

  use: {
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  expect: {
    timeout: 5_000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
    },
  },
});
```

Explanation:

| Configuration       | Meaning                                            |
| ------------------- | -------------------------------------------------- |
| `retries: 2`        | Test fail ayithe maximum 2 retries                 |
| `process.env.CI`    | CI environment check                               |
| `actionTimeout`     | Click/fill actions ki timeout                      |
| `navigationTimeout` | Page navigation ki timeout                         |
| `expect.timeout`    | Assertion waiting time                             |
| `maxDiffPixels`     | Screenshot comparison lo allowed pixel differences |

Important: `retries` ante failed test ni rerun cheyyadam. `expect.timeout` ante assertion condition satisfy avvadaniki wait cheyyadam. Rendu different.

## 4. How does retry work?

## Test retry flow

First test execution

Failed

Retry 1

Passed

Final result: Passed

Playwright reports the test as flaky.

If all retry attempts fail, the test is reported as failed.

## 5. Custom Retry Logic

Your provided example uses a `while` loop and `try-catch`.

```
test('with custom retry', async ({ page }) => {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      await page.goto('https://flaky-site.com');
      await expect(page.locator('h1')).toBeVisible();
      break;
    } catch (error) {
      attempts++;

      if (attempts === maxAttempts) throw error;

      console.log(`Retry attempt ${attempts} failed.`);
      await page.waitForTimeout(1000);
    }
  }
});
```

Telugu explanation:

- `attempts = 0` → Starting attempts zero.
- `maxAttempts = 3` → Maximum three attempts.
- `try` → Test execute chestundi.
- `catch` → Error vasthe catch chestundi.
- `attempts++` → Attempt count increase chestundi.
- `break` → Test pass ayithe loop stop.
- `throw error` → Three attempts fail ayithe error throw chestundi.

Note: Idi learning kosam custom example. Normal Playwright tests lo built-in `retries` prefer cheyyali. `waitForTimeout()` hard wait kabatti production framework lo avoid cheyyadam better.

## 6. How do you improve test stability?

| Practice            | Telugu explanation                                     |
| ------------------- | ------------------------------------------------------ |
| Auto-waiting        | Element ready ayye varaku automatic ga wait            |
| Reliable locators   | `getByRole`, `getByLabel`, `getByTestId` use cheyyadam |
| Proper timeouts     | Required timeout configure cheyyadam                   |
| Avoid hard waits    | Unnecessary fixed waits avoid cheyyadam                |
| Independent tests   | Oka test result meeda inkoka test depend avvakudadhu   |
| Retry               | Temporary failures ki rerun                            |
| Root cause analysis | Flaky test enduku fail avutundo identify cheyyadam     |

## 7. 💼 Real-time Yotta Project Example

Suppose Yotta DRM application lo Add Widevine Provider test execute chestunnam.

Sometimes application response slow ga undadam valla test fail avvachu.

I would:

1. Check Playwright Trace Viewer.
2. Verify locator and element visibility.
3. Check API response and application logs.
4. Configure appropriate timeouts.
5. Enable two retries in CI.
6. Fix the actual issue causing test instability.

## 8. 🎯 Follow-up Interview Questions

Q1. What is a flaky test?

A test that sometimes passes and sometimes fails without any code changes.

తెలుగులో: Same test konni sarlu pass, konni sarlu fail avvadam flaky test.

Q2. What is the difference between retry and timeout?

- Retry → Test ni malli execute chestundi.
- Timeout → Operation wait cheyyadaniki maximum time limit.

Q3. How many retries do you configure in CI?

“I generally configure two retries in CI and zero retries locally.”

Q4. Does retry fix the actual issue?

“No. Retry helps identify temporary failures, but we must investigate and fix the root cause.”

## 9. 🧠 Easy Memory Trick

Retry = Rerun

Stability = Reliable Locators + Auto-wait + Proper Timeout + Independent Tests + Root Cause Fix
