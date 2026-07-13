const sharp = require('sharp');
const fs = require('fs');
const input = 'public/logo-novo-bolso-trabalhador.JPG';
const output = 'public/logo-novo-bolso-trabalhador.webp';
const origSize = fs.statSync(input).size;
sharp(input)
  .webp({ quality: 85, effort: 6 })
  .toFile(output)
  .then(info => {
    const pct = ((1 - info.size / origSize) * 100).toFixed(1);
    console.log('JPG:  ' + (origSize / 1024).toFixed(0) + ' KB');
    console.log('WebP: ' + (info.size / 1024).toFixed(0) + ' KB');
    console.log('Reducao: ' + pct + '%');
  })
  .catch(e => console.log('Error:', e.message));
