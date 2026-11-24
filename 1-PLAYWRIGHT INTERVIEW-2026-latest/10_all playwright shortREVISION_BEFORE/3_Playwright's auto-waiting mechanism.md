## 3. Explain Playwright's auto-waiting mechanism

Auto Waiting is a built-in synchronization feature in Playwright. Before performing actions like click, fill, or selectOption, Playwright automatically waits until the element becomes visible, enabled, stable, and ready for interaction. This removes the need for most explicit waits and reduces test flakiness caused by timing issues, making tests more reliable and stable.

- ✅ Element Visible గా ఉండాలి.
- ✅ Element Stable గా ఉండాలి (Animation పూర్తవ్వాలి).
- ✅ Element Enabled గా ఉండాలి.
- ✅ Element Editable అయి ఉండాలి (`fill()` కోసం).
- ✅ Element DOM లో ఉండాలి.
- ✅ Element Pointer Events Receive చేయగలగాలి (Overlay ఉండకూడదు).

## 4. How do you handle iframes in Playwright?

An iframe is a web page embedded inside another web page.
“In Playwright, I handle iframes using `frameLocator()`, `page.frame()`, and `contentFrame()`. These methods help us locate and interact with elements inside an iframe.”

Answer:
typescript
// Method 1: Using frameLocator
await page.frameLocator('iframe#myframe')
.locator('button')
.click();

// Method 2: Using frame() for named frames
const frame = await page.frame('frameName');
await frame.locator('button').click();

// Method 3: Using contentFrame() for iframe elements
const iFrameElement = page.locator('iframe#myframe');
const frame = await iFrameElement.contentFrame();
await frame.locator('button').click();
Use code with caution.
