// vite.config.js
const config = require('./vite.config.min')
const pkgName = require('./package.json').name

config.build.lib.fileName = pkgName;
config.build.minify = false;

module.exports = config
