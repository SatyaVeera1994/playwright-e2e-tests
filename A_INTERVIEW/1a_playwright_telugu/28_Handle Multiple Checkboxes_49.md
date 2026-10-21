# How to Handle Multiple Checkboxes in Playwright JavaScript

Playwright lo multiple checkboxes ni handle cheyadaniki `check()`, `uncheck()`, `isChecked()`, `locator()` and `toBeChecked()` use chestham.

Real-time example: Registration form lo Java, JavaScript, Playwright, API Testing ane skills checkboxes unnayi. Manam multiple skills select chesi, avi select ayyayo verify cheyachu.

## 1. Multiple checkboxes select cheyadam

```
const { test, expect } = require('@playwright/test');

test('Handle multiple checkboxes', async ({ page }) => {
  await page.goto('https://example.com');

  const java = page.getByRole('checkbox', { name: 'Java' });
  const javascript = page.getByRole('checkbox', { name: 'JavaScript' });
  const playwright = page.getByRole('checkbox', { name: 'Playwright' });

  await java.check();
  await javascript.check();
  await playwright.check();

  await expect(java).toBeChecked();
  await expect(javascript).toBeChecked();
  await expect(playwright).toBeChecked();
});
```

Telugu explanation:

- `getByRole()` — checkbox ni identify chestundi.
- `check()` — checkbox ni select chestundi.
- `toBeChecked()` — checkbox select ayindo verify chestundi.

Note: `example.com` illustrative URL. Mee application URL and checkbox labels use cheyyali.

## 2. Loop use chesi multiple checkboxes select cheyadam

Checkboxes ekkuva unnappudu loop use cheyadam easy.

```
const skills = ['Java', 'JavaScript', 'Playwright'];

for (const skill of skills) {
  await page.getByRole('checkbox', {
    name: skill,
    exact: true
  }).check();
}
```

Easy memory: `skills` array lo unna prati name ki loop run ayi, corresponding checkbox ni check chestundi.

## 3. Checkbox list lo first, second, third select cheyadam

Checkboxes ki accessible names lekapothe, application structure batti locator use cheyachu.

```
const checkboxes = page.locator('input[type="checkbox"]');

await checkboxes.nth(0).check(); // First checkbox
await checkboxes.nth(1).check(); // Second checkbox
await checkboxes.nth(2).check(); // Third checkbox
```

Important: `nth(0)` first element ni represent chestundi, because indexing starts from `0`. Mundu locator count and order correct ga unnayo confirm cheyyali.

## 4. All checkboxes select cheyadam

```
const checkboxes = page.locator('input[type="checkbox"]');

const count = await checkboxes.count();

for (let i = 0; i < count; i++) {
  await checkboxes.nth(i).check();
}
```

Idi page lo match ayina anni checkboxes ni select chestundi. Specific section lo unna checkboxes matrame select cheyyalante, aa section ki scope cheyyandi.

## Interview questions

Q1. How do you handle multiple checkboxes in Playwright?

Answer: I locate each checkbox using `getByRole()` or `locator()`, use `check()` to select it, and verify its state using `toBeChecked()`. For multiple checkboxes, I can use a loop.

Q2. How do you select all checkboxes?

```
const checkboxes = page.locator('input[type="checkbox"]');

for (let i = 0; i < await checkboxes.count(); i++) {
  await checkboxes.nth(i).check();
}
```

Q3. Difference between `nth()` and `getByRole()`?

- `nth()` — locator match ayina elements lo index batti element select chestundi.
- `getByRole()` — element role and accessible name batti identify chestundi. Usually readable and maintainable.

Q4. How do you verify multiple checkboxes are selected?

```
for (const skill of ['Java', 'JavaScript', 'Playwright']) {
  await expect(
    page.getByRole('checkbox', { name: skill, exact: true })
  ).toBeChecked();
}
```

Interview memory trick: One checkbox → `check()`. Multiple known checkboxes → loop over names. All checkboxes → `count()` + `nth()` loop. Verify → `toBeChecked()`.
