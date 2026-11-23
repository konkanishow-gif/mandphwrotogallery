const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const apiDir = path.join(__dirname, '..', 'src', 'app', 'api');
const backupDir = path.join(__dirname, '..', 'src', 'app_api_backup');

let moved = false;
try {
  if (fs.existsSync(apiDir)) {
    console.log('[Build] Stashing src/app/api for static export...');
    fs.renameSync(apiDir, backupDir);
    moved = true;
  }
  console.log('[Build] Running next build...');
  execSync('npx next build', { stdio: 'inherit' });
} finally {
  if (moved && fs.existsSync(backupDir)) {
    console.log('[Build] Restoring src/app/api...');
    fs.renameSync(backupDir, apiDir);
  }
}
