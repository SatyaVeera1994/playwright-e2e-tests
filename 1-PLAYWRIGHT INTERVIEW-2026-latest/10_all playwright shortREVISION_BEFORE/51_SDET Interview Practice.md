# **20 Important Manual Testing Interview Questions and Answers**

**For QA Engineer / SDET – 4 Years Experience**

I'll provide simple interview-ready English answers, Telugu explanations and practical examples. You can directly practice the English answers for your interviews.

## **1. What is Smoke Testing?**

**Interview Answer:**

Smoke Testing is a type of testing performed on a new build to verify whether the critical functionalities of the application are working properly. It helps us decide whether the build is stable enough for further testing.

**Telugu Explanation:**

New build vachinappudu application lo basic and important functionalities work avutunnaya leda ani quick ga check cheyadanni Smoke Testing antaru.

**Real-Time Example:**

For an e-commerce application:

- Application should launch.
- Login should work.
- Product search should work.
- Add to Cart should work.
- Payment page should open.

If these basic functionalities fail, we reject the build for further testing.

**Remember:** Smoke Testing = Basic build stability check.

## **2. What is Sanity Testing?**

**Interview Answer:**

Sanity Testing is a type of testing performed after minor code changes or bug fixes to verify whether the specific functionality is working as expected.

**Telugu Explanation:**

Developer small changes or bug fixes chesina tarvatha, aa particular functionality correct ga work avutundha leda ani quick ga check cheyadanni Sanity Testing antaru.

**Real-Time Example:**

Developer fixed a payment button issue.

We verify:

- Payment button is visible.
- Payment button is clickable.
- Payment process is working.
- Payment confirmation is displayed.

**Remember:** Sanity Testing = Quick verification of specific changes.

## **3. What is Regression Testing?**

**Interview Answer:**

Regression Testing is performed to ensure that existing functionality is not affected by new code changes, bug fixes or enhancements.

**Telugu Explanation:**

Application lo new features add chesina or bugs fix chesina, already working unna existing functionalities affect ayyaya leda ani check cheyadanni Regression Testing antaru.

**Real-Time Example:**

Developer fixes a payment issue.

We test:

- Payment.
- Login.
- Registration.
- Cart.
- Order history.

We verify that existing functionalities are still working correctly.

**Remember:** Regression Testing = Checking existing functionality after changes.

## **4. What is Retesting?**

**Interview Answer:**

Retesting is performed to verify whether a previously reported defect has been fixed successfully by the developer.

**Telugu Explanation:**

Tester report chesina bug ni developer fix chesina tarvatha, ade test case ni malli execute chesi bug fix ayyinda leda ani check cheyadanni Retesting antaru.

**Real-Time Example:**

- Tester reports that the Login button is not working.
- Developer fixes the issue.
- Tester executes the same login test case again.
- If login works, the defect is verified.

**Remember:** Retesting = Testing the same failed test case again.

## **5. Difference between Smoke Testing and Sanity Testing?**

**Interview Answer:**

Smoke Testing verifies the basic critical functionalities of a new build, whereas Sanity Testing verifies specific functionality after minor changes or bug fixes.

| Smoke Testing                       | Sanity Testing                         |
| ----------------------------------- | -------------------------------------- |
| Performed on a new build            | Performed after minor changes or fixes |
| Checks basic functionalities        | Checks specific functionality          |
| Broad but shallow                   | Narrow and focused                     |
| Verifies build stability            | Verifies change stability              |
| Usually an initial testing activity | Usually performed after build changes  |

**Real-Time Example:**

- Smoke: Verify Login, Cart and Payment pages open.
- Sanity: Verify the fixed Payment button works correctly.

**Remember:** Smoke = Build check. Sanity = Specific change check.

## **6. Difference between Retesting and Regression Testing?**

**Interview Answer:**

Retesting verifies whether a specific defect has been fixed, whereas Regression Testing verifies whether existing functionalities are affected by the changes.

| Retesting                             | Regression Testing                    |
| ------------------------------------- | ------------------------------------- |
| Verifies the fixed defect             | Verifies existing functionality       |
| Focuses on a specific bug             | Focuses on impacted areas             |
| Executes previously failed test cases | Executes relevant existing test cases |
| Confirms bug resolution               | Confirms no side effects              |

