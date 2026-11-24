# **7. Jenkins / CI-CD / DevOps – 10 Interview Questions and Answers**

These are important SDET / Playwright Automation interview questions. I'll explain each in **simple English + Telugu + real-time project examples**.

## **1. What is Jenkins?**

**Interview Answer:**

Jenkins is an open-source automation server used to automate software development tasks like building, testing, and deploying applications.

As an automation tester, I use Jenkins to execute Playwright test scripts automatically and generate test reports.

**Telugu explanation:**

Jenkins ante automation tool. Manam manually tests execute cheyakunda, Jenkins through automatic ga execute cheyochu.

**Real-time example:**

Developer pushes code → Jenkins starts the job → Playwright tests execute → Allure report gets generated.

## **2. What is CI/CD?**

**Interview Answer:**

CI/CD stands for Continuous Integration and Continuous Delivery or Continuous Deployment.

- **CI:** Developers frequently merge code into a shared repository, and automated builds and tests validate the changes.
- **CD:** Automates the process of preparing and releasing validated code.

**Telugu explanation:**

CI ante developers code changes Git lo merge chestharu. Automatic ga build and testing jaruguthayi.

CD ante tested code ni deployment or release kosam prepare chestham, or automatically deploy chestham.

**Example:**

Developer pushes code → GitHub → Jenkins → Build → Playwright Tests → Report → Deployment.

## **3. What is a Jenkins Pipeline?**

**Interview Answer:**

A Jenkins Pipeline is a sequence of automated stages used to build, test, and deploy an application.

We can define stages like Checkout, Install Dependencies, Execute Tests, and Generate Reports.

**Example:**

```
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'YOUR_REPOSITORY_URL'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
```

**Telugu:** Pipeline ante multiple stages ni sequence lo automatic ga execute cheyadam.

## **4. What is Jenkinsfile?**

**Interview Answer:**

A Jenkinsfile is a text file that contains the definition of a Jenkins Pipeline.

It is usually stored in the root directory of the Git repository.

There are two types:

- Declarative Pipeline
- Scripted Pipeline

**Example:**

```
playwright-project/
│
├── tests/
├── pages/
├── playwright.config.ts
├── package.json
└── Jenkinsfile
```

**Remember:**

Jenkins = Automation server.

Jenkins Pipeline = Automated workflow.

Jenkinsfile = File containing pipeline instructions.

## **5. What is Git?**

**Interview Answer:**

Git is a distributed version control system used to track code changes and manage different versions of source code.

It helps developers and testers collaborate on the same project.

**Important Git commands:**

```
git init
git clone <repository-url>
git status
git add .
git commit -m "Added login tests"
git pull origin main
git push origin feature-branch
git branch
git checkout -b feature-branch
git merge main
```

**Real-time Git workflow:**

1. Clone the repository.
2. Create a feature branch.
3. Write or update Playwright test scripts.
4. Add and commit changes.
5. Push the branch to GitHub.
6. Create a Pull Request (PR).
7. After review and approval, merge into main.

## **6. What is GitHub?**

**Interview Answer:**

GitHub is a cloud-based platform used to host Git repositories and collaborate with team members.

It provides features like Pull Requests, Code Reviews, Issues, and GitHub Actions.

**Difference between Git and GitHub:**

| Git                    | GitHub                        |
| ---------------------- | ----------------------------- |
| Version control system | Code hosting platform         |
| Tracks code changes    | Hosts Git repositories        |
| Works locally          | Works online                  |
| Uses Git commands      | Provides PRs and code reviews |

## **7. What is GitHub Actions?**

**Interview Answer:**

GitHub Actions is a CI/CD platform provided by GitHub. It helps automate workflows such as building, testing, and deploying applications whenever code is pushed or a Pull Request is created.

**Example workflow for Playwright:**

Create this file:

`.github/workflows/playwright.yml`

```
name: Playwright Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm ci

      - name: Install browsers
        run: npx playwright install --with-deps

      - name: Execute tests
        run: npx playwright test
```

**Telugu:** GitHub lo code push chesinappudu workflow automatic ga trigger ayi tests execute chesthundi.

## **8. What is Docker?**

