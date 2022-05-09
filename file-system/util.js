const fs = require('fs');

function createFile(name,contents){
    fs.writeFileSync(name,contents); 
}

module.exports = {
    createFile
}