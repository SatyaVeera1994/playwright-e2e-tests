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
