Yes Satya. Since you have **Playwright experience** and **not Selenium experience**, don't mention Selenium in interviews. Speak only about Playwright and your project experience.

---

# Q5. How does Playwright handle Shadow DOM elements?

## 1. Telugu Concept

Shadow DOM అనేది Web Components లో ఉండే Internal DOM.

సాధారణ HTML Elements లాగా కనిపించినా, వాటి Elements Shadow Root లో ఉంటాయి.

Playwright Shadow DOM ను Automatically Handle చేస్తుంది.

Special Commands లేదా Extra Configuration అవసరం లేదు.

Normal Locators ఉపయోగించి Shadow DOM Elements ని Access చేయవచ్చు.

దీనివల్ల Automation చాలా Easy అవుతుంది.

---

## 2. Easy to Remember

✅ Shadow DOM = Internal DOM

✅ Used in Web Components

✅ Playwright Handles Automatically

✅ No Extra Code Needed

✅ Normal Locators Work

✅ Easy Automation

### One-Line Summary

**Playwright automatically handles Shadow DOM elements using normal locators.**

---

## 3. Telugu Interview Answer

Shadow DOM అనేది Web Components లో ఉపయోగించే Internal DOM Structure.

Playwright యొక్క ముఖ్యమైన Advantage ఏమిటంటే Shadow DOM Elements ని Automatically Handle చేస్తుంది.

Special Handling లేకుండా Normal Locators తోనే Shadow DOM లో ఉన్న Elements ని Access చేయవచ్చు.

మా Project లో కొన్ని Custom UI Components ఉండేవి. వాటిలో Internal Elements Direct గా Visible కాకపోయినా Playwright Locators ద్వారా Easily Access చేయగలిగాము.

దీనివల్ల Framework Code Simple గా ఉండేది మరియు Additional Utility Methods అవసరం పడలేదు.

---

## 4. Simple English Answer

Shadow DOM is an internal DOM used by web components.

Playwright automatically handles Shadow DOM elements.

I can use normal locators to interact with elements inside Shadow DOM.

No special code is required.

This makes automation easier and more maintainable.

---

## 5. English Interview Answer

Shadow DOM is commonly used in modern web applications that use reusable web components.

One advantage of Playwright is that it automatically handles Shadow DOM elements.

I can interact with elements inside Shadow DOM using standard locators without writing any special logic.

This simplifies automation and improves maintainability.

In projects that use custom UI components, Playwright allows me to work with Shadow DOM elements just like regular DOM elements, making test implementation much easier.

---

## 6. Real-Time Project Example

In my Playwright project, we had reusable custom UI components.

For example:

```html
<custom-search>
  #shadow-root
  <input type="text">
</custom-search>
```

To enter search text, I simply used:

```typescript
await page
  .locator('custom-search input')
  .fill('Playwright');
```

Playwright automatically located the element inside the Shadow DOM.

---

## 7. Code Example (TypeScript)

```typescript
import { test, expect } from '@playwright/test';

test('Shadow DOM Example', async ({ page }) => {

  await page.goto('https://example.com');

  await page
    .locator('custom-search input')
    .fill('Playwright');

  await page
    .locator('custom-search button')
    .click();

});
```

### Verify Element

```typescript
await expect(
  page.locator('custom-search input')
).toBeVisible();
```

---

### Interview Short Answer (30 Seconds)

> "Shadow DOM is used in modern web components. Playwright automatically handles Shadow DOM elements, so I can use normal locators without writing any special code. This makes automation simpler and easier to maintain."
