# Q15. How do you debug Playwright tests?

"I debug Playwright tests using headed mode, Playwright Inspector, console logs, screenshots, videos, and Trace Viewer. These tools help me identify where and why a test is failing."

### 1. Debugging methods

| Method       | Command / Code                  | Purpose                               |
| ------------ | ------------------------------- | ------------------------------------- |
| Headed mode  | `npx playwright test --headed`  | Watch browser execution               |
| Debug mode   | `npx playwright test --debug`   | Open Inspector and step through tests |
| Pause        | `await page.pause()`            | Stop execution at a particular line   |
| Slow motion  | `slowMo: 1000`                  | Slow down browser actions             |
| Screenshot   | `screenshot: 'only-on-failure'` | Capture failure screenshot            |
| Video        | `video: 'retain-on-failure'`    | Record failed test                    |
| Trace        | `trace: 'on-first-retry'`       | Analyze execution history             |
| Console logs | `page.on('console', ...)`       | Check browser console messages        |

### 2. Important code examples

A. Pause execution

```
test('Login test', async ({ page }) => {
  await page.goto('https://example.com');

  await page.pause();

  await page.locator('#login').click();
});
```

Telugu: `page.pause()` daggara execution stop avutundi. Inspector open avutundi. Manam step-by-step ga test ni debug cheyochu.

B. Capture browser console logs

```
page.on('console', msg => {
  console.log(msg.text());
});
```

Telugu: Browser lo console messages or errors ni terminal lo chudachu.

C. Capture failure artifacts

```
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry'
}
```

Telugu: Test fail ayinappudu screenshot, video, trace record avutayi. Trace Viewer lo exact ga ekkada fail ayyindo analyze cheyochu.

D. Open Trace Viewer

```
npx playwright show-trace trace.zip
```

[playwright.dev](https://playwright.dev/docs/best-practices?utm_source=chatgpt.com)

### 3. Real-time project example

Suppose Yotta DRM application lo Widevine content add test fail ayyindi.

1. First, run the test in headed mode.
2. Check which step is failing.
3. Open the screenshot and video.
4. Open Trace Viewer.
5. Check the failed locator, network request, response, and error message.
6. Fix the issue and rerun the test.

Interview-ready answer:

"In my Playwright project, when a test fails, I check the error message, screenshot, and trace. I use Playwright Inspector to debug step by step and Trace Viewer to analyze actions, network requests, and DOM snapshots."
