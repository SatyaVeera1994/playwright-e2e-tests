In Playwright, `page.pause()` pauses test execution so you can inspect the browser and debug your test.
Interview answer:

> `page.pause()` is used to pause Playwright test execution for debugging. It opens the Playwright Inspector when running in a supported headed debugging session, allowing us to inspect locators and execute steps manually.

```
import { test } from '@playwright/test';

test('debug login', async ({ page }) => {
  await page.goto('https://example.com');

  await page.pause();

  await page.getByRole('button', { name: 'Login' }).click();
});
```

### How to use it

1. Run the test in headed mode with the Playwright Inspector enabled:
   ```
   npx playwright test --debug
   ```
2. Execution pauses at `await page.pause()`.
3. Inspect locators, check page elements, and step through the test.
4. Resume execution when you're ready.

Telugu explanation: `page.pause()` ante test execution ni temporary ga aapadam. Browser lo elements, locators, XPath, actions ni inspect chesi debug cheyadaniki use chestham.

Important: `page.pause()` is for debugging, not normal CI/CD execution.
