// XXX: オブジェクトリテラルのキーの書き方を統一するために`quote-props`を有効にする
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    'plugins': [
        'react'
    ],

    'settings': {
        'react': {
            'version': '15.0', // used for 'no-deprecated' rule.
        }
    },

    // errorかwarnかの判断基準はこんな感じ:
    //  * 「デバッグや開発の時にerrorになると邪魔だけど, 将来的に直す必要がある」ものはwarning
    //  * 「アンチパターンだったり, 下手に使うと落とし穴を誘引するので, スタイルとして統一的に禁止しておきたい」ものはerror
    'rules': {
        // ESLint-plugin-React
        // https://github.com/yannickcr/eslint-plugin-react
        'react/display-name': 0, // JSXを使っているので無効化
        'react/forbid-component-props': 1,
        'react/no-danger': 0, // dangerouslySetInnerHTMLを使うケースもあるので敢えて無効化する
        'react/no-danger-with-children': 2,
        'react/no-did-mount-set-state': [1, 'disallow-in-func'],
        'react/no-did-update-set-state': [1, 'disallow-in-func'],
        'react/no-direct-mutation-state': 1, // `state`を使う場合, `setState()`の使用を強制する
        'react/no-find-dom-node': 2, // Disallow to use `ReactDOM.findDOMNode()`.
        'react/no-multi-comp': 0, // コードの見通しの為に許容
        'react/no-set-state': 1, // `setState()`を使いたいケースがあるとは思うが, 現時点ではPropsの使用を推奨する
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': [0, { // XXX: Disable to avoid mis-detection
            'customValidators': [],
            'skipShapeProps': false,
        }],
        'react/no-deprecated': 2, // Detect deprected styles
        'react/no-is-mounted': 2,
        'react/no-render-return-value': 2, //旧式の記述をNGにする
        'react/no-string-refs': 2,
        'react/prefer-es6-class': 1, // `React.createClass`ではなくES6ベースに統一する
        'react/prefer-stateless-function': [1, { // Stateless Function Componentでいいときは、それを使おう
            'ignorePureComponents': false, // we'll reconsider this option when we begin to use `PureComponent`.
        }],
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,
        'react/require-optimization': [0, {
            'allowDecorators': []
        }],
        'react/self-closing-comp': [2, {
            'component': true,
            'html': false,
        }],
        'react/require-render-return': 2, //returnで返さないと, どの道動作しないので縛る

        // デフォルト設定では, コンポーネントの引数の定義とライフサイクルメソッドが
        // 混ざっているのが筋が悪いと判断したため, 独自定義を追加した.
        'react/sort-comp': [1, {
            'order': [
                'constructor',
                'metadata',
                'rendering',
                'lifecycle',
                'everything-else'
            ],
            'groups': {
                'metadata': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext'
                ],
                'rendering': [
                    'type-annotations',
                    'render',
                    '/^render.+$/'
                ]
            }
        }],
        'react/sort-prop-types': [0, { // 後からアルファベット順を強制するのは難しいので許容
            'callbacksLast': true,
            'requiredFirst': true,
        }],
        'react/style-prop-object': 2,

        // JSX-specific rules
        'react/jsx-boolean-value': [2, 'always'], // HTMLのboolean属性を明示的に指定させる.
        'react/jsx-closing-bracket-location': 0, // どこでも良いと思ったので無効化.
        'react/jsx-curly-spacing': 0, // 瑣末なスタイルの問題なので無効化
        'react/jsx-first-prop-new-line': 0, // 見た目の問題なのでスルー
        'react/jsx-filename-extension': [2, { 'extensions': ['.jsx'] }], //jsx以外は許容しない。それ以外の拡張子が必要になったら必要に応じて追加
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'on', // `eventHandlerPropPrefix`と異なるprefix規約がどこにあろうか
            'eventHandlerPropPrefix': 'on',
        }],
        'react/jsx-indent-props': 0, // JSXのプロパティのindentを指定するが, 今更どうしようもないので無効化
        'react/jsx-indent': 1,
        'react/jsx-key': 1, // ReactElementのkey必須
        'react/jsx-max-props-per-line': 0, // 特に指定する必要を感じないので無効にしている
        'react/jsx-no-bind': [2, {// クラスベースの場合にコンストラクタ内で定義するように一貫させる
            'ignoreRefs': true, // refsに関してはそれなりに使う関係で解禁する
            'allowArrowFunctions': false,
            'allowBind': false,
        }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0, // 導入時期的に既存のテンプレート群を切り替えるのは難しいため無効にしている
        'react/jsx-no-target-blank': 1, // 管理画面で開いた先の`window.opener`とかリファラとか空でいいでしょ内部画面だし（必要なときはオプトインで）
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': [2, {
            'allowAllCaps': false,
            'ignore': [],
        }],
        'react/jsx-sort-props': 0, // 後からアルファベット順を強制するのは難しいので許容
        'react/jsx-space-before-closing': 0, // We don't this is a serious problem.
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': 2,
    }
};