**Real-Time Example:**

Suppose the developer fixes a Login bug.

- Retesting: Verify whether Login works now.
- Regression: Verify whether Registration, Dashboard and Logout are still working.

**Remember:** Retesting = Bug fix verification. Regression = Impact verification.

## **7. What is Compatibility Testing?**

**Interview Answer:**

Compatibility Testing is a type of testing performed to verify whether an application works correctly across different browsers, operating systems, devices and environments.

**Telugu Explanation:**

Application different browsers, mobiles, operating systems lo correct ga work avutundha leda ani check cheyadanni Compatibility Testing antaru.

**Real-Time Example:**

For a web application, test on:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Windows
- macOS
- Android
- iOS

Verify that the application UI and functionality work correctly across these platforms.

**Remember:** Compatibility Testing = Different browsers, devices and operating systems.

## **8. What is Usability Testing?**

**Interview Answer:**

Usability Testing is performed to verify whether an application is user-friendly, easy to understand and easy to navigate.

**Telugu Explanation:**

Application users ki easy ga understand avutundha, use cheyadaniki comfortable ga undha, navigation easy ga undha ani check cheyadanni Usability Testing antaru.

**Real-Time Example:**

In an online shopping application:

- Is the Login button easy to find?
- Is the checkout process simple?
- Are error messages understandable?
- Can users easily find products?
- Is the navigation clear?

**Remember:** Usability Testing = User-friendly application check.

## **9. What is Load Testing?**

**Interview Answer:**

Load Testing is a type of Performance Testing performed to verify how an application behaves under expected or normal user loads.

**Telugu Explanation:**

Application ki expected number of users access chesinappudu performance ela undhi, response time ela undhi ani check cheyadanni Load Testing antaru.

**Real-Time Example:**

Suppose an application is designed to support 1,000 concurrent users.

We simulate 1,000 users accessing the application simultaneously and check:

- Response time.
- Server performance.
- Error rate.
- Application stability.

Tools: JMeter, LoadRunner.

**Remember:** Load Testing = Performance under expected load.

## **10. What is Stress Testing?**

**Interview Answer:**

Stress Testing is a type of Performance Testing performed by applying a load beyond the expected capacity to identify the breaking point of an application and verify how it behaves under extreme conditions.

**Telugu Explanation:**

Application capacity kanna ekkuva users or load ichinappudu application ela behave chestundhi, eppudu fail avutundhi ani check cheyadanni Stress Testing antaru.

**Real-Time Example:**

Suppose an application normally supports 1,000 users.

We gradually increase the load:

- 1,000 users.
- 2,000 users.
- 5,000 users.
- 10,000 users.

We check when performance degrades or the application starts failing.

**Remember:** Stress Testing = Testing beyond expected capacity.

## **11. What is Recovery Testing?**

**Interview Answer:**

Recovery Testing is performed to verify whether an application can recover successfully after a system failure, crash, network issue or hardware failure.

**Telugu Explanation:**

Application crash ayina, server down ayina or network failure vachina, application malli normal state ki recover avutundha leda ani check cheyadanni Recovery Testing antaru.

**Real-Time Example:**

Consider an online banking application:

1. User starts a money transfer.
2. Suddenly, the server goes down.
3. Server restarts.
4. We verify whether the application recovers.
5. We check whether the transaction status is correct and duplicate transactions have not occurred.

**Remember:** Recovery Testing = Ability to recover after failure.

## **12. What is Risk-Based Testing?**

**Interview Answer:**

Risk-Based Testing is a testing approach where we prioritize test cases based on the risk, business impact and probability of failure.

**Telugu Explanation:**

Application lo ye functionality fail ayithe ekkuva impact untundho, aa functionality ki first priority ichi test cheyadanni Risk-Based Testing antaru.

**Real-Time Example:**

In a banking application:

| Functionality    | Risk   | Testing Priority |
| ---------------- | ------ | ---------------- |
| Money Transfer   | High   | High             |
| Login            | High   | High             |
| Balance Checking | Medium | Medium           |
| Profile Picture  | Low    | Low              |

We test high-risk functionalities first.

**Remember:** Risk-Based Testing = Test high-risk areas first.

## **13. What is Defect Leakage?**

**Interview Answer:**

