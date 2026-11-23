# **Create a Playwright Test for Opening an Application**

## How do you create a test in Playwright?\*\*

"First, I create a spec file and import `test` and `expect` from Playwright. Then I use the test function to create a test case. Inside the test, I use the page fixture to open the application and the expect function to verify the expected result.".

## **1. Create a new spec file**

First, mee Playwright project lo `tests` folder create chesi, oka spec file create cheyyandi.

Example:

```
Playwright-Project/
│
├── tests/
│   └── open-app.spec.ts
│
├── playwright.config.ts
└── package.json
```

**Explanation:** `.spec.ts` anedi Playwright test file extension.

## **2. Import Playwright module**

```
import { test, expect } from "@playwright/test";
```

- `test` – Test cases declare cheyyadaniki.
- `expect` – Assertions (verification) cheyyadaniki.

## **3. Create a test function**

Screenshot lo unna syntax:

```
test("title of the test", () => {

});
```

Idi anonymous arrow function.

Playwright lo actual browser automation kosam `page` fixture kuda use chestham.

```
test("Open application", async ({ page }) => {

});
```

**Telugu explanation:**

- `test` – Test case create chesthundi.
- `"Open application"` – Test name.
- `async` – Asynchronous operations handle chesthundi.
- `{ page }` – Browser page object ni provide chesthundi.
- `=>` – Arrow function.
- `{ }` – Test code rasukune block.

## **4. Complete example – Open an application**

Create `tests/open-app.spec.ts`:

```
import { test, expect } from "@playwright/test";

test("Open Playwright application", async ({ page }) => {

  // Open application
  await page.goto("https://playwright.dev/");

  // Verify page title
  await expect(page).toHaveTitle(/Playwright/);

});
```

### **Step-by-step execution**

1. `test()` – Test execution start avuthundi.
2. `page.goto()` – Application URL open chesthundi.
3. `await` – Operation complete ayye varaku wait chesthundi.
4. `expect()` – Page title expected value tho match avuthundo verify chesthundi.

## **5. Execute the test**

Terminal lo:

```
npx playwright test tests/open-app.spec.ts
```

Expected result

**Open Playwright application**

Passed

1 test passed

Application opened successfully

Page title verified successfully

## **6. Interview answer**

**Q: How do you create a test in Playwright?**

"First, I create a spec file and import `test` and `expect` from Playwright. Then I use the test function to create a test case. Inside the test, I use the page fixture to open the application and the expect function to verify the expected result."

## **Practice question**

What is the purpose of `page.goto()` in Playwright?

A. To open a URL in the browser

B. To verify page title

C. To close the browser

D. To create a test case

Submit Answer
