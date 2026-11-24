## Q19: What are Soft Assertions in Playwright?

## 1. ✅ English Interview Answer

“Soft assertions in Playwright allow us to continue test execution even if an assertion fails. Unlike hard assertions, soft assertions do not stop the test immediately. Playwright collects all assertion failures and reports them at the end of the test.

We use soft assertions when we want to validate multiple UI elements in a single test.”
await expect.soft(page.locator('.title')).toHaveText('Expected');
await expect.soft(page.locator('.subtitle')).toBeVisible();
await expect.soft(page.locator('.badge')).toHaveText('NEW');

## 2. 🇮🇳 Telugu Explanation

Playwright lo two types of assertions untayi:

1. Hard Assertion – Assertion fail ayithe test immediately stop avutundi.
2. Soft Assertion – Assertion fail ayina test execution continue avutundi.

Example: Oka webpage lo title, subtitle, badge verify cheyyali anukundam.

- Title wrong unna test continue avutundi.
- Subtitle visible unda check chestundi.
- Badge text correct ga unda check chestundi.
- Final ga anni failures report chestundi.

## 3. Hard Assertion vs Soft Assertion

| Hard Assertion                  | Soft Assertion                    |
| ------------------------------- | --------------------------------- |
| `expect()`                      | `expect.soft()`                   |
| Failure ayithe immediately stop | Failure ayina continue            |
| First failure report avutundi   | Multiple failures collect avutayi |
| Critical validations            | Multiple UI validations           |

## 4. 💻 Hard Assertion Example

```
import { test, expect } from '@playwright/test';

test('Hard assertion', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page.locator('.title')).toHaveText('Expected');

  await expect(page.locator('.subtitle')).toBeVisible();

  await expect(page.locator('.badge')).toHaveText('NEW');
});
```

Telugu: First assertion fail ayithe remaining assertions execute avvavu.

## 5. 💻 Soft Assertion Example

```
import { test, expect } from '@playwright/test';

test('Soft assertions', async ({ page }) => {
  await page.goto('https://example.com');

  await expect.soft(page.locator('.title'))
    .toHaveText('Expected');

  await expect.soft(page.locator('.subtitle'))
    .toBeVisible();

  await expect.soft(page.locator('.badge'))
    .toHaveText('NEW');
});
```

Telugu explanation:

- `expect.soft()` → Soft assertion use chestunnam.
- First assertion fail ayina second assertion execute avutundi.
- Second fail ayina third assertion execute avutundi.
- Test end lo failures report avutayi.

## 6. Alternative: Configure Soft Assertions

```
const softExpect = expect.configure({ soft: true });

await softExpect(page.locator('.title'))
  .toHaveText('Expected');

await softExpect(page.locator('.badge'))
  .toHaveText('NEW');
```

Here `softExpect` variable lo soft assertion behavior configure chestunnam.

## 7. 💼 Real-time Yotta Project Example

Suppose DRM application lo Packager details page validate chestunnam.

We need to verify:

1. Packager name.
2. Packager status.
3. Provider type.
4. Environment name.

```
await expect.soft(page.getByText('Widevine'))
  .toBeVisible();

await expect.soft(page.getByText('Active'))
  .toBeVisible();

await expect.soft(page.getByText('Yotta'))
  .toBeVisible();

await expect.soft(page.getByText('QA'))
  .toBeVisible();
```

Even if one validation fails, remaining validations continue. At the end, Playwright reports the failures.

## 8. 🎯 Follow-up Interview Questions

Q1. When do you use soft assertions?

When I need to validate multiple independent UI elements in one test.

Q2. Does a soft assertion failure make the test pass?

No. The test continues, but Playwright marks it as failed at the end if soft assertion failures remain.

Q3. What is the difference between `expect()` and `expect.soft()`?

`expect()` stops test execution at the first failed assertion. `expect.soft()` continues execution and reports failures at the end.

Q4. Can we use multiple soft assertions in one test?

Yes. We can use multiple `expect.soft()` statements in the same test.

Q5. Should we use soft assertions for every validation?

No. For critical validations where the next steps depend on the result, hard assertions are generally better.

## 9. 🧠 Easy Memory Trick

Hard Assertion

Stops

Failure → Test stops immediately.

Soft Assertion

Continues

Failure → Test continues → Failures reported at the end.

Interview one-line answer:

“Soft assertions allow us to validate multiple elements without stopping test execution immediately. Playwright collects the failures and reports them at the end of the test.”
