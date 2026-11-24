Based on the notes in the image, here is a clear summary of how to handle authentication and session storage in Playwright:

## Question 12: How do you handle authentication and session storage?

What is storageState()? Why do we use it?

storageState() is a Playwright feature used to save the browser's authenticated session into a JSON file. It stores cookies, local storage, and other session information. Instead of logging in before every test, we log in once, save the storage state, and reuse it across multiple tests. This significantly reduces test execution time..

📦 What gets saved in storageState?

• Cookies
• LocalStorage
• SessionStorage
• IndexedDB

• ✅ Login once, reuse across tests: Saves time and server load.
• ✅ Faster test execution: Tests start directly in an authenticated state.
• ✅ Consistent state: Avoids flaky login flows affecting unrelated tests.

# Q6. How does Global Setup work and what should you put in it?


"In my Playwright project, I use Global Setup for common initialization activities.

It runs once before the entire test execution. I use it to select the target environment, launch the browser, perform login, verify successful authentication, and save the authentication state into LoginAuth.json.

Then I configure this file using storageState in playwright.config.ts, so all test cases can reuse the authenticated session without performing login repeatedly.

I also use environment variables for credentials and environment configuration.

This approach reduces repeated login operations, improves execution efficiency, and keeps authentication logic separate from individual test cases.

## 1. Concept – Simple English

Global Setup is a Playwright feature that executes once before the entire test suite starts.

It is used for common initialization activities such as:

- Login and authentication.
- Creating storage state.
- Environment health checks.
- Preparing common test data.
- Initializing test dependencies.

Instead of repeating these steps in every test, we perform them once and reuse the results.

## 2. Telugu Explanation

Suppose mana Yotta application lo 100 test cases unnayi.

Prathi test case execute avvadaniki mundhu login cheyyalsina avasaram undhi anukundham.

100 times login cheyyadam time waste.

Anduke `Global Setup` use chestham.

1. First Global Setup execute avuthundhi.
2. Browser launch avuthundhi.
3. Yotta application open avuthundhi.
4. Username and password enter chestham.
5. Login successful ayyaka `LoginAuth.json` create chestham.
6. Browser close chestham.
7. Actual test cases execute avuthayi.
8. Anni test cases saved authentication state reuse chesthayi.

Simple ga: Login once → Save state → Reuse in all tests.

## 3. Your Yotta Project – Code Explanation

Let's understand your actual code.

### Step 1: Import Chromium

```
const { chromium } = require('@playwright/test');
```

Explanation:

Chromium browser ni import chesthunnam.

Telugu: Global Setup lo browser manually launch cheyadaniki Chromium use chestham.

### Step 2: Create Global Setup Function

```
async function globalSetup() {
```

`async` use chestham because browser operations and login operations asynchronous.

`await` use chesi each operation complete ayye varaku wait chestham.

### Step 3: Launch Browser

```
const browser = await chromium.launch({
  headless: true
});

const context = await browser.newContext();

const page = await context.newPage();
```

| Code                   | Purpose                    |
| ---------------------- | -------------------------- |
| `chromium.launch()`    | Launch browser             |
| `browser.newContext()` | Create independent session |
| `context.newPage()`    | Open new tab               |
| `headless: true`       | Run browser without UI     |

Telugu: Browser background lo open avuthundhi. Manaki browser screen kanipinchadhu.

### Step 4: Read Environment Configuration

```
const platform = process.env.PLATFORM;
let tld = 'net';
```

What is PLATFORM?

Mana project lo different environments unnayi:

- yotta-int
- dev
- qa
- qa2
- dvb-i
- ops

`process.env.PLATFORM` use chesi current execution environment identify chestham.

Telugu: E environment lo tests run cheyyalo environment variable nundi value tiskuntam.

### Step 5: Select Credentials

```
let email;
let password;

if (platform === 'yotta-qa') {
  email = process.env.QA_EMAIL;
  password = process.env.QA_PASSWORD;
} else if (platform === 'priya-qa') {
  email = process.env.PRIYA_EMAIL;
  password = process.env.PRIYA_PASSWORD;
}
```

Different environments or user accounts ki different credentials use cheyochu.

Security: Your original example contains hardcoded credentials. In a real project, keep credentials in environment variables or a secure secrets manager.

### Step 6: Navigate to Login Page

```
await page.goto(
  `https://portal.${platform}.yottacloud.${tld}/login`,
  { timeout: 60000 }
);
```

Telugu: Selected platform batti corresponding Yotta login URL open chestham.

Example:

```
https://portal.yotta-qa.yottacloud.net/login
```

### Step 7: Enter Login Credentials

```
await page.getByLabel('Enter your email').fill(email);

