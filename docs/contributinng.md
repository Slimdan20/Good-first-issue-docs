---
sidebar_position: 5
---

# Contributing

We are constantly seeking contributors to assist in adding new projects, improving the CLI, enhancing tests or updating our doccumentation.

## Adding new projects
You can add a new project to `good-first-issue` by submiting a Pull Request. This will require you to fill in and submit a few components:

1. Update your `data/projects.json` file
- Add your project name to the list of project in the correct alphabetical order, with the project carrying an object that includes: `name`, `description` and `q` (represents the GitHub search query).

2. Automatically update the `READ.ME` file with your new project data by running:

```bash
npm run markdown
```

## Local testing

Before submitting a Pull Request, we advice that you test your changes locally to ensure your merged code works as expected. This will involve:

1. Running the CLI globally in your Pull Request branch using:

```bash
npm i -g
```

or

```bash
npm link
```

<i>To avoid shipping code that are not explicitly listed, we limit files published to npm using the `files` property in `package.json`</i>.

2. Testing your pull request automatically:

```bash
npm test
```

You can run a manual test using specific commands:

- **Test the interactive CLI:**

```bash
good-first-issue
```

- **Test specific projects or organizations:**

```bash
good-first-issue react
good-first-issue node
good-first-issue github
good-first-issue github/semantic
```

- **Test invalid inputs:**

```bash
good-first-issue thisisntarealprojectorgithuborg
```