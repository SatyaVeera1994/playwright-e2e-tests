## 10. How do you handle network interception and mocking?

## Intercept - to stop or catch somebody/something that is moving from one place to another.

Network Interception in Playwright means capturing and controlling HTTP network requests and responses made by your application.
This is especially useful for API mocking, negative testing, modifying API responses, and testing UI behavior without depending on the real backend.I use page.route() to intercept network requests
page.route()
Whenever a request is made, intercept it.
route.fulfill(); = Don't call the real server. Return my own response
route.continue() = Let the original request go to the server.
route.abort(); = Sometimes we don't want a request to go to the server at all.
✅ page.route() → Intercepts Network Requests
✅ route.continue() → Send Original Request
✅ route.fulfill() → Return Mock Response
✅ route.abort() → Block Request
✅ route.fetch() → Modify Original Response
✅ Used for API Mocking and Error Testing
Answer:
typescript
// Intercept and mock API calls
test('mock API response', async ({ page }) => {
await page.route('\*\*/api/users', route => {
route.fulfill({
status: 200,
contentType: 'application/json',
body: JSON.stringify([
{ id: 1, name: 'Mock User' }
])
});
});

// Abort specific requests
await page.route('\*_/_.{png,jpg,jpeg}', route => route.abort());

// Continue with modifications
await page.route('**/api/**', route => {
route.continue({
headers: {
...route.request().headers(),
'Authorization': 'Bearer mock-token'
}
});
});

await page.goto('/users');
});
Use code with caution.
🟩 What it does:
• Mocks API response for consistent testing
• Aborts static assets (e.g., images)
• Modifies request headers before continuing
• Helps in testing different scenarios without real backend

## 11. What are the different types of waits in Playwright?

Answer:
typescript
// 1. Auto-wait (built-in, most common)
await page.click('button'); // Automatically waits

// 2. Wait for element state
await page.locator('button').waitFor({ state: 'visible' });
await page.locator('button').waitFor({ state: 'hidden' });

// 3. Wait for navigation
await Promise.all([
page.waitForURL('/dashboard'),
page.click('a[href="/dashboard"]')
]);

// 4. Wait for load state
await page.waitForLoadState('networkidle'); // load, domcontentloaded, networkidle

// 5. Explicit wait (not recommended unless necessary)
await page.waitForTimeout(2000); // Waits for 2 seconds
Use code with caution.
⭐ Best Practice:
• Prefer auto-wait and waitFor\* methods.
• Avoid hard waits (waitForTimeout).
• Wait for conditions, not time.
Let me know if you would like me to:
• Demonstrate how to capture and verify payloads of intercepted outgoing requests using route.request().postDataJSON().
• Deep-dive into why networkidle wait state can sometimes lead to flaky tests in heavy production apps and look at alternatives.
• Proceed with extracting text from the next page / image of this guide.
