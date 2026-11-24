# Q27. How do you use Playwright CLI for test filtering and execution control?

“I use Playwright CLI to filter and control test execution. I use `--grep` for specific tests or tags, `--grep-invert` to exclude tests, `--project` for browser-specific execution, and `--repeat-each` for repeated execution. For debugging, I use `--debug`, `--headed`, and Trace Viewer.”

## 1. ✅ English Interview Answer

“Playwright CLI provides different commands to control test execution. We can filter tests by title, tags, file path, or project. We can also exclude tests, configure timeouts, repeat test execution, and control test execution in CI.

For example, I use `--grep` to execute smoke tests, `--grep-invert` to exclude unwanted tests, and `--project` to execute tests in specific browsers.”

## 2. 🇮🇳 Telugu Explanation

Playwright CLI ante terminal lo commands use chesi tests ni control cheyyadam.

Example:

Mana project lo 100 test cases unnayi anukundam.

Manaki only login tests execute cheyyali ante complete 100 tests run cheyyalsina avasaram ledu.

CLI commands use chesi required tests matrame execute cheyyachu.

## 3. Important CLI Commands – Test Filtering

### 1. Filter by test title

```
npx playwright test -g "login"
```

English: Runs tests whose title matches `login`.

Telugu: Login ane word unna test cases matrame execute avutayi.

### 2. Multiple grep patterns

```
npx playwright test --grep "login|signup"
```

Login or signup match ayye tests execute avutayi.

### 3. Exclude tests

```
npx playwright test --grep-invert "slow"
```

Telugu: Slow ane word unna tests ni skip chesi remaining tests execute chestundi.

### 4. Combine grep and invert

```
npx playwright test --grep "@smoke" --grep-invert "@skip"
```

Smoke tests execute chestundi, `@skip` match ayye tests exclude chestundi.

### 5. Filter by file path

```
npx playwright test tests/auth/
```

```
npx playwright test tests/auth/login.spec.ts
```

Specific folder or file lo unna tests matrame execute chestundi.

### 6. Filter by project

```
npx playwright test --project=chromium --project=firefox
```

Chromium and Firefox projects lo tests execute chestundi.

## 4. Execution Control Commands

| Command                    | Purpose                           |
| -------------------------- | --------------------------------- |
| `--global-timeout=3600000` | Complete test run ki 1-hour limit |
| `--timeout=30000`          | Each test ki 30-second limit      |
| `--repeat-each=3`          | Each test ni 3 times execute      |
| `--forbid-only`            | CI lo accidental `.only` prevent  |
| `--pass-with-no-tests`     | No tests found ayina command pass |
| `--ignore-snapshots`       | Snapshot assertions ni ignore     |

Example:

```
npx playwright test --repeat-each=3
```

Telugu: Prathi test case ni three times execute chestundi.

```
npx playwright test --forbid-only
```

Telugu: Developer accidentally `test.only()` pedithe CI lo test run fail avutundi. Migatha tests silently ignore avvakunda prevent chestundi.

