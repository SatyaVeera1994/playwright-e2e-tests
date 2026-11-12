i want same notes
Here is the complete transcript of the Playwright Interview Questions & Answers notes from all the provided images, formatted cleanly for easy reading and copying.

📑 Playwright Interview Questions & Answers (1 - 50)

1. What is Playwright?

Answer: Playwright is a next-generation test automation framework by Microsoft. It supports Chromium, WebKit, and Firefox, and enables reliable end-to-end testing for modern web apps.

2. What are the key features of Playwright?

Answer: Auto-waiting, cross-browser support, parallel execution, tracing, screenshots, videos, network interception, device emulation, selectors (CSS, text, role, test id, etc.).

3. What languages does Playwright support?

Answer: JavaScript/TypeScript, Python, .NET, and Java.

4. How is Playwright different from Selenium?

Answer: Auto-waiting, no WebDriver, faster execution, reliable selectors, built-in tracing & videos.

5. What are the components of Playwright?

Answer: Test Runner, Browser, BrowserContext, Page, Locator, Tracing, and Expect (assertions).

6. What is a BrowserContext in Playwright?

Answer: It is an isolated browser session with its own cookies, storage, and preferences.

7. What is a Locator?

Answer: Locator is a way to find elements in Playwright using user-friendly and reliable strategies.

8. How is auto-waiting implemented in Playwright?

Answer: Playwright automatically waits for elements to be actionable before performing actions.

9. What is the role of Expect?

Answer: Expect is used for assertions in Playwright. It has auto-retrying capability until the condition is met or timeout occurs.

10. What is the difference between Page and Context?

Answer: Page represents a single tab or window. Context represents a browser session.

11. How do you handle a browser in Playwright?

Answer: Using browser.launch() to start and browser.close() to close.

12. What is the use of Headless mode in Playwright?

Answer: Headless mode runs tests without opening a UI. It is faster and useful in CI environments.

13. How do you capture screenshot in Playwright?

Answer: Using page.screenshot() or locator.screenshot().

14. How do you record video in Playwright?

Answer: Configure video option in browser context to record test execution.

15. How do you handle multiple tabs in Playwright?

Answer: Use context.pages() to get all pages and switch using page.bringToFront().

16. How do you handle popups in Playwright?

Answer: Use page.waitForEvent('popup') to capture and interact with the popup.

17. How do you handle frames in Playwright?

Answer: Use frameLocator() or contentFrame() to interact with elements inside iframe.

18. How do you run tests in parallel?

Answer: Use parallel in playwright.config.\* or run multiple workers.

19. How do you configure test retries?

Answer: Set retries in playwright.config.\* to rerun failed tests automatically.

20. How do you capture API response in Playwright?

Answer: Use page.waitForResponse() or page.on('response') to capture responses.

21. How do you mock APIs in Playwright?

Answer: Use page.route() to intercept and mock API requests and responses.

22. How do you handle authentication?

Answer: Use storageState to save and reuse authenticated state.

23. How do you integrate Playwright with CI/CD?

Answer: Install dependencies and run tests using npx playwright test in CI pipelines.

24. How do you debug tests in Playwright?

Answer: Use Playwright Inspector, headed mode, PWDEBUG=1, and console logs.

25. How do you generate test report in Playwright?

Answer: Use npx playwright show-report to view the HTML report.

26. What is Page Object Model (POM) in Playwright?

Answer: POM is a design pattern that creates reusable and maintainable test code by separating page logic from test logic.

27. How do you wait in Playwright?

Answer: Prefer auto-waiting. For explicit waits, use page.waitForSelector() or locator.waitFor().

28. How do you handle file upload?

Answer: Use setInputFiles() on input[type="file"] locator to upload files.

29. How do you handle scrolling in Playwright?

Answer: Use locator.scrollIntoViewIfNeeded() or mouse.wheel().

30. How do you handle alerts in Playwright?

Answer: Use page.on('dialog', dialog => dialog.accept()) or dialog.dismiss().

31. How do you perform drag and drop?

Answer: Use locator.dragTo(targetLocator).

32. How do you handle network failures?

Answer: Use page.route() to abort or fulfill network requests.

33. How do you test on mobile devices?

Answer: Use device descriptors from @playwright/test and launch contexts with isMobile: true.

34. How do you test login functionality?

Answer: Fill the form, click submit, and assert successful navigation or element.

35. How do you handle cookies in Playwright?

Answer: Use context.addCookies() and context.cookies() to manage cookies.

