## 8. How do you handle API testing in Playwright?

Playwright supports API testing using the `APIRequestContext` object.

We use Playwright API testing to send HTTP requests directly to the backend without interacting with the UI.

We can test:

- GET – Retrieve data.
- POST – Create data.
- PUT – Update data.
- PATCH – Partially update data.
- DELETE – Delete data.

We can also validate status codes, response body, headers, and response time.

### 2. Telugu Explanation

Playwright lo API testing cheyadaniki `APIRequestContext` use chestham.

Simple ga cheppalante:

UI open cheyakunda direct ga backend ki request send chesi response correct ga vasthundha ledha ani test chestham.

Example: Mana Yotta DRM application lo License API undhi anukundham.

1. API endpoint ki POST request send chestham.
2. Request body lo required data pass chestham.
3. Backend response receive chestham.
4. Status code 200 vasthundha verify chestham.
5. Response body lo expected data undha check chestham.

### 3. Playwright API Testing – TypeScript Code

Example: GET Request

```
import { test, expect } from '@playwright/test';

test('GET API testing', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // Verify status code
  expect(response.status()).toBe(200);

  // Get response body
  const responseBody = await response.json();

  // Verify response data
  expect(responseBody.id).toBe(1);

  console.log(responseBody);

});
```

Explanation:

- `request.get()` → Send GET request.
- `response.status()` → Get HTTP status code.
- `response.json()` → Read response body.
- `expect()` → Validate expected results.

### 4. POST Request – Create Data

POST request use chesi new data create chestham.

```
test('POST API testing', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright Testing',
        body: 'API Automation',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.title).toBe('Playwright Testing');

  console.log(responseBody);

});
```

Telugu explanation:

- `post()` → Backend ki data send chestham.
- `data` → Request body.
- `201` → Resource successfully created.
- `response.json()` → Backend response read chestham.

### 5. PUT Request – Update Data

```
test('PUT API testing', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated API Data',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.title).toBe('Updated Title');

});
```

### 6. DELETE Request – Delete Data

```
test('DELETE API testing', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

});
```

These examples use JSONPlaceholder, a sample testing API. Actual application APIs may return different status codes.

### 7. How do you validate API responses?

We validate five important things:

| Validation       | Example                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| Status code      | `expect(response.status()).toBe(200)`                                                             |
| Response body    | `expect(body.id).toBe(1)`                                                                         |
| Response headers | `response.headers()`                                                                              |
| Response time    | `response.request().timing()` is not the API response timing API; use an elapsed-time measurement |
| Error handling   | Validate 400, 401, 403, 404, 500 responses as applicable                                          |

Example for response time:

```
const startTime = Date.now();

const response = await request.get('/api/users');

const endTime = Date.now();

const responseTime = endTime - startTime;

expect(responseTime).toBeLessThan(3000);
```

Telugu: API response 3 seconds lopu vasthundha ledha ani check chestham.

### 8. Real-time Project Example – Yotta DRM

Mana Yotta DRM project lo License API testing chesthunappudu:

1. License API endpoint ki POST request send chestham.
2. Required request body and headers pass chestham.
3. Valid certificate use chestham.
4. Response status code verify chestham.
5. License response correct ga vasthundha validate chestham.
6. Negative scenarios lo empty request body, invalid certificate, missing headers test chestham.

### 9. Interview-ready Answer – Simple English

"I handle API testing in Playwright using the APIRequestContext object. I use GET, POST, PUT, PATCH, and DELETE methods to send API requests. I validate status codes, response bodies, headers, and response time using Playwright assertions. I also test positive and negative scenarios, including invalid data and unauthorized requests."

### 10. Important Interview Cheat Sheet

| HTTP Method | Purpose               | Expected status example |
| ----------- | --------------------- | ----------------------- |
| GET         | Retrieve data         | 200                     |
| POST        | Create data           | 201                     |
| PUT         | Update complete data  | 200                     |
| PATCH       | Partially update data | 200                     |
| DELETE      | Delete data           | 200 or 204              |

### 11. Important Interview Follow-up Questions

1. What is APIRequestContext?
2. What is the difference between API testing and UI testing?
3. How do you pass Bearer Token authentication?
4. How do you validate negative API scenarios?
5. How do you handle API response headers?
6. How do you integrate API testing with UI testing?
7. How do you perform API chaining in Playwright?

Remember: API Testing = Send Request → Receive Response → Validate Response.

# Playwright API Testing – 7 Important Interview Questions

Let's learn each question in simple English + Telugu explanation + TypeScript code + real-time project example.

## 1. What is APIRequestContext?

Simple English:

`APIRequestContext` is a Playwright class used to send HTTP requests directly to the backend without opening a browser UI.

We can use it to perform GET, POST, PUT, PATCH, and DELETE operations.

Telugu explanation:

`APIRequestContext` ante browser UI open cheyakunda direct ga backend ki API requests send cheyadaniki use chestham.

