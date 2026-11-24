## Q16. How do you handle dynamic content and Shadow DOM?

I handle dynamic content using Playwright's auto-waiting, locator assertions, and API response waits. For Shadow DOM, Playwright automatically supports open Shadow DOM, so I can access internal elements using normal locators. Closed Shadow DOM is not directly accessible through normal locators."

First, understand these as two different concepts.

## Part A: Dynamic content

What is dynamic content?

Dynamic content means page elements or data change based on API responses, user actions, or application processing time.

Telugu: Page load ayyaka data immediate ga ravakapovachu. API response vachaka content display avuthundi. Ila time batti change ayye content ni dynamic content antaru.

### How do you handle it?

1\. Auto-waiting

```
await page.locator('#login').click();
```

Playwright automatically waits for the element to be actionable before clicking.

2\. Wait for visibility

```
await expect(page.locator('#success'))
  .toBeVisible();
```

3\. Wait for API response

```
await page.waitForResponse(response =>
  response.url().includes('/api/data') &&
  response.status() === 200
);
```

4\. Wait for text

```
await expect(page.locator('#status'))
  .toHaveText('Loaded');
```

5\. Wait for page load state

```
await page.waitForLoadState('domcontentloaded');
```

Avoid unnecessary fixed waits such as:

```
await page.waitForTimeout(5000);
```

Use condition-based waits instead.

## Part B: Shadow DOM

What is Shadow DOM?

Shadow DOM is a browser feature used to encapsulate an element's HTML, CSS, and behavior inside a separate DOM tree.

Telugu: Normal HTML elements ki separate ga oka component lopala internal HTML structure untundi. Daanini Shadow DOM antaru.

### Example

Suppose a custom component contains a button inside its open Shadow DOM.

```
<my-component>
  #shadow-root (open)
    <button>Submit</button>
</my-component>
```

How do you access it in Playwright?

```
await page.locator('my-component button').click();
```

Playwright CSS and locator selectors automatically pierce open Shadow DOM boundaries.

For nested Shadow DOM:

```
await page.locator(
  'my-component inner-component button'
).click();
```

Important: Closed Shadow DOM cannot be accessed through normal Playwright locators.

### Real-time project example

Suppose a Yotta application has a custom UI component containing a button inside an open Shadow DOM.

- Identify the Shadow DOM host.
- Inspect the internal element.
- Use a Playwright locator to access the button.
- Perform the action and verify the result.

## Quick revision cheat sheet

| Topic             | Remember                               |
| ----------------- | -------------------------------------- |
| Headed mode       | Watch browser                          |
| `--debug`         | Inspector                              |
| `page.pause()`    | Stop execution                         |
| Trace Viewer      | Analyze test execution                 |
| Dynamic content   | Use auto-waiting and assertions        |
| API response      | `waitForResponse()`                    |
| Shadow DOM        | Encapsulated DOM                       |
| Open Shadow DOM   | Playwright supports it automatically   |
| Closed Shadow DOM | Not accessible through normal locators |
| Fixed waits       | Avoid unnecessary `waitForTimeout()`   |

Final interview answer for Q16:

"I handle dynamic content using Playwright's auto-waiting, locator assertions, and API response waits. For Shadow DOM, Playwright automatically supports open Shadow DOM, so I can access internal elements using normal locators. Closed Shadow DOM is not directly accessible through normal locators."
