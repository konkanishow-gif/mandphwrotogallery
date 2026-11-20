const puppeteer = require('puppeteer-core');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testFolder(folderId) {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(`https://drive.google.com/drive/folders/${folderId}?usp=sharing`, {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  const allItems = new Map();

  for (let i = 0; i < 15; i++) {
    // Collect from current DOM
    const batch = await page.evaluate(() => {
      const results = [];
      // Look for all elements with aria-label containing Image or file extension
      const els = document.querySelectorAll('[aria-label]');
      for (const el of els) {
        const label = el.getAttribute('aria-label') || '';
        const ssk = el.getAttribute('ssk') || '';
        const dataId = el.getAttribute('data-id') || '';
        const dataTargetId = el.getAttribute('data-target-id') || '';
        
        if (/\.(jpg|jpeg|png|webp)/i.test(label)) {
          results.push({ label, ssk, dataId, dataTargetId });
        }
      }
      return results;
    });

    for (const item of batch) {
      let id = item.dataId || item.dataTargetId;
      if (!id && item.ssk) {
        const parts = item.ssk.split(':');
        id = parts[parts.length - 1].replace(/-\d+-\d+$/, '');
      }
      const name = item.label.replace(/\s+Image\s+Shared.*/i, '').trim();
      if (id && name && !allItems.has(id)) {
        allItems.set(id, name);
      }
    }

    console.log(`Scroll ${i + 1}: Total unique items collected so far: ${allItems.size}`);

    // Scroll
    await page.evaluate(() => {
      const scrollableElements = Array.from(document.querySelectorAll('*')).filter(
        el => el.scrollHeight > el.clientHeight && el.clientHeight > 200
      );
      for (const el of scrollableElements) {
        el.scrollTop = el.scrollHeight;
      }
      window.scrollTo(0, document.body.scrollHeight);
    });

    await new Promise(r => setTimeout(r, 1200));
  }

  console.log(`\nDONE! Final Unique Photos in Grand Inauguration: ${allItems.size}`);
  const photosArray = Array.from(allItems.entries()).map(([id, name]) => ({ id, name }));
  for (let i = 0; i < Math.min(10, photosArray.length); i++) {
    console.log(`  [${i+1}] ${photosArray[i].name} (ID: ${photosArray[i].id})`);
  }
  console.log('...');
  for (let i = Math.max(0, photosArray.length - 5); i < photosArray.length; i++) {
    console.log(`  [${i+1}] ${photosArray[i].name} (ID: ${photosArray[i].id})`);
  }

  await browser.close();
}

testFolder('1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G').catch(console.error);
