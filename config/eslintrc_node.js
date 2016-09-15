// XXX: オブジェクトリテラルのキーの書き方を統一するために`quote-props`を有効にする
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    'plugins': [
        'node',
    ],

    // errorかwarnかの判断基準はこんな感じ:
    //  * 「デバッグや開発の時にerrorになると邪魔だけど, 将来的に直す必要がある」ものはwarning
    //  * 「アンチパターンだったり, 下手に使うと落とし穴を誘引するので, スタイルとして統一的に禁止しておきたい」ものはerror
    'rules': {
        // eslint-plugin-node
        // https://github.com/mysticatea/eslint-plugin-node
        'node/no-missing-import': 0, // Node v5ではmodule syntaxは使えないので無効
        'node/no-missing-require': 2, // Node v5では`require()`対象のファイルの実在確認はあった方が良いので有効
        'node/no-unpublished-import': 0, // devDependenciesに明示してあってもerrorにされるのもあって今は見送り
        'node/no-unpublished-require': 0, // devDependenciesに明示してあってもerrorにされるのもあって今は見送り
        'node/no-unsupported-features': 0, // 'no-restricted-syntax'で対応してるので使ってない
        'node/shebang': 0, // shebang付きで起動するパターンがないので使ってない
        'node/no-deprecated-api': 2, //非推奨APIは使わない方向に倒すべきだと思うのでエラーにしてみる
    }
};
