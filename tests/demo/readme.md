# Coverfox Playwright Automation Task

## Project Overview

This project automates the Coverfox car insurance quote flow using Playwright with TypeScript.

The script performs the following actions:

* Opens Coverfox website
* Selects "Don't know your car number"
* Chooses car brand and model
* Selects fuel type and variant
* Enters registration details
* Selects policy information
* Clicks on "View Quotes"
* Captures and prints the total number of plans/quotes loaded

---

# Prerequisites

Before running the project, ensure the following are installed:

* Node.js
* VS Code
* Playwright

---

# Installation Steps

## 1. Initialize Project

```bash id="6m4vvs"
npm init -y
```

## 2. Install Playwright

```bash id="cq7jj7"
npm install -D @playwright/test
```

## 3. Install Browsers

```bash id="ocj23m"
npx playwright install
```

---

# Execute Test

Run the following command:

```bash id="65o0xk"
npx playwright test coverfox_quote_flow.spec.ts --headed
```
test file name-->coverfox_quote_flow.spec.ts
---

# Playwright Script

```typescript id="ut8p8u"
import { test, expect } from '@playwright/test';

test('Coverfox quote count', async ({ page }) => {

  test.setTimeout(60000);

  // Open website
  await page.goto('https://www.coverfox.com/');

  // Click Don't know car number
  // await page.getByText(/Don't know your car number/i).click();
 await page.locator("//div[@class='flow-links']//div[1]").click();
 
  // Select Brand
  await page.getByText('Maruti', { exact: true }).click();

  // Select Model
  await page.getByText('Fronx').click();

  // Select Fuel
  await page.getByText('Petrol', { exact: true }).click();

  // Select Variant
  await page.getByText('Delta AMT').click();

  // Enter RTO
  await page
    .getByRole('textbox', { name: 'e.g MH 02 or Mumbai' })
    .fill('KA-03');

  // Select RTO option
  await page.getByText('KA-03 Bangalore Indiranagar').click();

  // Registration year
  await page.getByText('2020').click();

  // Policy expiry
  await page.getByText('Not Expired').click();

  // Previous claim
  await page.getByText('No').nth(3).click();

  // View Quotes
  await page.getByRole('button', { name: 'View Quotes' }).click();

  // Wait for result page
  await expect(page.locator('text=plans found')).toBeVisible();

  // Get plans text
  const plansText = await page.locator('text=plans found').textContent();

  console.log('Plans Text:', plansText);

  // Extract only number
  const plansCount = plansText?.match(/\d+/)?.[0];

  console.log(`Total Quotes Loaded: ${plansCount}`);

});
```

---

# Expected Output

```bash id="xhbwlp"
Plans Text: 9 plans found
Total Quotes Loaded: 9
```

---

# Framework Used

* Playwright
* TypeScript
* Node.js

---

# Author

Satya
