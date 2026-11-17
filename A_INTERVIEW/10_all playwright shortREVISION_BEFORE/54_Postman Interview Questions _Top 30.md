Sure! Let's prepare **Postman API Testing Interview Questions and Answers** for QA Automation / SDET roles, with simple English, Telugu explanations, and real-time examples.

# **Postman Interview Questions – Top 30**

## **Basic Postman Questions**

**1. What is Postman?**

**Answer:** Postman is an API testing tool used to send HTTP requests and validate API responses.

తెలుగు: API ki request pampinchi, response correct ga undha ledha ani test cheyadaniki Postman use chestham.

**2. What are the different HTTP methods in Postman?**

- GET – Retrieve data.
- POST – Create new data.
- PUT – Update complete data.
- PATCH – Update partial data.
- DELETE – Delete data.

**3. What is the difference between PUT and PATCH?**

- PUT updates the complete resource.
- PATCH updates only specific fields.

**4. What is a Collection in Postman?**

A collection is a group of API requests organized together.

Example: Login, Get User, Create User, Update User, Delete User.

**5. What is an Environment in Postman?**

An environment stores variables for different testing environments.

Example:

```
DEV  → https://dev.example.com
QA   → https://qa.example.com
UAT  → https://uat.example.com
```

**6. What are variables in Postman?**

Variables store reusable values such as base URLs, tokens, and user IDs.

Example:

```
{{baseUrl}}/api/login
```

**7. What are the different types of variables in Postman?**

- Global variables
- Collection variables
- Environment variables
- Data variables
- Local variables

**8. What is the difference between Params and Headers?**

- Params: Used to pass query parameters.
- Headers: Used to send additional request information.

Example:

```
GET /users?id=101
```

Here, `id=101` is a query parameter.

**9. What is the difference between Authorization and Authentication?**

- Authentication verifies who the user is.
- Authorization checks what the user is allowed to access.

**10. What is Bearer Token?**

A Bearer Token is an authentication token sent in the Authorization header to access protected APIs.

```
Authorization: Bearer abc123
```

## **Intermediate Postman Questions**

**11. How do you test a Login API in Postman?**

**Answer:**

1. Select POST method.
2. Enter the login API URL.
3. Add Content-Type header.
4. Select Body → raw → JSON.
5. Enter username and password.
6. Click Send.
7. Validate status code, response message and token.

**12. What is the difference between 200, 201, 400, 401, 403 and 404?**

| Status | Meaning               |
| ------ | --------------------- |
| 200    | OK                    |
| 201    | Created               |
| 400    | Bad Request           |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Not Found             |
| 500    | Internal Server Error |

**13. What is the Tests tab in Postman?**

It is used to write JavaScript assertions to validate API responses.

Example:

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

**14. How do you validate the response body in Postman?**

```
pm.test("Validate username", function () {
    const response = pm.response.json();

    pm.expect(response.username).to.eql("satya");
});
```

**15. How do you validate response time?**

```
pm.test("Response time is below 2 seconds", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
```

**16. How do you pass a token from Login API to another API?**

First, extract the token from the Login API response and save it as an environment variable.

```
const response = pm.response.json();

pm.environment.set("token", response.token);
```

Then use it in the next API:

```
Authorization: Bearer {{token}}
```

**17. What is API chaining in Postman?**

API chaining means using the response of one API as input for another API.

Example:

Login API → Get Token → Create Order → Get Order Details.

**18. What is Pre-request Script?**

Pre-request Script executes JavaScript before sending the API request.

Example:

```
pm.environment.set("username", "satya");
```

**19. What is the difference between Pre-request Script and Post-response Script?**

| Pre-request Script    | Post-response Script   |
| --------------------- | ---------------------- |
| Runs before request   | Runs after response    |
| Sets test data        | Validates response     |
| Generates tokens/data | Checks status and body |

**20. What is Collection Runner?**

Collection Runner executes multiple API requests in a collection automatically.

It is useful for executing multiple API test cases together.

## **Advanced Postman Questions**

**21. What is Newman?**

Newman is a command-line tool used to execute Postman collections.

Example:

```
newman run LoginCollection.json
```

**22. How do you execute Postman collections in Jenkins?**

I use Newman to execute the exported Postman collection through a Jenkins pipeline. I configure the environment variables and generate test reports.

**23. What is Data-Driven Testing in Postman?**

Data-driven testing means executing the same API test with multiple sets of test data.

Example:

```
Username    Password
satya       Test123
user1       Pass123
user2       Pass456
```

**24. How do you test negative scenarios in Postman?**

I test:

- Invalid credentials.
- Empty request body.
- Missing mandatory fields.
- Invalid token.
- Incorrect HTTP method.
- Invalid endpoint.
- Incorrect data types.

**25. How do you validate JSON response structure?**

```
pm.test("Validate response structure", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("id");
    pm.expect(response).to.have.property("name");
    pm.expect(response).to.have.property("email");
});
```

**26. What is the difference between SOAP and REST API?**

| REST                  | SOAP               |
| --------------------- | ------------------ |
| Architectural style   | Protocol           |
| Commonly uses JSON    | Commonly uses XML  |
| Lightweight           | More structured    |
| Supports HTTP methods | Uses SOAP messages |

**27. What is a 401 vs 403 error?**

- 401: User is not properly authenticated.
- 403: User is authenticated but does not have permission.

**28. How do you test API security?**

I validate authentication, authorization, token expiry, invalid tokens, role-based access, and whether sensitive information is exposed in responses.

**29. How do you validate API response headers?**

```
pm.test("Content-Type should be JSON", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
      .to.include("application/json");
});
```

**30. What is the difference between Postman and Playwright API testing?**

| Postman                         | Playwright                                   |
| ------------------------------- | -------------------------------------------- |
| API testing tool                | Browser automation and API testing framework |
| JavaScript scripts              | JavaScript/TypeScript                        |
| Manual and collection execution | Automated tests                              |
| Newman for CI execution         | Playwright test runner for CI                |

## **Important practical coding questions**

These are especially useful for SDET interviews.

1. Write a Postman script to validate status code 200.
2. Extract token from Login API response.
3. Pass token to another API.
4. Validate response body.
5. Validate response time.
6. Validate response headers.
7. Write negative login test cases.
8. Execute multiple requests using Collection Runner.
9. Perform data-driven testing.
10. Execute Postman collection through Jenkins using Newman.

## **Practice your interview knowledge**

**Postman mini interview test**

0/5 answered

**1. Which HTTP method is used to create a new resource?**

GET

POST

DELETE

PATCH

**2. Where do you write JavaScript assertions after receiving a response?**

Params

Headers

Post-response Script

Authorization

**3. Which status code indicates successful resource creation?**

200

201

401

404

**4. How do you save a login token in an environment variable?**

pm.environment.set()

pm.response.save()

pm.token.set()

pm.request.set()

**5. Which tool runs Postman collections from the command line?**

Jest

Newman

Jenkins

JMeter

Submit answers

**My suggestion:** Prepare Postman basics, login API testing, token handling, API chaining, negative testing, and Newman/Jenkins integration first. These are important practical topics for QA Automation and SDET interviews.
