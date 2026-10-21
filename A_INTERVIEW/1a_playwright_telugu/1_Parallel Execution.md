# Playwright Configuration & Parallel Execution

Playwright interview preparation kosam ee topic lo two main concepts nerchukundam:

1. Playwright Configuration — tests ela run avvali, timeout entha undali, browser emiti, reports ela generate avvali ani configure chestham.
2. Parallel Execution — multiple tests ni same time lo run chesi execution time reduce chestham.

## 1. What is `playwright.config.ts`?

`playwright.config.ts` anedi Playwright test framework ki configuration file. Test execution settings anni ikkada define cheyochu.

Common settings:

| Configuration   | Purpose                                   |
| --------------- | ----------------------------------------- |
| `testDir`       | Test files unna folder                    |
| `timeout`       | Oka test ki maximum execution time        |
| `expect`        | Assertion timeout settings                |
| `retries`       | Failed tests ni enni sarlu retry cheyyali |
| `workers`       | Parallel workers count                    |
| `fullyParallel` | Tests ni parallel ga run cheyyala         |
| `reporter`      | Test results ela display cheyyali         |
| `use`           | Browser and test options                  |
| `projects`      | Different browsers/devices configurations |

## 2. Example: Playwright configuration

`playwright.config.ts` file:

```
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  retries: 1,

  workers: 4,

  fullyParallel: true,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: 'https://example.com',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

### Telugu explanation

- `testDir: './tests'` → `tests` folder lo test files untayi.
- `timeout: 30_000` → Oka test ki default ga 30 seconds timeout.
- `expect.timeout: 5_000` → Auto-retrying assertions ki default ga 5 seconds timeout.
- `retries: 1` → Fail ayina test ni configured retry policy prakaram okasari retry chestundi.
- `workers: 4` → Maximum 4 workers use cheyadaniki configure chestundi.
- `fullyParallel: true` → Independent tests ni parallel ga execute cheyadaniki allow chestundi.
- `reporter` → Console output and HTML report configure chestundi.
- `headless: true` → Browser UI display cheyakunda tests run chestundi.
- `screenshot: 'only-on-failure'` → Test fail ayinappudu screenshot capture cheyadaniki configure chestundi.
- `trace: 'on-first-retry'` → First retry attempt lo trace record chestundi.

`baseURL` ni mee actual application URL tho replace cheyyali.

## 3. What is Parallel Execution?

Parallel execution ante multiple tests ni same time lo different workers use chesi run cheyadam.

Playwright Test Runner

Worker 1

Login test

Search test

Worker 2

Payment test

Logout test

Conceptual example: workers independent tests ni concurrent ga execute chestayi. Exact distribution and timing test dependencies, configuration, and available resources meeda depend avutayi.

Interview answer:

“Parallel execution means running multiple tests concurrently using worker processes. It reduces overall execution time, especially when tests are independent.”

## 4. How to enable parallel execution?

### Method 1: Configuration file

```
export default defineConfig({
  workers: 4,
  fullyParallel: true,
});
```

### Method 2: Command line

```
npx playwright test --workers=4
```

Ee command current run kosam 4 workers configure chestundi.

### Method 3: Run tests in a single worker

```
npx playwright test --workers=1
```

Idi tests ni parallel workers badulu oka worker tho execute cheyadaniki use chestham. Debugging kosam useful.

## 5. Parallel execution real-time example

Suppose project lo 4 test files unnayi:

```
tests/
  login.spec.ts
  search.spec.ts
  payment.spec.ts
  logout.spec.ts
```

Run command:

```
npx playwright test --workers=4
```

Playwright available workers tho tests ni concurrent ga run cheyagaladu, subject to test-file distribution and configuration.

Important interview point: Parallel execution safe ga undalante tests independent ga undali. Oka test create chesina data meeda inko test depend ayithe race conditions ravachu.

## 6. `workers` vs `fullyParallel`

| `workers`                                            | `fullyParallel`                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| Enni worker processes use cheyalo control chestundi. | Tests ni parallelize cheyadaniki test-level behavior configure chestundi.    |
| Example: `workers: 4`                                | Example: `fullyParallel: true`                                               |
| Execution concurrency ni limit chestundi.            | Parallel execution ki eligible tests ni determine cheyadanlo help chestundi. |

By default, Playwright test files ni parallel ga run cheyagaladu. `fullyParallel: true` enable chesthe individual tests kuda parallel execution ki eligible avuthayi, including same file lo unna tests, subject to dependencies and other settings.

## 7. Parallel execution lo common problems

Q: Parallel execution lo tests fail avuthunnayi. Ela solve chestaru?

Answer:

- Tests independent ga design chestanu.
- Unique test data use chestanu.
- Shared accounts or shared database records conflicts avoid chestanu.
- Proper fixtures and isolated browser contexts use chestanu.
- Trace and HTML report inspect chestanu.

Example: Rendu tests same user account details ni simultaneously modify chesthe conflict ravachu. Separate test users or unique test data use cheyadam better.

## 8. Important interview questions and answers

Q1. What is `playwright.config.ts`?

It is the central configuration file used to define test settings such as timeouts, retries, workers, browsers, and reporters.

Q2. What is the default test timeout in Playwright Test?

The default test timeout is 30 seconds unless overridden.

Q3. What is the default number of workers?

Playwright determines the default worker count based on its configuration and execution environment. I can explicitly set the count using `workers`.

Q4. What is the difference between `timeout` and `expect.timeout`?

- `timeout` — maximum time allowed for a test.
- `expect.timeout` — maximum time a retrying assertion waits for its expected condition.

Q5. What is `retries`?

It configures how many times Playwright retries a failed test. For example, `retries: 2` allows up to two retries.

Q6. How do you run tests in parallel?

I configure `workers` and, when needed, `fullyParallel: true` in `playwright.config.ts`, or pass `--workers=4` in the CLI.

Q7. What is the advantage of parallel execution?

It reduces total test execution time and helps run large regression suites more efficiently.

Q8. What are the disadvantages of parallel execution?

It can increase CPU and memory usage and cause flaky tests if they share mutable data or depend on execution order.

Q9. How do you run tests in headed mode?

```
npx playwright test --headed
```

Q10. How do you open the HTML report?

```
npx playwright show-report
```

## Quick revision

- Configuration file → `playwright.config.ts`
- Test timeout → `timeout`
- Assertion timeout → `expect.timeout`
- Retry failed tests → `retries`
- Control workers → `workers`
- Parallelize individual tests → `fullyParallel`
- Debug in one worker → `--workers=1`

Interview lo final answer: “I configure Playwright using `playwright.config.ts`. I control parallel execution with `workers` and `fullyParallel`. Parallel execution reduces execution time, but I make sure tests are independent and test data is isolated to avoid flaky failures.”
