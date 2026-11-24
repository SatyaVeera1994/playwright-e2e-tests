## Q23. How do you configure NPM scripts for Playwright in package.json?

“I configure NPM scripts inside the scripts section of package.json. I create reusable commands for running all tests, smoke tests, regression tests, specific browsers, headed mode, UI mode, and HTML reports. This makes test execution easier and consistent across the team.”

## 1. ✅ English Interview Answer

“NPM scripts allow us to execute Playwright tests using simple, reusable commands defined in the package.json file.

I configure scripts for running all tests, specific browsers, headed mode, smoke tests, regression tests, and HTML reports.

This helps the team execute tests easily without remembering long commands.”
{
"name": "playwright-project",
"version": "1.0.0",
"scripts": {
"test": "playwright test",
"test:headed": "playwright test --headed",
"test:ui": "playwright test --ui",
"test:debug": "playwright test --debug",
"test:chrome": "playwright test --project=chromium",
"test:firefox": "playwright test --project=firefox",
"test:webkit": "playwright test --project=webkit",
"test:all-browsers": "playwright test --project=chromium --project=firefox --project=webkit",

    "test:smoke": "playwright test --grep @smoke",
    "test:regression": "playwright test --grep @regression",
    "test:api": "playwright test tests/api",
    "test:e2e": "playwright test tests/e2e",

    "test:parallel": "playwright test --workers=4",
    "test:serial": "playwright test --workers=1",
    "test:shard": "playwright test --shard=1/4",

    "test:retry": "playwright test --retries=2"

}
}

## 2. 🇮🇳 Telugu Explanation

NPM scripts ante `package.json` file lo mana Playwright commands ni save chesukovadam.

Prathi sari long commands type cheyyalsina avasaram ledu.

Example:

Normal command:

```
npx playwright test
```

NPM script configure chesaka:

```
npm test
```

Same test execute avutundi.

## 3. How to configure NPM scripts?

Step 1: Open your project.

Step 2: Open `package.json`.

Step 3: Add scripts inside `"scripts"`.

### Example: package.json

```
{
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:ui": "npx playwright test --ui",
    "test:debug": "npx playwright test --debug",
    "test:chrome": "npx playwright test --project=chromium",
    "test:firefox": "npx playwright test --project=firefox",
    "test:smoke": "npx playwright test --grep @smoke",
    "test:regression": "npx playwright test --grep @regression",
    "report": "npx playwright show-report"
  }
}
```

## 4. How to execute these scripts?

| NPM command               | Purpose                        |
| ------------------------- | ------------------------------ |
| `npm test`                | Run all tests                  |
| `npm run test:headed`     | Run tests with visible browser |
| `npm run test:ui`         | Open UI Mode                   |
| `npm run test:debug`      | Debug tests                    |
| `npm run test:chrome`     | Run Chromium tests             |
| `npm run test:firefox`    | Run Firefox tests              |
| `npm run test:smoke`      | Run smoke tests                |
| `npm run test:regression` | Run regression tests           |
| `npm run report`          | Open HTML report               |

Important: `npm test` is a special shortcut. For other custom script names, use `npm run script-name`.

## 5. Real-time project example – Yotta

Suppose mana Yotta DRM automation project lo 100 test cases unnayi.

We want to execute:

- All test cases.
- Only P1 test cases.
- Only smoke tests.
- Tests in headed mode.
- HTML report.

We can configure:

```
{
  "scripts": {
    "test": "npx playwright test",
    "test:p1": "npx playwright test --grep @p1",
    "test:smoke": "npx playwright test --grep @smoke",
    "test:headed": "npx playwright test --headed",
    "report": "npx playwright show-report"
  }
}
```

Execute:

```
npm run test:p1
```

Telugu: `@p1` tag unna test cases matrame execute avutayi.

## 6. How do you pass additional arguments?

We can pass additional arguments using `--`.

```
npm run test:p1 -- --headed
```

Telugu: Existing P1 script ki additional ga headed mode add chestunnam.

## 7. 🎯 Follow-up Interview Questions

Q1. What is the purpose of NPM scripts?

To execute frequently used commands easily from `package.json`.

Q2. What is the difference between `npm test` and `npm run test:smoke`?

`npm test` is a shortcut for the `test` script. Custom scripts require `npm run`.

Q3. Can we run tests in a specific browser using NPM scripts?

Yes, using `--project=chromium` or `--project=firefox`.

Q4. Where do you configure NPM scripts?

Inside the `"scripts"` section of `package.json`.

Q5. Can we pass extra arguments to an NPM script?

Yes, using `--` before additional arguments.

## 8. 🧠 Easy Memory Trick

package.json → scripts → npm run → Playwright execution

Remember these commands

- `npm test` → All tests
- `npm run test:smoke` → Smoke tests
- `npm run test:headed` → Visible browser
- `npm run test:ui` → UI Mode
- `npm run report` → HTML report

### ⭐ Short interview answer

“I configure NPM scripts inside the scripts section of package.json. I create reusable commands for running all tests, smoke tests, regression tests, specific browsers, headed mode, UI mode, and HTML reports. This makes test execution easier and consistent across the team.”

Playwright Interview Questions & Answers

package.json (Common Scripts Configuration)

(Note: Labeled in the visual sheet header as common configuration)
json
{
"test:reporter": "playwright test --reporter=html",
"test:report": "playwright show-report",
"test:trace": "playwright show-trace",

"test:ci": "playwright test --reporter=blob",
"test:local": "playwright test --headed --workers=1",

"codegen": "playwright codegen",
"codegen:auth": "playwright codegen --load-storage=auth.json",

"install:browsers": "playwright install",
"install:chrome": "playwright install chromium",
"install:deps": "playwright install-deps",

"test:update-snapshots": "playwright test --update-snapshots",
"test:list": "playwright test --list",

"test:specific": "playwright test tests/login.spec.ts",
"test:grep": "playwright test --grep 'login'",
"test:grep-invert": "playwright test --grep-invert 'slow'",

"pretest": "npm run lint",
"posttest": "npm run test:report"
},
"devDependencies": {
"@playwright/test": "^1.48.0",
"@types/node": "^20.10.0",
"typescript": "^5.3.3"
}
Use code with caution.

What do these scripts do?

• Generate and view reports (HTML)
• View trace for debugging
• CI-optimized run (blob report)
• Run tests in headed mode locally
• Generate tests via codegen
• Manage browsers & system deps
• Update and list tests
• Run specific tests / grep by name
• Run pre & post tasks
• Pin dev dependency versions

Usage Examples:

bash
npm test # Run all tests
npm run test:headed # Run in headed mode
npm run test:ui # Open UI mode
npm run test:smoke # Run smoke tests only
npm run test:chrome # Run in Chrome only
npm run codegen # Start codegen tool
