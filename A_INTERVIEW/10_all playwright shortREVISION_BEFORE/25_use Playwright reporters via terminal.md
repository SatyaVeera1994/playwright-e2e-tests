28. How do you configure and use Playwright reporters via terminal?

Answer:

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
You can also configure in playwright.config.ts:
typescript
export default defineConfig({
reporter: [
['list'],
['html', { open: 'never' }],
['junit', { outputFile: 'results.xml' }]
]
});
Use code with caution.

Common Built-in Reporters

Reporter Description Best for
list Detailed list of tests with status CI logs, quick overview
line One line per test Compact output in CI
dot Progress dots Long running suites
html Rich HTML report Local report with details
json JSON output Custom processing/integration
junit JUnit XML report CI tools (Jenkins, GitLab, etc.)

Tips

• Use html reporter for detailed investigation.
• Use junit for CI integration and test results publishing.
• Combine reporters to get both console summary and rich report.
• Customize output location in playwright.config.ts.
Would you like me to:
• Generate a custom interactive quiz based on this reporter and filtering syntax?
• Provide a clean boilerplate configuration file combining these exact execution controls?
