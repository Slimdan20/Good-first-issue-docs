---
sidebar_position: 4
---

# Automation and scripting
Good First Issue can be used in scripts and automated workflows to move beginner-friendly issue discovery from manual workflows to one needing little or no human input.

Maintainers can also utilize its automation to monitor repository health, and ensure issues are readily available to contributors.

## Shell scripting (personal automation)
You can use Good First Issue in shell scripts to fetch issues with the `good-first-issue` label automaatically.
For automated workflows, Good First Issue should be run in a non-interactive mode.

### What is a script?
A script is a text file that provides the computer with information on what to do and when to do it, thereby eliminating workflow repetition.

### Example usage
Goal: Utilize Good First Issus in shell scripts to fetch random beginner friendly issues from favorite repositories.

To get started, create a new file with the `.sh` extension.

Next, add the bash shebang to your created file:

```bash
#!/bin/bash
```

To make the script executable, open your terminal and run:

```bash
chmod +x your-script.sh
```