మీ Yotta DRM KMS project మరియు API Testing experience ఆధారంగా SDET / QA Automation Engineer interview questions with answers ఇస్తున్నాను.

Easy English + Telugu explanation + real-time Yotta examples తో prepare అవుదాం.

# API Testing & Authentication – Interview Questions

## 1. What is API Testing?

Answer (English):

API testing is the process of testing backend services to verify whether APIs are working correctly. We validate status codes, response body, headers, authentication, and error handling.

తెలుగు:

UI మీద depend అవ్వకుండా backend services సరిగ్గా పనిచేస్తున్నాయా లేదా test చేయడమే API Testing.

Project Example: Yotta KMS `getContentKey` API ని Postman లో test చేయడం.

## 2. What is Authentication?

Answer:

Authentication is the process of verifying the identity of a user or application.

తెలుగు:

API ని access చేస్తున్నది నిజమైన authorized client అవునా కాదా అని verify చేయడమే Authentication.

Example: Username/password, Bearer Token, Client Certificate.

## 3. What is Authorization?

Answer:

Authorization determines what actions or resources an authenticated user is allowed to access.

తెలుగు:

ఒక user login అయిన తర్వాత అతనికి ఏ permissions ఉన్నాయి అనేది check చేయడమే Authorization.

Example: ఒక user కి video content access permission ఉందా లేదా.

## 4. Difference between Authentication and Authorization?

| Authentication          | Authorization           |
| ----------------------- | ----------------------- |
| Who are you?            | What can you access?    |
| Identity verification   | Permission verification |
| Login/token/certificate | Roles and permissions   |

## 5. What is Bearer Token Authentication?

Answer:

Bearer Token is an authentication method where a client sends an access token in the Authorization header to access an API.

Example:

```
Authorization: Bearer <access_token>
```

తెలుగు: API కి request పంపేటప్పుడు మన దగ్గర valid token ఉందని prove చేయడానికి Bearer Token ఉపయోగిస్తాం.

## 6. What is Basic Authentication?

Answer:

Basic Authentication uses a username and password to authenticate a client. The credentials are Base64 encoded.

Example:

```
Authorization: Basic <encoded_credentials>
```

తెలుగు: Username మరియు password ఉపయోగించి API authentication చేయడాన్ని Basic Authentication అంటారు. HTTPS ఉపయోగించడం ముఖ్యం.

## 7. What is Mutual TLS (mTLS)?

Answer:

Mutual TLS is a security mechanism where both the client and server authenticate each other using certificates.

తెలుగు:

Normal TLS లో server తన identity ని client కి verify చేస్తుంది.

mTLS లో:

- Server certificate ని client verify చేస్తుంది.
- Client certificate ని server verify చేస్తుంది.

Yotta Example: Secure DRM KMS endpoint లో client certificate authentication ని test చేయవచ్చు.

## 8. What is a Client Certificate?

Answer:

A client certificate is used to verify the identity of a client when connecting to a secure server.

తెలుగు:

API కి request పంపుతున్న client నిజమైన client అవునా కాదా అని certificate ద్వారా verify చేస్తారు.

## 9. What is the difference between 401 and 403?

| Status | Meaning      | Example                                   |
| ------ | ------------ | ----------------------------------------- |
| 401    | Unauthorized | Invalid or missing authentication         |
| 403    | Forbidden    | Authenticated but insufficient permission |

## 10. How do you test API Authentication in Postman?

Answer:

1. Open Postman.
2. Enter the API endpoint.
3. Select the Authorization tab.
4. Choose the required authentication type.
5. Enter valid credentials or token.
6. Send the request.
7. Verify the status code and response.

తెలుగు: Valid token ఇచ్చినప్పుడు API access అవుతుందా, invalid token ఇచ్చినప్పుడు access reject అవుతుందా test చేస్తాం.

## 11. What is CORS?

Answer:

CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls cross-origin access to resources.

తెలుగు: ఒక domain నుంచి వేరే domain API response ని browser access చేయడానికి permission ఉందా లేదా అనేది CORS control చేస్తుంది.

## 12. What is an OPTIONS request?

Answer:

OPTIONS is an HTTP method used by browsers to perform CORS preflight checks before certain cross-origin requests.

తెలుగు: Actual API request పంపడానికి ముందు browser server ని permission గురించి అడుగుతుంది.

## 13. What is TLS?

Answer:

TLS stands for Transport Layer Security. It provides encrypted communication between a client and a server.

తెలుగు: Client మరియు server మధ్య data secure గా transfer అవ్వడానికి TLS ఉపయోగిస్తారు.

## 14. What is the difference between TLS 1.2 and TLS 1.3?

Answer:

TLS 1.3 is the newer version of TLS. It provides improved security and a faster handshake compared with TLS 1.2.

తెలుగు: రెండూ secure communication కోసం ఉపయోగిస్తారు. TLS 1.3 లో handshake process మెరుగుపరచబడింది.

## 15. How do you test negative authentication scenarios?

Answer:

I test invalid tokens, missing tokens, expired tokens, invalid certificates, and unauthorized access. I verify that the API rejects unauthorized requests with the expected response.

తెలుగు: Wrong token, expired token, certificate లేకుండా request పంపించి API access reject చేస్తుందా verify చేస్తాం.

# Important HTTP Status Codes

| Status code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 204         | No Content            |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 405         | Method Not Allowed    |
| 429         | Too Many Requests     |
| 500         | Internal Server Error |
| 502         | Bad Gateway           |
| 503         | Service Unavailable   |

# Practice – Interview Mock Test

ఇప్పుడు మీ knowledge test చేద్దాం. నేను interviewer లాగా questions అడుగుతాను.

API Security Interview Test

5 Questions

Q1. What is Authentication?

Checking user permissions

Verifying the identity of a user or application

Encrypting API response

Incorrect. Correct answer: Verifying the identity of a user or applicationAuthentication అంటే identity verify చేయడం.

Q2. What is mTLS?

Only client authentication

Only server authentication

Both client and server authenticate each other

Correct!mTLS లో client మరియు server ఇద్దరూ certificates ద్వారా identity verify చేసుకుంటారు.

Q3. Which HTTP status code represents invalid authentication?

200

401

404

Incorrect. Correct answer: 401401 Unauthorized – valid authentication లేదు.

Q4. What is CORS?

Cross-Origin Resource Sharing

Client-Origin Request Security

Content-Origin Response Service

Correct!CORS అనేది browser cross-origin access control mechanism.

Q5. Which HTTP method is commonly used for CORS preflight?

GET

POST

OPTIONS

Correct!Browser OPTIONS request ద్వారా preflight check చేస్తుంది.

# 3 / 5 Correct

Try Again

మీ తదుపరి preparation కోసం రోజుకు 5 API Security interview questions, Telugu explanations మరియు answers తో practice session కూడా సిద్ధం చేయగలను.

🎯Daily API interview practiceTap to set up
