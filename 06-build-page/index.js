const fs = require('node:fs');
const path = require('node:path');
const projectDistPath = path.join(__dirname, 'project-dist');
const indexNewPath = path.join(projectDistPath, 'index.html');
const styleNewPath = path.join(projectDistPath, 'style.css');
const assetsNewPath = path.join(projectDistPath, 'assets');
const assetsPath = path.join(__dirname, 'assets');
const stylesPath = path.join(__dirname, 'styles');
const bundleCSSPath = path.join(projectDistPath, 'style.css');
const componentsPath = path.join(__dirname, 'components');
const templatePath = path.join(__dirname, 'template.html');


async function addMergeFileStyle(stylesPath,bundleCSSPath) {
    const files = await fs.promises.readdir(stylesPath);
    const bundleArray = [];
    const filesExtCss = files.filter((file) => path.extname(file) === '.css');
    for (let file of filesExtCss) {
       const filePath = path.join(stylesPath, file);
       const dates = await fs.promises.readFile(filePath, 'utf-8');
       bundleArray.push(dates);
      }
    await fs.promises.writeFile(bundleCSSPath, bundleArray.join('\n'));
    };
    addMergeFileStyle(stylesPath, bundleCSSPath);


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
        copyDir(assetsPath, assetsNewPath);