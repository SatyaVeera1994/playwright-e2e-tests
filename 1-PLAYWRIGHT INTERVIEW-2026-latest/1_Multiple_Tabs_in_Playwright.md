# ⭐⭐⭐⭐⭐ Multiple Tabs in Playwright (Interview Preparation)

## How do you handle Multiple Tabs in Playwright?\*\*

> In Playwright, I handle multiple tabs using `context.waitForEvent('page')`. It waits for the new tab to open, then I switch to the new page, perform the required actions, and return to the parent page if needed.

> **Playwright లో Multiple Tabs handle చేయడానికి `context.waitForEvent('page')` ఉపయోగిస్తాను. కొత్త Tab open అయిన తర్వాత దానికి switch అయి actions perform చేసి, అవసరమైతే Parent Page కి తిరిగి వస్తాను.**

## Q1. How do you switch to a new tab?

### English

> I use `context.waitForEvent('page')` to capture the new tab and then perform actions on it.

### Telugu

> **`context.waitForEvent('page')` ఉపయోగించి కొత్త Tab కి switch అవుతాను.**

---

## Q2. How do you return to the parent page?

### English

> I continue using the original parent page object because Playwright keeps the page reference.

### Telugu

> **Parent Page object ద్వారా తిరిగి Parent Page లో continue చేస్తాను.**

---

## Q3. Can one Browser Context have multiple tabs?

### English

> Yes. One Browser Context can contain multiple pages (tabs).

### Telugu

> **అవును. ఒక Browser Context లో Multiple Tabs ఉండవచ్చు.**

## Q4 How do you handle child windows in Playwright?"\*\*, you can confidently answer:

> **"In Playwright, child windows are handled as new pages (tabs). I use `context.waitForEvent('page')` to capture the new page, perform validations, and then continue with the parent page."**

# 💻 Code Example

````typescript
import { test, expect } from '@playwright/test';

test('Handle Multiple Tabs', async ({ page, context }) => {

  await page.goto('https://example.com');

  // Wait for new tab
  const newPagePromise = context.waitForEvent('page');

  // Click the link that opens a new tab
  await page.getByText('Open New Tab').click();

  // Get new tab
  const newPage = await newPagePromise;

  await newPage.waitForLoadState();

  // Verify title
  await expect(newPage).toHaveTitle(/Example/);

});
`# ⭐ Best Practices

- ✅ Use `context.waitForEvent('page')` **before** clicking the link.
- ✅ Wait for the new page to load using `waitForLoadState()`.
- ✅ Use the new page object for all actions.
- ✅ Close the child tab if it's no longer needed.
### Code

```typescript
const pagePromise = context.waitForEvent('page');

await page.getByText('Privacy Policy').click();

const privacyPage = await pagePromise;

await expect(privacyPage).toHaveURL(/privacy/);

await privacyPage.close();
````

---

**Multiple Tabs** అంటే ఒక Browser లో ఒకటి కంటే ఎక్కువ Tabs open అవడం.

ఉదాహరణ:

- Main Page → Amazon
- New Tab → Product Details

లేదా

- Click "Terms & Conditions"
- కొత్త Tab open అవుతుంది.

Playwright లో కొత్త Tab ని handle చేయడానికి **`context.waitForEvent('page')`** ఉపయోగిస్తాము.

---

# 🏠 Easy Example

```text
Main Page

↓

Click Terms & Conditions

↓

New Tab Opens

↓

Verify Title

↓

Close New Tab

↓

Back to Main Page
```

---

# ✅ Interview Answer (English)

> In Playwright, I handle multiple tabs using `context.waitForEvent('page')`. It waits for the new tab to open, then I switch to the new page, perform the required actions, and return to the parent page if needed.

---

# ✅ Interview Answer (Telugu)

> **Playwright లో Multiple Tabs handle చేయడానికి `context.waitForEvent('page')` ఉపయోగిస్తాను. కొత్త Tab open అయిన తర్వాత దానికి switch అయి actions perform చేసి, అవసరమైతే Parent Page కి తిరిగి వస్తాను.**

---

# 💻 Code Example

```typescript
import { test, expect } from "@playwright/test";

test("Handle Multiple Tabs", async ({ page, context }) => {
  await page.goto("https://example.com");

  // Wait for new tab
  const newPagePromise = context.waitForEvent("page");

  // Click the link that opens a new tab
  await page.getByText("Open New Tab").click();

  // Get new tab
  const newPage = await newPagePromise;

  await newPage.waitForLoadState();

  // Verify title
  await expect(newPage).toHaveTitle(/Example/);
});
```

