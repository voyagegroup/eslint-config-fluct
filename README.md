# eslint-config-fluct

[![Build Status](https://travis-ci.org/voyagegroup/eslint-config-fluct.svg?branch=master)](https://travis-ci.org/voyagegroup/eslint-config-fluct)

## Basic Principles for Settings

- Ban a dengerous style.
- Sort a style to avoid errors and to increase productivity.
- We set rules as _error_ if we think such style causes mistake easily ABSOLUTELY.
  - In other words, we make them an error that dengerous, foot-gun, or explicit mistake.
- We set rules as _warn_,  if we think such style might be ugly
  but it's useful for debugging or you might write when trying an approach.
  - You can land a patch without fixing warning. But YOU should fix them.
- We set rules as _off_ if it is just a stylistic problem and there are no increasing any productivity.


## How To Use

### 1. install to your project

- as npm package (TBD. see [#23](https://github.com/voyagegroup/eslint-config-fluct/issues/23))
- Specify tar.gz to a dependency field in your package.json.
  - `"eslint-config-fluct": "https://github.com/voyagegroup/eslint-config-fluct/archive/<COMMIT_HASH>.tar.gz"`.
  - Please replace `<COMMIT_HASH>` with `master`, tag name (e.g. `v1.2.3`), or an arbitary commit hash.

### 2. Import via `extends` fields in your .eslintrc

```javascript
{
    "extends": [
        './node_modules/eslint-config-fluct/config/eslintrc_core.js', // for eslint's builtin rules.
        './node_modules/eslint-config-fluct/config/eslintrc_node.js', // for eslint-plugin-react
        './node_modules/eslint-config-fluct/config/eslintrc_react.js', // for eslint-plugin-node
    ]
}
```

- see also: [ESLint's document](http://eslint.org/docs/user-guide/configuring)

### 3. Set your constomized settings.

- Set [`env`](http://eslint.org/docs/user-guide/configuring#specifying-environments),
  [`parserOptions`](http://eslint.org/docs/user-guide/configuring#specifying-parser-options),
  or others as you like.



## License

- [The MIT License](./LICENSE.txt)
  - Original: https://opensource.org/licenses/MIT
