# Q22. Explain Playwright UI Mode and its features.

“Playwright UI Mode is an interactive testing interface that helps us run, monitor, and debug tests using features like Test Explorer, time travel, locator inspection, DOM snapshots, and error details.”

## 1. ✅ English Interview Answer

“Playwright UI Mode is an interactive interface used to run, debug, and monitor Playwright tests.

It allows us to execute individual tests, view test results, inspect test steps, watch browser interactions, and debug failures.

It also provides features like time travel, locator inspection, filtering tests, and viewing traces.

I use UI Mode during test development and debugging to identify failures quickly and improve test reliability.”

# 1. Launch UI Mode

npx playwright test --ui

# 2. UI Mode with specific tests

npx playwright test tests/login.spec.ts --ui

# 3. UI Mode with headed browser

npx playwright test --ui --headed

# 4. UI Mode with project

npx playwright test --ui --project=chromium

# 5. UI Mode with grep (run matching tests)

npx playwright test --ui --grep="login"

# UI Mode with specific project

npx playwright test --project=chromium --ui

Key Features:

• 1. Watch Mode: Auto-runs tests on file changes
• 2. Time Travel: Step through test execution with DOM snapshots
• 3. Pick Locator: Interactive locator picker tool
• 4. Network Tab: View all network requests
• 5. Console Logs: See browser console output
• 6. Screenshots: View screenshots at each step
• 7. Trace Viewer: Integrated trace viewing
• 8. Filtering: Filter tests by name, status, project
• 9. Debugging: Set breakpoints, step through code

Why UI Mode?

• Powerful interactive debugging experience
• Visual test execution with step-by-step insights
• Faster troubleshooting
• Great for development and exploration

## UI Mode vs Headed Mode:

// UI Mode benefits:
// - Interactive debugging
// - Visual test execution
// - Time travel through test steps
// - Better for development

// Headed Mode:
npx playwright test --headed // Just shows browser, less control

Playwright UI Mode Features:

• Run tests interactively (test by test or all).
• Step through tests in headed mode.
• Inspect DOM, console, network, and traces.
• View test steps, logs, screenshots, and videos.
• Retry failed tests and re-run specific tests.
• Edit tests directly and re-run.
• Supports breakpoints and debugging.

Tips:

• UI Mode is great for debugging flaky tests.
• Use it to understand test failures quickly.
• Combine with traces for deeper analysis.

## 2. 🇮🇳 Telugu Explanation

Playwright UI Mode ante testing kosam oka graphical interface.

Normal ga terminal lo commands run chestam. Kani UI Mode lo visual ga tests ni execute and debug cheyyachu.

Example:

- Ye test pass ayyindi?
- Ye test fail ayyindi?
- Ekkada fail ayyindi?
- Browser lo em jarigindi?
- Ye locator use chesam?

Ivi anni visual ga chudachu.

## 3. How to open Playwright UI Mode?

Terminal lo ee command execute cheyyali:

```
npx playwright test --ui
```

[UI Mode | Playwright](https://images.openai.com/static-rsc-4/7JqQW21LU5hu7cmn-0yzA7ANFVUnAzZeU8PGwU4kzUtvJrUrDMa3yAtMWQqIwQPQ6XinIaC9wBk7jnripK6ixRVqazaqLF4Q8jq-HdKprYb47gdjSoGLfhBb5ARcjetk7iWwy5XCIYq3wF-F6BwuAZm8dlFNxtapOeEvXKUd3DQ?purpose=inline)

UI Mode open ayyaka tests list display avutundi.

Manam individual test select chesi run cheyyachu.

## 4. Important Features of UI Mode

### 1. Test Explorer

English: Displays all available test files and test cases.

Telugu: Mana project lo unna test files and test cases anni list lo chupistundi.

### 2. Run Individual Tests

English: Allows us to execute a specific test without running the entire test suite.

Telugu: Complete suite run cheyyakunda particular test ni execute cheyyachu.

### 3. Watch Mode

English: Automatically updates and reruns relevant tests when test files change.

Telugu: Test file lo changes chesinappudu tests ni automatically update and rerun cheyyadaniki help chestundi.

### 4. Time Travel Debugging

English: Allows us to move through test execution steps and inspect what happened at different points.

Telugu: Test execute ayina steps ni mundu, venaka navigate chesi browser state ni inspect cheyyachu.

### 5. Locator Inspection

English: Helps inspect locators and identify the elements used in the test.

Telugu: Button, textbox lanti elements ki correct locator identify cheyyadaniki help chestundi.

### 6. Error Details

English: Displays failed assertions, error messages, and relevant test information.

Telugu: Test enduku fail ayyindo error message and failed assertion details chupistundi.

### 7. DOM Snapshots

English: Allows us to inspect the DOM state at different test execution steps.

Telugu: Test execution time lo webpage structure ela undo inspect cheyyachu.

### 8. Network and Console Information

English: Helps inspect network activity and console information when available through the test and trace details.

Telugu: API requests, responses and browser console information debugging ki useful ga untayi.

## 5. Difference Between UI Mode and Headed Mode

| UI Mode                              | Headed Mode                      |
| ------------------------------------ | -------------------------------- |
| Interactive testing interface        | Normal browser window            |
| Test explorer available              | No test explorer                 |
| Individual tests can be selected     | Tests run through command/config |
| Timeline and debugging tools         | Browser interaction visible      |
| Useful for development and debugging | Useful for watching execution    |

Commands:

```
npx playwright test --ui
```

```
npx playwright test --headed
```

## 6. 💼 Real-time Yotta Project Example

Suppose mana Yotta DRM project lo `Add Widevine Provider` test fail ayyindi.

UI Mode use chesi:

1. Test Explorer lo Add Widevine Provider test select chestanu.
2. Individual test run chestanu.
3. Failed step identify chestanu.
4. Timeline lo previous and next steps inspect chestanu.
5. DOM snapshot and locator verify chestanu.
6. Error details check chesi issue fix chestanu.
7. Test malli execute chestanu.

Ila debugging easy ga avutundi.

## 7. 🎯 Follow-up Interview Questions

Q1. How do you open Playwright UI Mode?

```
npx playwright test --ui
```

Q2. Can we run an individual test in UI Mode?

Yes. We can select and execute an individual test from the Test Explorer.

Q3. What is time travel debugging?

It allows us to inspect different steps of test execution using the timeline and snapshots.

Q4. What is the difference between Codegen and UI Mode?

- Codegen → Records browser actions and generates test code.
- UI Mode → Runs, monitors, and debugs existing tests interactively.

Q5. Is UI Mode useful in CI/CD?

UI Mode is mainly useful for local development and debugging. In CI/CD, we generally use headless test execution and reports.

## 8. 🧠 Easy Memory Trick

Remember these 7 features:

1. Test Explorer
2. Run Individual Tests
3. Watch Mode
4. Time Travel
5. Locator Inspection
6. DOM Snapshots
7. Error Details

Interview one-line answer

“Playwright UI Mode is an interactive testing interface that helps us run, monitor, and debug tests using features like Test Explorer, time travel, locator inspection, DOM snapshots, and error details.”
