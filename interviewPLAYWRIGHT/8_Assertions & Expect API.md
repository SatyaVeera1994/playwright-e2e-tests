Perfect ✅ — here is your **FINAL INTERVIEW MEMORY SHEET (Assertions & Expect API)**  
👉 **Question + Telugu Concept + English Strategy + English Answer + Telugu Answer + Real-time Example + Code**  
👉 Designed for **quick revision + confident speaking 💯🔥**

***

# ✅ Q1. What are web-first assertions in Playwright?

### 🟢 CONCEPT (Telugu)

* Assertions retry అవుతాయి
* element ready అయ్యే వరకు wait చేస్తాయి
* stable tests ✅

***

### 🎯 INTERVIEW STRATEGY (English)

👉 Say:

* auto-retry ✅
* better than isVisible  
  👉 mention:
* soft assertions

***

### ✅ English Answer

“Web-first assertions in Playwright automatically retry until the expected condition is met or the timeout is reached.  
They make tests stable by handling dynamic DOM changes.”

***

### ✅ Telugu Answer

“Playwright web-first assertions automatically retry అవుతాయి. Element ready అయ్యే వరకు wait చేసి stable results ఇస్తాయి.”

***

### 🔥 Real-time Example

“Dynamic loading issue వల్ల failure వచ్చింది. toBeVisible() వాడి fix చేశాను.”

***

### 💻 Code

```ts
await expect(page.locator('#status')).toHaveText('Success');
await expect(page.locator('#items')).toHaveCount(3);
```

***

# ✅ Q2. Screenshot & Snapshot testing?

### 🟢 CONCEPT (Telugu)

Visual testing  
Baseline compare చేస్తుంది

***

### 🎯 INTERVIEW STRATEGY (English)

👉 Say:

* visual regression ✅
* mask dynamic elements

***

### ✅ English Answer

“Playwright supports visual testing using toHaveScreenshot() which compares UI with a baseline image to detect visual changes.”

***

### ✅ Telugu Answer

“toHaveScreenshot() ద్వారా UI screenshot compare చేసి design changes detect చేస్తాము.”

***

### 🔥 Real-time Example

“Price change వల్ల screenshot fail అవుతుండగా mask option use చేసి fix చేశాను.”

***

### 💻 Code

```ts
await expect(page).toHaveScreenshot({
  fullPage: true
});
```

***

# ✅ Q3. What is expect.poll()?

### 🟢 CONCEPT (Telugu)

Repeated check until condition

***

### 🎯 INTERVIEW STRATEGY (English)

👉 Say:

* async systems ✅
* better than wait

***

### ✅ English Answer

“expect.poll() repeatedly checks a condition until it becomes true, which is useful for eventually consistent systems.”

***

### ✅ Telugu Answer

“expect.poll() repeatedly condition check చేస్తుంది, async systemsకి useful.”

***

### 🔥 Real-time Example

“Order status update delay ఉన్నప్పుడు poll వాడి confirm చేశాను.”

***

### 💻 Code

```ts
await expect.poll(async () => {
  return 'status';
}).toBe('confirmed');
```

***

# ✅ Q4. How to assert API responses?

### 🟢 CONCEPT (Telugu)

Response + body validate

***

### 🎯 INTERVIEW STRATEGY (English)

👉 Say:

* toBeOK ✅
* schema validation

***

### ✅ English Answer

“We can assert API responses using status checks, headers, and body validations using Playwright expect.”

***

### ✅ Telugu Answer

“API responseలో status, headers, body validate చేస్తాము.”

***

### 🔥 Real-time Example

“Email format validate చేయడానికి regex ఉపయోగించాను.”

***

### 💻 Code

```ts
expect(response.status()).toBe(200);
```

***

# ✅ Q5. Custom matchers?

### 🟢 CONCEPT (Telugu)

Reusable assertions

***

### 🎯 INTERVIEW STRATEGY (English)

👉 Say:

* reusable logic ✅
* cleaner tests

***

### ✅ English Answer

“Custom matchers extend Playwright’s expect API to create reusable assertions, improving readability and maintainability.”

***

### ✅ Telugu Answer

“Custom matchers ద్వారా reusable assertions create చేసి code cleanగా ఉంచుతాము.”

***

### 🔥 Real-time Example

“toBeLoggedIn matcher create చేసి అన్ని testsలో reuse చేశాను.”

***

### 💻 Code

```ts
await expect(page).toBeLoggedIn();
```

***

# 🌟 ✅ FINAL POWER LINE

### 🎯 English

“I use Playwright assertions effectively to build stable, readable, and reliable automation tests.”

***

### 🎯 Telugu

“Playwright assertions ఉపయోగించి stable మరియు readable automation tests build చేస్తున్నాను.”

***

# ✅ 🔥 FINAL MEMORY TRICK

👉 Remember:

💡 **“use expect(), not isVisible()”**

***

✅ Now you are **FULLY READY for Assertions Interview Round 💯🔥**

***

👉 FINAL STEP (IMPORTANT) 🚀  
✅ Full Project Explanation (Most asked question 🔥)  
✅ HR Questions  
✅ Mock Interview

Just tell me 👍
