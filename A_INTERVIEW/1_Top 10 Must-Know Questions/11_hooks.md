# Hooks in Playwright – Simple English + Telugu

Playwright lo Hooks ante test execute avvadaniki mundu or test complete ayyaka automatic-ga run ayye functions.

Hooks valla browser launch cheyyadam, login cheyyadam, test data prepare cheyyadam, cleanup cheyyadam easy avutundi.

## 1. Important Playwright Hooks

| Hook                | When it runs?                                | Telugu meaning            |
| ------------------- | -------------------------------------------- | ------------------------- |
| `test.beforeAll()`  | Before all tests in a file or describe block | Anni tests mundu okasari  |
| `test.afterAll()`   | After all tests                              | Anni tests ayyaka okasari |
| `test.beforeEach()` | Before every test                            | Prathi test mundu         |
| `test.afterEach()`  | After every test                             | Prathi test ayyaka        |

## 2. Simple example

```
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Before all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('Before each test');
  await page.goto('https://example.com');
});

test('Test 1 - Check title', async ({ page }) => {
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Test 2 - Check heading', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

test.afterEach(async () => {
  console.log('After each test');
});

test.afterAll(async () => {
  console.log('After all tests');
});
```

### Execution order

beforeAll()

Runs once before tests

beforeEach() → Test 1 → afterEach()

beforeEach() → Test 2 → afterEach()

afterAll()

Runs after tests finish

## 3. Real-time project example: Login

Suppose you have two tests: Dashboard test and Profile test. Both tests need to open the application first.

```
test.beforeEach(async ({ page }) => {
  await page.goto('https://myapp.com/login');
});

test('Dashboard test', async ({ page }) => {
  await page.getByLabel('Email').fill('test@gmail.com');
  await page.getByLabel('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Dashboard')).toBeVisible();
});

test('Profile test', async ({ page }) => {
  // Login page opens automatically before this test.
});
```

Telugu explanation: `beforeEach()` use cheyyadam valla prathi test mundu login page open avutundi. Same code ni malli malli rayalsina avasaram undadu.

Note: The second test above only demonstrates navigation; it doesn't perform login.

## 4. Interview questions and answers

Q1. What are hooks in Playwright?

English: Hooks are functions used to perform setup and cleanup tasks before or after tests.

Telugu: Tests start avvakamundu setup, tests complete ayyaka cleanup cheyadaniki hooks use chestham.

Q2. Difference between `beforeAll` and `beforeEach`?

- `beforeAll()` — runs once before the tests in its scope.
- `beforeEach()` — runs before every test in its scope.

Q3. Difference between `afterAll` and `afterEach`?

- `afterAll()` — runs once after all tests in its scope.
- `afterEach()` — runs after every test in its scope.

Q4. Can we use hooks inside `test.describe()`?

Yes. We can define hooks inside `test.describe()` to apply them to tests within that block.

```
test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test('Verify title', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });
});
```

Easy trick to remember:

- BeforeAll = once before all
- BeforeEach = before every test
- AfterEach = after every test
- AfterAll = once after all

Interview tip: Playwright also has `test.step()` for grouping test actions, and `globalSetup` / `globalTeardown` for setup and cleanup at the test-run level. They are related concepts, but they are not the four standard test hooks above.

# `test.describe()` in Playwright – Simple English + Telugu

`test.describe()` ante related test cases ni oka group/block lo organize cheyadam.

Telugu lo: Oka feature ki sambandhinchina tests anni oka group lo pettadaniki `test.describe()` use chestham.

For example, Login feature ki Login tests, Dashboard feature ki Dashboard tests.

## 1. Syntax

```
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test('Verify login page title', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Verify heading', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
  });

});
```

Explanation:

- `test.describe()` — groups related tests.
- `'Login Tests'` — group name.
- `() => {}` — block containing the tests.
- `test()` — individual test case.

## 2. `test.describe()` with hooks

Real-time project lo `describe` block lopala hooks kuda use cheyochu.

```
import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Verify heading', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
  });

});
```

Telugu: Ee example lo `beforeEach()` ee `describe` block lopala unna prathi test mundu execute avutundi.

## 3. `test()` vs `test.describe()`

| `test()`                       | `test.describe()`                       |
| ------------------------------ | --------------------------------------- |
| Individual test case           | Tests group                             |
| Oka scenario ni test chestundi | Related scenarios ni organize chestundi |
| Example: Verify login          | Example: Login Feature                  |

## 4. Interview answer

Question: What is `test.describe()` in Playwright?

English answer:

"`test.describe()` is used to group related test cases into a logical block. We can also define hooks like `beforeEach` and `afterEach` inside the describe block to apply common setup or cleanup to those tests."

Easy Telugu answer:

"Playwright lo `test.describe()` use chesi related test cases ni oka group lo organize chestham. Aa group lopala hooks use chesi common setup and cleanup tasks perform cheyochu."

## 5. Quick memory test

Question: Login feature ki sambandhinchina 5 test cases ni oka group lo pettali. Denini use chesthav?

`test.beforeEach()`

`test.describe()`

`test.afterAll()`
