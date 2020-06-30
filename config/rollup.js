var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/sosout/dou-js)
 * API https://github.com/sosout/dou-js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} sosout. All Rights Reserved
 * Licensed under MIT (https://github.com/sosout/dou-js/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'dou-js';
exports.banner = banner;
exports.getCompiler = getCompiler;
