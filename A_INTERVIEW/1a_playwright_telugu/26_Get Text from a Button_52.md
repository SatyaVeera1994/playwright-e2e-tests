# How to Get Text from a Button in Playwright

Playwright lo button text retrieve cheyadaniki mainly `textContent()`, `innerText()`, and `toHaveText()` use chestham.

## 1. `textContent()` — Get button text

Button lo unna text ni retrieve cheyadaniki use chestham.

```
import { test, expect } from '@playwright/test';

test('Get button text', async ({ page }) => {
  await page.goto('https://example.com');

  const button = page.getByRole('button', { name: 'Login' });

  const text = await button.textContent();

  console.log(text);
});
```

Telugu explanation: `textContent()` button lo unna text ni return chestundi. Idi immediate ga value istundi; automatic waiting assertion laga retry cheyyadu.

## 2. `innerText()` — Get visible text

```
const button = page.getByRole('button', { name: 'Login' });

const text = await button.innerText();

console.log(text);
```

Difference: `innerText()` rendered/visible text ni return chestundi. `textContent()` element descendants lo unna text content ni return chestundi, hidden text kuda include avvachu.

## 3. `toHaveText()` — Verify button text

Interview lo idi important!

```
const button = page.getByRole('button', { name: 'Login' });

await expect(button).toHaveText('Login');
```

Telugu explanation: Button text `Login` ani undho ledho verify chestham. Text match ayye varaku Playwright retry chestundi, assertion timeout varaku.

## 4. Real-time example

Suppose login page lo button text `Sign In` undi.

Example login button

Sign In

```
const button = page.getByRole('button', { name: 'Sign In' });

const text = await button.innerText();
console.log(text);

await expect(button).toHaveText('Sign In');
```

Expected console output: `Sign In`

## Interview questions

Q1. What is the difference between `textContent()` and `toHaveText()`?

Answer: `textContent()` retrieves the text immediately, while `toHaveText()` is an auto-retrying assertion used to verify the expected text.

Q2. What is the difference between `innerText()` and `textContent()`?

Answer: `innerText()` returns rendered text, while `textContent()` returns the text content of the element and its descendants, including text that may be hidden.

Q3. Which method do you use to validate a button's text?

Answer: I use `await expect(button).toHaveText('Login')` because it automatically retries until the expected text matches or the assertion times out.

Easy memory trick:

- `textContent()` → Get text.
- `innerText()` → Get rendered text.
- `toHaveText()` → Verify text.