# **25 Manual Testing Interview Questions and Answers for SDET / QA Engineer**

These questions are important for Manual Testing, QA Automation and SDET interviews, especially for candidates with 4 years of experience.

I'll explain every question in this format:

1. **Interview Answer** – Simple English that you can speak in an interview.
2. **Telugu Explanation** – Understand the concept easily.
3. **Real-Time Example** – Practical application example.
4. **Remember** – Short point to help you revise.

## **1. What is Manual Testing?**

**Interview Answer:**

Manual Testing is a software testing process where testers manually execute test cases without using automation tools to identify defects and verify whether the application is working as expected.

**Telugu Explanation:**

Automation tools use cheyakunda, manam application ni manually test chesi bugs unnaya leda ani check cheyadanni Manual Testing antaru.

**Real-Time Example:**

Consider an e-commerce application:

- Open the application.
- Enter username and password.
- Click on Login.
- Verify whether the user can log in successfully.
- Check invalid login credentials.

**Remember:** Manual Testing = Testing without automation tools.

## **2. What is Software Testing?**

**Interview Answer:**

Software Testing is the process of verifying and validating an application to identify defects and ensure that it meets the business requirements.

**Telugu Explanation:**

Application business requirements prakaram correct ga work avutundha? Errors or bugs unnaya? Ani check cheyadanni Software Testing antaru.

**Real-Time Example:**

In a banking application, verify:

- Login functionality.
- Money transfer.
- Balance checking.
- Transaction history.

**Remember:** Software Testing = Quality + Defect Identification.

## **3. What is SDLC?**

**Interview Answer:**

SDLC stands for Software Development Life Cycle. It is a step-by-step process used to develop software, from requirement gathering to deployment and maintenance.

**SDLC Phases:**

1. **Requirement Gathering** – Collect business requirements.
2. **Analysis** – Analyze requirements and feasibility.
3. **Design** – Prepare application architecture and design.
4. **Development** – Developers write code.
5. **Testing** – Testers verify application functionality.
6. **Deployment** – Release application to production.
7. **Maintenance** – Fix issues and enhance the application.

**Telugu Explanation:**

Software ni starting nunchi production varaku develop cheyadaniki follow ayye process ni SDLC antaru.

**Real-Time Example:**

Banking application develop chestunnappudu requirements collect chesi, design chesi, code develop chesi, testing chesi, production lo release chestaru.

**Remember:** SDLC = Software Development Life Cycle.

## **4. What is STLC?**

**Interview Answer:**

STLC stands for Software Testing Life Cycle. It is a step-by-step process followed by the testing team to ensure software quality.

**STLC Phases:**

1. **Requirement Analysis** – Understand requirements.
2. **Test Planning** – Decide scope, resources and timelines.
3. **Test Case Development** – Write test scenarios and test cases.
4. **Test Environment Setup** – Prepare the testing environment.
5. **Test Execution** – Execute test cases.
6. **Test Cycle Closure** – Prepare reports and close testing activities.

**Telugu Explanation:**

Testing team application ni ela test cheyali, test cases ela prepare cheyali, execute ela cheyali ane process ni STLC antaru.

**Real-Time Example:**

Login module testing:

- Understand login requirements.
- Prepare login test cases.
- Set up test environment.
- Execute test cases.
- Report defects.
- Prepare test summary.

**Remember:** SDLC = Software development process. STLC = Software testing process.

## **5. What is a Test Scenario?**

**Interview Answer:**

A Test Scenario is a high-level description of what needs to be tested in an application.

**Telugu Explanation:**

Application lo ye functionality ni test cheyali ani high-level lo describe cheyadanni Test Scenario antaru.

**Real-Time Example: Login Page**

- Verify login with valid credentials.
- Verify login with invalid credentials.
- Verify login with empty fields.
- Verify Forgot Password functionality.
- Verify password masking.

**Remember:** Test Scenario = What to test?

## **6. What is a Test Case?**

**Interview Answer:**

A Test Case is a set of steps, test data, preconditions and expected results used to verify a particular functionality.

**Telugu Explanation:**

Oka functionality ni test cheyadaniki step-by-step instructions, test data and expected result define cheyadanni Test Case antaru.

**Real-Time Example: Login Test Case**

