#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meow = require("meow");
const chalk_1 = require("chalk");
const index_1 = require("./index");
const PWD = process.cwd();
const cli = meow({
    help: `
    ${chalk_1.default.bold('Description')}
      $ A tool for cleaning up JavaScript files compiled from TypeScript
    ${chalk_1.default.bold('Usage')}
      $ ts-clean -d <source>
    ${chalk_1.default.bold('Options')}
      -d, --dir               directory(default pwd)
      -e, --etx               extension(default .js,.js.map,.jsx,.jsx.map)
      -v, --version           version
  `,
    flags: {
        dir: {
            type: 'string',
            alias: 'd',
            default: PWD
        },
        ext: {
            type: 'string',
            alias: 'e',
            default: '.js,.js.map,.jsx,.jsx.map'
        }
    },
    description: false
});
const dirArr = cli.flags.dir.split(',');
const extArr = cli.flags.ext.split(',');
dirArr.map((item) => {
    index_1.cleanJs(item, extArr);
});
//# sourceMappingURL=bin.js.map