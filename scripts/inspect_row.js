const puppeteer = require('puppeteer-core');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: edgePath, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://drive.google.com/drive/folders/13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK?usp=sharing', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  const trInfo = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('*')).find(e => (e.getAttribute('aria-label') || '').includes('DSC_7494.JPG'));
    const tr = el ? el.closest('tr, [role="row"]') : null;
    if (!tr) return 'No row found';
    const attrs = {};
    for (const a of tr.attributes) attrs[a.name] = a.value;
    
    // Look for any links or IDs inside tr
    const links = Array.from(tr.querySelectorAll('a, [data-id], [data-target-id], [id]')).map(n => ({
      tag: n.tagName,
      id: n.id,
      href: n.getAttribute('href'),
      dataId: n.getAttribute('data-id'),
      dataTargetId: n.getAttribute('data-target-id')
    }));

    return { tag: tr.tagName, attrs, links };
  });
  console.log(JSON.stringify(trInfo, null, 2));
  await browser.close();
})();
