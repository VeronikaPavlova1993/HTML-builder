const fs = require('node:fs');
const path = require('node:path');
const { stdout } = process;
const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    const datePath = path.join(secretFolderPath, file);
    fs.stat(datePath, (err, dates) => {
      if (err) throw err;
      if (dates.isFile()) {
        const name = path.basename(file, path.extname(file));
        const ext = path.extname(file).slice(1);
        const size = dates.size/1024;
        stdout.write(`${name} - ${ext} - ${size}kb\n`);
      };
    });
  });
});