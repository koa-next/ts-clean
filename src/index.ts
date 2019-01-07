import * as glob from 'globby';
import * as path from 'path';
import * as fs from 'fs';

export function cleanJs(cwd: string) {
  const fileList: string[] = [];
  glob
    .sync(['**/*.ts', '!**/*.d.ts', '!**/node_modules'], { cwd })
    .forEach(f => {
      const jf = removeSameNameJs(path.resolve(cwd, f));
      if (jf) {
        fileList.push(jf);
      }
    });
  if (fileList.length) {
    console.info('These file was deleted because the same name ts file was exist!\n');
    console.info('  ' + fileList.join('\n  ') + '\n');
  }
}

export function removeSameNameJs(f: string) {
  if (!f.endsWith('.ts') || f.endsWith('.d.ts')) {
    return;
  }

  const jf = f.substring(0, f.length - 2) + 'js';
  if (fs.existsSync(jf)) {
    fs.unlinkSync(jf);
    return jf;
  }
}