| Field           | Details                               |
| --------------- | ------------------------------------- |
| Test Case ID    | TC_001                                |
| Scenario        | Verify login functionality            |
| Precondition    | User should have a registered account |
| Test Data       | Valid username and password           |
| Step 1          | Open application                      |
| Step 2          | Enter username                        |
| Step 3          | Enter password                        |
| Step 4          | Click Login                           |
| Expected Result | User should successfully log in       |
| Actual Result   | User logged in successfully           |
| Status          | Pass                                  |

**Remember:** Test Case = How to test?

## **7. What is a Test Plan?**

**Interview Answer:**

A Test Plan is a document that describes the scope, objectives, testing approach, resources, timelines and deliverables of testing activities.

**Telugu Explanation:**

Project lo em test cheyali, evaru test cheyali, eppudu test cheyali, ela test cheyali ane details unde document ni Test Plan antaru.

**Real-Time Example:**

For an e-commerce application:

- Scope: Login, Cart, Payment.
- Resources: 3 testers.
- Timeline: 2 weeks.
- Environment: QA.
- Testing types: Functional, Regression and Smoke Testing.

**Remember:** Test Plan = What, Who, When and How to test?

## **8. What is a Test Strategy?**

**Interview Answer:**

A Test Strategy is a high-level document that defines the overall testing approach, testing standards, tools and methodologies followed across a project or organization.

**Telugu Explanation:**

Project lo testing ni overall ga ela approach avvali, manual or automation testing ela use cheyali, testing standards enti anevi Test Strategy lo define chestaru.

**Real-Time Example:**

For a project:

- UI testing using Playwright.
- API testing using Postman.
- Database testing using SQL.
- Regression testing before every release.
- Smoke testing for every new build.

**Remember:** Test Strategy = Overall testing approach.

## **9. What is a Test Suite?**

**Interview Answer:**

A Test Suite is a collection of related test cases grouped together to test a particular module or functionality.

**Telugu Explanation:**

Related test cases anni oka group lo maintain cheyadanni Test Suite antaru.

**Real-Time Example:**

Login Test Suite:

- Valid login.
- Invalid login.
- Empty username.
- Empty password.
- Forgot password.

Payment Test Suite:

- Successful payment.
- Failed payment.
- Invalid card details.
- Refund verification.

**Remember:** Test Suite = Collection of Test Cases.

## **10. What is Test Data?**

**Interview Answer:**

Test Data is the input data used to execute test cases and verify the expected application behavior.

**Telugu Explanation:**

Test cases execute cheyadaniki manam use chese input values ni Test Data antaru.

**Real-Time Example:**

Login test data:

| Scenario | Username  | Password   |
| -------- | --------- | ---------- |
| Valid    | user123   | Test\@123  |
| Invalid  | wronguser | Wrong\@123 |
| Empty    | Blank     | Blank      |

**Remember:** Test Data = Input values used for testing.

## **11. What is a Bug or Defect?**

**Interview Answer:**

A Bug or Defect is an error in the application where the actual result does not match the expected result.

**Telugu Explanation:**

Manam expected result okati anukunte, application actual result vere laga isthe danini Bug or Defect antaru.

**Real-Time Example:**

In a login page:

- Expected Result: User should log in with valid credentials.
- Actual Result: Application displays an error message even with valid credentials.

This is a defect.

**Remember:** Expected Result ≠ Actual Result = Bug.

## **12. What is Bug Life Cycle?**

**Interview Answer:**

Bug Life Cycle is the sequence of stages a defect goes through from identification to closure.

**Bug Life Cycle:**

1. **New** – Tester identifies and reports a bug.
2. **Assigned** – Bug is assigned to a developer.
3. **Open** – Developer starts analyzing the bug.
4. **Fixed** – Developer fixes the issue.
5. **Retest** – Tester verifies the fix.
6. **Verified** – Tester confirms the issue is fixed.
7. **Closed** – Bug is closed.

Other possible statuses:

- Reopened – Issue still exists.
- Rejected – Reported issue is not considered a valid defect.
- Duplicate – Same bug was already reported.
- Deferred – Bug fix is postponed.
- Not a Bug – Application works according to requirements.

**Telugu Explanation:**

Tester bug identify chesi report chestadu. Developer fix chestadu. Tester malli test chesi fix correct ga unte close chestadu.

**Real-Time Example:**

Login button is not working → Tester reports bug → Developer fixes it → Tester retests → Login button works → Bug closed.

