# **Execute Playwright Test using UI Mode**

https://chatgpt.com/g/g-p-6afe2d45dc688191b501e8df3b4d5fe8-interview/c/6ad72d3f-5528-83ee-8cd8-77f07fa41c91

## 1 What is Playwright UI Mode?\*\*

"Playwright UI Mode is an interactive interface used to run, debug, and inspect Playwright tests. We can execute individual tests or the entire test suite, view execution steps, inspect errors, and debug failures. We can launch it using `npx playwright test --ui`."

## \*_6. Important commands_

Playwright lo **UI Mode** ante tests ni browser-like interactive interface lo execute cheyyadam, observe cheyyadam, debug cheyyadam.

Simple ga cheppalante, terminal lo commands use cheyyakunda, graphical interface lo tests run cheyyachu.

## **1. UI Mode ela open cheyyali?**

Mee Playwright project VS Code terminal open chesi ee command execute cheyyandi:

```
npx playwright test --ui
```

[UI Mode | Playwright](https://images.openai.com/static-rsc-4/7JqQW21LU5hu7cmn-0yzA7ANFVUnAzZeU8PGwU4kzUtvJrUrDMa3yAtMWQqIwQPQ6XinIaC9wBk7jnripK6ixRVqazaqLF4Q8jq-HdKprYb47gdjSoGLfhBb5ARcjetk7iWwy5XCIYq3wF-F6BwuAZm8dlFNxtapOeEvXKUd3DQ?purpose=inline)

UI Mode open ayyaka:

- Left side lo test files and test cases kanipisthayi.
- Tests select chesi individually run cheyyachu.
- All tests run cheyyachu.
- Test execution steps observe cheyyachu.
- Failed tests debug cheyyachu.

## **2. UI Mode lo available features**

[UI Mode | Playwright](https://images.openai.com/static-rsc-4/84_sM-VqSNEV3zWGayJwaOMNHTTr4g3FOGU_7PW9rPuRP0cyfPgzlhTGjHjC9_9IGre2lc1n1Y5YYI4pEPySn0vBlZ4oQp3H_dBlvtNFzQErL0iVOZFLXh19UBSyFxwQrZyJKiD8yn1dKi5DVtsM_OqwNH6kP7zc8Z4_PctgPIE?purpose=inline)

**1. Run Tests**

Individual test or complete test suite execute cheyyachu.

[PlaywrightのUI ModeでE2Eテストに入門する｜jig.jp engineers](https://images.openai.com/static-rsc-4/1rhEILr98AqUrH5fxLiN2DdNg_IK73zGno5arxvHbhpDk025ueUmtQv4qAwHUayD79Es78fSLhkx6ZzXx6rsBxuN5CQroyDWTRin4COPBCi46boqh2OYCHhKfplysx0c5HRkp-pJyYfcrbnr1KPnYJnNntIX5U5bWIBea9f3TDA?purpose=inline)

**2. Watch Mode**

Code changes chesinappudu tests automatically rerun avvadaniki watch mode use cheyyachu.

[Running and Debugging Tests With Playwright UI Mode](https://images.openai.com/static-rsc-4/G9q2SAv7gOMzjZtzBFKW1_rhPYbJn6WofncBQ2E7Ps2CMEzwTeS0krk2xMpwNCsbw2QFsFFXhNXZzRqE_NnPhk2BWeveAFts0WJK7clWS2JzjaY7p8jhDkHG7xE0fu0aSXx5H8AhuBjSZ1wisNLxg2-wyLlSVjQo7qL70WIkRD8?purpose=inline)

**3. Pick Locator**

Application lo element select chesi locator generate cheyyachu.

[UI Mode | Playwright](https://images.openai.com/static-rsc-4/w0UycS9BsTbjTKFMv8GK9XnqNG0O1OdClSA-AqcuUMdA9wjuhkTBflr7l0NiPq4NAAIlF6Fipso8Ogz2UTHWLwzZYPLKQRFMrRhWdcIPZ7hpBxN36SBJDdaqOtFHLbvF9mYEZ1d-8p1vYUBPrJlpZiCrNytnXd-4ipSn5fo_9OU?purpose=inline)

**4. Debug Tests**

Test execution steps, errors, screenshots, and trace details inspect cheyyachu.

## **3. Example test**

`tests/login.spec.ts`

```
import { test, expect } from "@playwright/test";

test("Login page verification", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});
```

Now terminal lo:

```
npx playwright test --ui
```

1. UI Mode open avuthundi.
2. `login.spec.ts` select cheyyandi.
3. Test pakkana Run button click cheyyandi.
4. Test result Pass or Fail ga display avuthundi.
5. Test steps select chesi execution details observe cheyyachu.

## **4. Normal Mode vs UI Mode**

| Normal execution               | UI Mode                         |
| ------------------------------ | ------------------------------- |
| `npx playwright test`          | `npx playwright test --ui`      |
| Terminal-based                 | Interactive graphical interface |
| Test results terminal lo       | Test results UI lo              |
| Debugging separate ga cheyyali | Interactive debugging features  |
| CI/CD lo commonly used         | Local development and debugging |

## **5. Interview answer – Simple English**

**Q: What is Playwright UI Mode?**

"Playwright UI Mode is an interactive interface used to run, debug, and inspect Playwright tests. We can execute individual tests or the entire test suite, view execution steps, inspect errors, and debug failures. We can launch it using `npx playwright test --ui`."

## **6. Important commands**

```
# Open UI Mode
npx playwright test --ui

# Run all tests normally
npx playwright test

# Run specific test file
npx playwright test tests/login.spec.ts

# Run tests in headed mode
npx playwright test --headed
```

Official documentation: [Playwright UI Mode](https://playwright.dev/docs/test-ui-mode?utm_source=chatgpt.com)

## **Small interview practice**

**Question: UI Mode open cheyyadaniki which command is used?**

A. `npx playwright test --ui`

B. `npx playwright test --headed`

C. `npm run playwright ui`

Submit Answer
