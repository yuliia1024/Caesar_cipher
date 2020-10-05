const {getAction, getInputFile, getOutputFile, getShift, errorHandler, args} = require ('./arguments');

function validateArgs() {
    if (!getAction(args)) {
        errorHandler(new Error('argument --action is required'));
    }
    if (!getShift(args)) {
        errorHandler(new Error('argument --shift is required'));
    }
    const fs = require('fs');
    let file = getInputFile(args);
    if (file) {
        fs.access(file, fs.constants.R_OK, err => errorHandler(err));
    }
    file = getOutputFile(args);
    if (file) {
        fs.access(file, fs.constants.W_OK, err => errorHandler(err));
    }
}

module.exports = {
    validateArgs,
}