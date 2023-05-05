const fs = require('fs');
const path = require('node:path');
const pathReadFile = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathReadFile, 'utf-8');
stream.on('data', chunk => console.log(chunk));