Example: Yotta DRM License API ki direct ga POST request send chesi response correct ga undha ledha check chestham.

TypeScript code:

```
import { test, expect } from '@playwright/test';

test('API Request Context', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

});
```

Interview answer:

"APIRequestContext is used in Playwright to send HTTP requests directly to the backend and validate API responses without interacting with the UI."

## 2. What is the difference between API testing and UI testing?

Simple English:

API testing validates backend functionality, whereas UI testing validates the application's user interface and user interactions.

Telugu explanation:

- API Testing → Backend lo data correct ga process avuthundha check chestham.
- UI Testing → Application screen lo buttons, text fields, pages correct ga work avuthunnaya check chestham.

Example: Login functionality

UI Testing

[Mastering Authorization and Authentication With Spring Security | HackerNoon](https://images.openai.com/static-rsc-4/0jlozzVw7ZwsLvZGft9TI1ZwfQg440545obnaMthos7xywiOSYP-3V7AOqQBQMb3KQh5_byamnT34utrVonuEWoKIjG2ajPjuHq5DGCu3Svfe2lT2f_NVRDXdCQJfrhqJyLbnWuaIw2g09i9k-bPAdViHR1qvsRFjP7fpah28Dc?purpose=inline)

[hackernoon.com](https://hackernoon.com/mastering-authorization-and-authentication-with-spring-security?utm_source=chatgpt.com)

User enters username and password → Click Login → Dashboard opens.

API Testing

POST /api/login

```
{
  "username": "testuser",
  "password": "password123"
}
```

Expected response: 200 OK

Direct ga backend ki request send chesi response validate chestham.

| API Testing                | UI Testing                  |
| -------------------------- | --------------------------- |
| Backend validation         | Frontend validation         |
| HTTP requests              | Browser interactions        |
| Faster execution generally | Usually slower              |
| API response validation    | Page and element validation |
| Playwright API             | Playwright Page             |

Interview answer:

"API testing validates backend functionality by sending HTTP requests and checking responses. UI testing validates the application's visual elements and user interactions through the browser. Both are important for complete application testing."

## 3. How do you pass Bearer Token authentication?

Simple English:

We pass the Bearer Token in the `Authorization` header when sending an API request.

Format:

```
Authorization: Bearer <token>
```

Telugu explanation:

Konni APIs access cheyadaniki authentication required.

First login API nundi token generate avuthundhi. Aa token ni next API request lo Authorization header lo pass chestham.

TypeScript code:

```
import { test, expect } from '@playwright/test';

test('Bearer Token Authentication', async ({ request }) => {

  const token = 'your_access_token';

  const response = await request.get(
    'https://api.example.com/users',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

});
```

Interview answer:

"I pass the Bearer Token through the Authorization header. I use the format `Bearer token` and send it along with the API request. Then I validate the response status and response body."

In real projects, tokens should be stored securely in environment variables, not hardcoded.

## 4. How do you validate negative API scenarios?

Simple English:

Negative API testing means sending invalid or unexpected data to verify whether the application handles errors correctly.

Telugu explanation:

Manam API ki wrong data send chesi backend correct error response isthundha ledha check chestham.

Example: Login API lo:

- Invalid username
- Invalid password
- Missing token
- Empty request body
- Invalid request format

TypeScript code:

```
import { test, expect } from '@playwright/test';

test('Negative API testing', async ({ request }) => {

  const response = await request.post(
    'https://api.example.com/login',
    {
      data: {
        username: 'wronguser',
        password: 'wrongpassword'
      }
    }
  );

  expect(response.status()).toBe(401);

  const body = await response.json();

  expect(body.message).toContain('Invalid');

});
```

Important negative test scenarios:

| Scenario                 | Expected status example |
| ------------------------ | ----------------------- |
| Invalid credentials      | 401                     |
| Missing authentication   | 401                     |
| Insufficient permissions | 403                     |
| Resource not found       | 404                     |
| Invalid request data     | 400                     |
| Server error             | 500                     |

Interview answer:

"I validate negative API scenarios by sending invalid inputs, missing mandatory fields, invalid tokens, and incorrect data formats. I verify the expected error status codes and error messages to ensure proper error handling."

## 5. How do you handle API response headers?

Simple English:

In Playwright, we use `response.headers()` to retrieve response headers and validate them.

Headers provide additional information about the API response, such as content type, caching, and security.

Telugu explanation:

API response vachinappudu status code tho paatu headers kuda vasthayi.

Headers lo:

- Content-Type
- Cache-Control
- Content-Length
- Access-Control-Allow-Origin

lanti information untundhi.

TypeScript code:

```
test('Validate API response headers', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const headers = response.headers();

  console.log(headers);

  expect(headers['content-type']).toContain('application/json');

});
```

Specific header validation:

```
const headers = response.headers();

expect(headers['content-type']).toContain('application/json');

expect(headers['cache-control']).toBeDefined();
```

Telugu explanation:

`response.headers()` use chesi anni response headers tiskuntam.

`headers['content-type']` use chesi specific header value verify chestham.

Interview answer:

"I handle API response headers using `response.headers()`. I validate headers such as Content-Type, Cache-Control, and security-related headers to ensure the API response meets the expected requirements."

## 6. How do you integrate API testing with UI testing?

Simple English:

We can use API requests to prepare test data or perform login, and then use the UI to validate the application's behavior.

This reduces unnecessary UI steps and makes test execution faster.

Telugu explanation:

API testing and UI testing kalipi use cheyochu.

Example: Application lo user create cheyyali anukundham.

1. First API through user create chestham.
2. Browser open chestham.
3. Login chestham.
4. UI lo created user details display avuthunnaya verify chestham.

TypeScript code:

```
import { test, expect } from '@playwright/test';

test('API and UI integration', async ({ request, page }) => {

  // Step 1: Create user through API
  const apiResponse = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Satya',
        email: 'satya@test.com'
      }
    }
  );

  expect(apiResponse.status()).toBe(201);

  const user = await apiResponse.json();

  // Step 2: Open application
  await page.goto('https://example.com');

  // Step 3: Verify user details in UI
  console.log(user.name);

});
```

This is an integration-flow example. A real application must expose a UI that displays the created record, and the API-created data must persist and be available to that UI.

Interview answer:

"I integrate API and UI testing by using API requests to create test data or perform setup operations, and then I validate the same functionality through the UI. This reduces UI execution time and improves test efficiency."

## 7. How do you perform API chaining in Playwright?

Simple English:

API chaining means using the response of one API request as input for another API request.

For example:

1. Create a user using POST.
2. Extract the user ID from the response.
3. Use that ID in a GET request.
4. Validate the user details.

Telugu explanation:

Oka API response lo vachina data ni next API request lo use cheyadanni API chaining antaru.

Example:

- POST API → User create chestham.
- POST response → User ID vasthundhi.
- GET API → Aa user ID use chesi details retrieve chestham.
- Response → User details verify chestham.

TypeScript code:

```
import { test, expect } from '@playwright/test';

test('API Chaining', async ({ request }) => {

  // Step 1: Create user
  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Satya',
        username: 'satya123'
      }
    }
  );

  expect(createResponse.status()).toBe(201);

  // Step 2: Extract user ID
  const createdUser = await createResponse.json();

  const userId = createdUser.id;

  console.log('User ID:', userId);

  // Step 3: Use ID in GET request
  const getResponse = await request.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  expect(getResponse.status()).toBe(200);

  // Step 4: Validate response
  const userDetails = await getResponse.json();

  expect(userDetails.name).toBe('Satya');

});
```

Interview answer:

"API chaining means passing the response data from one API request to another. For example, I create a user using POST, extract the user ID from the response, and use that ID in a GET request to retrieve and validate user details."

Note: JSONPlaceholder is a mock API. Its POST responses are simulated and created records may not persist for subsequent GET requests. Use a real test backend for an actual chaining test.

## Final Revision – All 7 Questions at a Glance

| No. | Interview question         | Remember this               |
| --- | -------------------------- | --------------------------- |
| 1   | What is APIRequestContext? | Send API requests           |
| 2   | API vs UI testing?         | Backend vs Frontend         |
| 3   | Bearer Token?              | Authorization header        |
| 4   | Negative API testing?      | Invalid inputs and errors   |
| 5   | Response headers?          | `response.headers()`        |
| 6   | API + UI integration?      | API setup + UI validation   |
| 7   | API chaining?              | One API response → Next API |

## Important TypeScript methods to remember

```
request.get()
request.post()
request.put()
request.patch()
request.delete()

response.status()
response.json()
response.headers()
response.ok()
```

## Practice questions

Try answering these without looking at the explanations:

Your API testing mini quiz

5/5 answered

1\. Which object is used for API testing in Playwright?

Page

APIRequestContext

Browser

Correct

APIRequestContext sends HTTP requests directly to the backend.

2\. Where do you pass a Bearer Token?

Authorization header

Response body

URL title

Correct

The Authorization header carries the Bearer token.

3\. Which method reads the response body as JSON?

response.status()

response.json()

response.headers()

Correct

response.json() parses the response body.

4\. What is API chaining?

Opening multiple tabs

Passing one API response value into another API request

Refreshing the browser

Correct

API chaining uses data from one request in a subsequent request.

5\. Which status code commonly represents unauthorized access?

200

401

404

Correct

401 indicates missing or invalid authentication credentials.

Check my answers

# 5 / 5 correct

Retry quiz

My recommendation: Practice these seven questions with your Yotta DRM License API scenarios, especially Bearer Token authentication, negative testing, headers, and API chaining. Those examples will help you explain your actual project experience in SDET interviews.&#x20;
