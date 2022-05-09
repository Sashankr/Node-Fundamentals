const addNumbers = (a,b) =>{
    return a + b
}

const subtractNumbers = (a,b) =>{
    return a > b ? a - b : b - a;
}

module.exports.addNumbers = addNumbers;
module.exports.subtractNumbers = subtractNumbers;