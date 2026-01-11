---
sidebar_position: 1
---

# Good First Issue

Good First Issue is an open-source command-line tool that helps you discover beginner-friendly issues with the `good first issue` label, thereby lowering the barrier to contributing to open-source projects.

Instead of manually browsing repositories or relying on platform-specific search filters, Good First Issue offers you a streamlined way to discover issues needing contributions, directly from your terminal.

## Key Features of Good First Issue
- **Curated project support:** Ships with a predefined list of open source projects that are searched for issues with the `good first issue` label. Users can select a project from the list without needing to perform a manual search.
- **Flexible issue discovery:** Offers multiple ways to find beginner-friendly issues, such as:
    - Search by curated project name.
    - Search by GitHub organization or user.
    - Search by specific repository.
- **Interactive CLI experience:** Provides an interactive project selector when the CLI is opened without arguments, allowing users to navigate a list of supported projects directly from the terminal.
- **Optional browser integration:** Allows selected beginner-friendly issues to be opened directly in the browser using the `--open` flag.
- **Quick selection mode:** Returns the first matching issue with the `good first issue` label, from the project list or search scope when the `--first` flag is used.
- **GitHub API authentication support:** Supports authentication with the GitHub API using a personal access token via the `--auth` flag, which increases API rate limits and improves reliability.

## Benefits of using Good First Issue
- Faster discovery of beginner-friendly issues.
- Reduces friction for first-time open source contributors.
- Improves reliability for frequent issue searches via `--auth` flag.
- Standardizes contribution workflow across projects.
- Simplifies contribution by integrating issue discovery into the terminal.

