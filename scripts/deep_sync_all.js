const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const progressFile = path.join(__dirname, 'scraped_catalog.json');
const generateScript = path.join(__dirname, 'generate_catalog_ts.js');

const targets = [
  { albumSlug: 'grand-inauguration', albumName: 'Grand Inauguration', folderId: '1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G', subfolderSlug: null },
  { albumSlug: 'welcoming-cm', albumName: 'Welcoming CM', folderId: '13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK', subfolderSlug: null },
  
  // Singing Marathon Days
  { albumSlug: 'singing-marathon', albumName: 'Day 01', folderId: '1s1_BIyXCnZ0FuUD_wYPd_9u7-msrkHmU', subfolderSlug: 'day-01-03-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 02', folderId: '1zFFwIMaTbPLURU0JqGjmFRE4-yIkTyFn', subfolderSlug: 'day-02-04-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 03', folderId: '1evOLsxQekIiqJezZxyEMghw5gVm-zXDb', subfolderSlug: 'day-03-05-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 04', folderId: '1kE6BfFl2Un_8BwPE6B_3VPixQC9X3nq6', subfolderSlug: 'day-04-06-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 05', folderId: '14VgPRm7PWUdXT-MP84NH4ETQYjYdlObq', subfolderSlug: 'day-05-07-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 06', folderId: '1ywg-NlvFeSIh_APZDwXt_hrlInfrnrel', subfolderSlug: 'day-06-08-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 07', folderId: '1McqHDu3ZYK6BeLPgm8vEMcupzT_zVjVT', subfolderSlug: 'day-07-09-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 08', folderId: '1I7E0v4iP4eLTVBbt-mrokVFlT_OD-kBV', subfolderSlug: 'day-08-10-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 09', folderId: '1rHIQemeLpluBDytGIOnpfY7uZULDZ8_m', subfolderSlug: 'day-09-11-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 10', folderId: '1onVC0Hz3j5Yk0TiZx4PSfcUgPVQJiVhS', subfolderSlug: 'day-10-12-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 11', folderId: '1pLipdxcdo69SmNalZzZcqjHhtLrW8ufO', subfolderSlug: 'day-11-13-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 12', folderId: '1gzsvmvHyaJA-ptQJPbDQ3nYeWfpB58Gk', subfolderSlug: 'day-12-14-11-2026' },
  { albumSlug: 'singing-marathon', albumName: 'Day 13', folderId: '1ghXI4naB2FxnSM0B2QO6ZXjheeNP03qZ', subfolderSlug: 'day-13-15-11-2026' },

  // Symposium Subfolders
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 01 & 02', folderId: '1PauVrxOPB_sbf9r69Fh4bSTM3EH9jSzV', subfolderSlug: 'symposium-01-02' },
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 03 & 04', folderId: '1Wmwpv6uAaiLs4QnmILLGWClm2ksoEVzO', subfolderSlug: 'symposium-03-04' },
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 05 & 06', folderId: '1SvnsdO4grgre7xUV_5kwEyO6pXa4Ug8Q', subfolderSlug: 'symposium-05-06' },
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 07 & 08', folderId: '1EWpC0K0QzGaHPT0WD4LkuD_ZSB0D8N1q', subfolderSlug: 'symposium-07-08' },
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 09 & 10', folderId: '1dmGC7sYxHlcgrwxXKrcn9_Dqw8rL7Xl2', subfolderSlug: 'symposium-09-10' },
  { albumSlug: 'symposium-felicitations', albumName: 'Symposium 11 & 12', folderId: '11mXxNsFn21MJ8ZvE4PTUKRbjXLJTYghF', subfolderSlug: 'symposium-11-12' },

  // Other Top-level Albums
  { albumSlug: 'valedictory-function', albumName: 'Valedictory Function', folderId: '1vNqKQlEpRwDYRBGsF1fuOxVp3x9yy-To', subfolderSlug: null },
  { albumSlug: 'cultural-exhibition', albumName: 'Cultural Exhibition', folderId: '1BgkA-smrAVbgeeEO3_N5xfakowMsjQ5S', subfolderSlug: null },
  { albumSlug: 'ful-fulota', albumName: "Ful Fulota - Children's Niro'nto'ri", folderId: '17oGRRZA1lXTtANvXJHq5Y-G-2wy1UMjY', subfolderSlug: null },
  { albumSlug: 'hall-of-fame', albumName: 'Hall of Fame', folderId: '1mJOHpsJisVRjXQN3j51arrqLASGj1leL', subfolderSlug: null }
];

