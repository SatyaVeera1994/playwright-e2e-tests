# Q6. How do you handle dynamic elements with changing attributes or IDs?

## 1. Telugu Concept

Dynamic Elements అంటే ప్రతి Page Load లేదా Refresh సమయంలో IDs, Classes లేదా Attributes Change అయ్యే Elements.

Example:

```html
<button id="user-12345">
```

Next Run:

```html
<button id="user-98765">
```

ID మారిపోతుంది.

---

### Problem

ఇలా Locator రాస్తే:

```typescript
await page.locator('#user-12345').click();
```

Next Run లో Fail అవుతుంది.

---

### Solution

Stable Locators ఉపయోగించాలి.

### Use Role

```typescript
await page
  .getByRole('button', {
    name: 'Edit'
  })
  .click();
```

---

### Use Text

```typescript
await page
  .getByText('Alice Johnson')
  .click();
```

---

### Use Filter

```typescript
const row = page
  .locator('tbody tr')
  .filter({
      hasText: 'john@test.com'
  });

await row
  .getByRole('button', {
      name: 'Edit'
  })
  .click();
```

---

## 2. Easy to Remember

✅ Avoid Dynamic IDs

✅ Use getByRole()

✅ Use getByText()

✅ Use Filter()

✅ Use Stable Attributes

✅ Focus on User Visible Data

### One-Line Summary

**Never depend on changing IDs. Use stable, user-facing locators.**

---

## 3. Telugu Interview Answer

Dynamic Elements అనేవి ప్రతి Page Load సమయంలో IDs లేదా Classes Change అయ్యే Elements.

అలాంటి Elements కోసం Hardcoded IDs ఉపయోగించను.

నేను getByRole(), getByText(), filter() వంటి Stable Locator Strategies ఉపయోగిస్తాను.

Table Data లేదా Dynamic Lists లో Content ఆధారంగా Row ని Identify చేసి Action Perform చేస్తాను.

మా Project లో User Lists మరియు Dynamic Tables ఉండేవి. IDs Change అయినా User Name లేదా Email ఆధారంగా Row ని Locate చేసి Operations Perform చేసేవాళ్ళం.

దీనివల్ల Tests Stable గా ఉండేవి మరియు Maintenance Effort తగ్గింది.

---

## 4. Simple English Answer

Dynamic elements change their IDs or attributes frequently.

I avoid using dynamic IDs in locators.

Instead, I use:

* getByRole()
* getByText()
* filter()

I always try to identify elements using stable user-visible information.

---

## 5. English Interview Answer

Dynamic elements often have IDs, classes, or attributes that change between page loads.

To handle them, I avoid using dynamic identifiers and prefer stable locator strategies such as getByRole(), getByText(), and locator filters.

For tables and lists, I locate elements based on visible content rather than generated IDs.

In my Playwright projects, this approach improved locator stability and reduced maintenance caused by frontend changes.

---

## 6. Real-Time Project Example

Suppose we have a User Management Table:

```text
Alice Johnson     Edit
John Smith        Edit
David Miller      Edit
```

Instead of:

```typescript
await page.locator('#user-987654').click();
```

I use:

```typescript
const row = page
  .locator('tbody tr')
  .filter({
     hasText: 'Alice Johnson'
  });

await row
  .getByRole('button', {
      name: 'Edit'
  })
  .click();
```

Even if IDs change, the test still works.

---

## 7. Code Example (TypeScript)

### Bad Example

```typescript
await page
  .locator('#user-1679234857233')
  .click();
```

❌ Dynamic ID

---

### Better Example

```typescript
await page
  .getByRole('listitem')
  .filter({
     hasText: 'Alice Johnson'
  })
  .click();
```

---

### Table Example

```typescript
const row = page
  .locator('tbody tr')
  .filter({
     hasText: 'john@test.com'
  });

await row
  .getByRole('button', {
      name: 'Edit'
  })
  .click();
```

---

