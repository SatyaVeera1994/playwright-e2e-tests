# Playwright Interview Questions — Simple English + Telugu

These are important Playwright SDET interview questions with simple answers, differences, and real-time examples.

## 1. Difference between `isVisible()` and `toBeVisible()`

| `isVisible()`                                   | `toBeVisible()`                                               |
| ----------------------------------------------- | ------------------------------------------------------------- |
| Returns a Boolean: `true` or `false`            | An assertion that passes or fails                             |
| Checks visibility immediately                   | Automatically retries until the condition passes or times out |
| Does not wait for the element to become visible | Waits for visibility within the assertion timeout             |
| Used for conditional logic                      | Used to validate expected behavior                            |

Example: `isVisible()`

```
const visible = await page.getByText('Login successful').isVisible();

if (visible) {
  console.log('Message is visible');
}
```

తెలుగు: Message ప్రస్తుతం కనిపిస్తుందా లేదా అని check చేసి `true` లేదా `false` ఇస్తుంది.

Example: `toBeVisible()`

```
await expect(
  page.getByText('Login successful')
).toBeVisible();
```

తెలుగు: Message కనిపించే వరకు retry చేస్తుంది. Timeout లోపు కనిపించకపోతే test fail అవుతుంది.

Interview answer:

“`isVisible()` returns a Boolean immediately, whereas `toBeVisible()` is an auto-retrying assertion that waits for the element to become visible until the assertion timeout.”

## 2. More important difference questions

### Q2. Difference between `textContent()` and `toHaveText()`?

- `textContent()` retrieves the current text value.
- `toHaveText()` verifies the expected text and automatically retries.

```
const text = await page.locator('h1').textContent();

await expect(page.locator('h1')).toHaveText('Dashboard');
```

తెలుగులో: `textContent()` text‌ను తీసుకుంటుంది; `toHaveText()` expected text‌తో compare చేసి retry చేస్తుంది.

### Q3. Difference between `page.url()` and `toHaveURL()`?

- `page.url()` returns the current URL immediately.
- `toHaveURL()` checks the expected URL and automatically retries.

```
console.log(page.url());

await expect(page).toHaveURL(/dashboard/);
```

### Q4. Difference between `toBe()` and `toEqual()`?

- `toBe()` checks strict equality using `Object.is()`.
- `toEqual()` checks whether objects or arrays have equivalent values and structure.

```
expect(10).toBe(10);

expect({ name: 'Satya' }).toEqual({ name: 'Satya' });
```

తెలుగులో: `toBe()` value అదేనా అని check చేస్తుంది; `toEqual()` object లేదా array content సరిపోతుందా అని check చేస్తుంది.

### Q5. Difference between `toContainText()` and `toHaveText()`?

- `toContainText()` checks whether the expected text is included.
- `toHaveText()` checks whether the text matches the expected text.

```
await expect(page.locator('h1'))
  .toContainText('Dashboard');

await expect(page.locator('h1'))
  .toHaveText('User Dashboard');
```

తెలుగులో: `toContainText()`లో కొంత text match అయితే సరిపోతుంది. `toHaveText()`లో expected text match అవ్వాలి.

### Q6. Difference between `locator()` and `getByRole()`?

- `locator()` selects elements using CSS, XPath, or other supported selectors.
- `getByRole()` locates elements using their accessible role and optionally their accessible name.

```
page.locator('#login-button');

page.getByRole('button', { name: 'Login' });
```

తెలుగులో: `locator()`తో CSS లేదా XPath వాడవచ్చు. `getByRole()`తో button, textbox వంటి role ఆధారంగా element‌ను locate చేస్తాం.

### Q7. Difference between `beforeEach()` and `beforeAll()`?

- `beforeEach()` runs before every test in its scope.
- `beforeAll()` runs once per worker for that hook scope.

తెలుగులో: `beforeEach()` ప్రతి test‌కు ముందు; `beforeAll()` ఆ worker‌లోని ఆ scope tests ప్రారంభానికి ముందు ఒకసారి run అవుతుంది.

### Q8. Difference between `page.waitForTimeout()` and auto-waiting?

