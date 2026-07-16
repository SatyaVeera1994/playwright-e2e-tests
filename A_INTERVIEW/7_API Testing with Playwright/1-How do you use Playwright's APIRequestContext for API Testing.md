# Q1. How do you use Playwright's APIRequestContext for API Testing?

## 1. Telugu Concept

Playwright లో API Testing కోసం `APIRequestContext` ఉపయోగిస్తాము.

`request` fixture ద్వారా GET, POST, PUT, DELETE API Calls చేయవచ్చు.

దీనివల్ల Postman, Axios, Supertest వంటి అదనపు Tools అవసరం ఉండవు.

Playwright లోనే:

✅ API Testing

✅ UI Testing

✅ Assertions

✅ Reporting

అన్నీ చేయవచ్చు.

ఉదాహరణకు:

* GET Users API
* Create User API
* Update User API
* Delete User API

వంటి APIs ని Validate చేయవచ్చు.

---

## 2. Easy to Remember

✅ Built-in HTTP Client

✅ No Axios Required

✅ No Supertest Required

✅ Supports GET, POST, PUT, DELETE

✅ Same Playwright Framework

✅ Same Expect Assertions

### One-Line Summary

**APIRequestContext allows us to perform API testing directly inside Playwright without external libraries.**

---

## 3. Telugu Interview Answer

Playwright లో API Testing కోసం APIRequestContext ఉపయోగిస్తాను.

Playwright request fixture ద్వారా GET, POST, PUT, DELETE Requests పంపవచ్చు.

Response Status, Headers మరియు Response Body ని Validate చేయవచ్చు.

దీనివల్ల UI మరియు API Testing రెండింటినీ ఒకే Framework లో Maintain చేయవచ్చు.

నేను API Tests ని Separate Folder లో ఉంచి Contract Validation చేస్తాను. అలాగే UI Tests ముందు అవసరమైన Test Data Create చేయడానికి కూడా APIs ఉపయోగిస్తాను.

---

## 4. Simple English Answer

I use Playwright's built-in request fixture for API testing.

It allows me to send GET, POST, PUT, and DELETE requests without using external libraries like Axios.

I validate status codes, response bodies, and headers using Playwright assertions.

This helps maintain both UI and API tests in the same framework.

---

## 5. English Interview Answer

Playwright provides a built-in APIRequestContext through the request fixture, which acts as a complete HTTP client.

Using this fixture, I can perform GET, POST, PUT, and DELETE operations and validate API responses using the same expect API used in UI automation.

One major advantage is that UI and API tests can be maintained in a single framework with unified reporting.

I typically use API tests for contract validation and use APIs to create test data before executing UI automation tests.

This reduces execution time and improves test reliability.

---

## 6. Real-Time Project Example

In my Playwright project, I use APIs to create test data before executing UI tests.

For example:

* Create User using API
* Login User using API
* Create Order using API
* Verify in UI

Instead of creating data manually through the UI every time, APIs help reduce execution time significantly.

This makes automation faster and more stable.

---

## 7. Code Example (TypeScript)

### GET API Example

```typescript
import { test, expect } from '@playwright/test';

test('Get Users', async ({ request }) => {

  const response = await request.get('/api/users', {
    params: {
      page: 1,
      limit: 10
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.page).toBe(1);
  expect(body.data.length).toBe(10);

});
```

### POST API Example

```typescript
import { test, expect } from '@playwright/test';

test('Create User', async ({ request }) => {

  const response = await request.post('/api/users', {
    data: {
      name: 'Satya',
      email: 'satya@test.com',
      role: 'user'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.id).toBeDefined();
  expect(body.email).toBe('satya@test.com');

});
```

### DELETE API Example

```typescript
import { test, expect } from '@playwright/test';

test('Delete User', async ({ request }) => {

  const response = await request.delete('/api/users/1');

  expect(response.status()).toBe(200);

});
```

---

## Interview Short Answer

> "I use Playwright's APIRequestContext through the request fixture for API testing. It allows me to perform GET, POST, PUT, and DELETE operations without external libraries. I validate response status codes, headers, and payloads using Playwright assertions. I also use APIs for test data setup before UI automation, which improves execution speed and reliability."
