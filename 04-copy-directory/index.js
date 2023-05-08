const fs = require('node:fs/promises');
const path = require('node:path');
const filesDirnamePath = path.join(__dirname, 'files');
const filesCopyDirnamePath = path.join(__dirname, 'files-copy');

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  let records = await fs.readdir(src);

  for (let record of records) {
    let recordPath = path.join(src, record);
    let destPath = path.join(dest, record);
    let srcPathStat = await fs.stat(recordPath);
  srcPathStat.isDirectory() ?
      await copyDir(recordPath, destPath):
      await fs.copyFile(recordPath, destPath);
    }
  }
copyDir(filesDirnamePath, filesCopyDirnamePath);