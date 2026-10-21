# Q6. How do you run Playwright in parallel and what is Sharding?

### ✅ English Answer

“Playwright runs tests in parallel using workers, and sharding splits tests across multiple machines to reduce execution time.”

✅ Best for CI/CD Pipelines

### One-Line Summary

**Parallel Execution runs tests simultaneously using multiple workers, while Sharding distributes tests across multiple machines to reduce execution time.**

---

## 3. Telugu Interview Answer

Playwright Parallel Execution ను Worker Processes ద్వారా Support చేస్తుంది.

ప్రతి Worker ఒక Independent Node.js Process. ప్రతి Worker కి Separate Browser Instance ఉంటుంది.

దీనివల్ల Multiple Tests ఒకేసారి Run అవుతాయి మరియు Execution Time తగ్గుతుంది.

Playwright లో `workers` Setting ద్వారా Parallelism Configure చేయవచ్చు.

అలాగే `fullyParallel: true` Enable చేస్తే ఒకే Test File లోని Tests కూడా Parallel గా Execute అవుతాయి.

Sharding అనేది Test Suite ను Multiple CI Machines మధ్య Split చేసే Technique.

ఉదాహరణకు 400 Tests ఉంటే 4 Machines పై Run చేస్తే ప్రతి Machine 100 Tests మాత్రమే Execute చేస్తుంది.

మా Project లో Regression Suite 40+ Minutes తీసుకునేది. మేము Parallel Workers మరియు CI Sharding ఉపయోగించి Execution Time ను 10 Minutes కంటే తక్కువకు తీసుకువచ్చాము.

---

## 4. English Interview Answer

Playwright supports parallel execution through worker processes.

Each worker is an independent Node.js process with its own browser instance, browser context, and memory space. This isolation allows multiple tests to run simultaneously without interfering with each other.

Parallelism can be configured using the `workers` setting in the Playwright configuration.

Additionally, Playwright provides the `fullyParallel` option, which allows tests within the same file to execute in parallel.

Sharding is a technique used to distribute a test suite across multiple CI machines. Instead of running all tests on a single machine, the suite is divided into multiple shards, and each machine executes only its assigned portion.

For example, if a regression suite contains 400 tests and is divided into four shards, each machine executes approximately 100 tests.

In my project, we used parallel workers and CI sharding to significantly reduce regression execution time. A suite that previously took over 40 minutes was reduced to under 10 minutes, improving feedback cycles and CI/CD efficiency.

---

## 1. Telugu Concept

### Parallel Execution అంటే ఏమిటి?

Normally Tests ఒకటి తర్వాత ఒకటి Run అవుతాయి.

```text
Test 1
↓
Test 2
↓
Test 3
↓
Test 4
```

దీనిని Sequential Execution అంటారు.

---

### Parallel Execution

Playwright Multiple Worker Processes ఉపయోగించి ఒకేసారి Multiple Tests Run చేస్తుంది.

```text
Worker 1 → Test 1
Worker 2 → Test 2
Worker 3 → Test 3
Worker 4 → Test 4
```

అంటే 4 Tests ఒకేసారి Run అవుతాయి.

దీనివల్ల Execution Time చాలా తగ్గుతుంది.

---

### Worker అంటే ఏమిటి?

Worker అనేది Independent Node.js Process.

ప్రతి Worker కి:

- Own Browser
- Own Context
- Own Memory

ఉంటాయి.

అందువల్ల Tests ఒకదానిపై మరొకటి ప్రభావం చూపవు.

---

### Sharding అంటే ఏమిటి?

Sharding అంటే Test Suite ను Multiple Machines మధ్య Split చేయడం.

Suppose

```text
400 Tests
```

ఉన్నాయి.

4 Machines ఉంటే:

```text
Machine 1 → Tests 1-100

Machine 2 → Tests 101-200

Machine 3 → Tests 201-300

Machine 4 → Tests 301-400
```

ప్రతి Machine తన Part మాత్రమే Run చేస్తుంది.

---

### Example

45 Minutes Regression Suite

Without Sharding

```text
45 Minutes
```

With 4 Shards

```text
45 / 4

≈ 11 Minutes
```

Workers వల్ల ఇంకా Time తగ్గుతుంది.

---

### fullyParallel

