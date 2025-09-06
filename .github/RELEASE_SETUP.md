# Release Setup Guide

This repository uses semantic-release with GitHub Actions for automated package releases.

## Prerequisites

### 1. GitHub Secrets

Add the following secrets to your GitHub repository:

- `NPM_TOKEN`: Your npm authentication token for publishing packages
  - Go to [npmjs.com](https://www.npmjs.com) → Account Settings → Access Tokens
  - Create a new token with "Automation" type
  - Add it to your repository secrets

### 2. Repository Permissions

Ensure the following permissions are enabled:
- Contents: Write (for creating releases and tags)
- Issues: Write (for linking issues in release notes)
- Pull requests: Write (for linking PRs in release notes)

## Workflows

### 1. Automatic Release (`release.yml`)
- **Trigger**: Push to `main` branch
- **Behavior**: Releases all packages that have changes
- **Usage**: Automatic on every push to main

### 2. Selective Release (`selective-release.yml`)
- **Trigger**: Push to `main` branch
- **Behavior**: Only releases packages that have file changes
- **Usage**: More efficient, only builds/releases changed packages

### 3. Manual Release (`manual-release.yml`)
- **Trigger**: Manual workflow dispatch
- **Behavior**: Allows you to choose which package(s) to release
- **Usage**: Go to Actions → Manual Release → Run workflow

## Commit Convention

Use conventional commits to trigger releases:

```bash
# UI package changes
feat(ui): add new button component
fix(ui): resolve styling issue

# Common package changes  
feat(common): add utility function
fix(common): fix type definition

# Auth package changes
feat(auth): add login functionality
fix(auth): resolve token validation
```

## Release Process

1. **Automatic**: Push commits with conventional commit messages to `main`
2. **Manual**: Use the Manual Release workflow in GitHub Actions
3. **Selective**: The selective release workflow automatically detects changes

## Package Versions

Each package maintains its own version:
- `@trash-kit/ui`: Independent versioning
- `@trash-kit/common`: Independent versioning  
- `@trash-kit/auth`: Independent versioning

## Tags

Releases are tagged with package-specific formats:
- `@trash-kit/ui-v1.0.0`
- `@trash-kit/common-v1.0.0`
- `@trash-kit/auth-v1.0.0`

## Changelogs

Each package maintains its own `CHANGELOG.md`:
- `packages/ui/CHANGELOG.md`
- `packages/common/CHANGELOG.md`
- `packages/auth/CHANGELOG.md`