await page.getByLabel('Enter your password').fill(password);

await page.getByRole('button', {
  name: 'SIGN IN'
}).click();
```

Telugu:

- Email field lo email enter chestham.
- Password field lo password enter chestham.
- SIGN IN button click chestham.

### Step 8: Verify Successful Login

```
await page.waitForURL(
  `https://portal.${platform}.yottacloud.${tld}/home`,
  { timeout: 60000 }
);
```

Login successful ayyi home page ki navigate ayye varaku wait chestham.

### Step 9: Save Authentication State

```
await page.context().storageState({
  path: './LoginAuth.json'
});
```

This is the most important step.

It saves cookies, localStorage and optionally IndexedDB into `LoginAuth.json`.

Telugu: Login successful ayyaka session information JSON file lo save chestham.

### Step 10: Close Browser

```
finally {
  await browser.close();
}
```

Browser ni close chestham.

Important: Your original `catch` block logs the error but doesn't rethrow it. This can allow the test run to continue after authentication setup fails. A safer approach is to rethrow the error.

## 4. Complete Improved Global Setup Code

This is a cleaned-up TypeScript version of your Yotta project approach.

```

import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {

  const platform = process.env.PLATFORM;

  const email = process.env.QA_EMAIL;
  const password = process.env.QA_PASSWORD;

  if (!platform || !email || !password) {
    throw new Error('Missing PLATFORM or login credentials');
  }

  const browser = await chromium.launch({
    headless: true
  });

  try {
    const context = await browser.newContext();

    const page = await context.newPage();

    const loginUrl =
      `https://portal.${platform}.yottacloud.net/login`;

    const homeUrl =
      `https://portal.${platform}.yottacloud.net/home`;

    // Open login page
    await page.goto(loginUrl, {
      timeout: 60000
    });

    // Enter credentials
    await page.getByLabel('Enter your email').fill(email);

    await page.getByLabel('Enter your password').fill(password);

    await page.getByRole('button', {
      name: 'SIGN IN'
    }).click();

    // Verify login
    await page.waitForURL(homeUrl, {
      timeout: 60000
    });

    // Save authentication state
    await context.storageState({
      path: './LoginAuth.json'
    });

    console.log('Authentication completed successfully');

  } catch (error) {

    console.error('Global Setup failed:', error);

    throw error;

  } finally {

    await browser.close();

  }
}

export default globalSetup;

```

## 5. How do you configure Global Setup in Playwright?

In `playwright.config.ts`:

```

import { defineConfig } from '@playwright/test';

export default defineConfig({

  globalSetup: './global-setup.ts',

  timeout: 900000,

  use: {
    baseURL: config.endpoints.portal,

    storageState: './LoginAuth.json',

    trace: 'on-first-retry'
  }

});