**Remember:** New → Assigned → Open → Fixed → Retest → Verified → Closed.

## **13. What is Severity and Priority?**

**Interview Answer:**

Severity defines how much impact a defect has on application functionality.

Priority defines how urgently the defect needs to be fixed.

**Telugu Explanation:**

- Severity: Bug valla application ki entha damage jarigindi?
- Priority: Aa bug ni entha urgent ga fix cheyali?

**Real-Time Example:**

| Example                              | Severity | Priority |
| ------------------------------------ | -------- | -------- |
| Application crashes during payment   | High     | High     |
| Company logo spelling mistake        | Low      | High     |
| Rare issue in an unused feature      | Low      | Low      |
| Frequently occurring data corruption | High     | High     |

**Remember:** Severity = Impact. Priority = Urgency.

**Interview follow-up: Can low severity have high priority?**

Yes. For example, a spelling mistake on the company's homepage may have low severity but high priority because it affects the company's brand image.

## **14. What is Functional Testing?**

**Interview Answer:**

Functional Testing is a type of testing that verifies whether the application features are working according to the business requirements.

**Telugu Explanation:**

Application lo each functionality business requirements prakaram correct ga work avutundha leda ani check cheyadanni Functional Testing antaru.

**Real-Time Example:**

For an e-commerce application:

- Verify login.
- Verify product search.
- Verify add to cart.
- Verify checkout.
- Verify payment.
- Verify order confirmation.

**Remember:** Functional Testing = What the application does.

## **15. What is Non-Functional Testing?**

**Interview Answer:**

Non-Functional Testing verifies the performance, security, usability, reliability and scalability of an application.

**Telugu Explanation:**

Application em pani chestundi anedi kakunda, entha speed ga work chestundi, secure ga undha, user-friendly ga undha ani check cheyadanni Non-Functional Testing antaru.

**Types:**

1. Performance Testing
2. Load Testing
3. Stress Testing
4. Security Testing
5. Usability Testing
6. Compatibility Testing
7. Scalability Testing
8. Reliability Testing

**Real-Time Example:**

- Check whether 10,000 users can access the application.
- Verify page loading speed.
- Check whether unauthorized users can access restricted pages.
- Verify application compatibility across browsers.

**Remember:** Non-Functional Testing = How well the application works.

## **16. What is Integration Testing?**

**Interview Answer:**

Integration Testing is performed to verify whether two or more integrated modules or components are working together correctly.

**Telugu Explanation:**

Application lo different modules ni connect chesinappudu, avi okadanitho okati correct ga communicate avutunnaya leda ani check cheyadanni Integration Testing antaru.

**Real-Time Example:**

In an e-commerce application:

1. User logs in.
2. User adds a product to the cart.
3. Cart sends order details to the payment module.
4. Payment module processes payment.
5. Order module receives payment confirmation.

We verify whether all these modules communicate correctly.

**Remember:** Integration Testing = Communication between modules.

## **17. What is System Testing?**

**Interview Answer:**

System Testing is performed to verify the complete integrated application against the specified requirements.

**Telugu Explanation:**

Application lo all modules integrate chesina tarvatha complete application ni end-to-end ga test cheyadanni System Testing antaru.

**Real-Time Example:**

For an online shopping application:

- Register.
- Login.
- Search products.
- Add products to cart.
- Make payment.
- Verify order confirmation.
- Verify order history.

**Remember:** System Testing = Testing the complete application.

## **18. What is UAT Testing?**

**Interview Answer:**

UAT stands for User Acceptance Testing. It is the final testing phase where end users or business stakeholders verify whether the application meets their business requirements.

**Telugu Explanation:**

Application business requirements prakaram users ki correct ga work avutundha ani actual users or business team test cheyadanni UAT antaru.

**Real-Time Example:**

For a banking application:

- Business users verify money transfer.
- Check account balance.
- Verify transaction history.
- Confirm whether all business requirements are satisfied.

After successful UAT approval, the application can be considered ready for production release, subject to other release approvals.

**Remember:** UAT = Testing by users/business team.

## **19. What is Positive Testing?**

**Interview Answer:**

Positive Testing verifies whether the application works correctly when valid inputs are provided.

**Telugu Explanation:**

Application ki correct inputs isthe expected output vastundha leda ani check cheyadanni Positive Testing antaru.

**Real-Time Example:**

Login page:

