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
        'node/no-hide-core-modules': [1, {
            'allow': [],
            'ignoreDirectDependencies': false,
            'ignoreIndirectDependencies': false,
        }],
        'node/no-missing-import': 2,
        'node/no-missing-require': 2,
        'node/no-unpublished-bin': 0, // You should enable this rules if you develop a npm package.
        'node/no-unpublished-import': 2, // Specify more details in your project.
        'node/no-unpublished-require': 2, // Specify more details in your project.
        'node/no-unsupported-features': 0, // Covered by core's `no-restricted-syntax`
        'node/process-exit-as-throw': 2, // sort with `consistent-return` rules.
        'node/shebang': 2,
    },
    /* eslint-disable sort-keys */
};
