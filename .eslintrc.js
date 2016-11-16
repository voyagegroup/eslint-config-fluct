// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

/**
 *  Test ourself :)
 */
module.exports = {

    // Load all configs managed in this project
    // to check them by schemes by theirs.
    'extends': [
        './config/eslintrc_core.js',
        './config/eslintrc_node.js',
        './config/eslintrc_react.js',
    ],

    'env': {
        'commonjs': true,
    },

    'root': true,
};