Defect Leakage refers to defects that are missed during testing and are discovered in a later testing phase or by end users in production.

**Telugu Explanation:**

Testing phase lo identify cheyalekapoyina bugs, later production lo or users identify chesthe vatini Defect Leakage antaru.

**Real-Time Example:**

- QA team tests the payment functionality.
- A particular payment failure scenario is missed.
- Application goes to production.
- Customer reports that payment fails for certain cards.

This is Defect Leakage.

**Remember:** Defect Leakage = Bugs missed during testing and found later.

## **14. What is Defect Density?**

**Interview Answer:**

Defect Density is a software quality metric that measures the number of defects identified in a software module relative to its size.

**Formula:**

\\[ \text{Defect Density} = \frac{\text{Total Defects}}{\text{Software Size}} \\]

Software size can be measured in KLOC (thousand lines of code) or function points.

**Real-Time Example:**

Suppose:

- Total defects = 20
- Software size = 10 KLOC

\\[ 20/10 = 2 \\]

Defect Density = 2 defects per KLOC.

**Telugu Explanation:**

Oka software module size tho compare chesi, danilo enni defects unnayo measure cheyadanni Defect Density antaru.

**Remember:** Defect Density = Number of defects / Software size.

## **15. What is Test Coverage?**

**Interview Answer:**

Test Coverage is a metric used to measure how much of the application requirements, functionalities or code are covered by testing.

**Telugu Explanation:**

Application lo unna requirements or functionalities lo entha percentage testing cover chesamo measure cheyadanni Test Coverage antaru.

**Formula (Requirement Coverage):**

\\[ \text{Test Coverage} = \frac{\text{Requirements Tested}}{\text{Total Requirements}} \times 100 \\]

**Real-Time Example:**

Suppose an application has 100 requirements.

- Requirements tested = 80
- Total requirements = 100

Test Coverage = 80%.

**Remember:** Test Coverage = How much we tested.

## **16. What is RTM (Requirement Traceability Matrix)?**

**Interview Answer:**

RTM stands for Requirement Traceability Matrix. It is a document used to map business requirements with corresponding test scenarios and test cases to ensure that all requirements are covered by testing.

**Telugu Explanation:**

Business requirements anni corresponding test cases tho map chesi, ye requirement ki test case undho, testing complete ayyindho ledo track cheyadaniki RTM use chestaru.

**Real-Time Example:**

| Requirement ID | Requirement  | Test Case ID | Status |
| -------------- | ------------ | ------------ | ------ |
| REQ_001        | Login        | TC_001       | Pass   |
| REQ_002        | Registration | TC_002       | Pass   |
| REQ_003        | Payment      | TC_003       | Fail   |
| REQ_004        | Logout       | TC_004       | Pass   |

RTM helps ensure that no requirement is missed during testing.

**Remember:** RTM = Requirement-to-Test Case Mapping.

## **17. What are Entry and Exit Criteria?**

**Interview Answer:**

Entry Criteria define the conditions that must be satisfied before starting testing.

Exit Criteria define the conditions that must be satisfied before completing testing.

**Telugu Explanation:**

- Entry Criteria: Testing start cheyadaniki mundhu satisfy avvalsina conditions.
- Exit Criteria: Testing complete cheyadaniki satisfy avvalsina conditions.

**Real-Time Example:**

| Entry Criteria             | Exit Criteria                         |
| -------------------------- | ------------------------------------- |
| Requirements are available | Planned test cases executed           |
| Test cases are ready       | Critical defects resolved or accepted |
| Test environment is ready  | Required test coverage achieved       |
| Build is deployed          | Test summary report prepared          |

**Remember:** Entry = Before Testing. Exit = Before Closing Testing.

## **18. What is Build Verification Testing (BVT)?**

**Interview Answer:**

Build Verification Testing is performed to verify whether a newly deployed build meets the basic quality criteria and is stable enough for further testing.

**Telugu Explanation:**

New build testing environment lo deploy chesina tarvatha, basic functionalities correct ga work avutunnaya ani verify cheyadanni Build Verification Testing antaru.

**Real-Time Example:**

After deploying a new build:

- Application launches successfully.
- Login works.
- Dashboard loads.
- Important APIs respond successfully.
- Database connection works.

