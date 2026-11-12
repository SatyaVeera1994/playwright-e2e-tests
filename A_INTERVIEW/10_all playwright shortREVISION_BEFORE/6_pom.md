## 7. Explain Page Object Model (POM) implementation in Playwright

Page Object Model is a design pattern where each web page is created as a separate class. The page class contains locators and reusable methods. Test cases call these methods instead of directly using locators. This improves readability, reusability, and maintenance. If a locator changes, I update it only in the page class, making the framework easy to maintain

Answer:
typescript
// pages/LoginPage.ts
export class LoginPage {
constructor(private page: Page) {}

private usernameInput = () => this.page.getByLabel('Username');
private passwordInput = () => this.page.getByLabel('Password');
private loginButton = () => this.page.getByRole('button', { name: 'Login' });

async login(username: string, password: string) {
await this.usernameInput().fill(username);
await this.passwordInput().fill(password);
await this.loginButton().click();
}
}

async goto() {
await this.page.goto('/login');
}

// test file
test('login test', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('user@example.com', 'password123');
});
