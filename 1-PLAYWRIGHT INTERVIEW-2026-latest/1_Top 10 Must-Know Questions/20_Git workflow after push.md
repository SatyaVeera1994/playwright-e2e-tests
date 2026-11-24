I'll explain how to raise a Pull Request (PR) in GitHub step by step, using your Playwright automation project as an example.

## Step 1: Create a feature branch

Open your project in VS Code and run these commands in the terminal.

```
git status
git switch main
git pull origin main
git switch -c feature/login-test
```

- `git switch main` — switches to the main branch.
- `git pull origin main` — gets the latest changes from main.
- `git switch -c feature/login-test` — creates a new branch and switches to it.

## Step 2: Commit your changes

After writing or updating your Playwright test:

```
git add .
git commit -m "Added Playwright login test"
```

- `git add .` — stages your changes.
- `git commit` — saves the staged changes in your local Git history.

## Step 3: Push your branch to GitHub

```
git push -u origin feature/login-test
```

Now your branch is available in GitHub.

## Step 4: Raise the Pull Request

[git and github](https://images.openai.com/static-rsc-4/mGBqsP9FgkLv21V0vZ2IEaUPEGfj8Jm2nY0y06sJ1EndWYHXhcjr5HWhtfAT1fLw_2_H0_AEksgoEfbVXO7I_2ACR6SYxD9K_yG7OTrPimw0_fY0vOfAJMndWQYoMu6IzIZYV4ceNm6mVQ5ZdZucW6nChwZfWYCogLn4YtXP5k4?purpose=inline)

1\. Open your GitHub repository

Go to your repository in the browser. You may see a Compare & pull request button after pushing your branch. Click it.

[How to create a pull request in GitHub | Opensource.com](https://images.openai.com/static-rsc-4/YguBRBJAJTKhUU6yM_Y-bhg2HHtWi5J73DZlMPRhRQvj6xjPXN-xqMFCArcwKi1Tfed8g0mzsFzm5r8P3Z9MbruvhN4IemTrrwzF-OzHpaG6hJtQzIOg5ZDmZh6T_f9UVHBSHjLBYQWYSB_3Cu27FU4DjTGMq3B0hGecBI4AwxY?purpose=inline)

2\. Select the branches

If you don't see the button, click Pull requests → New pull request.

- Base: `main` — where you want your changes to go.
- Compare: `feature/login-test` — your branch containing the changes.

[How to Leverage GitHub for Research – Smarter, Faster, and More Reproducible Science for Early/Mid-Career Researchers](https://images.openai.com/static-rsc-4/ikWRp7TqKrdB6whfBsGBp2JRer5MYnWyVz2dEMr908uKYucdckkOzlmNIAvslKHLfsNNzMyt3rgLw3YXN03YZ_FuXwF56neE5LSnLGiM1kINGkb2TH_FYgTHdFAGFqfUtQDFNJV-3XUVROEa4qcZhVe_s2C7HjVPRsz02KvXdek?purpose=inline)

3\. Add the PR title and description

Example title: `Added Playwright Login Test`

Describe what you changed and click Create pull request.

[OpenITI documentation - KITAB](https://images.openai.com/static-rsc-4/0rbPxXzQ_3rSSLykRn4spZTNQbisAXtx7jULY-7TZOs32y_hRjgk7keHmH7H4-GAemeWWTEjlEAX_HEU7grpw5Wvy7X76uA2RbFUnDKZY2Nv3JIAKbTkeM3Hts2rGVs-RqFFhIeu324qOKvvnSXzVkWuoGXdQjz9kXx6DOC_i8A?purpose=inline)

4\. Assign a reviewer

On the right side, select your team member under Reviewers. Add an Assignee if your team's process requires one.

## Step 5: What happens after raising the PR?

1. Your team member reviews your code.
2. They may request changes.
3. You fix the code and push again to the same branch.
4. The PR updates automatically.
5. Once approved and checks pass, an authorized person merges it into `main`.

## Remember this Git workflow

```
Create branch
     ↓
Write Playwright test
     ↓
git add .
     ↓
git commit -m "Added login test"
     ↓
git push
     ↓
Create Pull Request on GitHub
     ↓
Assign reviewer
     ↓
Review and approve
     ↓
Merge into main
```

Interview answer: “After pushing my feature branch to GitHub, I create a Pull Request by selecting the target branch as `main` and my feature branch as the source. I provide a title and description, assign a reviewer, address review comments, and merge the PR after approval.”
