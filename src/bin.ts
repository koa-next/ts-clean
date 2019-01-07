#!/usr/bin/env node

import * as meow from 'meow';
import chalk from 'chalk';
import { cleanJs } from './index';

const PWD = process.cwd();
const cli = meow({
  help: `
    ${chalk.bold('Description')}
      $ A Tool For Cleaning Up JavaScript File Built Using TypeScript
    ${chalk.bold('Usage')}
      $ ts-clean -d <source>
    ${chalk.bold('Options')}
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

cleanJs(inputDir);