If critical functionality fails, the build may be rejected.

**Remember:** BVT = Verify whether the new build is testable.

**Interview Tip:** BVT and Smoke Testing are closely related. In many projects, the terms are used interchangeably, although the exact scope depends on the team's process.

## **19. What is Decision Table Testing?**

**Interview Answer:**

Decision Table Testing is a black-box testing technique used to test application behavior based on different combinations of conditions and their corresponding actions.

**Telugu Explanation:**

Different conditions combinations ki application ela respond avutundho verify cheyadaniki Decision Table Testing use chestaru.

**Real-Time Example:**

Login functionality:

| Username Valid | Password Valid | Expected Result |
| -------------- | -------------- | --------------- |
| Yes            | Yes            | Login Success   |
| Yes            | No             | Error Message   |
| No             | Yes            | Error Message   |
| No             | No             | Error Message   |

We test all possible combinations.

**Remember:** Decision Table = Conditions + Combinations + Expected Actions.

## **20. What is State Transition Testing?**

**Interview Answer:**

State Transition Testing is a black-box testing technique used to verify how an application behaves when it moves from one state to another based on user actions or events.

**Telugu Explanation:**

User actions batti application oka state nunchi inko state ki change avutundha ani verify cheyadanni State Transition Testing antaru.

**Real-Time Example: Login Account Locking**

Suppose an application locks an account after three consecutive invalid login attempts.

**Account state flow**

**Active Account**

Initial state

1st invalid attempt → 2nd invalid attempt → 3rd invalid attempt

**Locked Account**

Account locked after 3 failures

Password reset / authorized unlock

**Active Account Again**

We verify each state and transition.

**Remember:** State Transition Testing = State changes based on events or actions.

# **Final Interview Revision – 20 Questions**

| No. | Testing Type            | Easy Memory Point               |
| --- | ----------------------- | ------------------------------- |
| 1   | Smoke                   | Basic build verification        |
| 2   | Sanity                  | Specific change verification    |
| 3   | Regression              | Existing functionality check    |
| 4   | Retesting               | Verify fixed bug                |
| 5   | Smoke vs Sanity         | Build vs Specific change        |
| 6   | Retesting vs Regression | Bug fix vs Impact               |
| 7   | Compatibility           | Different browsers/devices      |
| 8   | Usability               | User-friendly                   |
| 9   | Load                    | Expected user load              |
| 10  | Stress                  | Beyond expected capacity        |
| 11  | Recovery                | Recover after failure           |
| 12  | Risk-Based              | High-risk features first        |
| 13  | Defect Leakage          | Bugs found later                |
| 14  | Defect Density          | Defects per software size       |
| 15  | Test Coverage           | Requirements covered            |
| 16  | RTM                     | Requirement mapping             |
| 17  | Entry/Exit              | Start and completion conditions |
| 18  | BVT                     | New build verification          |
| 19  | Decision Table          | Condition combinations          |
| 20  | State Transition        | State changes                   |

# **SDET Interview Practice – Test Yourself**

Try answering these without looking at the notes.

**Manual Testing – Mock Interview**

0/8 answered

**1. Which testing verifies a new build's basic functionality?**

Smoke Testing

Recovery Testing

Usability Testing

**2. Developer fixes a bug. Which testing confirms the fix?**

Regression

Retesting

Load Testing

**3. Testing an application with 10,000 expected concurrent users is an example of?**

Stress Testing

Load Testing

Recovery Testing

**4. Which metric measures defects relative to software size?**

Test Coverage

Defect Leakage

Defect Density

**5. Which document maps requirements to test cases?**

RTM

Test Suite

Test Data

**6. Testing an application on Chrome, Firefox and Edge is?**

Usability Testing

Compatibility Testing

Recovery Testing

**7. Testing different combinations of conditions and actions is?**

Decision Table Testing

State Transition Testing

Retesting

**8. Testing how an account changes from Active to Locked is?**

Boundary Value Analysis

State Transition Testing

Smoke Testing

Submit Answers

**My interview preparation advice:** Don't just memorize definitions. For every testing concept, prepare one real-time example from your Yotta KMS/LMS project. Interviewers may ask: "Have you performed this testing in your project? Explain one scenario."

That practical explanation will make your answers stronger.
