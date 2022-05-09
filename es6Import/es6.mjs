import fs from 'fs'

const textData = fs.readFileSync('../README.md','utf8');
console.log(textData);
