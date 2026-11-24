# Q1. What is Playwright and how does it fundamentally differ from Selenium?

### ✅ English Answer
Playwright is a modern end-to-end automation framework developed by Microsoft. It supports Chromium, Firefox, and WebKit using a single API.
    
“Playwright uses a persistent WebSocket connection for continuous communication with the browser, whereas Selenium uses HTTP requests for each command.  

Because of this persistent connection, Playwright can listen to browser events in real time and provide advanced capabilities such as:

Auto Waiting
Network Interception
Trace Viewer
Video Recording
Faster Test Execution
Browser Event Monitoring

These features make Playwright faster, more reliable, and easier to use for modern web application testing compared to traditional automation tools.

## 1. Telugu Concept

### Playwright అంటే ఏమిటి?

Playwright అనేది Microsoft రూపొందించిన **Modern End-to-End Automation Testing Framework**.

దీనిని ఉపయోగించి Web Applications ను Chromium, Firefox మరియు WebKit (Safari) browsers లో ఒకే API ద్వారా automate చేయవచ్చు.

Playwright మరియు Selenium మధ్య ఉన్న ముఖ్యమైన తేడా **Browser Communication Architecture**.

### Selenium ఎలా పని చేస్తుంది?

Selenium Browser Driver (ChromeDriver, GeckoDriver) ద్వారా Browser తో Communication చేస్తుంది.

ప్రతి Action (click(), fill(), getText()) కి ఒక కొత్త **HTTP Request** Browser Driver కి వెళుతుంది.

```text
Test Script
      │
      ▼
 Selenium
      │
 HTTP Request
      │
 ChromeDriver
      │
 Browser
```

ప్రతి Command కి కొత్త Request పంపబడుతుంది.

దీనివల్ల

- Execution Slow అవుతుంది
- Manual Waits ఎక్కువ అవసరం అవుతాయి
- Synchronization Issues వస్తాయి
- Flaky Tests వచ్చే అవకాశం ఉంటుంది

---

### Playwright ఎలా పని చేస్తుంది?

Playwright Browser తో **Persistent Bidirectional WebSocket Connection** ద్వారా Communication చేస్తుంది.

ఈ Connection Chrome DevTools Protocol (CDP) ద్వారా Establish అవుతుంది.

```text
Test Script
      │
      ▼
 Playwright
      │
 WebSocket (CDP)
      │
 Browser
```

Connection Test పూర్తయ్యే వరకు అలాగే ఉంటుంది.

దీనివల్ల Playwright Browser Events ను Real-Time లో Listen చేయగలదు.

అందుకే Playwright లో ఈ Features ఉన్నాయి.

- Auto Waiting
- Network Interception
- Trace Viewer
- Video Recording
- Faster Execution
- Browser Event Monitoring

Playwright ఒకే API ద్వారా Chromium, Firefox మరియు WebKit Browsers ను Support చేస్తుంది.

---

## 2. Easy to Remember

### Key Points

✅ Selenium → HTTP Request + Browser Driver

✅ Playwright → Persistent WebSocket Connection (CDP)

✅ Selenium → Manual Waits

✅ Playwright → Built-in Auto Waiting

✅ Selenium → Slower Communication

✅ Playwright → Faster Execution

### One-Line Summary

**Selenium communicates using HTTP Requests through Browser Drivers, whereas Playwright uses a Persistent WebSocket Connection through CDP, making it faster, more reliable, and capable of real-time browser event monitoring.**

---

## 3. Telugu Interview Answer

Playwright అనేది Microsoft రూపొందించిన Modern End-to-End Automation Framework. ఇది Chromium, Firefox మరియు WebKit Browsers ను ఒకే API ద్వారా Support చేస్తుంది.

Playwright మరియు Selenium మధ్య ప్రధానమైన Difference Communication Architecture.

Selenium ప్రతి Browser Action కోసం Browser Driver కి HTTP Request పంపుతుంది. అంటే click(), fill(), getText() వంటి ప్రతి Command కి కొత్త HTTP Request వెళుతుంది.

Playwright మాత్రం Chrome DevTools Protocol ద్వారా Browser తో ఒక Persistent WebSocket Connection ను Maintain చేస్తుంది. Connection Test పూర్తయ్యే వరకు Active గా ఉంటుంది.

ఈ Architecture వల్ల Playwright Browser Events ను Real-Time లో Listen చేయగలదు. అందువల్ల Auto Waiting, Network Interception, Trace Viewer, Video Recording వంటి Features Possible అయ్యాయి.

మా Project లో Selenium నుండి Playwright కి Migration చేసిన తర్వాత Manual Waits చాలా వరకు Remove చేశాము. Test Execution Speed Improve అయింది మరియు Flaky Tests కూడా గణనీయంగా తగ్గాయి.

---

## 4. English Interview Answer

Playwright is a modern end-to-end automation framework developed by Microsoft. It supports Chromium, Firefox, and WebKit using a single API.

The fundamental difference between Playwright and Selenium is their browser communication architecture.

Selenium communicates with browsers through browser drivers such as ChromeDriver using stateless HTTP requests. Every browser action, including click(), fill(), and getText(), sends a separate HTTP request to the browser driver.

In contrast, Playwright uses a persistent bidirectional WebSocket connection through the Chrome DevTools Protocol (CDP). Since the connection remains active throughout the test execution, Playwright can subscribe to browser events in real time.

This architecture enables advanced features such as Auto Waiting, Network Interception, Trace Viewer, Video Recording, and faster execution.

In my project, we migrated our UI automation from Selenium to Playwright. We removed most explicit waits because Playwright automatically synchronizes with the browser. This significantly reduced flaky tests, improved execution speed, and made our automation framework more stable and maintainable.

---

## 5. Real-Time Project Example

In my project, I automated an insurance web application using Playwright with TypeScript.

Earlier, our Selenium framework relied heavily on `Thread.sleep()` and `WebDriverWait` to handle page loading and dynamic elements. This increased execution time and caused flaky tests.

After migrating to Playwright, we leveraged its built-in Auto Waiting and persistent browser communication. We removed most explicit waits, reduced synchronization issues, and achieved more stable test execution. We also used features like Trace Viewer and Network Interception for debugging and API mocking, which improved productivity and reduced maintenance effort.

---

## 6. Code Example (TypeScript)

```typescript
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.locator('#username').fill('admin');

  await page.locator('#password').fill('admin123');

  await page.locator('#login').click();

  await expect(page).toHaveURL(/dashboard/);

});
```