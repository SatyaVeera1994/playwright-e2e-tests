9. How do you implement custom fixtures in Playwright?

Playwright fixtures provide reusable setup and dependencies to tests. Playwright has built-in fixtures like page, context, and request, and we can create custom fixtures using base.extend(). Fixtures are useful for common setup such as authentication, page objects, and API clients. They also support different scopes like test and worker.
For UI testing, common built-in fixtures are:

page
context
browser
browserName
request

Answer:
typescript
// fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

type MyFixtures = {
loginPage: LoginPage;
authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
loginPage: async ({ page }, use) => {
const loginPage = new LoginPage(page);
await use(loginPage);
},
authenticatedPage: async ({ page }, use) => {
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('user@example.com', 'password123');
await use(page);
}
});
Use code with caution.
Usage in tests:
typescript
import { test, expect } from './fixtures';

test('dashboard visible', async ({ authenticatedPage }) => {
await authenticatedPage.goto('/dashboard');
await expect(authenticatedPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
