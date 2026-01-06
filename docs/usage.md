---
sidebar_position: 3
---

# Command Reference

Good First Issue offers commands and flags to help you:

- Discover and select beginner-friendly issues labelled `good-first-issue`.
- Control the opening and retrieval of issues.


## Basic commands

Good First Issue uses a general syntax:

```bash
good-first-issue [target] [options]
```

Where `target` can be:
- A curated project name.
- A GitHub organization or user.
- A specific GitHub repository.

### `good-first-issue`

Run Good First Issue in interactive mode and open a project selector in the terminal using:

```bash
good-first-issue
```

### `good-first-issue <project>`

Search for issues with the `good-first-issue` label from the [curated list of projects](https://github.com/cutenode/good-first-issue#projects). 

**Usage:**

```bash
good-first-issue mocha
```

### `good-first-issue <org>`

Search GitHub organizations or users with the `good-first-issue` label.

**Usage:**

```bash
good-first-issue github
```

### `good-first-issue <org>/<repo>`

Search a specific GitHub repository under an organization with the `good-first-issue` label.

**Usage:**

```bash
good-first-issue facebook/jest
```

## CLI options (flags)

### `-o, --open`

Opens a selected issue directly in the browser.

**Usage:**

```bash
good-first-issue mocha --open
```

### `-f, --first`

Returns the first/top issue with the label `good-first-issue`.

**Usage:**

```bash
good-first-issue mocha --first
```

### `-a, --auth <github personal access token>`

Authenticate with the GitHub API using a personal access token to increase rate limits.

**Usage:**

```bash
good-first-issue mocha --auth <GITHUB_TOKEN>
```