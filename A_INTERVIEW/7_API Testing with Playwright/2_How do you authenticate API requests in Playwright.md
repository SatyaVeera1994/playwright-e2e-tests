# Q2. How do you authenticate API requests in Playwright?

## 1. Telugu Concept

Playwright API Testing లో Authentication చేయడానికి రెండు Common Methods ఉన్నాయి.

### Method 1: storageState

Browser Login తర్వాత Save చేసిన Cookies, LocalStorage, Session Data ని API Requests కోసం Reuse చేయడం.

### Method 2: Authorization Header

Bearer Token లేదా API Token ని Direct గా Headers లో Pass చేయడం.

Authentication లేకపోతే APIs 401 Unauthorized Error ఇస్తాయి.

అందుకే APIRequestContext Create చేసే సమయంలో Authentication Configure చేస్తాము.

---

## 2. Easy to Remember

✅ storageState Reuse

✅ Bearer Token Authentication

✅ APIRequestContext

✅ Extra HTTP Headers

✅ Separate Admin/User Contexts

✅ Secure API Access

### One-Line Summary

**API Authentication can be done using storageState or Authorization headers in APIRequestContext.**

---

## 3. Telugu Interview Answer

Playwright లో API Authentication కోసం APIRequestContext ఉపయోగిస్తాను.

సాధారణంగా Browser Login సమయంలో Generate అయిన storageState ని Reuse చేస్తాను.

దీనివల్ల UI మరియు API Tests రెండూ ఒకే Authentication Session ని Share చేస్తాయి.

Alternative గా Bearer Token ని Authorization Header లో Pass చేసి కూడా Authenticate చేయవచ్చు.

నేను Fixtures ఉపయోగించి Admin API మరియు User API Contexts Create చేస్తాను. ఇది Role-Based Testing కి చాలా Useful.

అలాగే Test Data Creation కోసం Admin APIs ఉపయోగించి UI Tests ని Faster మరియు Independent గా Run చేస్తాను.

---

## 4. Simple English Answer

I authenticate API requests using storageState or Authorization headers.

Usually, I reuse the authentication state generated during login.

This allows API and UI tests to share the same session.

For token-based authentication, I pass the Bearer token in the Authorization header.

---

## 5. English Interview Answer

In Playwright, API authentication can be implemented using storageState or Authorization headers.

My preferred approach is using storageState because it reuses the same authenticated session created during browser login.

This keeps UI and API tests consistent and eliminates separate token management.

For token-based systems, I create an APIRequestContext with Authorization headers containing the Bearer token.

I usually create separate fixtures such as adminAPI and userAPI so that different user roles can be tested independently.

This approach improves maintainability, reusability, and security.

---

## 6. Real-Time Project Example

In my Playwright project, I use Admin APIs to create test data before UI automation.

Example:

1. Login once in Global Setup
2. Save storageState
3. Create User using Admin API
4. Login as User
5. Verify User in UI

This approach is much faster than creating users manually through the UI every time.

---

## 7. Code Example (TypeScript)

### Using storageState

```typescript
import { test as base } from '@playwright/test';

export const test = base.extend({

  adminAPI: async ({ playwright }, use) => {

    const apiContext =
      await playwright.request.newContext({

        baseURL: process.env.API_URL,

        storageState: 'auth/admin-state.json'

      });

    await use(apiContext);

    await apiContext.dispose();

  }

});
```

### Using Bearer Token

```typescript
import { request } from '@playwright/test';

const apiContext = await request.newContext({

  baseURL: 'https://api.example.com',

  extraHTTPHeaders: {

    Authorization: 'Bearer YOUR_TOKEN',

    'Content-Type': 'application/json'

  }

});
```

### Authenticated API Call

```typescript
const response = await apiContext.get('/users');

expect(response.status()).toBe(200);
```

---

## Interview Short Answer

> "I authenticate API requests in Playwright using either storageState or Authorization headers. My preferred approach is storageState because it reuses the authenticated session created during login and avoids separate token management. I also create role-based API fixtures such as adminAPI and userAPI for better test organization and reusable authentication."