36. What is Trace Viewer in Playwright?

Answer: Trace Viewer helps in debugging tests by showing step-by-step execution.

37. How do you generate trace?

Answer: Use context.tracing.start() and context.tracing.stop({ path: 'trace.zip' }).

38. How do you test WebSockets?

Answer: Use page.on('websocket') to listen and validate messages.

39. How do you handle slow network?

Answer: Use context.route() to throttle or delay the network speed.

40. How do you test accessibility?

Answer: Use playwright-axe or axe-core integration to validate accessibility.

41. How do you handle sessions and storage?

Answer: Use context.storageState() to save and reuse session data.

42. How do you test in different browsers?

Answer: Run tests on Chromium, Firefox, WebKit using different projects in config.

43. How do you handle dynamic content?

Answer: Use auto-wait and locator strategies that are condition or text-based.

44. How do you parallelize tests in Playwright?

Answer: Use Playwright Test's built-in workers feature, and manage the parallelization.

45. How do you measure performance?

Answer: Use page.evaluate(), Lighthouse or built-in performance metrics.

46. How do you test API?

Answer: Use APIRequestContext in Playwright to send requests and validate responses.

47. How do you test performance?

Answer: Use metrics, network logs, and Lighthouse for insights on the load time, etc.

48. How do you handle flaky tests?

Answer: Use retries, proper waits, stable locators, and isolate test data.

49. How do you test on different environments?

Answer: Use environment variables and config files per environment.

50. How do you keep tests stable?

Answer: Use best practices, stable locators, proper waits, and clean test data.

💻 Playwright CLI, Filtering, and Configurations

🔍 Test Filtering & Execution Control via CLI

Commands

bash

# Filter by test title

npx playwright test -g "login"

# Multiple grep patterns

npx playwright test --grep "login|signup"

# Exclude tests

npx playwright test --grep-invert "slow"
npx playwright test -gv "slow"

# Combine grep and invert

npx playwright test --grep "@smoke" --grep-invert "@skip"

# Filter by file path

npx playwright test tests/auth/
npx playwright test tests/auth/login.spec.ts

# Filter by project

npx playwright test --project=chromium --project=firefox

# Global timeout (e.g., 1 hour)

npx playwright test --global-timeout=3600000

# Individual test timeout (e.g., 30 seconds)

npx playwright test --timeout=30000

# Repeat tests

npx playwright test --repeat-each=3

# Forbid only (CI mode - fails if .only is used)

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
• Use file path or --project for scoped execution.
• Use timeouts and repeat options to control execution.
• Use --forbid-only in CI to prevent accidental .only tests.

🛠️ Configuration in playwright.config.ts (Reporters Example)

typescript
export default defineConfig({
reporter: [
['list'],
['html', { outputFolder: 'playwright-report', open: 'never' }],
['json', { outputFile: 'test-results.json' }],
['junit', { outputFile: 'junit-results.xml' }]
],
});
Use code with caution.
Note: If multiple reporters are configured, they all run together. Use the CLI to override if needed.

🚀 Playwright Reporters via Terminal

Single Reporter

bash
npx playwright test --reporter=list
npx playwright test --reporter=line
npx playwright test --reporter=dot
npx playwright test --reporter=html
npx playwright test --reporter=json
npx playwright test --reporter=junit
Use code with caution.

Multiple Reporters

bash
npx playwright test --reporter=list,html,junit
Use code with caution.

Common Built-in Reporters Summary

Reporter Description Best For
list Detailed list of tests with status CI logs, quick overview
line One line per test Compact output in CI
dot Progress dots Long running suites
html Rich HTML report Local report with details
json JSON output Custom processing/integration
junit JUnit XML report CI tools (Jenkins, GitLab, etc.)

🐛 Debugging and Inspection Commands

bash

# Debug mode (opens Inspector)

npx playwright test --debug

# Debug specific test

npx playwright test tests/login.spec.ts --debug

# Debug from a specific line

npx playwright test tests/login.spec.ts:25 --debug

# Headed mode with slow motion

npx playwright test --headed --slow-mo=1000

# Browser console logs

PWDEBUG=console npx playwright test

# Verbose output

npx playwright test --verbose

# Open Inspector directly

npx playwright inspector

# Open trace viewer

npx playwright show-trace trace.zip

# Screenshot comparison update

npx playwright test --update-snapshots
Use code with caution.

📦 Environments, Dependencies, and NPM Scripts

🌐 Configuring Environments via NPM Scripts

1. package.json setup

