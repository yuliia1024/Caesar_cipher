const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ENCRYPTION = 'encode';

const cryptoSystem = (text, shift, mode = ENCRYPTION) => {
    if (mode !== ENCRYPTION) {
        shift *= -1;
    }
    return text.split('').map(symbol => {
        const lowerCaseOfSymbol = symbol.toLowerCase();

        // Try to find an index of the symbol in the array <alphabet>
        const index = alphabet.indexOf(lowerCaseOfSymbol);
        if (index >= 0) {
            const isLowerCase = symbol === lowerCaseOfSymbol; // whether the symbol is in the lower registry
            let shiftedIndex = (index + shift) % alphabet.length;
            if (shiftedIndex < 0) {
                shiftedIndex += alphabet.length;
            }
            let image = alphabet[shiftedIndex];
            if (!isLowerCase) {
                image = image.toUpperCase();
            }
            return image;
        } else {
            return symbol;
        }
    }).join('');
};

module.exports = {cryptoSystem};