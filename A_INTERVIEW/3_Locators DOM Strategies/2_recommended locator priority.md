# Q2. What is the recommended locator priority and why?

## 1. Telugu Concept

Playwright Recommended Locator Priority అనేది Elements ని Reliable గా Identify చేయడానికి ఉపయోగించే Best Practice.

Playwright User Perspective నుండి Elements ని Locate చేయమని Recommend చేస్తుంది.

అంటే User Page లో ఎలా చూస్తాడో అలాగే Locate చేయాలి.

---

### Recommended Priority Order

### 1. getByRole() ⭐ (Most Recommended)

```typescript
await page.getByRole('button', {
  name: 'Login'
}).click();
```

Role + Accessible Name ఆధారంగా Element ని Find చేస్తుంది.

Most Stable Locator.

---

### 2. getByLabel()

Forms కోసం Best Locator.

```typescript
await page
  .getByLabel('Email')
  .fill('test@test.com');
```

---

### 3. getByPlaceholder()

```typescript
await page
  .getByPlaceholder('Enter Email')
  .fill('test@test.com');
```

---

### 4. getByText()

```typescript
await page
  .getByText('Welcome')
  .click();
```

Visible Text ఆధారంగా Find చేస్తుంది.

---

### 5. getByTestId()

```typescript
await page
  .getByTestId('login-btn')
  .click();
```

Developer Added Test Attribute.

---

### Avoid

```typescript
page.locator(
'.btn-primary-123'
);
```

```typescript
page.locator(
'#login_987654'
);
```

Dynamic IDs & Classes.

---

## 2. Easy to Remember

✅ getByRole() → Best Choice

✅ getByLabel() → Forms

✅ getByPlaceholder() → Inputs

✅ getByText() → Visible Text

✅ getByTestId() → Stable Backup

✅ Avoid Dynamic IDs

### One-Line Summary

**Always use user-facing locators first because they are more stable and readable.**

### Locator Priority

```text
1. getByRole()

2. getByLabel()

3. getByPlaceholder()

4. getByText()

5. getByTestId()
```

### Selenium vs Playwright

| Selenium       | Playwright        |
| -------------- | ----------------- |
| XPath Heavy    | User-Focused      |
| CSS Dependency | Semantic Locators |
| Less Readable  | More Readable     |
| More Fragile   | More Stable       |

---

## 3. Telugu Interview Answer

Playwright లో నేను Recommended Locator Priority Follow చేస్తాను.

నా First Choice ఎప్పుడూ getByRole() ఉంటుంది ఎందుకంటే ఇది Accessibility మరియు Semantic Meaning ఆధారంగా Element ని Identify చేస్తుంది.

Forms కోసం getByLabel(), Input Fields కోసం getByPlaceholder(), Text Based Elements కోసం getByText() ఉపయోగిస్తాను.

Role-based Locator Available కాకపోతే getByTestId() ఉపయోగిస్తాను.

Dynamic IDs మరియు Complex XPath Locators ని వీలైనంత వరకు Avoid చేస్తాను.

మా Project లో CSS Classes తరచుగా Change అయ్యేవి. Role-Based Locators ఉపయోగించడం వల్ల చాలా Locator Maintenance Issues తగ్గాయి.

అదే సమయంలో Accessibility Issues కూడా Early గా Identify చేయగలిగాము.

---

## 4. Simple English Answer

I follow Playwright's recommended locator priority.

My first choice is getByRole() because it is stable and user-focused.

For forms, I use getByLabel().

For inputs, I use getByPlaceholder().

If needed, I use getByText() or getByTestId().

I avoid dynamic IDs and fragile XPath locators whenever possible.

---

## 5. English Interview Answer

Playwright recommends using user-facing locators because they are more resilient and maintainable.

My preferred locator priority is:

1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()

I typically start with getByRole() because it is based on semantic meaning and accessibility information rather than implementation details such as CSS classes or DOM structure.

These locators are less likely to break when UI changes occur.

In my projects, using role-based and label-based locators significantly reduced locator maintenance and improved test reliability.

When user-facing locators are not sufficient, I use data-testid as a stable fallback provided by the development team.

---

## 6. Real-Time Project Example

In my Insurance Automation Project:

Initially:

```typescript
await page.locator(
'.btn-primary.login-btn'
).click();
```

Frontend team changed CSS classes.

Tests failed.

---

We changed to:

```typescript
await page
 .getByRole('button', {
   name: 'Login'
 })
 .click();
```

Now:

✅ CSS changes don't affect tests

✅ Better readability

✅ Less maintenance

---

Example:

```typescript
await page
 .getByLabel('Mobile Number')
 .fill('9876543210');
```

Much better than:

```typescript
await page
 .locator('#mobile_123')
 .fill('9876543210');
```

---

## 7. Code Example (TypeScript)

### Best Practice - getByRole()

```typescript
await page
  .getByRole('button', {
    name: 'Login'
  })
  .click();
```

---

### getByLabel()

```typescript
await page
  .getByLabel('Email')
  .fill('test@test.com');
```

---

### getByPlaceholder()

```typescript
await page
  .getByPlaceholder('Enter Email')
  .fill('test@test.com');
```

---

### getByText()

```typescript
await page
  .getByText('Forgot Password')
  .click();
```

---

### getByTestId()

```typescript
await page
  .getByTestId('login-button')
  .click();
```

---

### Avoid Dynamic Locators

```typescript
await page.locator(
'#login_173829281'
).click();
```

❌ Not Recommended

---

### Recommended Alternative

```typescript
await page
  .getByRole('button', {
     name: 'Login'
  })
  .click();
```

✅ Stable & Readable

---

✅ **Next: Q3. How do you chain and filter locators for complex scenarios?** (Very common interview question for tables, grids, and dynamic UI elements.)
