---
sidebar_position: 6
---

# Troubleshooting

You may encounter errors while running the Good First Issue CLI or during its automation.

## Common errors

- **Command not found:**

Ensure the CLI is globally installed (`npm i -g good-first-issue`) or temporarily available via npx (`npx good-first-issue`).

- **Rate limiting:**

Authenticate with your GitHub personal access token using `--auth <token>` to increase API limits.

- **No issues found:**

The CLI may return no result if the repository has no issues labelled `good-first-issue`.

- **Invalid repository or project:**

Confirm spellings and structure of target (`<org>/<repo>` or `<project>`).

## Debugging tips

- For GitHub authentication, confirm your `GITHUB_TOKEN` is valid and has the required permissions.

- Test commands manually before including them in scripts or CI/CD pipelines.

## Reporting issues

- Report issues on the Good First Issue GitHub repository.