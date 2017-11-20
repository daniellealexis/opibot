// https://nodejs.org/docs/latest/api/fs.html
//
//
//
// brew services start mysql
// DIFFERENT PORT THAN 3306 FOR DB

// require fs
const BASE_LOG_PATH = './logs';
const TEST_PATH = BASE_LOG_PATH + '/errors.txt';
const ERROR_PATH = BASE_LOG_PATH + '/tests.txt';

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