json
{
"scripts": {
"test:dev": "BASE_URL=https://example.com playwright test",
"test:staging": "BASE_URL=https://example.com playwright test",
"test:prod": "BASE_URL=https://example.com playwright test",

    "test:dev:ui": "BASE_URL=https://example.com playwright test --ui",
    "test:staging:smoke": "BASE_URL=https://example.com playwright test --grep @smoke",

    "test:ci": "playwright test --reporter=blob,html",
    "test:ci:chrome": "playwright test --project=chromium --reporter=blob",

    "test:mobile": "playwright test --config=playwright.mobile.config.ts",
    "test:desktop": "playwright test --config=playwright.desktop.config.ts",

    "test:parallel:dev": "BASE_URL=https://example.com playwright test --workers=4",
    "test:serial:prod": "BASE_URL=https://example.com playwright test --workers=1"

}
}
Use code with caution.

2. Reading Variables in playwright.config.ts

typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
use: {
baseUrl: process.env.BASE_URL || 'http://localhost:3000',
extraHTTPHeaders: {
'Authorization': process.env.AUTH_TOKEN || ''
}
}
});
Use code with caution.

3. .env files (Examples)

ini

# .env.dev

BASE_URL=https://example.com
API_KEY=dev-key-123

# .env.staging

BASE_URL=https://example.com
API_KEY=staging-key-456
Use code with caution.
Usage with dotenv:
bash
npm run test:dev
npm run test:staging
Use code with caution.

🛠️ Installation & Dependency Management

Installation Commands

bash

# Install Playwright

npm install -D @playwright/test

# Install browsers

npx playwright install

# Install system dependencies (OS-level)

npx playwright install-deps

# Install specific browser to save time/space

npx playwright install chromium

# Install with TypeScript setup

npm install -D @playwright/test typescript @types/node
Use code with caution.

Essential Dependencies Explained

json
"devDependencies": {
"@playwright/test": "^1.48.0", // Core testing library (fixtures, assertions, runners)
"typescript": "^5.3.3", // Type safety and Intellisense
"@types/node": "^20.10.0", // Node.js type definitions
"allure-playwright": "^2.15.0", // Allure test reporting integration
"dotenv": "^16.3.1" // Manage environment variables securely
}
Use code with caution.

🎭 Advanced Features: Codegen, UI Mode, and Assertions

🤖 Playwright Codegen (Test Generator)

bash

# Basic codegen

npx playwright codegen https://example.com

# Codegen with specific browser

npx playwright codegen --browser=firefox https://example.com

# Codegen with custom viewport size

npx playwright codegen --viewport-size=1280,720 https://example.com

# Codegen with device emulation

npx playwright codegen --device="iPhone 12" https://example.com

# Codegen with authentication (load saved state)

npx playwright codegen --load-storage=auth.json https://example.com

# Save generated test directly to file

npx playwright codegen --output=tests/generated.spec.ts https://example.com

# Codegen with target language (javascript, python, java, csharp)

npx playwright codegen --target=python https://example.com

# Codegen with custom user agent

npx playwright codegen --user-agent="Custom Bot" https://example.com

# Record in a specific locale

npx playwright codegen --lang=es-ES https://example.com
Use code with caution.

🖥️ Playwright UI Mode Features

Launch Commands

bash

# Launch UI Mode

npx playwright test --ui

# UI Mode with specific tests

npx playwright test tests/login.spec.ts --ui

# UI Mode with headed browser

npx playwright test --ui --headed

# UI Mode with project

npx playwright test --ui --project=chromium

# UI Mode with grep

npx playwright test --ui --grep="login"
Use code with caution.

Key UI Features

1. Watch Mode: Auto-runs tests on file changes.
2. Time Travel: Step through test execution with DOM snapshots.
3. Pick Locator: Interactive locator picker tool.
4. Network Tab: View all network requests.
5. Console Logs: See browser console output.
6. Screenshots: View screenshots at each test step.
7. Trace Viewer: Fully integrated live trace viewing.
8. Filtering: Filter tests by name, status, or project.
9. Debugging: Set breakpoints and step through code execution.

🛡️ Soft Assertions vs. Hard Assertions

typescript
import { test, expect } from '@playwright/test';

test('Soft assertions example', async ({ page }) => {
await page.goto('https://example.com');

// Enable soft assertions by using expect.soft()
await expect.soft(page.locator('.title')).toHaveText('Expected');
await expect.soft(page.locator('.subtitle')).toBeVisible();
await expect.soft(page.locator('.badge')).toHaveText('New');

// Test continues executing even if any of the above soft assertions fail.
// All failures are aggregated and reported at the end of the test execution.
});
Use code with caution.

