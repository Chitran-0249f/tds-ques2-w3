const { chromium } = require('playwright');

const SEEDS = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
const BASE_URL = 'https://datadash-scraping-datasets.vercel.app/seed';

async function scrapeTableNumbers(page, url) {
    console.log(`\n🔍 Scraping: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait for tables to load
    await page.waitForSelector('table', { timeout: 10000 });

    // Extract all numbers from all tables
    const numbers = await page.evaluate(() => {
        const tables = document.querySelectorAll('table');
        const allNumbers = [];

        tables.forEach((table, tableIndex) => {
            const cells = table.querySelectorAll('td, th');
            cells.forEach(cell => {
                const text = cell.textContent.trim();
                // Extract all numbers (including decimals and negatives)
                const matches = text.match(/-?\d+\.?\d*/g);
                if (matches) {
                    matches.forEach(match => {
                        const num = parseFloat(match);
                        if (!isNaN(num)) {
                            allNumbers.push(num);
                        }
                    });
                }
            });
        });

        return allNumbers;
    });

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`   Found ${numbers.length} numbers`);
    console.log(`   Sum for this page: ${sum}`);

    return sum;
}

async function main() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('  DataDash QA Automation - Table Number Validation');
    console.log('═══════════════════════════════════════════════════════');

    const browser = await chromium.launch();
    const page = await browser.newPage();

    let grandTotal = 0;

    for (const seed of SEEDS) {
        const url = `${BASE_URL}${seed}`;
        try {
            const pageSum = await scrapeTableNumbers(page, url);
            grandTotal += pageSum;
        } catch (error) {
            console.error(`❌ Error scraping seed ${seed}:`, error.message);
        }
    }

    await browser.close();

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('  📊 FINAL RESULTS');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`  Total pages scraped: ${SEEDS.length}`);
    console.log(`  GRAND TOTAL: ${grandTotal}`);
    console.log('═══════════════════════════════════════════════════════\n');
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
