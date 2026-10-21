# Handle Text Fields in Playwright

Let's learn how to handle text fields in Playwright using simple English + Telugu + real-time examples.

## 1. What is a text field?

English: A text field is an input box where users enter information such as username, email, password, or phone number.

తెలుగు: User తన details enter చేసే input box‌ను text field అంటారు.

[O vlastnostech tradera – risknete to? | FXstreet.cz](https://images.openai.com/static-rsc-4/1XTEGO-VlHMp_Y_jSbR3_X5rZIo8CiGiwm65pbjyYcZcnACtLWoJFJfNxBv4aBVqq23ZvvPces8KQ-9UWM4hE6yYDcOI23v44YYM2vq13Ev6mTw4jfd4IXk-HoGr3iOwNq6kr9dfXQboXnUduumCNH8VYItGqA-szpsW6oWXGWs?purpose=inline)

[fxstreet.cz](https://www.fxstreet.cz/mitrade-o-vlastnostech-tradera-risknete-to.html?utm_source=chatgpt.com)

Real-time example: On a login page, we enter an email and password before clicking Sign In.

## 2. Important methods to handle text fields

| Method         | Simple English                            | తెలుగు అర్థం                                        |
| -------------- | ----------------------------------------- | --------------------------------------------------- |
| `fill()`       | Enters text and replaces existing content | పాత text‌ను replace చేసి కొత్త text enter చేస్తుంది |
| `clear()`      | Clears the input field                    | Input field‌లోని text‌ను clear చేస్తుంది            |
| `press()`      | Presses a keyboard key                    | Keyboard key‌ను press చేస్తుంది                     |
| `inputValue()` | Gets the current input value              | Input‌లో ప్రస్తుతం ఉన్న value‌ను తీసుకుంటుంది       |
| `type()`       | Types text character by character         | ఒక్కో character టైప్ చేస్తుంది                      |
| `locator()`    | Locates an element                        | Element‌ను గుర్తిస్తుంది                            |

Note: `locator.clear()` and `locator.press()` are supported Playwright methods. `locator.type()` is available but deprecated in favor of `fill()` or `pressSequentially()` for modern code.

## 3. `fill()` — Enter text

English: `fill()` enters text into an input field and replaces the existing value.

తెలుగు: Input field‌లో ఇప్పటికే text ఉన్నా, `fill()` దాన్ని replace చేసి కొత్త text enter చేస్తుంది.

```
import { test, expect } from '@playwright/test';

test('Enter email', async ({ page }) => {
  await page.goto('https://example.com');

  const email = page.getByLabel('Email');

  await email.fill('satya@example.com');

  await expect(email).toHaveValue('satya@example.com');
});
```

Here, the example assumes the application has a field labelled `Email`.

## 4. `clear()` — Remove existing text

```
const email = page.getByLabel('Email');

await email.fill('satya@example.com');
await email.clear();
```

తెలుగు: మొదట email enter చేశాం. తర్వాత `clear()` ఉపయోగించి input field‌ను ఖాళీ చేశాం.

## 5. `inputValue()` — Get the entered value

```
const email = page.getByLabel('Email');

await email.fill('satya@example.com');

const value = await email.inputValue();

console.log(value);
```

Output:

```
satya@example.com
```

తెలుగు: Input field‌లో ప్రస్తుతం ఉన్న value‌ను తీసుకుని variable‌లో store చేస్తుంది.

## 6. Real-time login example

```
import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByLabel('Email').fill('satya@example.com');

  await page.getByLabel('Password').fill('TestPassword123');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(/dashboard/);
});
```

Real-time flow:

1. Open the login page.
2. Enter the email.
3. Enter the password.
4. Click Sign In.
5. Verify that the dashboard opens.

This is an illustrative example; use your application's actual URL, labels, and expected destination.

## 7. Interview question: Difference between `fill()` and `pressSequentially()`

| `fill()`                                | `pressSequentially()`                                         |
| --------------------------------------- | ------------------------------------------------------------- |
| Enters the complete text into the field | Types characters one by one                                   |
| Preferred for normal text entry         | Useful when the application responds to individual keystrokes |
| Replaces the existing value             | Types into the field at the current cursor position           |

```
await page.getByLabel('Email').fill('satya@example.com');

await page.getByLabel('Search').pressSequentially('Playwright');
```

Interview answer:

“I use `fill()` to enter text into input fields because it replaces the existing value. I use `pressSequentially()` when I need to simulate character-by-character typing, such as when testing autocomplete or dynamic search suggestions.”

## 8. Quick interview revision

- `fill()` — Enter or replace text.
- `clear()` — Clear text.
- `inputValue()` — Read the current value.
- `press()` — Press a keyboard key.
- `pressSequentially()` — Type character by character.

Remember: In most Playwright automation tests, prefer `fill()` for normal text fields.