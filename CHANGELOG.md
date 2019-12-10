# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.3](https://github.com/koa-next/ts-clean/compare/v1.0.2...v1.0.3) (2019-12-10)


### Features

* add new build file ([eee46ad](https://github.com/koa-next/ts-clean/commit/eee46ad6d1e071c8dc4377458b6f65698e52ad22))

### Added
  - `files` property to `package.json`
    - This ensures only files required for consumers to use the package are published
  - A `CHANGELOG` to make tracking changes and updating for consumers easier!
  - `lint-staged` is now used to make contributing easier

### Changed
  - Updates all repo links to point to `koa-next`
  - Moved `typescript` to `devDependencies` so that it's not installed by consumers

## [1.0.2] - 2019-01-31

### Added
  - Support for cleaning `.jsx` files

## [1.0.1] - 2019-01-11

### Added
  - Support for providing a list of directories to be cleaned
  - Ability to supply a list of file extensions to remove

## [1.0.0] - 2019-01-08

Initial release.

