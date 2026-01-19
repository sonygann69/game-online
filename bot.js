const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.fdworlds.net/world.php?6f2c0e53402b379b3f613f0954a397a5');

  // держим открытым 6 часов
  await new Promise(r => setTimeout(r, 6 * 60 * 60 * 1000));
})();