---

# 🔍 Step-by-Step Explanation

### Step 1

```typescript
const newPagePromise = context.waitForEvent("page");
```

### English

Waits for a new tab to open.

### Telugu

**కొత్త Tab open అయ్యే వరకు wait చేస్తుంది.**

---

### Step 2

```typescript
await page.getByText("Open New Tab").click();
```

### English

Clicks the link that opens the new tab.

### Telugu

**కొత్త Tab open చేసే Link ని click చేస్తుంది.**

---

### Step 3

```typescript
const newPage = await newPagePromise;
```

### English

Captures the new tab.

### Telugu

**కొత్త Tab ని capture చేస్తుంది.**

---

### Step 4

```typescript
await newPage.waitForLoadState();
```

### English

Waits until the new page loads completely.

### Telugu

**కొత్త Page పూర్తిగా load అయ్యే వరకు wait చేస్తుంది.**

---

### Step 5

```typescript
await expect(newPage).toHaveTitle(/Example/);
```

### English

Verifies the title of the new tab.

### Telugu

**కొత్త Tab యొక్క Title ని verify చేస్తుంది.**

---

# 🏢 Real-Time Project Example

Suppose your application has:

```text
Insurance Dashboard

↓

Click Privacy Policy

↓

New Tab Opens

↓

Verify Privacy Policy Page

↓

Close Tab

↓

Back to Dashboard
```

### Code

```typescript
const pagePromise = context.waitForEvent("page");

await page.getByText("Privacy Policy").click();

const privacyPage = await pagePromise;

await expect(privacyPage).toHaveURL(/privacy/);

await privacyPage.close();
```

---

# ⭐ Common Interview Questions

## Q1. How do you switch to a new tab?

### English

> I use `context.waitForEvent('page')` to capture the new tab and then perform actions on it.

### Telugu

> **`context.waitForEvent('page')` ఉపయోగించి కొత్త Tab కి switch అవుతాను.**

---

## Q2. How do you return to the parent page?

### English

> I continue using the original parent page object because Playwright keeps the page reference.

### Telugu

> **Parent Page object ద్వారా తిరిగి Parent Page లో continue చేస్తాను.**

---

## Q3. Can one Browser Context have multiple tabs?

### English

> Yes. One Browser Context can contain multiple pages (tabs).

### Telugu

> **అవును. ఒక Browser Context లో Multiple Tabs ఉండవచ్చు.**

---

# ❌ Common Mistakes

### Mistake 1

```typescript
await page.click();
```

Without waiting for the new tab.

### ✅ Correct

```typescript
const pagePromise = context.waitForEvent("page");

await page.click();

const newPage = await pagePromise;
```

---

### Mistake 2

Trying to use the **parent page** to verify the new tab.

### ✅ Correct

Use the **new page object** returned by `waitForEvent('page')`.

---

# ⭐ Best Practices

- ✅ Use `context.waitForEvent('page')` **before** clicking the link.
- ✅ Wait for the new page to load using `waitForLoadState()`.
- ✅ Use the new page object for all actions.
- ✅ Close the child tab if it's no longer needed.

---

# 🧠 Easy Memory Trick

Remember **W → C → S → V**

- **W** → Wait (`waitForEvent`)
- **C** → Click
- **S** → Switch to New Tab
- **V** → Verify

---

# ⭐ One-Line Interview Answers

| Question                              | English                                                              | Telugu                                                                               |
| ------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| What are Multiple Tabs?               | Multiple tabs are multiple pages opened in the same browser context. | **Multiple Tabs అంటే ఒకే Browser Context లో open అయ్యే వేర్వేరు Pages.**             |
| How do you handle Multiple Tabs?      | I use `context.waitForEvent('page')` to capture the new tab.         | **`context.waitForEvent('page')` ఉపయోగించి కొత్త Tab ని handle చేస్తాను.**           |
| How do you switch to a new tab?       | I use the new Page object returned by `waitForEvent('page')`.        | **`waitForEvent('page')` ద్వారా వచ్చిన కొత్త Page object ఉపయోగించి switch అవుతాను.** |
| How do you return to the parent page? | I continue using the original parent page object.                    | **Original Parent Page object ద్వారా తిరిగి Parent Page కి వస్తాను.**                |

### 🎯 Interview Tip

If an interviewer asks **"How do you handle child windows in Playwright?"**, you can confidently answer:

> **"In Playwright, child windows are handled as new pages (tabs). I use `context.waitForEvent('page')` to capture the new page, perform validations, and then continue with the parent page."**

.
