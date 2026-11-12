## 1. What is Playwright and how does it differ from Selenium?

Playwright is a modern end-to-end automation framework developed by Microsoft. It supports Chromium, Firefox, and WebKit using a single API.

“Playwright uses a persistent WebSocket connection for continuous communication with the browser, whereas Selenium uses HTTP requests for each command.

Because of this persistent connection, Playwright can listen to browser events in real time and provide advanced capabilities such as:

Auto Waiting
Network Interception
Trace Viewer
Video Recording
Faster Test Execution
Browser Event Monitoring

These features make Playwright faster, more reliable, and easier to use for modern web application testing compared to traditional automation tools.

## 2. How do you handle multiple browser contexts in Playwright?

I handle multiple browser contexts in Playwright using browser.newContext().
Each context maintains independent cookies, storage, and login sessions. For example, I create one context for an Admin user and another context for a Customer user. This helps me test multiple users independently without sharing session data."

Interview memory trick: Browser = Main instance | Context = Separate session | Page = Tab.
Answer:
typescript
import { test, chromium } from '@playwright/test';

test('multiple contexts example', async () => {
const browser = await chromium.launch();

// Create two independent browser contexts
const context1 = await browser.newContext();
const context2 = await browser.newContext();

const page1 = await context1.newPage();
const page2 = await context2.newPage();

// Each context has independent cookies/storage
await page1.goto('https://example.com');
await page2.goto('https://example.com');

await context1.close();
await context2.close();

await browser.close();
});

## Q2. How do you handle multiple browser contexts in Playwright?

### 1. Concept – Simple English

In Playwright, we use Browser Contexts to run multiple independent browser sessions.

Each browser context has its own:

- Cookies
- Local storage
- Session storage
- Login sessions
- Permissions

We use multiple browser contexts when we want to test different users or roles independently in the same browser.

### 2. Telugu Explanation

Playwright lo multiple browser contexts ante oke browser lo multiple independent sessions create cheyadam.

Example:

- Context 1 → Admin user login
- Context 2 → Normal user login

Admin login details normal user ki share avvavu. Rendu separate sessions laga work chestayi.

### 3. Real-time Project Example

Suppose mana application lo Admin and Customer unnaru.

1. Admin context create chestham.
2. Admin login chestham.
3. Customer context create chestham.
4. Customer login chestham.
5. Admin customer details update chesthadu.
6. Customer side lo updated details verify chestham.

### 4. Playwright TypeScript Code

```
import { test, expect } from '@playwright/test';

test('Multiple browser contexts', async ({ browser }) => {

  // Admin context
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();

  await adminPage.goto('https://example.com');

  // Customer context
  const customerContext = await browser.newContext();
  const customerPage = await customerContext.newPage();

  await customerPage.goto('https://example.com');

  // Close contexts
  await adminContext.close();
  await customerContext.close();

});
```

### 5. Interview-ready Answer – Simple English

"I handle multiple browser contexts in Playwright using `browser.newContext()`.

Each context maintains independent cookies, storage, and login sessions. For example, I create one context for an Admin user and another context for a Customer user. This helps me test multiple users independently without sharing session data."

### 6. Important Interview Difference

| Browser                    | Browser Context         | Page                |
| -------------------------- | ----------------------- | ------------------- |
| Main browser instance      | Independent session     | Individual tab      |
| `browser`                  | `browser.newContext()`  | `context.newPage()` |
| Can have multiple contexts | Can have multiple pages | Represents a tab    |

Remember this flow:

Browser

Admin Context

Admin Page

Customer Context

Customer Page

Interview memory trick: Browser = Main instance | Context = Separate session | Page = Tab.