# Q7. How do you handle popups, browser dialogs, and new windows?

## 1. Telugu Concept

Web Applications లో మూడు Common Scenarios ఉంటాయి:

### Browser Dialogs

```text
Alert

Confirm

Prompt
```

---

### New Window / New Tab

```text
Main Page
    │
    ▼
Click Link
    │
    ▼
New Tab Opens
```

---

### File Download

```text
Click Export
      │
      ▼
Download File
```

---

### Important Rule

Event Listener ముందుగా Register చేయాలి.

తర్వాత Action చేయాలి.

```text
Listen First
      │
      ▼
Click
      │
      ▼
Capture Event
```

---

## 2. Easy to Remember

✅ Listen First

✅ Then Click

✅ Dialog → dialog Event

✅ New Tab → popup Event

✅ Download → download Event

✅ Use Promise.all()

### One-Line Summary

**Always start listening for the event before performing the action that triggers it.**

---

## 3. Telugu Interview Answer

Playwright లో Dialogs, Popups మరియు New Windows Handling కోసం Event-Based Approach ఉపయోగిస్తాను.

Browser Dialogs కోసం dialog Event Listener Register చేసి accept() లేదా dismiss() చేస్తాను.

New Tabs లేదా Windows కోసం popup Event ఉపయోగిస్తాను.

File Downloads కోసం download Event Capture చేస్తాను.

ముఖ్యమైన విషయం ఏమిటంటే Event Listener ముందుగా Register చేయాలి. తర్వాత మాత్రమే Click Action Perform చేయాలి.

మా Project లో Reports New Tab లో Open అయ్యేవి మరియు CSV Exports Download అయ్యేవి. వాటిని popup మరియు download Events ఉపయోగించి Handle చేశాము.

---

## 4. Simple English Answer

I use Playwright events to handle dialogs, popups, and downloads.

* dialog → alerts and confirmations
* popup → new tabs/windows
* download → file downloads

I always start listening for the event before performing the click action.

---

## 5. English Interview Answer

Playwright provides event-based APIs for handling dialogs, popups, new windows, and downloads.

For browser dialogs, I register a dialog listener before triggering the action and then accept or dismiss the dialog.

For new windows or tabs, I use page.waitForEvent('popup') together with Promise.all() to ensure the popup is captured correctly.

For file downloads, I use page.waitForEvent('download') and then validate the downloaded file.

In my projects, I used these patterns for report generation, file exports, and confirmation dialogs.

A key best practice is to start listening for the event before performing the action that triggers it.

---

## 6. Real-Time Project Example

### Report Opens in New Tab

```text
Reports Page
      │
      ▼
Click "View Report"
      │
      ▼
New Tab Opens
```

Capture popup and validate URL.

---

### CSV Export

```text
Export Button
      │
      ▼
CSV Download
```

Capture download event and verify file.

---

### Delete Confirmation

```text
Delete User
      │
      ▼
Confirm Dialog
      │
      ▼
Accept
```

Handle using dialog event.

---

## 7. Code Example (TypeScript)

### Alert / Confirm Dialog

```typescript
page.once('dialog', async dialog => {

  console.log(dialog.message());

  await dialog.accept();

});

await page
  .getByRole('button', {
      name: 'Delete User'
  })
  .click();
```

---

### New Tab / Popup

```typescript
const [newPage] = await Promise.all([

  page.waitForEvent('popup'),

  page
    .getByRole('link', {
        name: 'Open Report'
    })
    .click()

]);

await newPage.waitForLoadState();
```

---

### File Download

```typescript
const [download] = await Promise.all([

  page.waitForEvent('download'),

  page
    .getByRole('button', {
        name: 'Export CSV'
    })
    .click()

]);

const filePath = await download.path();

console.log(filePath);
```

---

### Verify Download Exists

```typescript
expect(await download.path())
  .toBeTruthy();
```

---

✅ These Q6 and Q7 are very common Playwright interview questions, especially for 2–5 years QA Automation roles.
