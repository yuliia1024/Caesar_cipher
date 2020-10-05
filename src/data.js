const fs = require('fs');
const {pipeline} = require('stream');
const {codeStream} = require('./stream.js');

function dataTransform(inputFile, outputFile) {
    let source;
    if(inputFile) {
        source = fs.createReadStream(inputFile);
    } else {
        source = process.stdin;
    }
    let target;
    if (outputFile) {
        target = fs.createWriteStream(outputFile, {flags: 'a'});
    } else {
        target = process.stdout;
    }
    pipeline(source, codeStream, target, err => {
        if (err) {
            process.stderr.write(err.message + '\n');
            process.exit(1);
        }
    });
}

module.exports = {
    dataTransform
};