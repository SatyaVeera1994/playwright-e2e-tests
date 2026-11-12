## Q26. What is Page Object Model (POM) in Playwright?

Interview answer (simple English):

"Page Object Model is a design pattern in Playwright. It separates page elements and actions from test logic. It helps us create reusable, readable, and maintainable test code."

తెలుగులో:

POM అంటే మనం రాసే test code ని, webpage elements మరియు actions ని వేర్వేరుగా maintain చేయడం.

ఉదాహరణకు:

- LoginPage.ts → username, password, login button locators.
- LoginPage methods → login action.
- login.spec.ts → test cases and assertions.

Example:

`pages/LoginPage.ts`

```
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
```

`tests/login.spec.ts`

```
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/login');
  await loginPage.login('admin', 'password');

  await expect(page).toHaveURL(/dashboard/);
});
```

Remember: POM = Locators + Actions in page class; test steps in spec file.

## Q27. How do you wait in Playwright?

Interview answer:

"Playwright supports auto-waiting. It automatically waits for elements to become actionable before performing actions. We can also use explicit waits like `locator.waitFor()` when required."

తెలుగులో:

Playwright లో Auto-waiting ఉంటుంది. అంటే button కనిపించకపోతే లేదా clickable కాకపోతే, Playwright కొంత సమయం wait చేస్తుంది.

మనమే ప్రతి action ముందు `waitForTimeout()` రాయాల్సిన అవసరం లేదు.

Example:

```
// Auto-waiting
await page.locator('#login').click();

// Explicit wait
await page.locator('#dashboard').waitFor({
  state: 'visible'
});
```

States of locator.waitFor():

| State      | Meaning                         |
| ---------- | ------------------------------- |
| `attached` | DOM లో element ఉంది             |
| `detached` | DOM నుంచి element తొలగించబడింది |
| `visible`  | Element కనిపిస్తోంది            |
| `hidden`   | Element కనిపించడం లేదు          |

Remember: First preference = Auto-waiting. Explicit wait = only when needed.

## Q28. How do you handle file upload?

Interview answer:

"We use `setInputFiles()` in Playwright to upload files through an input element of type file."

తెలుగులో:

Website లో file upload button ఉంటుంది. మనం ఆ file input locator తీసుకొని `setInputFiles()` ఉపయోగించి file upload చేస్తాం.

TypeScript example:

```
import { test, expect } from '@playwright/test';

test('Upload file', async ({ page }) => {
  await page.goto('/upload');

  await page.locator('input[type="file"]').setInputFiles(
    'test-data/sample.pdf'
  );

  await expect(page.getByText('sample.pdf')).toBeVisible();
});
```

Remember: File upload = `setInputFiles()`.

## Q29. How do you handle scrolling in Playwright?

Interview answer:

"We can use `scrollIntoViewIfNeeded()` to scroll an element into the visible area. We can also use `mouse.wheel()` for manual scrolling."

తెలుగులో:

Page లో మనకు కావాల్సిన element కింద ఉంటే, అది కనిపించే వరకు scroll చేయవచ్చు.

Example 1 – Scroll to an element:

```
await page.locator('#submit').scrollIntoViewIfNeeded();
await page.locator('#submit').click();
```

Example 2 – Manual scrolling:

```
await page.mouse.wheel(0, 500);
```

ఇక్కడ:

- `0` = horizontal scroll.
- `500` = vertical scroll down.

Remember: Element దగ్గరకు scroll → `scrollIntoViewIfNeeded()`.

## Q30. How do you handle alerts in Playwright?

Interview answer:

"Playwright handles JavaScript dialogs like alert, confirm, and prompt using the `page.on('dialog')` event. We can accept or dismiss the dialog."

తెలుగులో:

Website లో alert popup వచ్చినప్పుడు దాన్ని handle చేయడానికి `dialog` event ఉపయోగిస్తాం.

- `accept()` → OK click చేసినట్లు.
- `dismiss()` → Cancel click చేసినట్లు.

Example – Accept alert:

```
import { test, expect } from '@playwright/test';

test('Handle alert', async ({ page }) => {
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.goto('/alerts');
  await page.locator('#alertButton').click();
});
```

Example – Dismiss confirm dialog:

```
page.on('dialog', async dialog => {
  await dialog.dismiss();
});

await page.locator('#confirmButton').click();
```

Remember: Alert handling = `page.on('dialog')` + `accept()` / `dismiss()`.

## Quick revision – Questions 26–30

| Question         | Important keyword                 |
| ---------------- | --------------------------------- |
| Q26. POM         | Page class + Test class           |
| Q27. Wait        | Auto-waiting, `locator.waitFor()` |
| Q28. File upload | `setInputFiles()`                 |
| Q29. Scrolling   | `scrollIntoViewIfNeeded()`        |
| Q30. Alerts      | `page.on('dialog')`               |

## Practice: Interview quick quiz

5-question practice

0/5 answered

1\. Which method is used to upload a file in Playwright?

fill()

setInputFiles()

uploadFile()

2\. Which method accepts a JavaScript alert?

dialog.dismiss()

dialog.accept()

dialog.close()

3\. What is the main purpose of POM?

Increase test execution time

Separate page logic from test logic

Disable auto-waiting

4\. Which method scrolls an element into view?

scrollIntoViewIfNeeded()

waitForTimeout()

setInputFiles()

5\. What should you prefer for normal Playwright actions?

Hard waits

Auto-waiting

Manual sleep

.
