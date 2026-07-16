# Q3. How do you chain and filter locators for complex scenarios?

## 1. Telugu Concept

Large Applications లో Tables, Grids, Cards, Lists వంటి Complex UI Elements ఉంటాయి.

అలాంటి సందర్భాల్లో Direct Locator ఉపయోగిస్తే Multiple Elements Match అవుతాయి.

అప్పుడు:

✅ Chaining

✅ Filtering

ఉపయోగిస్తాము.

---

### Chaining అంటే ఏమిటి?

Parent Locator లో Child Locator ని Search చేయడం.

```text
Login Form
    │
    ├── Email
    ├── Password
    └── Login Button
```

మొత్తం Page లో Search చేయకుండా Form లో మాత్రమే Search చేస్తాం.

---

### Filter అంటే ఏమిటి?

Multiple Elements లో Specific Element ని Filter చేయడం.

Example:

```text
Product List

MacBook Pro
Dell Laptop
HP Laptop
```

MacBook Product మాత్రమే Select చేయాలి.

---

### Benefits

✅ Less XPath

✅ Better Readability

✅ Stable Tests

✅ Easy Maintenance

✅ Dynamic Tables Handling

---

## 2. Easy to Remember

✅ Chaining = Parent → Child

✅ Filter = Find Specific Element

✅ Less XPath

✅ Better Readability

✅ Dynamic Tables Easy

✅ More Stable Tests

### One-Line Summary

**Chaining narrows the search scope and filtering helps identify the exact element from multiple matching elements.**

### Selenium vs Playwright

| Selenium         | Playwright       |
| ---------------- | ---------------- |
| Complex XPath    | Chaining         |
| Long Locators    | Filter API       |
| Hard Maintenance | Easy Maintenance |
| More Fragile     | More Stable      |

---

## 3. Telugu Interview Answer

Playwright లో Complex UI Elements Handle చేయడానికి Chaining మరియు Filtering ఉపయోగిస్తాను.

Chaining ద్వారా Parent Element లో మాత్రమే Search Scope ని Restrict చేయవచ్చు.

Filtering ద్వారా Multiple Matching Elements లో Specific Element ని Identify చేయవచ్చు.

ఉదాహరణకు Table లో ORDER-12345 Row ని Find చేసి View Details Button Click చేయాలి అంటే మొత్తం Page లో Search చేయకుండా ముందుగా Row ని Filter చేసి తర్వాత Button ని Locate చేస్తాను.

ఈ Approach వల్ల XPath Complexity తగ్గుతుంది మరియు Locator Readability Improve అవుతుంది.

మా Project లో Dynamic Tables మరియు Product Listings Handle చేయడానికి filter({ hasText }) మరియు filter({ has }) ఎక్కువగా ఉపయోగించాము.

దీనివల్ల Locator Maintenance చాలా Easy అయింది.

---

## 4. Simple English Answer

I use locator chaining and filtering to work with complex UI elements.

Chaining limits the search within a parent element.

Filtering helps find the exact matching element.

This makes locators more readable, reliable, and easier to maintain.

I use this approach frequently for tables, cards, and dynamic lists.

---

## 5. English Interview Answer

In Playwright, I use locator chaining and filtering to handle complex UI structures such as tables, forms, product cards, and grids.

Chaining allows me to scope locators within a parent container, making the locator more precise and reducing unnecessary DOM searches.

Filtering allows me to narrow down a collection of elements based on visible text or child elements.

Instead of writing long and fragile XPath expressions, I use readable locator chains combined with filter methods.

For example, when working with dynamic tables, I first identify the row containing a specific order number and then locate the required action button within that row.

This approach improves maintainability, readability, and stability of the automation framework.

---

## 6. Real-Time Project Example

### Example 1: Insurance Plans

In my Insurance Automation Project:

```text
Silver Plan
Gold Plan
Premium Plan
```

Need to click:

```text
Premium Plan → Buy Now
```

Instead of using long XPath:

```xpath
//div[3]/div[2]/button
```

I used:

```typescript
filter({ hasText: 'Premium Plan' })
```

Much cleaner and more stable.

---

### Example 2: Orders Table

```text
ORDER-1001
ORDER-1002
ORDER-1003
```

Need:

```text
ORDER-1002 → View Details
```

Filter Row → Click Button.

Easy and readable.

---

## 7. Code Example (TypeScript)

### Chaining Example

```typescript
const loginForm =
page.locator('#login-form');

await loginForm
  .getByLabel('Email')
  .fill('user@test.com');

await loginForm
  .getByLabel('Password')
  .fill('Password123');

await loginForm
  .getByRole('button', {
      name: 'Login'
  })
  .click();
```

---

### Filter Using Text

```typescript
const productCard =
page.locator('.product-card')
.filter({
   hasText: 'MacBook Pro'
});

await productCard
  .getByRole('button', {
      name: 'Add to Cart'
  })
  .click();
```

---

### Filter Using Child Locator

```typescript
const activeRows =
page.locator('tbody tr')
.filter({
   has: page.locator(
      '.status-badge',
      { hasText: 'Active' }
   )
});

await expect(activeRows)
      .toHaveCount(3);
```

---

### Dynamic Table Example

```typescript
const orderRow =
page.locator('tbody tr')
.filter({
   hasText: 'ORDER-12345'
});

await orderRow
  .getByRole('button', {
      name: 'View Details'
  })
  .click();
```

---

### Combined Chaining + Filtering

```typescript
await page
  .locator('.product-card')
  .filter({
      hasText: 'iPhone 16'
  })
  .getByRole('button', {
      name: 'Buy Now'
  })
  .click();
```

---

✅ **Next: Q4. How do you handle iframes with Playwright?** (Very common in Stripe, PayPal, payment gateways, and interview questions.)
