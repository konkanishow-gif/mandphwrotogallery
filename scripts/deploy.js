const { execSync } = require('child_process');

console.log('🚀 [1/3] Building Next.js static production export...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📦 [2/3] Syncing out/ to AWS S3 bucket fwkmmc-manddsobhann-org-bucket...');
execSync('aws s3 sync out/ s3://fwkmmc-manddsobhann-org-bucket --delete --profile fwkmmc', { stdio: 'inherit' });

console.log('⚡ [3/3] Invalidating CloudFront edge cache (E2E9F31U7GC726)...');
execSync('aws cloudfront create-invalidation --distribution-id E2E9F31U7GC726 --paths "/*" --profile fwkmmc', { stdio: 'inherit' });

console.log('🎉 Successfully deployed and live at https://fwkmmc.manddsobhann.org/');
