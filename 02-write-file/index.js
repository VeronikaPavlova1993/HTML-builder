const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');
const filePath = path.join(__dirname, 'text.txt');
const writeCreateWriteStream = fs.createWriteStream(filePath);
const rlCreateInterFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rlCreateInterFace.write('Введите текст тут:');
rlCreateInterFace.on('line', (data) => {
	const record = data.toString()
	if (record === 'exit') {
		rlCreateInterFace.close()
  } else {
    writeCreateWriteStream.write(record)
	}
})
rlCreateInterFace.on('close', function() {
	console.log('\nДо новых встреч;)')
}); 