# DataDash QA Automation

## Overview
Automated QA system for DataDash's web-based reports. Uses Playwright to scrape dynamically generated tables and validate numerical data.

## Case Study
DataDash is a data engineering firm that automates QA for web-based reports. This project ensures that all numbers in dynamically generated tables are correct by scraping and summing them using Playwright, running as a GitHub Action.

## Features
- 🤖 Automated scraping of 10 different seed pages (43-52)
- 📊 Extracts and sums all numbers from all tables
- 🔍 Detailed logging for each page
- ⏰ Scheduled daily runs via GitHub Actions
- 📦 Manual trigger support for on-demand testing

## URLs Scraped
The automation scrapes the following pages:
- Seed 43: https://datadash-scraping-datasets.vercel.app/seed43
- Seed 44: https://datadash-scraping-datasets.vercel.app/seed44
- Seed 45: https://datadash-scraping-datasets.vercel.app/seed45
- Seed 46: https://datadash-scraping-datasets.vercel.app/seed46
- Seed 47: https://datadash-scraping-datasets.vercel.app/seed47
- Seed 48: https://datadash-scraping-datasets.vercel.app/seed48
- Seed 49: https://datadash-scraping-datasets.vercel.app/seed49
- Seed 50: https://datadash-scraping-datasets.vercel.app/seed50
- Seed 51: https://datadash-scraping-datasets.vercel.app/seed51
- Seed 52: https://datadash-scraping-datasets.vercel.app/seed52

## Local Testing
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium

# Run the scraper
npm test
```

## GitHub Actions Setup

1. **Push this repository to GitHub**
2. **Enable Actions** in repository settings
3. **Manually trigger the workflow**:
   - Go to Actions tab
   - Select "DataDash QA Automation"
   - Click "Run workflow"
4. **View results** in the workflow logs

## Workflow Details
- **Trigger**: Manual (`workflow_dispatch`) or scheduled (daily at 2 AM UTC)
- **Runner**: Ubuntu Latest
- **Node.js**: Version 20
- **Email Step**: Configured for 23f2004962@ds.study.iitm.ac.in

## Output Example
```
═══════════════════════════════════════════════════════
  DataDash QA Automation - Table Number Validation
═══════════════════════════════════════════════════════

🔍 Scraping: https://datadash-scraping-datasets.vercel.app/seed43
   Found 150 numbers
   Sum for this page: 12345.67

...

═══════════════════════════════════════════════════════
  📊 FINAL RESULTS
═══════════════════════════════════════════════════════
  Total pages scraped: 10
  GRAND TOTAL: 123456.78
═══════════════════════════════════════════════════════
```

## Files
- `scraper.js`: Playwright script for web scraping
- `.github/workflows/qa-automation.yml`: GitHub Actions workflow
- `package.json`: Node.js dependencies
- `README.md`: Documentation

## Requirements Met
✅ Scrapes all 10 seed pages (43-52)
✅ Computes sum of all numbers in all tables
✅ Prints total in GitHub Action logs
✅ Workflow step includes email 23f2004962@ds.study.iitm.ac.in
✅ Uses Playwright for scraping
✅ Automated via GitHub Actions
