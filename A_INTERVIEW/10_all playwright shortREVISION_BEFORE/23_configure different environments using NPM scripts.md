# Q26. How do you configure different environments using NPM scripts?

“I use NPM scripts and environment variables to configure Dev, QA, Staging, and Production environments. I pass the environment-specific URL through `package.json` and read it using `process.env.BASE_URL` in `playwright.config.ts`. This allows me to run the same Playwright test cases across multiple environments without modifying the test code.”.

## 1. ✅ English Interview Answer

“I configure different environments like Development, Staging, and Production using NPM scripts and environment variables.

In `package.json`, I create separate scripts for each environment. I pass the environment-specific `BASE_URL` through environment variables.

In `playwright.config.ts`, I read these variables using `process.env` and configure the `baseURL`.

This allows me to execute the same test scripts against different environments without changing the test code.”

## 2. 🇮🇳 Telugu Explanation

Mana project lo different environments untayi:

- Dev → Development testing.
- Staging → Pre-production testing.
- Production → Live application.

Example: Mana Playwright test code same untundi. Kani environment batti URL change avutundi.

NPM scripts use chesi environment switch chestam.

## 3. Step 1: Configure `package.json`

```
{
  "scripts": {
    "test:dev": "cross-env BASE_URL=https://dev.example.com playwright test",
    "test:staging": "cross-env BASE_URL=https://staging.example.com playwright test",
    "test:prod": "cross-env BASE_URL=https://prod.example.com playwright test",

    "test:dev:ui": "cross-env BASE_URL=https://dev.example.com playwright test --ui",
    "test:staging:smoke": "cross-env BASE_URL=https://staging.example.com playwright test --grep @smoke",

    "test:chrome": "playwright test --project=chromium",
    "test:mobile": "playwright test --config=playwright.mobile.config.ts",

    "test:parallel": "playwright test --workers=4",
    "test:serial": "playwright test --workers=1"
  }
}
```

Important: `cross-env` package Windows, macOS and Linux lo environment variables consistently set cheyyadaniki use chestam.

Install:

```
npm install -D cross-env
```

## 4. Step 2: Configure `playwright.config.ts`

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    extraHTTPHeaders: {
      Authorization: process.env.AUTH_TOKEN || '',
    },
  },
});
```

Telugu explanation:

- `process.env.BASE_URL` → NPM script nunchi URL receive chestundi.
- `baseURL` → Application URL configure chestundi.
- `AUTH_TOKEN` → Authentication token receive chestundi.
- `|| localhost` → BASE_URL lekapothe fallback URL use chestundi.

## 5. Step 3: Environment-specific `.env` files

`.env.dev`

```
BASE_URL=https://dev.example.com
API_KEY=dev-key
```

`.env.staging`

```
BASE_URL=https://staging.example.com
API_KEY=staging-key
```

Install dotenv:

```
npm install -D dotenv
```

Load environment dynamically in config:

```
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.TEST_ENV || 'dev'}`,
});
```

Now scripts:

```
{
  "scripts": {
    "test:dev": "cross-env TEST_ENV=dev playwright test",
    "test:staging": "cross-env TEST_ENV=staging playwright test"
  }
}
```

Important: Keep `.env` files containing secrets out of Git. Use CI/CD secret variables for credentials and tokens.

## 6. Step 4: Execute the tests

| Command                      | Purpose                |
| ---------------------------- | ---------------------- |
| `npm run test:dev`           | Dev environment        |
| `npm run test:staging`       | Staging environment    |
| `npm run test:prod`          | Production environment |
| `npm run test:dev:ui`        | Dev with UI Mode       |
| `npm run test:staging:smoke` | Staging smoke tests    |
| `npm run test:parallel`      | Four workers           |
| `npm run test:serial`        | One worker             |

## 7. 💼 Real-time Yotta Project Example

In my Yotta DRM Playwright project, we have different environments such as:

- `yotta-int`
- `dev`
- `qa`
- `qa2`
- `dvb-i`
- `ops`

Suppose I want to execute the same Widevine test in QA and QA2.

I configure the environment-specific base URL and select the environment through configuration.

The same TypeScript test can run against different environments without changing the test script.

For example:

```
npm run test:qa
npm run test:qa2
```

## 8. 🎯 Follow-up Interview Questions

Q1. What is `process.env`?

It is used to access environment variables in Node.js.

Q2. Why do we use dotenv?

To load environment-specific variables from `.env` files.

Q3. Can we run the same test in different environments?

Yes. We change the environment configuration without changing the test code.

Q4. Why should we not commit passwords to Git?

For security reasons. We use environment variables or CI/CD secrets.

Q5. Can we use different Playwright config files?

Yes. For example:

```
npx playwright test --config=playwright.mobile.config.ts
```

Q6. How do you execute production tests safely?

I prefer running only selected smoke tests against production rather than the complete regression suite.

## 9. 🧠 Easy Memory Trick

package.json → Select environment

Environment variable → Pass URL

playwright.config.ts → Read URL

Test execution → Run same tests

### ⭐ Short interview answer

“I use NPM scripts and environment variables to configure Dev, QA, Staging, and Production environments. I pass the environment-specific URL through `package.json` and read it using `process.env.BASE_URL` in `playwright.config.ts`. This allows me to run the same Playwright test cases across multiple environments without modifying the test code.”

Here is the complete transcript of the text, commands, and configuration properties contained in this ninth sheet:

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
Trigger a practice quiz covering these advanced debugging and filtering flags?Explain how to interpret a Trace Viewer zip package when a pipeline test fails?