[Why Are Companies Using Docker? A Real-World Case Study on the Rise of Containerization](https://images.openai.com/static-rsc-4/PsWzhQrOusvSDe2gUoO7cLaauO6kQ1oVRKoSynpJrVhjEkOat32ZFL9600aZah-3Z3fT384ZhX27FN8EDO-vtQ34sVLyPMeLQWzkCTxDYBqBdJn4nEqUIgIEIfAYtV9zEZ_ZC-wrz2n8WhHNEQ5Ioc_YAPDauxvg8UOYiVDhLas?purpose=inline)

[linkedin.com](https://www.linkedin.com/pulse/why-companies-using-docker-real-world-case-study-rise-devv-saxena-swb1c?utm_source=chatgpt.com)

**Interview Answer:**

Docker is a containerization platform used to package an application and its dependencies into containers.

It helps applications run consistently across different environments.

**Telugu explanation:**

Developer system lo work ayina application, tester system lo kuda same environment lo run avvali. Docker containers help chesthayi.

**Important Docker commands:**

```
docker --version
docker images
docker ps
docker ps -a
docker build -t playwright-app .
docker run playwright-app
docker stop <container-id>
```

**Playwright example:**

We can use Docker to run Playwright tests inside a container with the required Node.js and browser dependencies.

## **9. What is Kubernetes?**

[The basics of observing Kubernetes: A bird-watcher’s perspective | Elastic Blog](https://images.openai.com/static-rsc-4/a0DAR-JYLKqT4-e8SBaP4wh4M6FiBDzJf0gKc3lq3dy3bi6sDjT907F0Wp-vBTg1S3rKAnau8PTCFGNUhK9r15ItEviBY_PuiDxDtZOwveG8P8E5VY7WVnZ0PUlkT0R4cKP3N6BMruWvFNxmQpgXqElyvrKN36IHqPuPVJTLs5M?purpose=inline)

[elastic.co](https://www.elastic.co/blog/monitoring-kubernetes-observability-basics?utm_source=chatgpt.com)

**Interview Answer:**

Kubernetes is a container orchestration platform used to manage, deploy, scale, and monitor containers across multiple machines.

**Important terms:**

- Pod – Smallest deployable unit.
- Node – Machine that runs pods.
- Cluster – Group of nodes.
- Deployment – Manages application replicas and updates.
- Service – Provides network access to pods.

**Telugu explanation:**

Docker containers ni large scale lo manage cheyadaniki Kubernetes use chestharu.

**Interview tip:** If you have only basic knowledge, honestly say: "I have basic understanding of Kubernetes concepts, but I haven't used it extensively in my project."

## **10. How do you execute Playwright tests in a CI/CD pipeline?**

Very important interview question

**Interview Answer:**

In my Playwright automation project, I use Git and CI/CD tools to execute automated test scripts.

The process is:

**1. Developer / Tester pushes code to Git**

**2. Jenkins pipeline gets triggered**

**3. Checkout source code**

**4. Install Node.js dependencies and Playwright browsers**

**5. Execute Playwright tests**

**6. Generate HTML / Allure reports**

**7. Review test results and notify the team**

**Example commands used in the pipeline:**

```
npm ci
npx playwright install --with-deps
npx playwright test
```

**Real-time interview answer based on your project:**

"In my project, we use Playwright with TypeScript for automation testing. We maintain our test scripts in Git. When code changes are pushed, the CI pipeline can execute the Playwright test suite. First, it checks out the code, installs dependencies and browsers, and then executes the tests. Finally, we generate reports and analyze failed test cases."

Only say that Jenkins or GitHub Actions is used in your project if you have actually used it in that project. You can separately explain your hands-on Jenkins practice.

## **Quick revision – Remember these differences**

| Topic          | Simple meaning                     |
| -------------- | ---------------------------------- |
| Jenkins        | Automation server                  |
| CI/CD          | Automated integration and delivery |
| Pipeline       | Sequence of stages                 |
| Jenkinsfile    | Pipeline definition file           |
| Git            | Version control                    |
| GitHub         | Git repository hosting             |
| GitHub Actions | GitHub CI/CD                       |
| Docker         | Containerization                   |
| Kubernetes     | Container orchestration            |

## **SDET Interview Practice – Your turn**

Let's check your understanding one question at a time, like a real interview.

Question 1 of 10

**What is Jenkins? Explain how you use it in your Playwright automation project.**

Submit my answer

I'll evaluate your answer like an interviewer and help you improve it.
