var fs = require('fs');
var path = require('path');

const TEST_PATH = path.join(__dirname, 'logs', 'tests.txt');
const ERROR_PATH = path.join(__dirname, 'logs', 'errors.txt');

function writeLog(path, text) {
    const logText = formatLog(text);
    fs.appendFile(path, logText, (err) => {
        if (err) throw err;
    });
}

function generateLogFunction(path) {
    return text => { writeLog(path, formatLogText(text)); };
}

function formatLog(text) {
    const now = new Date().toUTCString();
    return now + ': ' + text + '\r\n';
}

function formatLogText(logText) {
    return typeof logText === 'object' ?
        JSON.stringify(logText, null, 2) :
        logText;
}

module.exports = {
    test: generateLogFunction(TEST_PATH),
    error: generateLogFunction(ERROR_PATH),
}
