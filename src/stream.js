const {getAction, getShift} = require('./arguments.js');
const {cryptoSystem} = require('./caesar_cipher.js');

const stream = require('stream');
const code = new stream.Transform({objectMode: true});


code._transform = function (chunk, encoding, done) {
    try {
        done(null, cryptoSystem(chunk.toString(), getShift(), getAction()));
    } catch (e) {
        done(e);
    }
};

module.exports = {code};