---
sidebar_position: 4
---

# Automation and scripting
Good First Issue can be used in scripts and automated workflows to move beginner-friendly issue discovery from manual workflows to one needing little or no human input.

Maintainers can also utilize its automation to monitor repository health and ensure issues are readily available to contributors.

This allows developers to consistently discover issues to work on, while helping teams ensure entry-level issues remain available without manual checks.

## Shell scripting
You can use Good First Issue in shell scripts to fetch issues with the `good first issue` label automatically.

For automated workflows, Good First Issue should be run in a non-interactive mode.

### Usage

<i>Ensure the Good First Issue CLI is installed and available in your PATH</i>.

Create a `daily-issues.sh` file and add the following:

```bash
repos=("facebook/react" "mochajs/mocha" "nodejs/node")

for repo in "${repos[@]}"; do
  good-first-issue "$repo" --first --open
done
```

You can run your script file manually:

```bash
./daily-issues.sh
```

Or automatically at regular intervals:

```bash
0 9 * * * /path/to/daily-issues.sh
```

<i>This example uses `cron` on Linux or macOS systems</i>.

To avoid hitting rate limits in automated workflows, you can integrate with GitHub authentication.

## Continuous Integration/Deployment

You can use Good First Issue as part of a CI/CD pipeline to automatically verify that a project remains ready for new contributors. This alerts teams when no beginner-friendly issues are available.

The CLI integrates with several CI/CD platforms.

### GitHub Actions
The Good First Issue CLI can be used with GitHub Actions to ensure beginner-friendly issues are readily available to contributors.

#### Setup:

Create a `.github/workflows/check-good-first-issues.yml`

```yml
name: Repository Health Check
on:
  schedule:
    # Runs every Monday at 9am UTC
    - cron: '0 9 * * 1'
  workflow_dispatch: # allows manual trigger

jobs:
  check_issues:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Install Node.js if needed
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      # Install Good First Issue CLI globally
      - run: npm install -g good-first-issue

      # Run CLI in non-interactive mode against a repository
      - run: good-first-issue my-org/my-repo --first --auth ${{ secrets.GITHUB_TOKEN }}
```

<i>The `GITHUB_TOKEN` secret is automatically provided by GitHub Actions.</i>

### CircleCI

The Good First Issue CLI can be integrated as part of your CircleCI workflow.

#### Setup:

Navigate to your `.circleci` folder and create a `config.yml` file:

```yml
# .circleci/config.yml
version: 2.1
jobs:
  check_good_first_issues:
    docker:
      - image: cimg/node:18.16
    steps:
      - checkout
      - run:
          name: Install Good First Issue CLI
          command: npm install -g good-first-issue
      - run:
          name: Run Good First Issue check
          command: good-first-issue my-org/my-repo --first --auth $GITHUB_TOKEN

workflows:
  version: 2
  health_check:
    jobs:
      - check_good_first_issues
```

<i>Ensure `GITHUB_TOKEN` is configured as an environment variable in your CircleCI project settings.</i>