⚡ Execution Optimization Strategy

typescript
// playwright.config.ts
export default defineConfig({
// Run tests in parallel across workers
workers: process.env.CI ? 4 : undefined,

// Shard tests across multiple machines
shard: { total: 4, current: 1 },

// Reuse browser context
fullyParallel: true,

use: {
// Reduce trace overhead
trace: 'on-first-retry',
video: 'retain-on-failure',

    // Faster navigation wait strategy
    waitUntil: 'domcontentloaded',

},

timeout: 30000,
});

// Test optimization file level
test.describe.configure({ mode: 'parallel' });

// Skip unnecessary tests dynamically
test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only execution');

// Use API requests for state setup instead of UI interactions
test.beforeEach(async ({ request }) => {
await request.post('/api/setup', { data: { user: 'test' } });
});
Use code with caution.
If you want to dive deeper into any of these topics, let me know if you would like me to:
• Explain a specific code block or config file rule in detail
• Provide practical edge-case examples for features like API mocking or authentication state
• Generate a custom GitHub Actions workflow file to run these Playwright commands in CI
Let me know how you would like to proceed!
AI can make mistakes, so double-check responses
i want same text
Here is the direct text transcript from the provided image containing questions 1 through 25:

📑 Playwright Interview Questions & Answers

1. What is Playwright?

Answer: Playwright is a next-generation test automation framework by Microsoft. It supports Chromium, WebKit, and Firefox, and enables reliable end-to-end testing for modern web apps.

2. What are the key features of Playwright?

Answer: Auto-waiting, cross-browser support, parallel execution, tracing, screenshots, videos, network interception, device emulation, selectors (CSS, text, role, test id, etc.).

3. What languages does Playwright support?

Answer: JavaScript/TypeScript, Python, .NET, and Java.

4. How is Playwright different from Selenium?

Answer: Auto-waiting, no WebDriver, faster execution, reliable selectors, built-in tracing & videos.

5. What are the components of Playwright?

Answer: Test Runner, Browser, BrowserContext, Page, Locator, Tracing, and Expect (assertions).

6. What is a BrowserContext in Playwright?

Answer: It is an isolated browser session with its own cookies, storage, and preferences.

7. What is a Locator?

Answer: Locator is a way to find elements in Playwright using user-friendly and reliable strategies.

8. How is auto-waiting implemented in Playwright?

Answer: Playwright automatically waits for elements to be actionable before performing actions.

9. What is the role of Expect?

Answer: Expect is used for assertions in Playwright. It has auto-retrying capability until the condition is met or timeout occurs.

10. What is the difference between Page and Context?

Answer: Page represents a single tab or window. Context represents a browser session.

11. How do you handle a browser in Playwright?

Answer: Using browser.launch() to start and browser.close() to close.

12. What is the use of Headless mode in Playwright?

Answer: Headless mode runs tests without opening a UI. It is faster and useful in CI environments.

13. How do you capture screenshot in Playwright?

Answer: Using page.screenshot() or locator.screenshot().

14. How do you record video in Playwright?

Answer: Configure video option in browser context to record test execution.

15. How do you handle multiple tabs in Playwright?

Answer: Use context.pages() to get all pages and switch using page.bringToFront().

16. How do you handle popups in Playwright?

Answer: Use page.waitForEvent('popup') to capture and interact with the popup.

17. How do you handle frames in Playwright?

Answer: Use frameLocator() or contentFrame() to interact with elements inside iframe.

18. How do you run tests in parallel?

Answer: Use parallel in playwright.config.\* or run multiple workers.

19. How do you configure test retries?

Answer: Set retries in playwright.config.\* to rerun failed tests automatically.

20. How do you capture API response in Playwright?

Answer: Use page.waitForResponse() or page.on('response') to capture responses.

21. How do you mock APIs in Playwright?

Answer: Use page.route() to intercept and mock API requests and responses.

22. How do you handle authentication?

Answer: Use storageState to save and reuse authenticated state.

23. How do you integrate Playwright with CI/CD?

Answer: Install dependencies and run tests using npx playwright test in CI pipelines.

24. How do you debug tests in Playwright?

Answer: Use Playwright Inspector, headed mode, PWDEBUG=1, and console logs.

25. How do you generate test report in Playwright?

Answer: Use npx playwright show-report to view the HTML report.
