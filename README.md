# Sample project to reproduce the bundle issue with `typedorm` library

## Steps to reproduce issue with webpack

### Install dependencies:
```shell
npm install
```

### Compile project
```shell
npm run build
```

### Bundle project
```shell
npm run bundle
```

The above commands results in a lot of warnings such as:
```shell
WARNING in ./node_modules/@typedorm/common/index.js 13:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./dist/src/index.js 6:17-44

WARNING in ./node_modules/@typedorm/common/private-api.js 13:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@typedorm/common/index.js
 @ ./dist/src/index.js 6:17-44

WARNING in ./node_modules/@typedorm/common/public-api.js 13:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@typedorm/common/index.js
 @ ./dist/src/index.js 6:17-44

WARNING in ./node_modules/@typedorm/common/src/constants.js 3:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@typedorm/common/public-api.js
 @ ./node_modules/@typedorm/common/index.js
 @ ./dist/src/index.js 6:17-44
 
 ...
```

### Run the generated bundle
```shell
node dist/bundle/index.js
```

The above command errors:
```shell
/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:3458
	throw e;
	^

Error: Cannot find module '@typedorm/common/public-api'
    at webpackEmptyContext (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:3456:10)
    at /private/tmp/typedorm-bundle-issue/dist/bundle/index.js:1082:18
    at /private/tmp/typedorm-bundle-issue/dist/bundle/index.js:1070:17
    at Object../node_modules/@typedorm/common/index.js (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:1079:3)
    at __webpack_require__ (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:23562:42)
    at Object../dist/src/index.js (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:16:18)
    at __webpack_require__ (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:23562:42)
    at /private/tmp/typedorm-bundle-issue/dist/bundle/index.js:23626:37
    at Object.<anonymous> (/private/tmp/typedorm-bundle-issue/dist/bundle/index.js:23628:12)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND'
}
```
