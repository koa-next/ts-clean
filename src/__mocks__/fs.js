'use strict';

const fs = jest.genMockFromModule('fs')

const readdirMock = jest.fn()
function __getReaddirMock() {
    return readdirMock
}
function readdir(filePath, options, callback) {
    return readdirMock(filePath, options, callback)
}
fs.__getReaddirMock = __getReaddirMock
fs.readdir = readdir

const statMock = jest.fn()
function __getStatMock() {
    return statMock
}
function stat(filePath, callback) {
    return statMock(filePath, callback)
}
fs.__getStatMock = __getStatMock
fs.stat = stat

const readFileMock = jest.fn()
function __getReadFileMock() {
    return readFileMock
}
function readFile(filePath, callback) {
    return readFileMock(filePath, callback)
}
fs.__getReadFileMock = __getReadFileMock
fs.readFile = readFile

const existsSyncMock = jest.fn()
function __getExistsSyncMock() {
    return existsSyncMock
}
function existsSync(filePath) {
    return existsSyncMock(filePath)
}
fs.__getExistsSyncMock = __getExistsSyncMock
fs.existsSync = existsSync

const unlinkSyncMock = jest.fn()
function __getUnlinkSyncMock() {
    return unlinkSyncMock
}
function unlinkSync(filePath) {
    return unlinkSyncMock(filePath)
}
fs.__getUnlinkSyncMock = __getUnlinkSyncMock
fs.unlinkSync = unlinkSync

module.exports = fs
