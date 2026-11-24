# Q21. What is Playwright Codegen and how do you use it?

## 1. ✅ English Interview Answer

“Playwright Codegen is a built-in tool in Playwright that automatically generates test code based on our browser interactions.

When we perform actions like clicking buttons, filling textboxes, and navigating pages, Codegen records those actions and generates corresponding Playwright code.

It also generates locators automatically. We can use this generated code as a starting point and modify it according to our project requirements.”

# 1. Basic codegen

npx playwright codegen https://example.com

# 2. Codegen with specific browser

npx playwright codegen --browser=firefox https://example.com

# 3. Codegen with custom viewport

npx playwright codegen --viewport-size=1280,720 https://example.com

# 4. Codegen with device emulation

npx playwright codegen --device="iPhone 12" https://example.com

# 5. Codegen with authentication (load saved state)

npx playwright codegen --load-storage=auth.json https://example.com

# 6. Save generated test to file

npx playwright codegen --output=tests/generated.spec.ts https://example.com

# 7. Codegen with specific language

npx playwright codegen --target=python https://example.com

# Targets: javascript, python, java, csharp

# 8. Codegen with custom user agent

npx playwright codegen --user-agent="Custom Bot" https://example.com

# 9. Record in a specific locale

npx playwright codegen --lang=es-ES https://example.com

Key Features:

• Records clicks, fills, navigation
• Generates locators using best practices
• Shows live preview of generated code
• Supports assertion generation (click Assert button)
• Can resume recording on existing tests

## 2. 🇮🇳 Telugu Explanation

Codegen ante Code Generator.

Manam manual ga code rayakunda browser lo actions perform chesthe Playwright automatic ga code generate chestundi.

For example:

1. Browser open chestam.
2. Login page navigate chestam.
3. Email enter chestam.
4. Password enter chestam.
5. Login button click chestam.

Ee actions ki Playwright automatic ga TypeScript code generate chestundi.

## 3. How to use Playwright Codegen?

Step 1: Run this command in terminal

```
npx playwright codegen https://example.com
```

Step 2: Browser automatically open avutundi.

[Test generator | Playwright](https://images.openai.com/static-rsc-4/wHeBDMHvR_1IlNEZ781LJWtHBMeMxkBuvegjWBSX-Vh1-v6W8WEQfh5sqN9K-QXT6-B2QlniS-Qa9DxzjUyqglD5Jy2zGVGfJfYXEF8oOuDHUra2yc2M8CJ_myycWrIe6HavsnJ14irDaISZmiyMVnjlUNi9uNKsQz-_g7hAS0g?purpose=inline)

[playwright.dev](https://playwright.dev/docs/codegen?utm_source=chatgpt.com)

Step 3: Browser lo actions perform cheyyali.

- Click buttons.
- Enter text.
- Select dropdowns.
- Navigate between pages.

Step 4: Playwright Inspector lo generated code automatically display avutundi.

Step 5: Generated code ni copy chesi mana `.spec.ts` file lo use cheyyachu.

## 4. Example: Generated Playwright Code

Suppose browser lo login actions perform chesam.

Codegen generate chese code example:

```
import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.getByLabel('Email').fill('admin@gmail.com');

  await page.getByLabel('Password').fill('password123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Dashboard')).toBeVisible();

});
```

Telugu explanation:

- `page.goto()` → Login page open chestundi.
- `getByLabel().fill()` → Email and password enter chestundi.
- `getByRole().click()` → Login button click chestundi.
- `expect()` → Dashboard visible unda verify chestundi.

## 5. Important Codegen Commands

| Command                                               | Purpose                    |
| ----------------------------------------------------- | -------------------------- |
| `npx playwright codegen`                              | Open Codegen               |
| `npx playwright codegen URL`                          | Open specific website      |
| `npx playwright codegen --browser chromium URL`       | Use Chromium               |
| `npx playwright codegen --device "iPhone 13" URL`     | Emulate a device           |
| `npx playwright codegen --save-storage=auth.json URL` | Save browser storage state |
| `npx playwright codegen --load-storage=auth.json URL` | Load saved storage state   |

## 6. Advantages of Playwright Codegen

1. Reduces manual coding effort.
2. Automatically generates locators.
3. Helps beginners learn Playwright syntax.
4. Speeds up test script creation.
5. Supports recording browser interactions.

## 7. Limitations of Codegen

- Generated code may need manual modifications.
- It does not automatically create a complete framework.
- We need to add proper assertions and test validations.
- We need to organize code using Page Object Model (POM) for maintainability.
- Generated locators should be reviewed for reliability.

## 8. 💼 Real-time Project Example

In my Yotta DRM project, suppose I need to automate the Packager creation flow.

I can use Codegen to record:

1. Open Packager page.
2. Click Add Packager.
3. Enter Packager details.
4. Select provider.
5. Click Save.
6. Verify successful creation.

Codegen generates the initial Playwright script. Then I can modify it using TypeScript, POM, reusable methods, and proper assertions.

## 9. 🎯 Follow-up Interview Questions

Q1. Is Codegen used for manual or automation testing?

It is an automation code-generation tool that records manual browser interactions.

Q2. Does Codegen generate assertions?

Yes, it can generate assertions through the Inspector's assertion tools, such as selecting an element and checking its visibility or text.

Q3. Does Codegen create a complete framework?

No. It generates test code, but we need to organize it into a proper framework.

Q4. Can we use Codegen with TypeScript?

Yes. TypeScript is supported and can be selected in the Inspector.

Q5. What is the difference between Codegen and Playwright Inspector?

Codegen records browser interactions and generates code. Inspector helps debug and step through Playwright tests, and also provides locator-picking capabilities.

## 🧠 Easy Memory Trick

Codegen = Record → Generate → Review → Modify → Execute

### ⭐ Short interview answer

“Playwright Codegen is a built-in recording tool. It records browser interactions such as clicks, filling textboxes, and navigation, and automatically generates Playwright code with locators. I use it to create initial test scripts, then modify the generated code with proper assertions, reusable methods, and POM structure.”