ఈ Setting Enable చేస్తే

```typescript
fullyParallel: true;
```

Same File లో ఉన్న Tests కూడా Parallel గా Run అవుతాయి.

---

### Benefits

✅ Faster Execution

✅ Better CI/CD Performance

✅ Reduced Regression Time

✅ Supports Large Test Suites

✅ Better Resource Utilization

---

## 2. Easy to Remember

### Key Points

✅ Workers Run Tests in Parallel

✅ Each Worker Has Separate Browser

✅ Sharding Splits Tests Across Machines

✅ Faster Regression Execution

✅ fullyParallel Runs Tests Inside Same File

✅ Best for CI/CD Pipelines

### One-Line Summary

**Parallel Execution runs tests simultaneously using multiple workers, while Sharding distributes tests across multiple machines to reduce execution time.**

---

## 3. Telugu Interview Answer

Playwright Parallel Execution ను Worker Processes ద్వారా Support చేస్తుంది.

ప్రతి Worker ఒక Independent Node.js Process. ప్రతి Worker కి Separate Browser Instance ఉంటుంది.

దీనివల్ల Multiple Tests ఒకేసారి Run అవుతాయి మరియు Execution Time తగ్గుతుంది.

Playwright లో `workers` Setting ద్వారా Parallelism Configure చేయవచ్చు.

అలాగే `fullyParallel: true` Enable చేస్తే ఒకే Test File లోని Tests కూడా Parallel గా Execute అవుతాయి.

Sharding అనేది Test Suite ను Multiple CI Machines మధ్య Split చేసే Technique.

ఉదాహరణకు 400 Tests ఉంటే 4 Machines పై Run చేస్తే ప్రతి Machine 100 Tests మాత్రమే Execute చేస్తుంది.

మా Project లో Regression Suite 40+ Minutes తీసుకునేది. మేము Parallel Workers మరియు CI Sharding ఉపయోగించి Execution Time ను 10 Minutes కంటే తక్కువకు తీసుకువచ్చాము.

---

## 4. English Interview Answer

Playwright supports parallel execution through worker processes.

Each worker is an independent Node.js process with its own browser instance, browser context, and memory space. This isolation allows multiple tests to run simultaneously without interfering with each other.

Parallelism can be configured using the `workers` setting in the Playwright configuration.

Additionally, Playwright provides the `fullyParallel` option, which allows tests within the same file to execute in parallel.

Sharding is a technique used to distribute a test suite across multiple CI machines. Instead of running all tests on a single machine, the suite is divided into multiple shards, and each machine executes only its assigned portion.

For example, if a regression suite contains 400 tests and is divided into four shards, each machine executes approximately 100 tests.

In my project, we used parallel workers and CI sharding to significantly reduce regression execution time. A suite that previously took over 40 minutes was reduced to under 10 minutes, improving feedback cycles and CI/CD efficiency.

---

## 5. Real-Time Project Example

In my Playwright automation project, we had a large regression suite containing hundreds of UI and API test cases.

Initially, all tests were executed sequentially, resulting in long execution times.

We configured:

- 4 Parallel Workers
- fullyParallel Execution
- CI Sharding Across Multiple Machines

Example:

```text
Before Optimization:
45 Minutes

After Parallel Execution:
15 Minutes

After Sharding:
8 Minutes
```

This significantly improved CI/CD pipeline performance and allowed faster feedback for developers.

---

## 6. Code Example (TypeScript)

### Playwright Config - Parallel Execution

```typescript
import { defineConfig } from "@playwright/test";

export default defineConfig({
  fullyParallel: true,

  workers: 4,
});
```

### Run Tests with Multiple Workers

```bash
npx playwright test --workers=4
```

### Run Shard 1 of 4

```bash
npx playwright test --shard=1/4
```

### Run Shard 2 of 4

```bash
npx playwright test --shard=2/4
```

### CI Example

```yaml
strategy:
  matrix:
    shard: [1, 2, 3, 4]

steps:
  - run: npx playwright test --shard=${{ matrix.shard }}/4
```

This configuration distributes the test suite across four CI machines and executes tests much faster.

```text
400 Tests
     │
     ▼
4 Shards
     │
     ▼
100 Tests Per Machine
     │
     ▼
Faster CI Execution
```

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
