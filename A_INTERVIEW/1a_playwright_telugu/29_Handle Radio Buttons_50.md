# How to Handle Radio Buttons in Playwright JavaScript

Playwright lo radio buttons handle cheyadaniki mainly `check()`, `isChecked()`, and `toBeChecked()` methods use chestham.

Radio buttons ante multiple options lo usually oka option matrame select chesukovadaniki use chestham.

## 1. Real-time example

Suppose an insurance application lo user vehicle type select chestunnaru.

Select Vehicle Type

Car

Bike

Truck

Radio buttons lo usually one option matrame select chestham.

## 2. Radio button select cheyadam

```
const { test, expect } = require('@playwright/test');

test('Handle radio button', async ({ page }) => {
  await page.goto('https://example.com');

  const carRadio = page.getByRole('radio', {
    name: 'Car',
    exact: true
  });

  await carRadio.check();

  await expect(carRadio).toBeChecked();
});
```

Telugu explanation:

- `getByRole('radio')` → radio button ni locate chestundi.
- `check()` → Car option ni select chestundi.
- `toBeChecked()` → Car select ayyindo verify chestundi.

`https://example.com` illustrative URL matrame. Mee actual application URL and accessible radio label use cheyyali.

## 3. Multiple radio buttons handle cheyadam

```
const car = page.getByRole('radio', { name: 'Car', exact: true });
const bike = page.getByRole('radio', { name: 'Bike', exact: true });

await car.check();
await expect(car).toBeChecked();

await bike.check();
await expect(bike).toBeChecked();
await expect(car).not.toBeChecked();
```

Why? Car and Bike same radio group lo unte, Bike select chesinappudu Car automatically deselect avutundi. Idi same group lo unna radio buttons ki apply avutundi.

## 4. `isChecked()` use cheyadam

Radio button selected ga undo ledo check cheyadaniki:

```
const car = page.getByRole('radio', { name: 'Car', exact: true });

const selected = await car.isChecked();

console.log(selected); // true or false
```

- `isChecked()` → current state ni `true` or `false` ga return chestundi.
- `toBeChecked()` → expected state ni verify chestundi and automatically retry chestundi.

## 5. Interview questions and answers

Q1. How do you handle radio buttons in Playwright?

Answer: I use `getByRole('radio')` to locate the radio button, `check()` to select it, and `toBeChecked()` to verify that it is selected.

Q2. What is the difference between radio buttons and checkboxes?

- Radio buttons: Same group lo usually one option matrame select cheyachu.
- Checkboxes: Multiple independent options select cheyachu.

Q3. Can we use `click()` instead of `check()`?

Yes. But `check()` is better when the goal is to ensure the radio button is selected. If it is already selected, `check()` leaves it selected.

Q4. How do you verify a radio button is not selected?

```
await expect(
  page.getByRole('radio', { name: 'Bike', exact: true })
).not.toBeChecked();
```

Easy memory trick:

- `check()` → Select
- `isChecked()` → Get current state
- `toBeChecked()` → Verify selected state
- `not.toBeChecked()` → Verify not selected