```

Here, `config.endpoints.portal` assumes your existing project configuration object is imported or defined. The snippet is illustrative of your existing framework setup.

## 6. Global Setup Execution Flow

Playwright Test Execution

Global Setup

Runs once

Launch Browser → Login → Verify Home Page

LoginAuth.json

Authentication state saved

Playwright Test Cases

Reuse saved authentication

Test execution completed

## 7. Global Setup vs BeforeAll vs BeforeEach

This is a common interview follow-up.

| Feature        | Execution                              |
| -------------- | -------------------------------------- |
| Global Setup   | Once before entire test run            |
| `beforeAll()`  | Once before tests in a test file/suite |
| `beforeEach()` | Before every test                      |
| `afterEach()`  | After every test                       |
| `afterAll()`   | Once after tests in a test file/suite  |

Example:

Suppose you have 10 test cases.

- Global Setup → 1 time.
- beforeAll → 1 time per relevant test file/suite.
- beforeEach → 10 times.

## 8. English Interview Answer – Based on Your Project

Interview ready

"In my Playwright project, I use Global Setup for common initialization activities.

It runs once before the entire test execution. I use it to select the target environment, launch the browser, perform login, verify successful authentication, and save the authentication state into LoginAuth.json.

Then I configure this file using storageState in playwright.config.ts, so all test cases can reuse the authenticated session without performing login repeatedly.

I also use environment variables for credentials and environment configuration.

This approach reduces repeated login operations, improves execution efficiency, and keeps authentication logic separate from individual test cases."

## 9. Important Interview Follow-up Questions

1. What happens if Global Setup fails?
2. What is the difference between Global Setup and setup project?
3. Can we handle multiple user roles in Global Setup?
4. Does Global Setup run before every test?
5. Where do you store authentication files?
6. What is the difference between Global Setup and `beforeAll()`?
7. Can we use Global Setup for API health checks?

One important point for your interview: Global Setup is suitable for one-time suite initialization. For multiple roles, parallel workers, and independent authentication setup, Playwright's setup project approach can offer better flexibility.

## 10. Check your understanding

Mini interview quiz

1\. How many times does Global Setup run?

Before every test

Once before the test run

After every test

Correct!

2\. Which method saves authentication state?

storageState()

goto()

fill()

Correct!

3\. What happens if login fails in Global Setup?

Tests should continue normally

Setup should fail and stop dependent execution

Browser should remain open

Correct!

Submit answers

Score: 3/3

# Q7. What is Global Teardown in Playwright?
Global Teardown is a Playwright feature that runs once after the entire test suite execution is completed. I use it for cleanup activities such as deleting temporary test data, removing test-created resources, and releasing resources. In my project, I can use Global Setup for authentication and Global Teardown for post-execution cleanup. Both help maintain a clean and stable automation framework."
## 1. Concept – Simple English

Global Teardown is a Playwright feature that runs once after all test execution is completed.

It is mainly used for cleanup activities, such as:

- Closing external resources.
- Deleting temporary test data.
- Removing test-created users.
- Cleaning up test files.
- Logging test execution completion.

Remember:

- Global Setup → Runs before all tests.
- Global Teardown → Runs after all tests.

## 2. Telugu Explanation

Mana Playwright project lo Global Setup ante testing start avvakamundhu common setup operations cheyadam.

Global Teardown ante testing complete ayyaka cleanup operations cheyadam.

Example: Mana Yotta DRM project lo:

Global Setup:

1. Browser launch chestham.
2. Yotta application login chestham.
3. `LoginAuth.json` create chestham.
4. Authentication state save chestham.

Global Teardown:

1. Test execution complete avuthundhi.
2. Temporary test data cleanup chestham.
3. Test-created resources delete chestham, required ayithe.
4. Execution completion log print chestham.

## 3. How to implement Global Teardown?

Step 1: Create `global-teardown.ts`

```

import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {

  console.log('Global Teardown started');

  // Cleanup temporary test data if required

  console.log('Test execution completed');

}

export default globalTeardown;

```

Step 2: Configure in `playwright.config.ts`

```

import { defineConfig } from '@playwright/test';

export default defineConfig({

  globalSetup: './global-setup.ts',

  globalTeardown: './global-teardown.ts',

  use: {
    storageState: './LoginAuth.json'
  }

});

```

Step 3: Execute tests

```
npx playwright test
```

Playwright execution flow:

1\. Global Setup

Login and save authentication

2\. Test Execution

Execute all test cases

3\. Global Teardown

Cleanup and release resources

Execution completed

## 4. Global Setup vs Global Teardown

| Global Setup              | Global Teardown            |
| ------------------------- | -------------------------- |
| Before all tests          | After all tests            |
| Initialization            | Cleanup                    |
| Login                     | Logout/cleanup if needed   |
| Save authentication state | Remove temporary resources |
| Environment checks        | Release resources          |

## 5. Interview-ready Answer – Simple English

"Global Teardown is a Playwright feature that runs once after the entire test suite execution is completed. I use it for cleanup activities such as deleting temporary test data, removing test-created resources, and releasing resources. In my project, I can use Global Setup for authentication and Global Teardown for post-execution cleanup. Both help maintain a clean and stable automation framework."

## 6. Important Interview Follow-up

Q: Will Global Teardown execute if a test case fails?

Yes. Normally, Playwright executes Global Teardown after the test run even if individual tests fail, provided the test runner started successfully and setup completed sufficiently to enter the run lifecycle. If Global Setup itself fails, teardown is not guaranteed to run.

Q: Does Global Teardown run after every test?

No. It runs once after the entire test run, not after each individual test.

Q: Can we close the browser in Global Teardown?

Browser instances created inside Global Setup are normally closed there itself. Global Teardown is useful for cleaning up external resources that remain after test execution.

## 7. Quick Interview Practice

Test your understanding

1\. When does Global Teardown execute?

Before tests

After all tests

Before every test

Correct!

2\. What is the main purpose of Global Teardown?

Login

Cleanup resources

Create test cases

Correct!

3\. How many times does Global Teardown run?

Once per test

Once per test file

Once after the test run

Correct!

Submit answers

Score: 3/3

Interview memory trick:

- Global Setup = Prepare.
- Test Execution = Execute.
- Global Teardown = Cleanup.