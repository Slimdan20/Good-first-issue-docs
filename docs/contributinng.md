---
sidebar_position: 5
---

# Contributing

We are constantly seeking contributors to help add new projects, improve the CLI, enhance tests, or update our documentation.

## Adding new projects
You can add a new project to Good First Issue by submitting a Pull Request. This requires you to update configuration files and metadata as outlined below:

1. Update your `data/projects.json` file:

Add your project to `data/projects.json` in the correct alphabetical order. Each added project should include an object with `name`, `description`, and `q` (the GitHub search query).

2. Automatically update the `README.md` file with your new project data by running:

```bash
npm run markdown
```

## Local testing

Before submitting a Pull Request, we advise testing your changes locally to ensure they work as expected. This will involve:

1. Running the CLI globally in your Pull Request branch using:

```bash
npm i -g
```

<i>This installs your module globally and allows the CLI command to run from anywhere in your terminal</i>.

or

```bash
npm link
```

<i>This links your project to the global node_modules folder, allowing you to test your CLI as if it were globally installed</i>.

<i>To avoid shipping code that is not explicitly listed, we limit files published to npm using the `files` property in `package.json`</i>.

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