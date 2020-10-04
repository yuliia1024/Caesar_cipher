const {dataTransformation} = require('./src/data.js');
const {getOutputFile, getInputFile, validateArgs} = require('./src/arguments.js');
validateArgs();
dataTransformation(getInputFile(), getOutputFile());