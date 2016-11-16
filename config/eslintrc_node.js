// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    'plugins': [
        'node',
    ],

    // eslint-plugin-node
    // https://github.com/mysticatea/eslint-plugin-node
    /* eslint sort-keys: 'error' */
    'rules': {
        'node/exports-style': [1, 'module.exports'],
        'node/no-deprecated-api': 2, // we'd like to detect the case of using deprecated apis.
        'node/no-missing-import': 2,
        'node/no-missing-require': 2,
        'node/no-unpublished-import': 0, // Disable until this rule follow devDependencies
        'node/no-unpublished-require': 0, // Disable until this rule follow devDependencies
        'node/no-unsupported-features': 0, // Covered by core's `no-restricted-syntax`
        'node/shebang': 2,
    },
    /* eslint-disable sort-keys */
};
