const ACTION = ['a', 'action'];
const INPUT_FILE = ['i', 'input'];
const OUTPUT_FILE = ['o', 'output'];
const SHIFT = ['s', 'shift'];

const args = require('minimist')(process.argv.slice(2));

function errorHandler(err) {
    if (err) {
        process.stderr.write(err.message + '\n');
        process.exit(1);
    }
}

function getInputFile() {
    return args[INPUT_FILE[0]] || args[INPUT_FILE[1]];
}

function getOutputFile() {
    return args[OUTPUT_FILE[0]] || args[OUTPUT_FILE[1]];
}

function getAction() {
    return args[ACTION[0]] || args[ACTION[1]];
}

function getShift() {
    return args[SHIFT[0]] || args[SHIFT[1]];
}

module.exports = {
    getInputFile,
    getOutputFile,
    getAction,
    getShift,
    errorHandler,
    args
};