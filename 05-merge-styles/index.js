const fs = require('node:fs');
const path = require('node:path');

const stylesPath = path.join(__dirname, 'styles');
const projectDistPath = path.join(__dirname, 'project-dist');
const bundlePath = path.join(projectDistPath, 'bundle.css');

async function addMergeFileStyle(stylesPath, bundlePath) {
  const files = await fs.promises.readdir(stylesPath);
  const bundleArray = [];
  const filesExtCss = files.filter((file) => path.extname(file) === '.css');
  for (let file of filesExtCss) {
     const filePath = path.join(stylesPath, file);
     const dates = await fs.promises.readFile(filePath, 'utf-8');
     bundleArray.push(dates);
    }
  await fs.promises.writeFile(bundlePath, bundleArray.join('\n'));
  };

addMergeFileStyle(stylesPath, bundlePath);