## 5. Reporter Configuration in `playwright.config.ts`

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['json', {
      outputFile: 'test-results.json'
    }],
    ['junit', {
      outputFile: 'junit-results.xml'
    }]
  ]
});
```

Telugu explanation:

- `list` → Terminal lo test results.
- `html` → HTML report.
- `json` → JSON format results.
- `junit` → JUnit XML report.

Important: Multiple reporters configure chesthe anni reporters same execution results ni generate chestayi.

# Q29. What are Playwright CLI commands for debugging and inspection?

“I use Playwright CLI to filter and control test execution. I use `--grep` for specific tests or tags, `--grep-invert` to exclude tests, `--project` for browser-specific execution, and `--repeat-each` for repeated execution. For debugging, I use `--debug`, `--headed`, and Trace Viewer.”

## 1. ✅ English Interview Answer

“Playwright provides CLI commands for debugging and inspecting test execution. I use `--debug` to open Playwright Inspector, `--headed` to watch browser execution, `--verbose` for detailed output, and `show-trace` to analyze test execution traces.

These commands help me identify locator issues, assertion failures, browser errors, and test execution problems.”

## 2. 🇮🇳 Telugu Explanation

Test fail ayinappudu exact ga ekkada problem vachindo identify cheyyadaniki debugging commands use chestam.

## 3. Important Debugging Commands

### 1. Debug mode

```
npx playwright test --debug
```

English: Opens Playwright Inspector for step-by-step debugging.

Telugu: Inspector open avutundi. Test ni step-by-step execute chesi debug cheyyachu.

### 2. Debug specific test

```
npx playwright test tests/login.spec.ts --debug
```

Specific test file ni debug chestundi.

### 3. Debug from a specific line

```
npx playwright test tests/login.spec.ts:25 --debug
```

Line 25 daggara unna test ni debug cheyyadaniki use chestam.

### 4. Headed mode with slow motion

```
npx playwright test --headed --slow-mo=1000
```

Telugu: Browser visible ga open avutundi. Prathi action madhya 1 second delay untundi.

### 5. Verbose output

```
npx playwright test --verbose
```

Detailed test execution information terminal lo display chestundi.

### 6. Open Trace Viewer

```
npx playwright show-trace trace.zip
```

Telugu: Previously generated trace file open chesi test execution details inspect cheyyachu.

### 7. Update snapshots

```
npx playwright test --update-snapshots
```

Expected UI change ayinappudu approved reference snapshots update cheyyadaniki use chestam.

### 8. Open Inspector

```
npx playwright inspector
```

Inspector tool open cheyyadaniki use chestam.

### 9. Browser console logs

```
PWDEBUG=console npx playwright test
```

Note: This environment-variable syntax is shell-dependent; the command shown is from your supplied notes.

## 4. Real-time Yotta Project Example

Suppose mana Yotta DRM project lo `Add Widevine Provider` test fail ayyindi.

I would:

1. Run the specific test using `--debug`.
2. Open Inspector and check the failed step.
3. Verify the locator.
4. Check browser execution using headed mode.
5. Open Trace Viewer using `show-trace`.
6. Analyze the error and fix the issue.
7. Execute the test again.

## 5. 🎯 Important Follow-up Interview Questions

Q1. How do you execute only smoke tests?

```
npx playwright test --grep "@smoke"
```

Q2. How do you exclude regression tests?

```
npx playwright test --grep-invert "@regression"
```

Q3. How do you execute tests only in Chromium?

```
npx playwright test --project=chromium
```

Q4. How do you repeat tests three times?

```
npx playwright test --repeat-each=3
```

Q5. How do you debug a failed test?

“I use `--debug`, Playwright Inspector, Trace Viewer, screenshots, and logs to identify the root cause.”

Q6. What is the difference between `--headed` and `--debug`?

- `--headed` → Browser visible ga run avutundi.
- `--debug` → Inspector open ayi step-by-step debugging support istundi.

## 6. 🧠 Easy Memory Trick

CLI commands – 3 categories

Filtering

`--grep`, `--grep-invert`, `--project`, file path

Execution control

`--timeout`, `--global-timeout`, `--repeat-each`, `--forbid-only`

Debugging

`--debug`, `--headed`, `--verbose`, `show-trace`

### ⭐ Short interview answer

“I use Playwright CLI to filter and control test execution. I use `--grep` for specific tests or tags, `--grep-invert` to exclude tests, `--project` for browser-specific execution, and `--repeat-each` for repeated execution. For debugging, I use `--debug`, `--headed`, and Trace Viewer.”

Small correction to remember: Your sheet numbers jump from Q27 to Q29. I have preserved those question numbers rather than inventing Q28. Also, `--ignore-snapshots` skips snapshot assertions; it does not disable all other test assertions.

Here is the complete transcript of the text, commands, and configuration properties contained in this sheet:

@The AutomationEngineer

Playwright Interview Questions & Answers

27. How do you use Playwright CLI for test filtering and execution control?

Answer:

bash

# Filter by test title

npx playwright test -g "login"

# Multiple grep patterns

npx playwright test --grep "login|signup"

# Exclude tests

npx playwright test --grep-invert "slow"
npx playwright test -gv "slow" # (same as above)

# Combine grep and invert

npx playwright test --grep "@smoke" --grep-invert "@skip"

# Filter by file path

npx playwright test tests/auth/
npx playwright test tests/auth/login.spec.ts

# Filter by project

npx playwright test --project=chromium --project=firefox

# Global timeout

npx playwright test --global-timeout=3600000 # 1 hour

# Test timeout

npx playwright test --timeout=30000 # 30 seconds

# Repeat tests

npx playwright test --repeat-each=3

# Forbid only (CI mode)

npx playwright test --forbid-only

# Pass with no tests

npx playwright test --pass-with-no-tests

# Ignore snapshots

npx playwright test --ignore-snapshots
Use code with caution.

CLI Filtering Tips

• Use -g or --grep to run specific tests by title or tag.
• Use --grep-invert or -gv to exclude tests.
• Combine grep and invert for fine-grained control.
• Use file path or project for scoped execution.
• Use timeouts and repeat options to control execution.
• Use --forbid-only in CI to prevent accidental .only tests.

Configuration in playwright.config.ts:

typescript
export default defineConfig({
reporter: [
['list'],
['html', { outputFolder: 'playwright-report', open: 'never' }],
['json', { outputFile: 'test-results.json' }],
['junit', { outputFile: 'junit-results.xml' }]
]
});
Use code with caution.
📌 Note: If multiple reporters are configured, they all run together. Use CLI to override if needed.

29. What are Playwright CLI commands for debugging and inspection?

Answer:

bash

# Debug mode (opens Inspector)

npx playwright test --debug

# Debug specific test

npx playwright test tests/login.spec.ts --debug

# Debug from specific line

npx playwright test tests/login.spec.ts:25 --debug

# Headed mode with slow motion

npx playwright test --headed --slow-mo=1000

# Browser console logs

PWDEBUG=console npx playwright test

# Verbose output

npx playwright test --verbose

# Inspector

npx playwright inspector

# Open trace viewer

npx playwright show-trace trace.zip

# Screenshot comparison

npx playwright test --update-snapshots
Use code with caution.

What these help with?

• Inspect UI, selectors, and network.
• Step through tests interactively.
• View console logs and errors.
• Analyze traces and test execution.
• Update snapshots when UI changes are expected.

Pro Tips

• Use --debug for step-by-step execution.
• Use PWDEBUG=console to see browser console logs in terminal.
• Use show-trace to open detailed trace of test execution.
• Combine --headed and --slow-mo for better visual debugging.

Best Practices

• Use targeted filters to run only what you need.
• Use projects for cross-browser testing and scoped reporting.
• Use reporters and traces together for rich debugging insights.
Would you like me to:
• Generate a comprehensive review quiz that tests you on all 9 sheets you've shared so far?
• Provide a summary sheet template that groups all commands by context (Local Dev vs. CI/CD Pipeline)?
