const path = require('path');
const ModuleReplacement = require('./webpack.module-replacement.config');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname),
    },
    plugins: [
        ...ModuleReplacement({ Module1: false, Module2: false })
    ]
};
