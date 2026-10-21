# How to Handle Checkboxes in Playwright JavaScript

Playwright lo checkboxes ni handle cheyadaniki mainly `check()`, `uncheck()`, and `isChecked()` methods use chestham.

## 1. Checkbox ante enti?

Example: Login or registration form lo user agreement checkbox untundi.

I agree to the Terms and Conditions

Subscribe to email notifications

First checkbox unchecked; second checkbox checked.

## 2. Important methods

| Method          | Purpose                                                       |
| --------------- | ------------------------------------------------------------- |
| `check()`       | Checkbox ni select/check chestundi                            |
| `uncheck()`     | Checkbox ni deselect chestundi                                |
| `isChecked()`   | Checkbox checked ga undo ledo `true`/`false` return chestundi |
| `toBeChecked()` | Checkbox checked state ni verify chestundi                    |

## 3. Real-time example with code

```
const { test, expect } = require('@playwright/test');

test('Handle checkbox', async ({ page }) => {
  await page.goto('https://example.com');

  const checkbox = page.getByRole('checkbox', {
    name: 'I agree to the Terms and Conditions'
  });

  // Check the checkbox
  await checkbox.check();

  // Verify checkbox is checked
  await expect(checkbox).toBeChecked();

  // Uncheck the checkbox
  await checkbox.uncheck();

  // Verify checkbox is unchecked
  await expect(checkbox).not.toBeChecked();
});
```

Note: `example.com` is illustrative. Actual website URL and checkbox accessible name ni mee application ki match cheyyali.

### Telugu explanation

1. `getByRole('checkbox')` — checkbox ni locate chestham.
2. `check()` — checkbox ni tick chestham.
3. `toBeChecked()` — checkbox tick ayindho verify chestham.
4. `uncheck()` — checkbox tick remove chestham.
5. `not.toBeChecked()` — checkbox unchecked ga undo verify chestham.

## 4. `isChecked()` example

```
const checkbox = page.getByRole('checkbox', {
  name: 'Remember me'
});

const checked = await checkbox.isChecked();

console.log(checked); // true or false
```

`isChecked()` current state ni immediate ga return chestundi. Checkbox checked avvadaniki wait chesi verify cheyyali ante `await expect(checkbox).toBeChecked()` use cheyyandi.

## 5. Interview questions

Q1. How do you handle checkboxes in Playwright?

Answer: I use `check()` to select a checkbox, `uncheck()` to deselect it, and `toBeChecked()` to verify its state.

Q2. Difference between `check()` and `click()`?

- `check()` checkbox ni checked state lo ki teesukostundi. Already checked unte checked gaane untundi.
- `click()` checkbox meeda click chestundi; normal checkbox lo state toggle avvachu.

Q3. Difference between `isChecked()` and `toBeChecked()`?

- `isChecked()` → current state ni `true` or `false` ga return chestundi.
- `toBeChecked()` → expected state ni verify chestundi and auto-retry chestundi.

Q4. How do you verify a checkbox is unchecked?

```
await expect(checkbox).not.toBeChecked();
```

Easy memory trick: `check()` = tick, `uncheck()` = remove tick, `isChecked()` = state check, `toBeChecked()` = assertion.
