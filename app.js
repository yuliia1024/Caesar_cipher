const {dataTransform} = require('./src/data.js');
const {getOutputFile, getInputFile} = require('./src/arguments.js');
const { validateArgs} = require("./src/validator")
validateArgs();
dataTransform(getInputFile(), getOutputFile());