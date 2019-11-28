import * as glob from 'globby';
import * as path from 'path';
import * as fs from 'fs';

export function cleanJs(cwd: string, etxArr: string[]): void {
  let fileList: string[] = [];
  glob
  .sync(['**/*.ts', '**/*.tsx', '!**/*.d.ts', '!**/node_modules'], { cwd })
    .forEach(f => {
      const jf = removeSameNameJs(path.resolve(cwd, f), etxArr);
      fileList = [...fileList, ...jf];
    });
  if (fileList.length) {
    console.info(
      'These files were deleted because the corresponding ts files exist:\n'
    );
    console.info('  ' + fileList.filter(it => it.length > 0).join('\n  ') + '\n');
  }
}

export function removeSameNameJs(f: string, etxArr: string[]): string[] {
  if (!f.endsWith('.ts') && !f.endsWith('.tsx') || f.endsWith('.d.ts')) {
    return [];
  }
  return etxArr.map((item: string) => {
    const jf = `${f.replace(/.tsx?/g, '')}${item}`;
    if (fs.existsSync(jf)) {
      fs.unlinkSync(jf);
      return jf;
    }
    return '';
  });
}
