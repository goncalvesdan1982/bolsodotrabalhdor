const sharp = require('sharp');
const input = 'public/novo-logo-bolso.jpg';
const output = 'public/novo-logo-bolso.webp';
sharp(input).webp({ quality: 85, effort: 6 }).toFile(output).then(info => {
  console.log('WebP: ' + (info.size / 1024).toFixed(0) + ' KB');
}).catch(e => console.log(e.message));
