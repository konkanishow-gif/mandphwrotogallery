const puppeteer = require('puppeteer-core');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testExtraction() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto('https://drive.google.com/drive/folders/13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK?usp=sharing', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  const allItems = new Map();

  for (let i = 0; i < 15; i++) {
    const batch = await page.evaluate(() => {
      const results = [];
      const els = document.querySelectorAll('[aria-label]');
      for (const el of els) {
        const label = el.getAttribute('aria-label') || '';
        if (/\.(jpg|jpeg|png|webp|heic)/i.test(label) || label.includes('Image') || label.includes('Photo')) {
          // Look on el, then closest parent with data-id or data-target-id or ssk
          const holder = el.closest('[data-id], [data-target-id], [ssk]') || el;
          const dataId = holder.getAttribute('data-id') || el.getAttribute('data-id') || '';
          const dataTargetId = holder.getAttribute('data-target-id') || el.getAttribute('data-target-id') || '';
          const ssk = holder.getAttribute('ssk') || el.getAttribute('ssk') || '';
          results.push({ label, dataId, dataTargetId, ssk });
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
      let name = item.label.replace(/\s+Image\s+Shared.*/i, '').trim();
      if (id && id.length > 10 && !allItems.has(id)) {
        allItems.set(id, name);
      }
    }

    console.log(`Scroll ${i + 1}: Total items collected: ${allItems.size}`);

    // Scroll
    await page.evaluate(() => {
      const scrollableElements = Array.from(document.querySelectorAll('*')).filter(
        el => el.scrollHeight > el.clientHeight && el.clientHeight > 150
      );
      for (const el of scrollableElements) {
        el.scrollTop = el.scrollHeight;
      }
      window.scrollTo(0, document.body.scrollHeight);
    });

    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nFinal unique photos in Welcoming CM: ${allItems.size}`);
  const list = Array.from(allItems.entries()).map(([id, name]) => ({ id, name }));
  for (let i = 0; i < Math.min(5, list.length); i++) {
    console.log(`  [${i+1}] ${list[i].name} -> ${list[i].id}`);
  }
  if (list.length > 5) {
    console.log('  ...');
    console.log(`  [${list.length}] ${list[list.length-1].name} -> ${list[list.length-1].id}`);
  }

  await browser.close();
}

testExtraction().catch(console.error);
