## Set up logger

Use the following code to set up a logger util

```ts
import { test } from "@playwright/test";
import chalk from "chalk";

type Level = "log" | "info" | "warn" | "error";

export async function log(level: Level, message: string) {
    const plainLine = `[${level.toUpperCase()}]: ${message}`; // For Allure
    let coloredLine = plainLine;

    // Pick color based on log level
    switch (level) {
        case "info":
            coloredLine = chalk.blue(plainLine);
            break;
        case "warn":
            coloredLine = chalk.yellow(plainLine);
            break;
        case "error":
            coloredLine = chalk.red(plainLine);
            break;
        default:
            coloredLine = chalk.white(plainLine);
    }

    // Print colored text in terminal
    (console[level] || console.log)(coloredLine);

    // Send plain text to Allure
    await test.step(plainLine, async () => {});
}

```

Sure 👍. Meeru image lo unna format laage, **Logger Setup Steps**:

# Instructions and Notes

## In this session...

### **Logger Setup**

1. Install Chalk →

   ```bash
   npm i --save-dev chalk
   ```

2. Create a file →

   ```text
   tests/helpers/logger.ts
   ```

3. Add the logger utility code in `logger.ts`

4. Import the log function →

   ```ts
   import { log } from "../helpers/logger";
   ```

5. Start logging in your test →

   ```ts
   await log("info", "Launching Browser");
   await log("info", "Navigating to Login Page");
   await log("warn", "Test Data Not Found");
   await log("error", "Login Failed");
   ```

6. Run the test →

   ```bash
   npx playwright test
   ```

7. Check terminal logs (colored output)

8. Open Allure Report and verify logs

9. Done! 🎉

---

### Sample Usage

```ts
import { test } from "@playwright/test";
import { log } from "../helpers/logger";

test("Login Test", async ({ page }) => {
    await log("info", "Launching Browser");

    await page.goto("https://example.com");

    await log("info", "Navigated to Application");

    await log("info", "Login Successful");
});
```

### Easy to Remember

* Install Chalk
* Create `logger.ts`
* Import `log()`
* Use `await log()`
* Run Test
* Verify Console & Allure Report
* Done ✅
