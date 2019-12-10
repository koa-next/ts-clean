"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("globby");
const path = require("path");
const fs = require("fs");
function cleanJs(cwd, etxArr) {
    let fileList = [];
    glob
        .sync(['**/*.ts', '**/*.tsx', '!**/*.d.ts', '!**/node_modules'], { cwd })
        .forEach(f => {
        const jf = removeSameNameJs(path.resolve(cwd, f), etxArr);
        fileList = [...fileList, ...jf];
    });
    if (fileList.length) {
        console.info('These files were deleted because the corresponding ts files exist:\n');
        console.info('  ' + fileList.filter(it => it.length > 0).join('\n  ') + '\n');
    }
}
exports.cleanJs = cleanJs;
function removeSameNameJs(f, etxArr) {
    if (!f.endsWith('.ts') && !f.endsWith('.tsx') || f.endsWith('.d.ts')) {
        return [];
    }
    return etxArr.map((item) => {
        const jf = `${f.replace(/\.tsx?/g, '')}${item}`;
        if (fs.existsSync(jf)) {
            fs.unlinkSync(jf);
            return jf;
        }
        return '';
    });
}
exports.removeSameNameJs = removeSameNameJs;
//# sourceMappingURL=index.js.map