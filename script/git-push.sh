#!/bin/bash
# Simple Git Commit Automation Script with Test & Auto File Tracking

set -euo pipefail

read -p "Enter commit message: " commitMsg
[ -z "$commitMsg" ] && { echo "Error: Empty commit message. Aborting."; exit 1; }

# Ensure we're in a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: Not a git repository. Aborting."
  exit 1
fi

# Run npm test if package.json has a test script
if [ -f package.json ] && grep -q '"test"' package.json; then
  echo "Running npm test..."
  if ! npm test; then
    echo "Error: Tests failed. Aborting."
    exit 1
  fi
fi

echo "Staging changes..."
git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

git commit -m "$commitMsg" && git push
echo "Successfully committed and pushed."