- `page.waitForTimeout(3000)` waits for a fixed three seconds.
- Playwright auto-waiting waits for required actionability conditions before performing supported actions.

```
await page.waitForTimeout(3000); // Fixed wait

await page.getByRole('button', { name: 'Login' }).click(); // Auto-waiting
```

తెలుగులో: Fixed wait అనవసరంగా సమయం తీసుకోవచ్చు. Auto-waiting అవసరమైన conditions కోసం వేచి ఉంటుంది.

### Q9. Difference between `test.skip()` and `test.fail()`?

- `test.skip()` skips a test.
- `test.fail()` marks a test as expected to fail.

తెలుగులో: `skip` అంటే test run చేయకపోవడం; `fail` అంటే test fail అవుతుందని ముందుగానే గుర్తించడం.

### Q10. Difference between `BrowserContext` and `Page`?

- `BrowserContext` represents an isolated browser session.
- `Page` represents an individual tab or popup.

తెలుగులో: `BrowserContext` అనేది separate browser session; `Page` అనేది ఆ session‌లోని ఒక tab.

## Quick interview practice

Question 1 of 5

0/5 answered

## Which method returns true or false immediately?

toBeVisible()isVisible()toHaveText()

PreviousNext question

Interview tip: Focus first on `isVisible()` vs `toBeVisible()`, `textContent()` vs `toHaveText()`, `page.url()` vs `toHaveURL()`, and `beforeEach()` vs `beforeAll()`. These differences are easy to explain with real project examples.

# Playwright Assertions — Simple English + Telugu

Assertion అంటే ఏమిటి?

English: An assertion checks whether the actual result matches the expected result.

తెలుగు: మనం అనుకున్న result వచ్చిందా లేదా అని verify చేయడానికి assertion ఉపయోగిస్తాం.

Example: Login చేసిన తర్వాత Home page కనిపించాలి. కనిపిస్తే test pass అవుతుంది.

## 1. Auto-retrying Assertions

English: Playwright keeps checking until the assertion passes or the timeout is reached.

తెలుగు: Condition true అయ్యే వరకు లేదా timeout పూర్తయ్యే వరకు Playwright మళ్లీ మళ్లీ check చేస్తుంది.

| Assertion        | Simple English       | తెలుగు అర్థం              |
| ---------------- | -------------------- | ------------------------- |
| `toBeVisible()`  | Element is visible   | Element కనిపిస్తుందా?     |
| `toBeHidden()`   | Element is hidden    | Element కనిపించడం లేదా?   |
| `toBeEnabled()`  | Element is enabled   | Button ఉపయోగించగలమా?      |
| `toBeDisabled()` | Element is disabled  | Button disabled‌లో ఉందా?  |
| `toBeChecked()`  | Checkbox is checked  | Checkbox select అయిందా?   |
| `toHaveText()`   | Checks the text      | సరైన text ఉందా?           |
| `toHaveValue()`  | Checks input value   | Input‌లో సరైన value ఉందా? |
| `toHaveCount()`  | Checks element count | ఎన్ని elements ఉన్నాయి?   |
| `toHaveURL()`    | Checks page URL      | సరైన URL‌లో ఉన్నామా?      |
| `toHaveTitle()`  | Checks page title    | Page title సరైనదా?        |

### Real-time example

```
import { test, expect } from '@playwright/test';

test('Verify login page', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(
    page.getByRole('heading', { name: 'Example Domain' })
  ).toBeVisible();

  await expect(page).toHaveTitle('Example Domain');
});
```

Explanation:

- `toBeVisible()` — Heading కనిపిస్తుందో లేదో check చేస్తుంది.
- `toHaveTitle()` — Page title‌ను verify చేస్తుంది.

Remember: Auto-retrying assertion = Wait and check.

## 2. Non-retrying Assertions

English: These assertions check the value immediately. They do not automatically retry.

తెలుగు: ఈ assertions value‌ను వెంటనే check చేస్తాయి. Condition true అయ్యే వరకు automatically wait చేయవు.

