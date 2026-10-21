# How to Select Value from Dropdown in Playwright JavaScript

Playwright lo dropdown nunchi value select cheyadaniki mainly `selectOption()` method use chestham. Idi HTML `<select>` dropdowns kosam.

## 1. Real-time example

Suppose insurance application lo vehicle brand select cheyyali.

Select Vehicle Brand

Maruti

Example only: select a brand to see how a dropdown behaves.

## 2. `selectOption()` using value

HTML dropdown ila undani anukundam:

```
<select id="brand">
  <option value="maruti">Maruti</option>
  <option value="hyundai">Hyundai</option>
  <option value="tata">Tata</option>
</select>
```

Playwright code:

```
const { test, expect } = require('@playwright/test');

test('Select dropdown value', async ({ page }) => {
  await page.goto('https://example.com');

  const dropdown = page.locator('#brand');

  await dropdown.selectOption('maruti');

  await expect(dropdown).toHaveValue('maruti');
});
```

Telugu explanation:

- `locator('#brand')` → dropdown ni locate chestundi.
- `selectOption('maruti')` → `value="maruti"` unna option ni select chestundi.
- `toHaveValue('maruti')` → correct value select ayyindo verify chestundi.

Note: `example.com` illustrative URL. Mee application URL and actual dropdown locator use cheyyali.

## 3. Different ways to select a dropdown option

Method 1: By value

```
await page.locator('#brand').selectOption('maruti');
```

Method 2: By visible label

```
await page.locator('#brand').selectOption({ label: 'Hyundai' });
```

Method 3: By option index

```
await page.locator('#brand').selectOption({ index: 2 });
```

`index` zero nunchi start avutundi. Kabatti `index: 2` ante third option. Placeholder kuda option ayithe adi kuda count avutundi.

## 4. How to get the selected dropdown value?

```
const selectedValue = await page.locator('#brand').inputValue();

console.log(selectedValue);
```

`inputValue()` selected option yokka value ni return chestundi, visible label ni kaadu.

## 5. Dropdown options verify cheyadam

```
const dropdown = page.locator('#brand');

await expect(dropdown).toHaveValue('maruti');
await expect(dropdown).toHaveValue(/maruti/);
```

First assertion exact value ni verify chestundi. Second assertion regular expression use chestundi.

## 6. Interview questions

Q1. How do you select a value from a dropdown in Playwright?

Answer: I use the `selectOption()` method to select an option by its value, label, or index. Then I verify the selection using `toHaveValue()`.

Q2. Difference between `selectOption()` and `click()`?

- `selectOption()` → HTML `<select>` dropdown lo option select cheyadaniki.
- `click()` → element meeda click cheyadaniki; custom dropdowns lo options open/select cheyadaniki use avvachu.

Q3. What if the dropdown is a custom dropdown, not an HTML `<select>`?

Custom dropdown ki `selectOption()` generally work avvadu. Dropdown open chesi, option ni locator tho identify chesi click cheyyali.

```
await page.getByRole('button', { name: 'Select Brand' }).click();
await page.getByRole('option', { name: 'Maruti' }).click();
```

Ee example app accessible roles and labels batti adjust cheyyali.

Easy memory trick:

- `selectOption('maruti')` → Select by value
- `selectOption({ label: 'Maruti' })` → Select by visible label
- `inputValue()` → Get selected value
- `toHaveValue()` → Verify selected value
