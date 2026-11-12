## 25. What are the most important Playwright terminal commands?

Test Execution Commands:

• Run all tests: npx playwright test ----> Runs all tests in the project
• Run specific test file: npx playwright test tests/login.spec.ts ----> Runs a specific test file
• Run tests with UI mode: npx playwright test --ui ----> Opens Playwright Test UI
• Run tests in headed mode: npx playwright test --headed ----> Runs tests in headed browser
• Run tests in debug mode: npx playwright test --debug ----> Runs tests in debug mode (PW Inspector on failure)
• Run tests in a specific project: npx playwright test --project=chromium ----> Runs tests in a specific browser project

Utility Commands:

• Show help: npx playwright --help ----> Shows all available commands
• Show version: npx playwright --version ----> Shows installed Playwright version
• List projects: npx playwright test --list ----> Lists all configured projects
• Generate code (record text): npx playwright codegen ----> Opens Codegen to record tests

Pro Tips:

• Use --grep "name" to run tests matching a pattern.
• Use --reporter=html to generate HTML report.
• Use --workers=N to run tests in parallel (faster execution).
Would you like me to:
• Generate an active multi-choice quiz to test your knowledge across all the cheatsheets shared so far?
• Provide a clean setup template for a package.json that consolidates all these best practices?
