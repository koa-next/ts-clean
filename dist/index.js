"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("globby");
const path = require("path");
const fs = require("fs");
function cleanJs(cwd) {
    const fileList = [];
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
exports.cleanJs = cleanJs;
function removeSameNameJs(f) {
    if (!f.endsWith('.ts') || f.endsWith('.d.ts')) {
        return;
    }
    const jf = f.substring(0, f.length - 2) + 'js';
    if (fs.existsSync(jf)) {
        fs.unlinkSync(jf);
        return jf;
    }
}
exports.removeSameNameJs = removeSameNameJs;
//# sourceMappingURL=index.js.map