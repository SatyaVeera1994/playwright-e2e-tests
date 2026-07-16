
# Q5. How do you test GraphQL APIs with Playwright?

## 1. Telugu Concept

GraphQL API Testing కూడా Playwright Request Fixture ద్వారా చేయవచ్చు.

REST API లో:

```text
GET /users/1
```

ఉంటుంది.

కానీ GraphQL లో:

```graphql
query GetUser {
  user(id: "1") {
    id
    name
    email
  }
}
```

అనే Query Body పంపిస్తాము.

GraphQL APIs సాధారణంగా ఒకే Endpoint ఉపయోగిస్తాయి.

```text
POST /graphql
```

అందువల్ల URL ఆధారంగా API ని గుర్తించలేము.

Query Body లో ఉన్న **Operation Name** (GetUser, GetProducts, CreateOrder) ద్వారా Request ని Identify చేస్తాము.

---

## 2. Easy to Remember

✅ GraphQL Uses POST Request

✅ Single Endpoint (/graphql)

✅ Query Sent in Request Body

✅ Variables Supported

✅ Mock Using Operation Name

✅ Playwright Request Fixture Supports GraphQL

### One-Line Summary

**GraphQL testing in Playwright is done by sending queries to the /graphql endpoint and validating the response.**

---

## 3. Telugu Interview Answer

Playwright లో GraphQL APIs ని request fixture ద్వారా Test చేయవచ్చు.

GraphQL APIs సాధారణంగా ఒకే Endpoint అయిన `/graphql` ని ఉపయోగిస్తాయి.

అందువల్ల URL ఆధారంగా Request ని Identify చేయలేము.

నేను Query Body లో ఉన్న Operation Name ని ఉపయోగించి Specific Queries ని Validate లేదా Mock చేస్తాను.

ఉదాహరణకు GetUser, GetProducts, CreateOrder వంటి Operations కి వేర్వేరు Responses Mock చేయవచ్చు.

ఇది GraphQL Testing ని చాలా Flexible మరియు Maintainable గా చేస్తుంది.

---

## 4. Simple English Answer

I use Playwright's request fixture to send GraphQL queries to the `/graphql` endpoint.

I validate the response data and status code.

For mocking, I check the GraphQL operation name inside the request body and return custom responses.

---

## 5. English Interview Answer

Playwright supports GraphQL API testing through its built-in request fixture.

Since GraphQL typically uses a single endpoint such as `/graphql`, requests cannot be identified using URLs alone.

Instead, I use the operation name present in the query body to identify specific GraphQL requests.

For API testing, I send GraphQL queries and validate the response structure and data.

For mocking, I intercept the GraphQL request using page.route(), inspect the operation name, and return a mocked response when needed.

This approach keeps GraphQL tests scalable and maintainable.

---

## 6. Real-Time Project Example

In my Playwright project, if the application loads products using GraphQL:

```graphql
query GetProducts {
  products {
    id
    name
    price
  }
}
```

I can:

* Verify API Response
* Validate Product Data
* Mock Empty Product Lists
* Test Error Scenarios

without depending on the actual backend.

This helps create stable and predictable test execution.

---

## 7. Code Example (TypeScript)

### GraphQL Query Testing

```typescript
import { test, expect } from '@playwright/test';

test('Get User Profile', async ({ request }) => {

  const response = await request.post('/graphql', {

    data: {

      query: `
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            name
            email
            role
          }
        }
      `,

      variables: {
        id: '1'
      }

    }

  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.data.user.email)
    .toBeDefined();

});
```

### GraphQL Mocking

```typescript
await page.route('**/graphql', async route => {

  const body =
    route.request().postDataJSON();

  if (body.query.includes('GetProducts')) {

    await route.fulfill({

      status: 200,

      body: JSON.stringify({
        data: {
          products: []
        }
      })

    });

  } else {

    await route.continue();

  }

});
```

### Validate GraphQL Response

```typescript
const response = await request.post('/graphql', {
  data: {
    query: `
      query GetProducts {
        products {
          id
          name
        }
      }
    `
  }
});

const body = await response.json();

expect(body.data.products.length)
  .toBeGreaterThan(0);
```

---

## Interview Short Answer

> "I use Playwright's request fixture to send GraphQL queries to the `/graphql` endpoint and validate the response. Since all GraphQL requests use the same endpoint, I identify requests using the operation name in the query body. For mocking, I intercept the request with page.route() and return custom responses based on the operation name."
