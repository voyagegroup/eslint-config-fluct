# The example for web browsers which support only ES5


If you cannot use ES6, babel, TypeScript, or other "modern" solutions,
or if you'd like to write an easy script,
then you should use this example.

## Makefile

```makefile
ESLINT_BIN = ./node_modules/.bin/eslint

lint:
  $(ESLINT_BIN) eslint --ext .js ./
```


## .eslintrc.js

```javascript
/*eslint quote-props: [2, "always"], no-magic-numbers: 0 */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {

    'extends': [
        './node_modules/eslint-config-fluct/config/eslintrc_core.js',
    ],

    // Specify a parser's `ecmaVersion` to disable parsing syntax
    // which is newer than ES5.
    'parserOptions': {
        'ecmaVersion': 5,
    },

    'env': {
        'browser': true,

        // If you'd like to use `Map<K, V>`, `Set<T>`,
        // or other objects introduced in ES6 via polyfills,
        // Enable this.
        // 'es6': true,

        // If you'd like to use browserify,
        // Enable this.
        // 'commonjs': true,
    },

    'root': true,

    'rules': {
        // In the old days' environment, there is no `let a = 0`, or `const a = 0`.
        // So we must use `var` instead of them.
        'no-var': 0,
    }
};
```
