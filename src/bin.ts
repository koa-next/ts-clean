#!/usr/bin/env node

import * as meow from 'meow';
import chalk from 'chalk';
import { cleanJs } from './index';

const PWD = process.cwd();
const cli = meow({
  help: `
    ${chalk.bold('Description')}
      $ A tool for cleaning up JavaScript files compiled from TypeScript
    ${chalk.bold('Usage')}
      $ ts-clean -d <source>
    ${chalk.bold('Options')}
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

dirArr.map((item: string) => {
  cleanJs(item, extArr);
});
