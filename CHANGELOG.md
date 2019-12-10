# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

This release marks a sparkly clean repo!
The published package now only contains whats needed, halving the unpacked size,
as well as greatly reducing the final install size by about 40mb!

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

[Unreleased]: https://github.com/koa-next/ts-clean/compare/v1.0.2...HEAD

[1.0.2]: https://github.com/koa-next/ts-clean/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/koa-next/ts-clean/compare/81dcc0...v1.0.1
[1.0.0]: https://github.com/koa-next/ts-clean/compare/81dcc0...v1.0.1
