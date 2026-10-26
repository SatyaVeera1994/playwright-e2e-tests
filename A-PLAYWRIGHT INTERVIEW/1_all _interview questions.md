## 1 How do you handle Multiple Tabs in Playwright?\*\*

> In Playwright, I handle multiple tabs using `context.waitForEvent('page')`. It waits for the new tab to open, then I switch to the new page, perform the required actions, and return to the parent page if needed.

> **Playwright లో Multiple Tabs handle చేయడానికి `context.waitForEvent('page')` ఉపయోగిస్తాను. కొత్త Tab open అయిన తర్వాత దానికి switch అయి actions perform చేసి, అవసరమైతే Parent Page కి తిరిగి వస్తాను.**

“I handle multiple tabs using the page event on the BrowserContext and popup windows using the popup event on the current page. I wait for the event and capture the new Page object, then perform actions and assertions on the new page.

## Q1. How do you switch to a new tab?

> I use `context.waitForEvent('page')` to capture the new tab and then perform actions on it.

## Q2. How do you return to the parent page?

> I continue using the original parent page object because Playwright keeps the page reference.

## Q3. Can one Browser Context have multiple tabs?

> Yes. One Browser Context can contain multiple pages (tabs).

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

2 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

Frames & iFrames** is another **frequently asked Playwright interview topic.


## Q1. What are Frames and iFrames in Playwright?
> An iFrame is an embedded web page inside another web page. In Playwright, we use `frameLocator()` to interact with elements inside an iFrame.

# Q2. How do you handle iFrames in Playwright?

> In Playwright, I handle iframes using `frameLocator()`, `page.frame()`, and `contentFrame()`. These methods help us locate and interact with elements inside an iframe.”
# 💻 Code Example
```typescript
await page
  .frameLocator('#payment-frame')
  .getByRole('button', { name: 'Pay Now' })
  .click();
````

# Q3. What is `frameLocator()`?

> `frameLocator()` is used to locate an iFrame and interact with elements inside it.

# ⭐ Real-Time Project Example

> In my project, the payment page opened a third-party payment gateway inside an iFrame. I used `frameLocator()` to enter card details and click the Pay button.

## Q1. Can you access iFrame elements directly?

> No. We must use `frameLocator()` first.

## Q2. Which method is used to handle iFrames?

> `frameLocator()`.

## Q3. Why do we use `frameLocator()`?

> To interact with elements inside an iFrame.

3 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

## Different Timeout Types in Playwright

Interview Answer (Simple English):

“In Playwright, there are five main timeout types: Test Timeout, Action Timeout, Navigation Timeout, Assertion Timeout, and Global Timeout. Each timeout controls how long Playwright waits for a specific operation or test execution.”

## Quick Interview Revision

| Timeout            | Purpose                               |
| ------------------ | ------------------------------------- |
| Test Timeout       | Maximum time for one test             |
| Action Timeout     | Time allowed for an action            |
| Navigation Timeout | Time allowed for navigation           |
| Assertion Timeout  | Time allowed for an assertion to pass |
| Global Timeout     | Maximum time for the entire test run  |

Important: Action and navigation timeouts are generally unlimited by default, while test timeout is 30 seconds and assertion timeout is 5 seconds. You can configure them according to your project requirements.
4 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

## Different Types of Waits in Playwright

## Short Interview Answer

“I mainly use Playwright's built-in auto-waiting and assertion-based waiting. I use `waitFor()` or `waitForURL()` when required. I avoid fixed waits because they increase execution time and can make tests unreliable.”

### 1. Auto-waiting (Most commonly used)

### 5. Fixed Wait (Not Recommended)
