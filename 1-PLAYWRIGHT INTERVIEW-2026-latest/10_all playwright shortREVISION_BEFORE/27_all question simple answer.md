Here is the complete transcript of the text, questions, and conceptual answers contained in this sheet:

@The AutomationEngineer

Playwright Interview Questions & Answers

1. What is Playwright?

• Answer: Playwright is a next-generation test automation framework by Microsoft. It supports Chromium, WebKit, and Firefox, and enables reliable end-to-end testing for modern web apps.

2. What are the key features of Playwright?

• Answer: Auto-waiting, cross-browser support, parallel execution, tracing, screenshots, videos, network interception, device emulation, selectors (CSS, text, role, test id, etc.).

3. What languages does Playwright support?

• Answer: JavaScript/TypeScript, Python, .NET, and Java.

4. How is Playwright different from Selenium?

• Answer: Auto-waiting, no WebDriver, faster execution, reliable selectors, built-in tracing & videos.

5. What are the components of Playwright?

• Answer: Test Runner, Browser, BrowserContext, Page, Locator, Tracing, and Expect (assertions).

6. What is a BrowserContext in Playwright?

• Answer: It is an isolated browser session with its own cookies, storage, and preferences.

7. What is a Locator?

• Answer: Locator is a way to find elements in Playwright using user-friendly and reliable strategies.

8. How is auto-waiting implemented in Playwright?

• Answer: Playwright automatically waits for elements to be actionable before performing actions.

9. What is the role of Expect?

• Answer: Expect is used for assertions in Playwright. It has auto-retrying capability until the condition is met or timeout occurs.

10. What is the difference between Page and Context?

• Answer: Page represents a single tab or window. Context represents a browser session.

11. How do you handle a browser in Playwright?

• Answer: Using browser.launch() to start and browser.close() to close.

12. What is the use of Headless mode in Playwright?

• Answer: Headless mode runs tests without opening a UI. It is faster and useful in CI environments.

13. How do you capture screenshot in Playwright?

• Answer: Using page.screenshot() or locator.screenshot().

14. How do you record video in Playwright?

• Answer: Configure video option in browser context to record test execution.

15. How do you handle multiple tabs in Playwright?

• Answer: Use context.pages() to get all pages and switch using page.bringToFront().

16. How do you handle popups in Playwright?

• Answer: Use page.waitForEvent('popup') to capture and interact with the popup.

17. How do you handle frames in Playwright?

• Answer: Use frameLocator() or contentFrame() to interact with elements inside iframe.

18. How do you run tests in parallel?

• Answer: Use parallel in playwright.config.\* or run multiple workers.

19. How do you configure test retries?

• Answer: Set retries in playwright.config.\* to rerun failed tests automatically.

20. How do you capture API response in Playwright?

• Answer: Use page.waitForResponse() or page.on('response') to capture responses.

21. How do you mock APIs in Playwright?

• Answer: Use page.route() to intercept and mock API requests and responses.

22. How do you handle authentication?

• Answer: Use storageState to save and reuse authenticated state.

23. How do you integrate Playwright with CI/CD?

• Answer: Install dependencies and run tests using npx playwright test in CI pipelines.

24. How do you debug tests in Playwright?

• Answer: Use Playwright Inspector, headed mode, PWDEBUG=1, and console logs.

25. How do you generate test report in Playwright?

• Answer: Use npx playwright show-report to view the HTML report.

26. What is Page Object Model (POM) in Playwright?

• ----> POM is a design pattern that creates reusable and maintainable test code by separating page logic from test logic.

27. How do you wait in Playwright?

• ----> Prefer auto-waiting. For explicit waits, use page.waitForSelector() or locator.waitFor().

28. How do you handle file upload?

• ----> Use setInputFiles() on input[type="file"] locator to upload files.

29. How do you handle scrolling in Playwright?

• ----> Use locator.scrollIntoViewIfNeeded() or mouse.wheel().

30. How do you handle alerts in Playwright?

• ----> Use page.on('dialog', dialog => dialog.accept()) or dialog.dismiss().

31. How do you perform drag and drop?

• ----> Use locator.dragTo(targetLocator).

32. How do you handle network failures?

• ----> Use page.route() to abort or fulfill network requests.

33. How do you test on mobile devices?

• ----> Use device descriptors from @playwright/test and launch contexts with isMobile: true.

34. How do you test login functionality?

• ----> Fill the form, click submit, and assert successful navigation or element.

35. How do you handle cookies in Playwright?

• ----> Use context.addCookies() and context.cookies() to manage cookies.

36. What is Trace Viewer in Playwright?

• ----> Trace Viewer helps in debugging tests by showing step-by-step execution.

37. How do you generate trace?

• ----> Use context.tracing.start() and context.tracing.stop({ path: 'trace.zip' }).

38. How do you test WebSockets?

• ----> Use page.on('websocket') to listen and validate messages.

39. How do you handle slow network?

• ----> Use context.route() to throttle or delay the network speed.

40. How do you test accessibility?

• ----> Use playwright-axe or axe-core integration to validate accessibility.

41. How do you handle sessions and storage?

• ----> Use context.storageState() to save and reuse session data.

42. How do you test in different browsers?

• ----> Run tests on Chromium, Firefox, WebKit using different projects in config.

43. How do you handle dynamic content?

• ----> Use auto-wait and locator strategies that are condition or text-based.

44. How do you parallelize tests in Playwright?

• ----> Use Playwright Test's built-in workers feature, and manage the parallelization.

45. How do you measure performance?

• ----> Use page.evaluate(), Lighthouse or built-in performance metrics.

46. How do you test API?

• ----> Use APIRequestContext in Playwright to send requests and validate responses.

47. How do you test performance?

• ----> Use metrics, network logs, and Lighthouse for insights on the load time, etc.

48. How do you handle flaky tests?

• ----> Use retries, proper waits, stable locators, and isolate test data.

49. How do you test on different environments?

• ----> Use environment variables and config files per environment.

50. How do you keep tests stable?

• ----> Use best practices, stable locators, proper waits, and clean test data.
Would you like me to:
• Launch an interactive quiz focusing on these foundational concepts (e.g., storageState, POM, network mocking)?
• Expand any of these quick-fire points into a complete code example (such as file uploading or storage session reuse)?