- Enter valid username.
- Enter valid password.
- Click Login.
- Verify successful login.

**Remember:** Positive Testing = Valid Inputs.

## **20. What is Negative Testing?**

**Interview Answer:**

Negative Testing verifies whether the application handles invalid inputs or unexpected conditions properly.

**Telugu Explanation:**

Application ki wrong inputs ichinappudu errors or unexpected behavior rakunda correct error messages chupistundha ani check cheyadanni Negative Testing antaru.

**Real-Time Example:**

Login page:

- Enter invalid username.
- Enter invalid password.
- Enter empty values.
- Enter special characters.
- Verify appropriate error messages.

**Remember:** Negative Testing = Invalid Inputs.

## **21. What is Ad-hoc Testing?**

**Interview Answer:**

Ad-hoc Testing is an informal testing technique performed without predefined test cases to identify defects by randomly exploring the application.

**Telugu Explanation:**

Predefined test cases lekunda application ni random ga explore chestu bugs identify cheyadanni Ad-hoc Testing antaru.

**Real-Time Example:**

While testing a registration page:

- Click buttons repeatedly.
- Refresh the page during submission.
- Enter unexpected characters.
- Navigate back and forward.
- Submit the form multiple times.

**Remember:** Ad-hoc Testing = Informal testing without predefined test cases.

## **22. What is Exploratory Testing?**

**Interview Answer:**

Exploratory Testing is a testing technique where testers simultaneously learn the application, design test cases and execute tests based on their understanding and observations.

**Telugu Explanation:**

Application ni explore chestu, application behavior understand cheskuntu, same time lo test cases design chesi execute cheyadanni Exploratory Testing antaru.

**Real-Time Example:**

While exploring an e-commerce application:

- Check product search.
- Try different filters.
- Change product quantity.
- Apply discount coupons.
- Check cart behavior.
- Verify checkout scenarios.

Based on observations, we identify additional test scenarios.

**Remember:** Exploratory Testing = Learn + Design + Execute.

**Ad-hoc vs Exploratory Testing:**

| Ad-hoc Testing           | Exploratory Testing                     |
| ------------------------ | --------------------------------------- |
| Informal approach        | Structured learning-based approach      |
| No predefined test cases | Test ideas are developed during testing |
| Random exploration       | Goal-oriented exploration               |
| Less documentation       | Can use test charters and session notes |

## **23. What is Boundary Value Analysis (BVA)?**

**Interview Answer:**

Boundary Value Analysis is a black-box testing technique where test cases are designed using the minimum and maximum boundary values of an input range.

**Telugu Explanation:**

Input range lo minimum and maximum values daggara errors ekkuvaga ravachu. Anduke boundary values ni test cheyadanni Boundary Value Analysis antaru.

**Real-Time Example:**

Suppose an age field accepts values from 18 to 60.

Test these values:

| Test Data | Expected Result |
| --------- | --------------- |
| 17        | Invalid         |
| 18        | Valid           |
| 19        | Valid           |
| 59        | Valid           |
| 60        | Valid           |
| 61        | Invalid         |

Here, we test values around the boundaries.

**Remember:** BVA = Minimum, Minimum + 1, Maximum - 1, Maximum and values just outside the boundaries.

## **24. What is Equivalence Partitioning?**

**Interview Answer:**

Equivalence Partitioning is a black-box testing technique where input data is divided into different groups called equivalence classes. We select representative values from each group for testing.

**Telugu Explanation:**

Similar behavior iche input values ni groups ga divide chestam. Prathi group nunchi representative value select chesi test chestam. Dinni Equivalence Partitioning antaru.

**Real-Time Example:**

Suppose an age field accepts values from 18 to 60.

We divide inputs into three groups:

| Partition | Values   | Expected Result |
| --------- | -------- | --------------- |
| Invalid   | Below 18 | Rejected        |
| Valid     | 18 to 60 | Accepted        |
| Invalid   | Above 60 | Rejected        |

We can select:

- 15 from the first group.
- 30 from the second group.
- 65 from the third group.

**Remember:** Equivalence Partitioning = Divide inputs into groups and test representative values.

**BVA vs Equivalence Partitioning:**

| BVA                             | Equivalence Partitioning    |
| ------------------------------- | --------------------------- |
| Focuses on boundaries           | Focuses on input groups     |
| Tests values near limits        | Tests representative values |
| Example: 17, 18, 19, 59, 60, 61 | Example: 15, 30, 65         |

