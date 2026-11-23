# **Skip a Test & Execute Only Options in Playwright**

https://playwright.dev/docs/test-annotations?utm_source=chatgpt.com

## How do you skip a test in Playwright?\*\*

"We use `test.skip()` to skip a particular test. We use `test.only()` to execute only one selected test during debugging. We use `test.fixme()` for tests that are not ready or have known issues, and `test.fail()` when we expect a test to fail."

1. `test.skip()`
2. `test.only()`
3. `test.fixme()`
4. `test.fail()`

Playwright lo particular test ni **skip cheyyadaniki** and only selected test ni **execute cheyyadaniki** special methods unnayi.

Main ga 4 methods important:

1. `test.skip()`
2. `test.only()`
3. `test.fixme()`
4. `test.fail()`

## **1.&#x20;**`test.skip()`**&#x20;– Skip a test**

Oka test ni execute cheyyakunda skip cheyyali ante `test.skip()` use chestham.

**Example:**

```
import { test, expect } from "@playwright/test";

test("Login test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip("Register test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("Home page test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});
```

**Output:**

- Login test – Passed
- Register test – Skipped
- Home page test – Passed

**Telugu:** Register functionality inka ready ga lekapothe, aa test execute kakunda skip cheyyachu.

## **2.&#x20;**`test.only()`**&#x20;– Execute only one test**

Particular test matrame execute cheyyali ante `test.only()` use chestham.

```
test("Login test", async ({ page }) => {
  console.log("Login test");
});

test.only("Register test", async ({ page }) => {
  console.log("Register test");
});

test("Home page test", async ({ page }) => {
  console.log("Home page test");
});
```

**Output:**

Only Register test execute avuthundi. Migatha tests execute avvavu.

**Telugu:** Manam particular test meeda focus chesi debug cheyyali ante `test.only()` use chestham.

Important

`test.only()` ni production CI/CD execution ki commit cheyyakudadhu. Project configuration lo `forbidOnly: !!process.env.CI` enable chesthe CI lo accidentally `test.only()` use chesina execution fail avuthundi.

## **3.&#x20;**`test.fixme()`**&#x20;– Test is not ready**

Test functionality inka ready ga lekapothe or known issue unte `test.fixme()` use chestham.

```
test.fixme("Payment test", async ({ page }) => {
  await page.goto("https://example.com");
});
```

**Telugu:** Payment functionality incomplete ga undi. Kabatti ee test ippudu execute cheyyakudadhu ani mark chestham.

Difference:

- `test.skip()` – Test ni skip cheyyali.
- `test.fixme()` – Known issue or incomplete test ani mark chestham; test execute avvadu.

## **4.&#x20;**`test.fail()`**&#x20;– Expected failure**

Oka test fail avuthundani manaki mundhe telisinappudu `test.fail()` use chestham.

```
test.fail("Login with invalid credentials", async ({ page }) => {
  await page.goto("https://example.com");

  await expect(page).toHaveTitle("Invalid Title");
});
```

**Telugu:** Ee test fail avuthundani expected ga mark chestham. Test fail ayithe expected failure ga report avuthundi. Unexpected ga pass ayithe test unexpected pass ga report avuthundi.

## **5. Difference between all methods**

| Method         | Purpose                              |
| -------------- | ------------------------------------ |
| `test.skip()`  | Skip a test                          |
| `test.only()`  | Execute only selected test           |
| `test.fixme()` | Mark test as not ready / known issue |
| `test.fail()`  | Expect the test to fail              |

## **6. Conditional Skip**

Environment batti test skip cheyyachu.

```
test("Mobile test", async ({ page, isMobile }) => {
  test.skip(!isMobile, "This test runs only on mobile");

  await page.goto("https://example.com");
});
```

**Explanation:** Mobile device kakapothe test skip avuthundi. Mobile device ayithe execute avuthundi.

## **7. Skip entire test suite**

```
test.describe.skip("Payment Module", () => {

  test("Add payment", async ({ page }) => {
    // Test code
  });

  test("Delete payment", async ({ page }) => {
    // Test code
  });

});
```

Entire Payment Module tests skip avuthayi.

## **8. Interview answer – Simple English**

**Q: How do you skip a test in Playwright?**

"We use `test.skip()` to skip a particular test. We use `test.only()` to execute only one selected test during debugging. We use `test.fixme()` for tests that are not ready or have known issues, and `test.fail()` when we expect a test to fail."

Official documentation: [Playwright Test Annotations](https://playwright.dev/docs/test-annotations?utm_source=chatgpt.com)

## **Practice question**

**Question: You have 10 test cases, but you want to execute only one test case. Which method will you use?**

A. `test.skip()`

B. `test.only()`

C. `test.fixme()`

D. `test.fail()`

Submit

Correct answer!

`test.only()` executes only the selected test.
