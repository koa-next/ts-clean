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
      $ A Tool For Cleaning Up JavaScript File Built Using TypeScript
    ${chalk_1.default.bold('Usage')}
      $ ts-clean -d <source>
    ${chalk_1.default.bold('Options')}
      -d, --dir               dir(default pwd)
      -v, --version           version
  `,
    flags: {
        input: {
            type: 'string',
            alias: 'd',
            default: PWD
        }
    },
    description: false
});
const inputDir = cli.flags.input;
index_1.cleanJs(inputDir);
//# sourceMappingURL=bin.js.map