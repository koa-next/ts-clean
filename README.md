# ts-clean

[![npm](https://img.shields.io/npm/v/ts-clean.svg)](https://www.npmjs.com/package/ts-clean)
[![npm](https://img.shields.io/npm/l/ts-clean.svg)](https://www.npmjs.com/package/ts-clean)

## Overview

> A Tool For Cleaning Up JavaScript File Built Using TypeScript

## Install

```sh
npm install ts-clean --save-dev
```

or

```sh
yarn add ts-clean --dev
```

## Usage

> package.json

```json
{
  ...
  "script": {
    ...
    "clean": "ts-clean"
  }
  ...
}
```

## Options

| Option  | Description                                                 | default     |
| ------- | ----------------------------------------------------------- | ----------- |
| d       | the dir path you need to clean                              |     pwd     |

## Example

- clean all js files built using TypeScript in the current directory

```sh
ts-clean
```

- clean all js files built using TypeScript in the app directory

```sh
ts-clean -d app
```

## Help

If you installed ts-clean in the global installation environment, you can use `ts-clean --help` for help.

## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)
