If the interviewer asks about code review:

### 1 Code Review Checklist – Simple Points

1. Code Readability: Code should be easy to understand.
2. Meaningful Names: Use meaningful variable, method, and class names.
3. Coding Standards: Follow JavaScript and Playwright coding standards.
4. Avoid Hardcoding: Use `.env` files and configuration files.
5. Avoid Duplicate Code: Reuse existing methods wherever possible.
6. Page Object Model: Follow the POM design pattern.
7. Reusable Methods: Keep methods small and focused on one task.
8. Requirement Validation: Check whether the code meets the requirements.
9. Test Scenarios: Verify positive, negative, and edge cases.
10. Assertions: Check whether proper assertions are used.
11. Error Handling: Handle errors and exceptions properly.
12. Locators: Use reliable and maintainable locators.
13. Code Formatting: Follow proper indentation and formatting.
14. GitHub Copilot: Use AI tools to assist with code reviews.
15. Manual Review: Verify the code manually before approving it.

“In my project, we follow a code review checklist. I check whether the code is readable, variable and method names are meaningful, coding standards are followed, duplicate code is avoided, and the Page Object Model is implemented properly. I also verify that there is no hardcoding, methods are reusable, and positive and negative scenarios are covered. We can also use GitHub Copilot to assist with code reviews, but I manually verify the suggestions before approving the code.”

### 2playwright-sdet-framework/

## Playwright SDET Framework – Simple Points

- playwright-sdet-framework/ – Main project folder.
- tests/ – Contains test cases.
- pages/ – Contains Page Object Model (POM) files.
- fixtures/ – Contains custom fixtures.
- utils/ – Contains reusable functions.
- test-data/ – Stores test data.
- config/ – Stores environment configurations.
- tests/API/ – Contains API test cases.
- playwright.config.js – Playwright configuration.
- package.json – Contains dependencies and scripts.
- reports/ – Stores test execution reports.
- allure-results/ – Stores Allure test results.
- .env – Stores environment variables.
- global-setup.js – Runs before all tests.
- global-teardown.js – Runs after all tests.
  │
  ├── tests/
  │ ├── login.spec.ts
  │ ├── users.spec.ts
  │ └── api/
  │ └── users-api.spec.ts
  │
  ├── pages/
  │ ├── LoginPage.ts
  │ ├── HomePage.ts
  │ └── UsersPage.ts
  │
  ├── fixtures/
  │ └── test-fixtures.ts
  │
  ├── utils/
  │ ├── api-helper.ts
  │ └── test-data-helper.ts
  │
  ├── test-data/
  │ └── users.json
  │
  ├── config/
  │ └── environments.ts
  │
  ├── global-setup.js
  ├── global-teardown.js
  ├── playwright.config.ts
  ├── .env
  ├── .gitignore
  ├── package.json
  └── README.md
