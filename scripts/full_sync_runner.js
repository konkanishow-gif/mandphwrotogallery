const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const progressFile = path.join(__dirname, 'scraped_catalog.json');

// All targets to scrape
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
  console.log(`\n========================================`);
  console.log(`Starting [${albumName}] (ID: ${folderId})`);
  console.log(`========================================`);

  await page.goto(`https://drive.google.com/drive/folders/${folderId}?usp=sharing`, {
    waitUntil: 'networkidle2',
    timeout: 30000
  }).catch(e => console.log('Goto warning:', e.message));

  await new Promise(r => setTimeout(r, 1500));

  const allItems = new Map();
  let stagnantRounds = 0;
  let lastSize = 0;

  for (let s = 0; s < 30; s++) {
    try {
      const batch = await page.evaluate(() => {
        const results = [];
        const els = document.querySelectorAll('[aria-label]');
        for (const el of els) {
          const label = el.getAttribute('aria-label') || '';
          if (/\.(jpg|jpeg|png|webp|heic)/i.test(label) || label.includes('Image') || label.includes('Photo')) {
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
          allItems.set(id, name || `Photo_${id.substring(0, 8)}.jpg`);
        }
      }

      if (allItems.size === lastSize) {
        stagnantRounds++;
        if (stagnantRounds >= 3 && allItems.size > 0) {
          console.log(`  Folder reached end at ${allItems.size} items (stagnant for 3 checks).`);
          break;
        }
      } else {
        stagnantRounds = 0;
        lastSize = allItems.size;
      }

      // Perform deep scroll
      await page.evaluate(() => {
        const scrollableElements = Array.from(document.querySelectorAll('*')).filter(
          el => el.scrollHeight > el.clientHeight && el.clientHeight > 150
        );
        for (const el of scrollableElements) {
          el.scrollTop = el.scrollHeight;
        }
        window.scrollTo(0, document.body.scrollHeight);
      });

      await new Promise(r => setTimeout(r, 800));
    } catch (err) {
      console.warn('Scroll step warning:', err.message);
      break;
    }
  }

  console.log(`>>> DONE [${albumName}]: Collected ${allItems.size} photos`);

  return Array.from(allItems.entries()).map(([id, name], idx) => ({
    id,
    name,
    thumbUrl: `https://lh3.googleusercontent.com/d/${id}=s400`,
    previewUrl: `https://lh3.googleusercontent.com/d/${id}=w1600`,
    fullUrl: `https://lh3.googleusercontent.com/d/${id}=w2400`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
    aspectRatio: idx % 3 === 0 ? '3/2' : idx % 2 === 0 ? '4/3' : '16/9'
  }));
}

async function run() {
  let progress = {};
  if (fs.existsSync(progressFile)) {
    try {
      progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
      console.log(`Loaded existing progress with ${Object.keys(progress).length} folders completed.`);
    } catch (e) {
      progress = {};
    }
  }

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  let totalPhotosAcrossAll = 0;

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const key = target.subfolderSlug ? `${target.albumSlug}__${target.subfolderSlug}` : target.albumSlug;

    if (progress[key] && progress[key].length > 50) {
      console.log(`Skipping already scraped [${target.albumName}] (${progress[key].length} photos)`);
      totalPhotosAcrossAll += progress[key].length;
      continue;
    }

    try {
      const photos = await scrapeSingleFolder(page, target);
      progress[key] = photos;
      fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');
      totalPhotosAcrossAll += photos.length;
      console.log(`Saved progress: ${key} -> ${photos.length} photos. Total so far: ${totalPhotosAcrossAll}`);
    } catch (err) {
      console.error(`Error scraping ${key}:`, err);
    }
  }

  await browser.close();
  console.log(`\n========================================`);
  console.log(`ALL SCRAPING COMPLETED! Total photos: ${totalPhotosAcrossAll}`);
  console.log(`========================================`);
}

run().catch(console.error);
