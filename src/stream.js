const {getAction, getShift} = require('./arguments.js');
const {caesarCipher} = require('./caesar_cipher.js');

const stream = require('stream');
const codeStream = new stream.Transform({objectMode: true});

codeStream._transform = function (chunk, encoding, done) {
    try {
        done(null, caesarCipher(chunk.toString(), getShift(), getAction()));
    } catch (e) {
        done(e);
    }
};

module.exports = {codeStream};