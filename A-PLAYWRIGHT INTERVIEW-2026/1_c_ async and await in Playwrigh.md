https://chatgpt.com/c/6add5f85-f6d4-83e8-8a1f-a40ed90e93a2

## Question: Why do we use async and await in Playwright?

## “We use async and await in Playwright to handle asynchronous operations. The async keyword allows us to write asynchronous test functions, and await waits for an operation to complete before executing the next statement.”

తెలుగు అర్థం: Playwright‌లో asynchronous operations‌ను handle చేయడానికి async మరియు await ఉపయోగిస్తాము. async test function ముందు రాస్తాము. await ఒక operation పూర్తయ్యాక తదుపరి statement execute అయ్యేలా చేస్తుంది.

గుర్తుంచుకోండి: async function‌ను asynchronous style‌లో రాయడానికి; await operation పూర్తయ్యే వరకు వేచి ఉండడానికి.
async ({ page }) => — test function‌లో asynchronous operations ఉపయోగించడానికి.
await page.goto() — page navigation కోసం వేచి ఉండటానికి.
await fill() — text enter చేసే operation పూర్తయ్యే వరకు వేచి ఉండటానికి.
await click() — click operation పూర్తయ్యే వరకు వేచి ఉండటానికి
