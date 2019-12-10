"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('fs');
const index_1 = require("./index");
const fsMock = require('fs');
describe('index functions', () => {
    describe('removeSameNameJs function', () => {
        const extArray = ['.js'];
        beforeEach(() => {
            fsMock.__getExistsSyncMock().mockReset();
        });
        it('should not clean when non typescript file', () => {
            // Given-When
            const result = index_1.removeSameNameJs('MyScript.txt', extArray);
            // Then
            expect(result).toEqual([]);
            expect(fsMock.__getExistsSyncMock()).not.toHaveBeenCalled();
            expect(fsMock.__getUnlinkSyncMock()).not.toHaveBeenCalled();
        });
        it('should clean existing file with ts extension', () => {
            // Given
            fsMock.__getExistsSyncMock().mockReturnValue(true);
            // When
            const result = index_1.removeSameNameJs('MyScript.ts', extArray);
            // Then
            expect(result).toEqual(['MyScript.js']);
            expect(fsMock.__getExistsSyncMock()).toHaveBeenCalledWith('MyScript.js');
            expect(fsMock.__getUnlinkSyncMock()).toHaveBeenCalledWith('MyScript.js');
        });
        it('should clean files with tsx extension', () => {
            // Given
            fsMock.__getExistsSyncMock().mockReturnValue(true);
            // When
            const result = index_1.removeSameNameJs('MyScript.tsx', extArray);
            // Then
            expect(result).toEqual(['MyScript.js']);
            expect(fsMock.__getExistsSyncMock()).toHaveBeenCalledWith('MyScript.js');
            expect(fsMock.__getUnlinkSyncMock()).toHaveBeenCalledWith('MyScript.js');
        });
        it('should clean files with ts extension and containing "ts" in name', () => {
            // Given
            fsMock.__getExistsSyncMock().mockReturnValue(true);
            // When
            const result = index_1.removeSameNameJs('MyScripts.tsx', extArray);
            // Then
            expect(result).toEqual(['MyScripts.js']);
            expect(fsMock.__getExistsSyncMock()).toHaveBeenCalledWith('MyScripts.js');
            expect(fsMock.__getUnlinkSyncMock()).toHaveBeenCalledWith('MyScripts.js');
        });
    });
});
//# sourceMappingURL=index.spec.js.map