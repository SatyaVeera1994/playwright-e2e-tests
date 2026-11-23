Here is your **Playwright Interview Last-Minute Revision** with **simple English + Telugu answers**.

---

# ⭐ 1. What is Playwright?

### ✅ English
> Playwright is an automation testing framework used to test web applications in Chromium, Firefox, and WebKit browsers.

### ✅ Telugu
> **Playwright అనేది Chromium, Firefox, WebKit browsers లో web applications ని automate చేసి test చేయడానికి ఉపయోగించే framework.**

---

# ⭐ 2. Why Playwright over Selenium?

### ✅ English
> I prefer Playwright because it is faster, has auto-waiting, supports multiple browsers, and provides better reliability than Selenium.

### ✅ Telugu
> **Playwright fast గా ఉంటుంది, Auto Waiting ఉంటుంది, Multiple Browsers support చేస్తుంది, Selenium కంటే reliable గా ఉంటుంది.**

---

# ⭐ 3. Playwright Architecture

### ✅ English
> Playwright communicates with browsers using a WebSocket connection, making it faster and enabling real-time communication.

### ✅ Telugu
> **Playwright WebSocket ద్వారా browser తో communicate చేస్తుంది. అందువల్ల ఇది fast గా పనిచేస్తుంది.**

---

# ⭐ 4. What is Auto Waiting?

### ✅ English
> Auto Waiting automatically waits until an element is ready before performing actions like click or fill.

### ✅ Telugu
> **Element ready అయ్యే వరకు Playwright automatically wait చేసి action చేస్తుంది.**

---

# ⭐ 5. What are Locators?

### ✅ English
> Locators are used to find and interact with web elements.

### ✅ Telugu
> **Web page లో elements ని locate చేసి interact చేయడానికి Locators ఉపయోగిస్తాము.**

---

# ⭐ 6. What is `getByRole()`?

### ✅ English
> `getByRole()` locates elements based on their accessibility role, such as button, textbox, or link.

### ✅ Telugu
> **Button, Link, Textbox వంటి accessibility role ఆధారంగా element ని locate చేస్తుంది.**

**Example**

```typescript
await page.getByRole('button', { name: 'Login' }).click();
```

---

# ⭐ 7. What is `getByText()`?

### ✅ English
> `getByText()` locates an element using its visible text.

### ✅ Telugu
> **Visible text ఆధారంగా element ని locate చేస్తుంది.**

**Example**

```typescript
await page.getByText('Login').click();
```

---

# ⭐ 8. What is `getByLabel()`?

### ✅ English
> `getByLabel()` locates form fields using their associated label.

### ✅ Telugu
> **Label ఆధారంగా input fields ని locate చేస్తుంది.**

**Example**

```typescript
await page.getByLabel('Email').fill('test@gmail.com');
```

---

# ⭐ 9. What is `locator()`?

### ✅ English
> `locator()` is a flexible method used to locate elements using CSS or XPath selectors.

### ✅ Telugu
> **CSS లేదా XPath ద్వారా element ని locate చేయడానికి `locator()` ఉపయోగిస్తాము.**

**Example**

```typescript
await page.locator('#username').fill('admin');
```

---

# ⭐ 10. What are Assertions?

### ✅ English
> Assertions verify whether the actual result matches the expected result.

### ✅ Telugu
> **Expected Result మరియు Actual Result ఒకేలా ఉన్నాయా లేదా అని verify చేయడానికి Assertions ఉపయోగిస్తాము.**

---

# ⭐ 11. What is Browser Context?

### ✅ English
> Browser Context is an isolated browser session with its own cookies and storage.

### ✅ Telugu
> **Browser Context అనేది తన సొంత Cookies మరియు Storage ఉన్న ఒక isolated browser session.**

---

# ⭐ 12. How do you handle Multiple Tabs?

### ✅ English
> I use `context.waitForEvent('page')` to capture and switch to the new tab.

### ✅ Telugu
> **`context.waitForEvent('page')` ఉపయోగించి కొత్త Tab కి switch అవుతాను.**

---

# ⭐ 13. What are Frames & iFrames?

### ✅ English
> An iFrame is a web page embedded inside another web page. I use `frameLocator()` to handle it.

### ✅ Telugu
> **iFrame అంటే ఒక Web Page లో embed అయిన మరో Web Page. దాన్ని handle చేయడానికి `frameLocator()` ఉపయోగిస్తాను.**

**Example**

```typescript
await page.frameLocator('#frame').getByRole('button').click();
```

---

# ⭐ 14. How do you handle File Upload?

### ✅ English
> I use `setInputFiles()` to upload files.

### ✅ Telugu
> **File Upload కోసం `setInputFiles()` ఉపయోగిస్తాను.**

**Example**

```typescript
await page.locator('input[type="file"]').setInputFiles('resume.pdf');
```

---

# ⭐ 15. How do you handle File Download?

### ✅ English
> I use `page.waitForEvent('download')` and `download.saveAs()` to download files.

### ✅ Telugu
> **File Download కోసం `page.waitForEvent('download')` మరియు `download.saveAs()` ఉపయోగిస్తాను.**

**Example**

```typescript
const downloadPromise = page.waitForEvent('download');
await page.getByText('Download').click();
const download = await downloadPromise;
await download.saveAs('downloads/report.pdf');
```

---

# 🎯 2-Minute Interview Cheat Sheet

| Question | Simple English | Simple Telugu |
|----------|----------------|---------------|
| What is Playwright? | Web automation framework. | **Web automation framework.** |
| Why Playwright? | Faster and more reliable than Selenium. | **Selenium కంటే fast మరియు reliable.** |
| Architecture | Uses WebSocket communication. | **WebSocket ద్వారా browser తో communicate చేస్తుంది.** |
| Auto Waiting | Waits automatically before actions. | **Action ముందు automatically wait చేస్తుంది.** |
| Locators | Find web elements. | **Elements ని locate చేస్తాయి.** |
| getByRole() | Finds elements by role. | **Role ఆధారంగా element ని locate చేస్తుంది.** |
| getByText() | Finds elements by visible text. | **Visible text ద్వారా locate చేస్తుంది.** |
| getByLabel() | Finds input fields by label. | **Label ద్వారా input field ని locate చేస్తుంది.** |
| locator() | Finds elements using CSS/XPath. | **CSS/XPath ద్వారా locate చేస్తుంది.** |
| Assertions | Verify expected results. | **Expected result ని verify చేస్తాయి.** |
| Browser Context | Isolated browser session. | **Isolated browser session.** |
| Multiple Tabs | Use `context.waitForEvent('page')`. | **`context.waitForEvent('page')` ఉపయోగిస్తాను.** |
| Frames & iFrames | Use `frameLocator()`. | **`frameLocator()` ఉపయోగిస్తాను.** |
| File Upload | Use `setInputFiles()`. | **`setInputFiles()` ఉపయోగిస్తాను.** |
| File Download | Use `waitForEvent('download')`. | **`waitForEvent('download')` ఉపయోగిస్తాను.** |

### 🎯 Final Interview Tip

If the interviewer asks, **"Why do you use Playwright?"**, you can answer:

**English:**
> "I use Playwright because it is fast, reliable, supports multiple browsers, has built-in auto waiting, powerful locators, and is easy to maintain."

**Telugu:**
> **"Playwright fast, reliable, multiple browsers support, auto waiting, powerful locators మరియు easy maintenance ఉండడం వల్ల నేను Playwright ఉపయోగిస్తాను."**

**All the best for your interview!** 🎉 You've covered the most frequently asked Playwright topics.![alt text](image.png)