## **25. What is End-to-End Testing?**

**Interview Answer:**

End-to-End Testing verifies the complete application workflow from the beginning to the end to ensure that all integrated components work together as expected.

**Telugu Explanation:**

User application open chesina daggara nunchi final transaction complete ayye varaku complete flow ni test cheyadanni End-to-End Testing antaru.

**Real-Time Example: E-commerce Application**

1. Open application.
2. Login with valid credentials.
3. Search for a product.
4. Select a product.
5. Add product to cart.
6. Enter delivery address.
7. Complete payment.
8. Verify order confirmation.
9. Check order history.

**Remember:** E2E Testing = Complete user journey.

# **Quick Revision – All 25 Questions**

Use this table for daily interview revision.

| No. | Topic                    | One-line answer                                |
| --- | ------------------------ | ---------------------------------------------- |
| 1   | Manual Testing           | Testing without automation tools               |
| 2   | Software Testing         | Identifying defects and verifying requirements |
| 3   | SDLC                     | Software development life cycle                |
| 4   | STLC                     | Software testing life cycle                    |
| 5   | Test Scenario            | What to test?                                  |
| 6   | Test Case                | How to test?                                   |
| 7   | Test Plan                | Testing scope, resources and schedule          |
| 8   | Test Strategy            | Overall testing approach                       |
| 9   | Test Suite               | Collection of test cases                       |
| 10  | Test Data                | Input values for testing                       |
| 11  | Bug                      | Actual result differs from expected result     |
| 12  | Bug Life Cycle           | Defect journey from New to Closed              |
| 13  | Severity                 | Impact of a defect                             |
| 14  | Priority                 | Urgency to fix a defect                        |
| 15  | Functional Testing       | What application does                          |
| 16  | Non-Functional Testing   | How well application works                     |
| 17  | Integration Testing      | Communication between modules                  |
| 18  | System Testing           | Complete application testing                   |
| 19  | UAT                      | Business user acceptance testing               |
| 20  | Positive Testing         | Valid input testing                            |
| 21  | Negative Testing         | Invalid input testing                          |
| 22  | Ad-hoc Testing           | Informal testing without predefined test cases |
| 23  | Exploratory Testing      | Learn, design and execute                      |
| 24  | BVA                      | Testing boundary values                        |
| 25  | Equivalence Partitioning | Dividing inputs into groups                    |
| 26  | E2E Testing              | Complete user workflow                         |

_Note: I included E2E as the 26th revision item because it is question 25 above._

# **Important additional Manual Testing questions**

For an SDET interview, don't stop with these 25. Prepare these topics too:

1. What is Smoke Testing?
2. What is Sanity Testing?
3. What is Regression Testing?
4. What is Retesting?
5. Difference between Smoke and Sanity Testing?
6. Difference between Retesting and Regression Testing?
7. What is Compatibility Testing?
8. What is Usability Testing?
9. What is Load Testing?
10. What is Stress Testing?
11. What is Recovery Testing?
12. What is Risk-Based Testing?
13. What is Defect Leakage?
14. What is Defect Density?
15. What is Test Coverage?
16. What is RTM (Requirement Traceability Matrix)?
17. What is Entry and Exit Criteria?
18. What is Build Verification Testing?
19. What is Decision Table Testing?
20. What is State Transition Testing?

# **Practice: Manual Testing Interview**

**Interview Practice – Round 1**

7/7 answered

**1. What is the difference between Test Scenario and Test Case?**

Scenario is what to test; Test Case is how to test

Both are same

Test Case is only test data

Correct

**2. Developer fixed a defect. What should the tester perform?**

Smoke Testing

Retesting

UAT

Correct

**3. Which testing checks whether existing features are affected by new code changes?**

Regression Testing

Positive Testing

Ad-hoc Testing

Correct

**4. Which technique divides input data into valid and invalid groups?**

Boundary Value Analysis

Equivalence Partitioning

Exploratory Testing

Correct

**5. Who generally performs UAT?**

Developers only

Business users or end users

Database administrators only

Correct

**6. What is Severity?**

Urgency to fix a defect

Impact of a defect

Number of test cases

Correct

**7. Which testing verifies the complete application workflow?**

Unit Testing

End-to-End Testing

Sanity Testing

Correct

Submit Test
