const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: './src/index.js',
        regis: './src/regis.js',
        login: './src/login.js',
    },
    output: {
        path: path.resolve(__dirname, 'public')
    }
};
