# Contributing to Rig Docs

Thank you for your interest in contributing to the Rig documentation! We're excited to have your help in making Rig more accessible and easier to understand.

General contribution guidelines and suggestions can be found in the [How to Contribute](https://docs.rig.rs/docs/how_to_contribute) section of the Rig docs.

## Issues

Before opening a new issue, please check the existing issues to see if your topic has already been addressed. If you’re reporting a bug, please provide as much detail as possible including steps to reproduce and your environment setup.

If you’re suggesting an improvement or a new section of the documentation, let us know why it would be helpful. We love thoughtful suggestions!

## Pull Requests

Pull requests are always welcome! Please follow these steps before submitting one:

1. Open an issue describing what you plan to contribute or fix.
2. Keep your PRs small, focused, and clearly documented.
3. Follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages (e.g. `docs: add section on observability`).
4. Avoid PRs that touch multiple unrelated sections at once—smaller PRs are easier to review and merge.

If you're new to contributing, [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request) is a great free resource to get started.

## Project Structure
This documentation site is powered by [Nextra](https://nextra.site/) and lives in a standalone repo separate from the main Rig codebase.

- All documentation lives in the `pages/` directory and is written in MDX (Markdown + React components).
- Global layout and configuration are defined in `theme.config.ts` and `nextra.config.js`.

If you're unsure where a new page or section should live, open an issue first to discuss it.

## Developing

### Setup
To run the docs locally:
```bash
git clone https://github.com/0xPlaygrounds/rig-docs
cd rig-docs
pnpm install
pnpm dev
```

This will start a local development server on http://localhost:3000.

You can verify the production build with:
```bash
pnpm build
pnpm start
```

### Checking Links
You can use nextra's local dev mode to verify internal and external links are functioning as expected.
