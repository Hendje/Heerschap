'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    sh.cp('-R', sourcePath, destPath);

    const src = upath.resolve(upath.dirname(__filename), '../src/index.html');
    const dest = upath.resolve(upath.dirname(__filename), '../dist/index.html');
    sh.cp(src, dest);
};
