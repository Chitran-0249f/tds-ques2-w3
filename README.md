# DevSync Solutions - Daily Commit Automation

## Overview
This repository implements automated daily commits using GitHub Actions as part of DevSync Solutions' workflow management strategy.

## Purpose
- **Activity Tracking**: Monitor project progress and team engagement
- **Automated Documentation**: Update status files and logs automatically
- **Backup and Recovery**: Consistent recording of changes
- **Compliance and Auditing**: Clear commit history for auditing processes

## Workflow Details
- **Schedule**: Runs daily at 9:30 AM UTC
- **Automation**: Creates commits to `activity.log` file
- **Email**: Configured for 23f2004962@ds.study.iitm.ac.in

## Manual Testing
The workflow can be manually triggered via GitHub Actions UI:
1. Go to the "Actions" tab
2. Select "Daily Commit Workflow"
3. Click "Run workflow"

## Setup Instructions

1. **Create a new repository on GitHub**
2. **Clone and push this code**:
   ```bash
   cd devsync_daily_commit
   git init
   git add .
   git commit -m "Initial setup: Add daily commit workflow"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Actions**:
   - Ensure Actions are enabled in repository settings
   - Grant workflow write permissions: Settings → Actions → General → Workflow permissions → Select "Read and write permissions"

4. **Test the workflow**:
   - Go to Actions tab
   - Select "Daily Commit Workflow"
   - Click "Run workflow" → "Run workflow"
   - Wait for completion (~30 seconds)
   - Verify a new commit was created

## Files
- `.github/workflows/daily-commit.yml`: GitHub Actions workflow configuration
- `activity.log`: Log file updated by automated commits
- `README.md`: This file

## Repository URL Format
After creating your GitHub repository, the URL should be:
```
https://github.com/YOUR_USERNAME/YOUR_REPO
```

## Verification Checklist
- ✅ Workflow uses cron schedule (not wildcards)
- ✅ Step includes email 23f2004962@ds.study.iitm.ac.in
- ✅ Creates a commit on each run
- ✅ Located in .github/workflows/ directory
- ✅ Can be manually triggered for testing
