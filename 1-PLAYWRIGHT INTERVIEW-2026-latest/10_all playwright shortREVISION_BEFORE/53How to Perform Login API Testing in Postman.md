# **How to Perform Login API Testing in Postman – Step by Step**

Let's understand how to test a Login API using Postman, just like an SDET technical interview.

We will test:

1. Valid username and password.
2. Invalid username and password.
3. Empty username and password.
4. Missing password.
5. Response status code.
6. Authentication token.
7. Response time.

## **1. Open Postman and create a request**

[REST API: POST request. A POST request allows us to send… | by Shreya S | Medium](https://images.openai.com/static-rsc-4/4OdMxC_W_y89Rh0xKmXTQ3lDw-K3HcTb8DHQeCJYBzqsgS00KzpLMvIThuTa3eouakS2f7W36vP1-y2dlzBfHCwflUqVNbQiLxKyQ2fnlFaQCUp9DtW1LExEFUuFfbVTyjsDovPY5L4aRHJM9n8b_1084PTLzpgD8dae9Ye5pk8?purpose=inline)

[medium.com](https://medium.com/%40shreyasandrapati/rest-api-representational-state-transfer-application-programming-interface-post-request-a2c21962b591?utm_source=chatgpt.com)

1. Open Postman.
2. Click **New → HTTP Request**.
3. Select method **POST**.
4. Enter your Login API URL.

Example URL (placeholder):

```
https://example.com/api/login
```

You must replace this with your actual application Login API endpoint.

## **2. Enter Request Body**

Click **Body → raw → JSON**.

[javascript - POST Function in Express JS - Stack Overflow](https://images.openai.com/static-rsc-4/1nY3Fxo19qmqFZXlMW5s_DB-XaLBZgqfhGyImNm8oSqOzgm1apTi-l10EN0hplTpvuKTKHUZ7oxLVHsLvu3-2MRZd8-6qdF42e3XZZv5GYpTMY1PfA8hzjV24nXlbOwsSzxrFGGR7kfdTIS6sGSE6KW0FnBpJCMc5PjLS2PAukE?purpose=inline)

[stackoverflow.com](https://stackoverflow.com/questions/51141159/post-function-in-express-js?utm_source=chatgpt.com)

Enter:

```
{
    "username": "satya",
    "password": "Test@123"
}
```

Telugu: Login API ki username and password request body lo pampistunnam.

## **3. Add Headers**

Click the Headers tab.

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| Accept       | application/json |

[How to Send JSON Data in Postman](https://images.openai.com/static-rsc-4/xGIlprO93dhY7zKF90dB3Cv-ywLqLSFW2RgEyma10JD6jkpIxFDso-C6dxgNhQTkGqdRM3Ynx3o8zYyiaStwd74gY_TOzmiYO1Bcvm4P9ptVntc3pGrZh-AXmKHoh1Zg7YoWdo77pSXfNfz888nuL7B0jjKQxtcLrWADx0sHfLI?purpose=inline)

[apidog.com](https://apidog.com/articles/postman-send-json/?utm_source=chatgpt.com)

## **4. Click Send and validate response**

[15 Days of Postman for Testers Challenge— Day 01: API Client | by Lakshmi Nandakumar | Women in Technology | Medium](https://images.openai.com/static-rsc-4/BI1AVlO_8crSLs040CGlbQVs4QjMuzjnTRg9MyXYJO1KyZ2TP87tfo5Phg3wD5LfONK2bqXl5bX7VKML3a450RHYTMsq34YR_dk49_wIZdpBNbawmUJEvvEa83ZczbnRZkfNCCptXKJ77Dk_eMCUufEQhvM1jGg7D7fyUm2RAx4?purpose=inline)

[medium.com](https://medium.com/womenintechnology/15-days-of-postman-for-testers-challenge-day-01-api-client-56ef98f1704f?utm_source=chatgpt.com)

Suppose the API returns:

```
{
    "message": "Login successful",
    "token": "abc123",
    "user": {
        "id": 101,
        "username": "satya"
    }
}
```

Validate:

| Validation    | Expected Result    |
| ------------- | ------------------ |
| Status code   | 200                |
| Message       | Login successful   |
| Token         | Should be present  |
| Username      | satya              |
| Response time | Within requirement |

## **5. Write Postman Test Scripts**

Go to **Scripts → Post-response**.

Paste this JavaScript code:

```

// 1. Validate status code
pm.test("Status code should be 200", function () {
    pm.response.to.have.status(200);
});

// 2. Validate success message
pm.test("Login should be successful", function () {
    const response = pm.response.json();

    pm.expect(response.message).to.eql("Login successful");
});

// 3. Validate token
pm.test("Token should be present", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.be.a("string");
    pm.expect(response.token).to.not.be.empty;
});

// 4. Validate username
pm.test("Username should be correct", function () {
    const response = pm.response.json();

    pm.expect(response.user.username).to.eql("satya");
});

// 5. Validate response time
pm.test("Response time should be below 2 seconds", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

```

Click Send again and check the **Test Results** section.

Expected

&#x20;All five tests should pass if the actual response matches our assumptions.

## **6. Negative Login API Testing**

Now test invalid credentials.

**Test Case 1 – Invalid Password**

```
{
    "username": "satya",
    "password": "wrong123"
}
```

Expected: Usually `401 Unauthorized` for invalid credentials.

**Test Case 2 – Empty Credentials**

```
{
    "username": "",
    "password": ""
}
```

Expected: Usually `400 Bad Request` or a documented validation error.

**Test Case 3 – Missing Password**

```
{
    "username": "satya"
}
```

Expected: Validation error indicating that password is required.

The exact status codes and messages depend on your API specification.

## **7. Complete Login API Test Cases**

| TC ID | Test Scenario               | Expected Result         |
| ----- | --------------------------- | ----------------------- |
| TC01  | Valid username and password | Login successful        |
| TC02  | Invalid username            | Error response          |
| TC03  | Invalid password            | Error response          |
| TC04  | Empty username              | Validation error        |
| TC05  | Empty password              | Validation error        |
| TC06  | Both fields empty           | Validation error        |
| TC07  | Missing username            | Validation error        |
| TC08  | Missing password            | Validation error        |
| TC09  | Invalid request format      | Error response          |
| TC10  | Verify response token       | Token should be present |

## **8. Interview Question: Explain how you tested Login API using Postman.**

**Best interview answer:**

"I tested the Login API using Postman with both positive and negative scenarios.

First, I selected the POST method and entered the Login API endpoint. Then I added the required headers and passed username and password in the JSON request body.

After sending the request, I validated the response status code, success message, authentication token, response body and response time.

I also tested negative scenarios like invalid credentials, empty fields and missing mandatory parameters.

I used Postman test scripts to automate response validations."

## **9. Let's practice – Your turn**

**Login API practice request**

Practice simulator – not connected to a real API.

**Select test scenario**

Valid credentials

Invalid password

Empty credentials

Missing password

**HTTP Method**

**POST**

**Request Body**

{\<br> "username": "satya",\<br> "password": "Test\@123"\<br>}

Check my API request

**One important question:** Are you testing your Yotta KMS/LMS project's actual Login API or practising with a sample Login API? If you share the API endpoint and a sample response (hide passwords and real tokens), I can prepare exact Postman test scripts for your project.
