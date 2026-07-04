# ✅ Q1. What is Playwright & how is it different from Selenium?

“Playwright uses a persistent WebSocket connection for continuous communication with the browser, whereas Selenium uses HTTP requests for each command.  
This allows Playwright to support real-time events, auto-waiting, and network interception, making it faster and more stable.”


“Playwright WebSocket ద్వారా continuous connection maintain చేస్తుంది. Selenium ప్రతి stepకి HTTP request పంపుతుంది. అందువల్ల Playwright fast మరియు stable.”


# ✅ Q2. What is auto-waiting?

### ✅ English Answer

“Playwright auto-waiting ensures elements are visible, enabled, and stable before performing actions, reducing flaky tests.”

***

### ✅ Telugu Answer

“Element ready అయ్యే వరకు Playwright automatically wait చేస్తుంది.”

Element ready అయ్యే వరకు wait


# ✅ Q3. What are Fixtures?
### ✅ English Answer

“Fixtures provide dependency injection and automatically handle setup and teardown, making tests reusable.”

***

### ✅ Telugu Answer

“Fixtures ద్వారా setup automaticగా handle అవుతుంది.”


# ✅ Q4. Network Interception?

### 🟢 CONCEPT

API control

***

### 🎯 STRATEGY

👉 Say:

* mock API
* test error cases

***

### ✅ English Answer

“Using page.route(), we can intercept API calls and mock or modify responses.”
