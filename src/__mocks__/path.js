'use strict';

const path = jest.genMockFromModule('path')

const resolveMock = jest.fn()
function __getResolveMock() {
    return resolveMock;
}
function resolve(...pathSegment) {
    return resolveMock(pathSegment)
}
path.__getResolveMock = __getResolveMock
path.resolve = resolve

module.exports = path