async function scrapeSingleFolder(page, target) {
  const { folderId, albumName } = target;
  console.log('\n========================================');
  console.log('Deep Sync: [' + albumName + '] (ID: ' + folderId + ')');
  console.log('========================================');

  await page.goto('https://drive.google.com/drive/folders/' + folderId + '?usp=sharing', {
    waitUntil: 'networkidle2',
    timeout: 45000
  }).catch(e => console.log('Goto warning:', e.message));

  await new Promise(r => setTimeout(r, 1500));

  const allItems = new Map();
  let stagnantCount = 0;
  let lastSize = 0;
  let round = 0;
  const maxRounds = 150; // allow up to 4,000+ photos per folder

  while (stagnantCount < 6 && round < maxRounds) {
    round++;

    const items = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('[data-id], tr[role="row"], [aria-label]').forEach(el => {
        const id = el.getAttribute('data-id') || el.getAttribute('data-target-id');
        const text = el.innerText || '';
        const aria = el.getAttribute('aria-label') || '';
        const name = aria.replace(/\s+Image\s+Shared.*/i, '').trim() || text.split('\n')[0].trim();
        if (id && id.length > 15) {
          if (/\.(jpg|jpeg|png|webp|heic)/i.test(name) || name.includes('DSC') || name.includes('AVDM') || name.includes('RUF') || name.includes('IMG')) {
            results.push({ id, name });
          }
        }
      });
      return results;
    });

    for (const item of items) {
      if (!allItems.has(item.id)) {
        allItems.set(item.id, item.name || ('Photo_' + item.id.slice(0, 8) + '.jpg'));
      }
    }

    if (allItems.size === lastSize) {
      stagnantCount++;
    } else {
      stagnantCount = 0;
      lastSize = allItems.size;
      if (round % 5 === 0 || allItems.size > 0) {
        console.log('  [Round ' + round + '] Unique photos so far: ' + allItems.size);
      }
    }

    // Deep scroll
    await page.evaluate(() => {
      const scrollableElements = Array.from(document.querySelectorAll('*')).filter(
        el => el.scrollHeight > el.clientHeight && el.clientHeight > 180
      );
      for (const el of scrollableElements) {
        el.scrollTop += 6000;
      }
      window.scrollBy(0, 6000);
    });

    await new Promise(r => setTimeout(r, 400));
  }

  console.log('>>> FINISHED [' + albumName + ']: Collected ' + allItems.size + ' photos');

  return Array.from(allItems.entries()).map(([id, name], idx) => ({
    id,
    name,
    thumbUrl: 'https://lh3.googleusercontent.com/d/' + id + '=s400',
    previewUrl: 'https://lh3.googleusercontent.com/d/' + id + '=w1600',
    fullUrl: 'https://lh3.googleusercontent.com/d/' + id + '=w2400',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=' + id,
    aspectRatio: idx % 3 === 0 ? '3/2' : idx % 2 === 0 ? '4/3' : '16/9'
  }));
}

async function run() {
  let progress = {};
  if (fs.existsSync(progressFile)) {
    try {
      progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
      console.log('Loaded existing progress file.');
    } catch (e) {
      progress = {};
    }
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  let totalPhotosAcrossAll = 0;

  const alreadyCompleted = new Set([
    'grand-inauguration',
    'welcoming-cm',
    'singing-marathon__day-01-03-11-2026',
    'singing-marathon__day-02-04-11-2026',
    'singing-marathon__day-03-05-11-2026',
    'singing-marathon__day-04-06-11-2026',
    'singing-marathon__day-05-07-11-2026',
    'singing-marathon__day-06-08-11-2026',
    'singing-marathon__day-07-09-11-2026',
    'singing-marathon__day-08-10-11-2026',
    'singing-marathon__day-09-11-11-2026',
    'singing-marathon__day-10-12-11-2026',
    'singing-marathon__day-11-13-11-2026'
  ]);

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const key = target.subfolderSlug ? (target.albumSlug + '__' + target.subfolderSlug) : target.albumSlug;

    if (alreadyCompleted.has(key)) {
      console.log('Skipping already completed folder: ' + key);
      continue;
    }

    try {
      const photos = await scrapeSingleFolder(page, target);
      if (photos.length > 0) {
        progress[key] = photos;
        fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');
        console.log('Saved ' + photos.length + ' photos for ' + key + ' to scraped_catalog.json');

        // Automatically regenerate driveCatalog.ts
        try {
          execSync('node "' + generateScript + '"', { stdio: 'inherit' });
          console.log('driveCatalog.ts regenerated successfully.');
        } catch (genErr) {
          console.warn('Catalog generation warning: ' + genErr.message);
        }
      }
      totalPhotosAcrossAll += photos.length;
    } catch (err) {
      console.error('Error scraping ' + key + ':', err.message);
    }
  }

  await browser.close();
  console.log('\n========================================');
  console.log('ALL TARGETS COMPLETED! Total photos collected: ' + totalPhotosAcrossAll);
  console.log('========================================');
}

run().catch(console.error);
