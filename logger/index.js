// https://nodejs.org/docs/latest/api/fs.html
//
//
//
// brew services start mysql
// DIFFERENT PORT THAN 3306 FOR DB

var fs = require('fs');
var path = require('path');

const TEST_PATH = path.join(__dirname, 'logger', 'logs', 'tests.txt');
const ERROR_PATH = path.join(__dirname, 'logger', 'logs', 'errors.txt');

function log(path, text) {
    const logText = formatLog(text);
    // fs.open(path, 'w', () => {
    //  //write the stuffs
    // });
}

function formatLog(text) {
    const now = new Date().toGMTString();
    return `${now}: ${text}\n\n`;
}

module.exports = {
    test(logText) {
        log(TEST_PATH, logText);
    },

    error(logText) {
        log(ERROR_PATH, logText);
    }
}
