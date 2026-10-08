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


2.
Playwright fixtures provide reusable setup and dependencies to tests. Playwright has built-in fixtures like page, context, and request, and we can create custom fixtures using base.extend(). Fixtures are useful for common setup such as authentication, page objects, and API clients. They also support different scopes like test and worker.



1. What is a Fixture?
English

A fixture is a reusable setup provided to a Playwright test. It creates and manages the resources required by the test.

Telugu

Fixture అంటే test కి కావాల్సిన setup/resources ని automatically create చేసి provide చేసే Playwright feature.

For UI testing, common built-in fixtures are:

page
context
browser
browserName
request