| Assertion        | Simple English                            | తెలుగు అర్థం                    |
| ---------------- | ----------------------------------------- | ------------------------------- |
| `toBe()`         | Checks exact value                        | Value అదే ఉందా?                 |
| `toEqual()`      | Checks equality                           | రెండు values సమానంగా ఉన్నాయా?   |
| `toContain()`    | Checks whether something exists inside    | లోపల ఆ value ఉందా?              |
| `toBeTruthy()`   | Checks truthy value                       | Value true లాగా ఉందా?           |
| `toBeFalsy()`    | Checks falsy value                        | Value false లాగా ఉందా?          |
| `toBeNull()`     | Checks null                               | Value null‌గా ఉందా?             |
| `toHaveLength()` | Checks length                             | ఎన్ని characters/items ఉన్నాయి? |
| `toThrow()`      | Checks whether a function throws an error | Function error ఇస్తుందా?        |

### Real-time example

```
import { test, expect } from '@playwright/test';

test('Verify user data', async () => {
  const username = 'Satya';
  const age = 30;

  expect(username).toBe('Satya');
  expect(age).toBe(30);
  expect(username).toContain('Sat');
  expect(username).toHaveLength(5);
});
```

తెలుగు వివరణ:

- `toBe('Satya')` — Username Satya ఉందా?
- `toBe(30)` — Age 30 ఉందా?
- `toContain('Sat')` — Username‌లో Sat ఉందా?
- `toHaveLength(5)` — Username‌లో 5 characters ఉన్నాయా?

Remember: Non-retrying assertion = Check immediately.

## 3. Asymmetric Matchers

ఇవి complex objects లేదా values‌ను flexible‌గా verify చేయడానికి ఉపయోగపడతాయి.

| Matcher                     | Simple English                           | తెలుగు అర్థం                                    |
| --------------------------- | ---------------------------------------- | ----------------------------------------------- |
| `expect.any()`              | Matches a value of a specified type      | ఒక specified type‌కు match అవుతుందా?            |
| `expect.anything()`         | Matches any non-null/non-undefined value | Null లేదా undefined కాకుండా ఏ value అయినా ఉందా? |
| `expect.arrayContaining()`  | Checks expected array items are present  | Array‌లో అవసరమైన items ఉన్నాయా?                 |
| `expect.objectContaining()` | Checks selected object properties        | Object‌లో అవసరమైన properties ఉన్నాయా?           |
| `expect.stringContaining()` | Checks part of a string                  | String‌లో ఆ text ఉందా?                          |
| `expect.stringMatching()`   | Checks a string against a pattern        | String pattern‌కు match అవుతుందా?               |

Example:

```
expect(['Login', 'Logout', 'Profile'])
  .toEqual(expect.arrayContaining(['Login', 'Profile']));
```

తెలుగులో: Array‌లో `Login`, `Profile` రెండూ ఉన్నాయా అని check చేస్తుంది. అదనపు items ఉన్నా pass అవుతుంది.

## 4. Negating matcher — `.not`

English: `.not` checks the opposite condition.

తెలుగు: ఒక condition జరగలేదని verify చేయడానికి `.not` ఉపయోగిస్తాం.

```
expect(10).not.toBe(20);
```

అర్థం: 10 అనేది 20 కాదు — కాబట్టి test pass అవుతుంది.

Playwright UI example:

```
await expect(
  page.getByText('Payment successful')
).not.toBeVisible();
```

అర్థం: `Payment successful` message కనిపించకూడదు అని verify చేస్తుంది.

## Interview quick revision

- `toBeVisible()` — Element కనిపించాలి.
- `toHaveText()` — సరైన text ఉండాలి.
- `toHaveURL()` — సరైన URL ఉండాలి.
- `toBe()` — Value వెంటనే check చేయాలి.
- `.not` — Opposite condition check చేయాలి.

Interview answer:

“Playwright assertions are used to verify expected results. Auto-retrying assertions, such as `toBeVisible()` and `toHaveText()`, retry until they pass or time out. Non-retrying assertions, such as `toBe()` and `toEqual()`, check values immediately. We can also use matchers like `expect.arrayContaining()` and `.not` for flexible and negative validations.”
