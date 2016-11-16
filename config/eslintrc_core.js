// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    // see more detail: http://eslint.org/docs/rules/
    'rules': {
        // Possible Errors
        'comma-dangle': [0, 'never'], // XXX: This rule set does not think about IE8.
        'no-cond-assign': 2, // http://eslint.org/docs/rules/no-cond-assign
        'no-console': 0, // `console`
        'no-constant-condition': 1, // Use "warn" for debugging
        'no-control-regex': 2, // http://eslint.org/docs/rules/no-control-regex
        'no-debugger': 1, // debugger statement
        'no-dupe-args': 2, // http://eslint.org/docs/rules/no-dupe-args
        'no-dupe-keys': 2, // オブジェクトリテラルでの重複キー
        'no-duplicate-case': 2, // http://eslint.org/docs/rules/no-duplicate-case
        'no-empty': 2, // http://eslint.org/docs/rules/no-empty
        'no-empty-character-class': 2, // http://eslint.org/docs/rules/no-empty-character-class
        'no-ex-assign': 2, // catch内でのeへの再代入
        'no-extra-boolean-cast': 0, // `!!hoge`スタイルに依るbooleanへのキャストを禁止する. よく使うので許可.
        'no-extra-parens': [0, 'all', { // 余計な括弧をつけても警告しない
            'nestedBinaryExpressions': false,
        }],
        'no-extra-semi': 1, // 不要なセミコロンの警告
        'no-func-assign': 2, // function宣言への再代入
        'no-inner-declarations': [2, 'functions'], // http://eslint.org/docs/rules/no-inner-declarations
        'no-invalid-regexp': 2, //http://eslint.org/docs/rules/no-invalid-regexp
        'no-irregular-whitespace': 2, // http://eslint.org/docs/rules/no-irregular-whitespace
        'no-obj-calls': 2, // http://eslint.org/docs/rules/no-obj-calls
        'no-regex-spaces': 2, // http://eslint.org/docs/rules/no-regex-spaces
        'no-sparse-arrays': 2, // Arrayリテラルで`[,,]`のようなスタイル禁止
        'no-unexpected-multiline': 1, //セミコロン忘れなどにより複数行に渡る式文が意図せぬ意味にとられるのを防ぐ
        'no-unreachable': 1, // 未到達コードの警告
        'no-unsafe-finally': 2, // http://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-negation': 2, // http://eslint.org/docs/rules/no-unsafe-negation
        'use-isnan': 2, // Number.isNaNを使いましょう
        'valid-jsdoc': [2, {
            'requireReturn': true,
            'requireParamDescription': false,
            'requireReturnDescription': false,
            //'preferType': {
            //    'Boolean': 'boolean',
            //    'Number': 'number',
            //    'String': 'string',
            //    'object': 'Object',
            //},
        }],
        'valid-typeof': [1, {'requireStringLiterals': true}], // typeofの比較対象が妥当な型名か

        // Best Practices
        'accessor-pairs': 0, // Allow only getter or setter to define a "read-only" or "write-only" object
        'array-callback-return': 1, // http://eslint.org/docs/rules/array-callback-return.html
        'block-scoped-var': 2, // http://eslint.org/docs/rules/block-scoped-var
        'class-methods-use-this': 0, // A class method does not use `this` in some case.
        'complexity': 0, // 循環複雑度を日々のlintで継続して測る必要性がないと思う.
        'consistent-return': 2, // 関数内の複数のreturnがあった場合, すべてが値を返すか, 返さないかを一貫させる
        'curly': 2, // ブロックに対する波括弧の強制
        'default-case': 0, // `default`が無い`switch`文, そういうのもあるよね.
        'dot-location': 0, // `.`が行頭か行末かなんて, どっちでもいいので今のところ気にしない
        'dot-notation': 2, // `obj[key]`のようなアクセスを禁止
        'eqeqeq': [2, 'always'], // 厳密比較以外の禁止
        'guard-for-in': 0, // `for-in`でprototype全部列挙したいこともある.
        'no-alert': 1, // デバッグ時に使うこともあるので警告に留める
        'no-caller': 2, // arguments.caller, arguments.calleeの禁止
        'no-case-declarations': 2, // switch-case文内でのブロックなし変数定義を禁止する
        'no-div-regex': 2, // 間違えやすいので縛る. http://eslint.org/docs/rules/no-div-regex
        'no-empty-function': 0, // XXX: 変数の型を安定させる都合で空の関数をasssignしたいときだってあるので普段は許容.
        'no-empty-pattern': 2, // 分割代入時に何も取り出さないようなミスを避ける
        'no-else-return': 0, // どちらか一方に分岐するのを明示したくて`else`を使うこともある.
        'no-eq-null': 2, // nullと比較するときは厳密比較を強制する
        'no-eval': 2, // eval禁止
        'no-extend-native': 2, // ライブラリ以外で使うことなし
        'no-extra-bind': 1, // http://eslint.org/docs/rules/no-extra-bind
        'no-extra-label': 2, // http://eslint.org/docs/rules/no-extra-label
        'no-fallthrough': 1, // switch内のcaseごとのbreakまたはreturnの強制
        'no-floating-decimal': 0, // `0.1`と`.1`の混在くらい見逃してやろう.
        'no-global-assign': 2, // http://eslint.org/docs/rules/no-global-assign
        'no-implicit-coercion': [2, { // http://eslint.org/docs/rules/no-implicit-coercion
            'boolean': true,
            'number': true,
            'string': true,
            'allow': ['!!', '+'], // Allow only these patterns.
        }],
        'no-implicit-globals': 2, // 暗黙のグローバル変数の生成の禁止
        'no-implied-eval': 2, // 暗黙のevalの禁止
        'no-invalid-this': 1, // `undefined`となりうる`this`を検知する
        'no-iterator': 2, // Ban the legacy JavaScript syntax
        'no-labels': 2, // Using a label is a rare case
        'no-lone-blocks': 1, // http://eslint.org/docs/rules/no-lone-blocks
        'no-loop-func': 2, // http://eslint.org/docs/rules/no-loop-func
        'no-magic-numbers': [1, { // マジックナンバーは良くないので一旦変数として名前付けしてから使うのを推奨する
            'ignore': [0, 1], // これらの値はよく使うことがあるので（テスト, フラグ値）許容する.
        }],
        'no-multi-spaces': 1, // http://eslint.org/docs/rules/no-multi-spaces
        'no-multi-str': 0, // http://eslint.org/docs/rules/no-multi-str
        'no-new': 1, // 変数への代入の無い`new`に警告
        'no-new-func': 1, // `new Function()`の警告（最適化テクニックとしての使用を考慮して禁止しない）
        'no-new-wrappers': 1, // 大抵, このルールで縛られるオブジェクトをnewすることはない. http://eslint.org/docs/rules/no-new-wrappers
        'no-octal': 2, // 間違えやすいので禁止
        'no-octal-escape': 2, // http://eslint.org/docs/rules/no-octal-escape
        'no-param-reassign': [1, {
            'props': true
        }], // 仮引数への再代入
        'no-proto': 2, // `__proto__`の拡張禁止
        'no-prototype-builtins': 2, // http://eslint.org/docs/rules/no-prototype-builtins
        'no-redeclare': 2, // 同名の変数の再宣言を禁止
        'no-return-assign': 2, // return文中での代入禁止
        'no-return-await': 1, // Warn. Because this is not a serious problem which is same degree with `no-return-assign`.
        'no-script-url': 2, // `javascript:`の使用を禁止
        'no-self-assign': 2, // http://eslint.org/docs/rules/no-self-assign
        'no-self-compare': 2, //http://eslint.org/docs/rules/no-self-compare
        'no-sequences': 2, // We're not doing a code golf: http://eslint.org/docs/rules/no-sequences
        'no-throw-literal': 2, // `Error`以外のthrowを禁止
        'no-unmodified-loop-condition': 1, // ループ条件が変更されず無限ループになりうる状態を検知
        'no-unused-expressions': 2, // 間違いの元なので禁止. http://eslint.org/docs/rules/no-unused-expressions
        'no-unused-labels': 2, // http://eslint.org/docs/rules/no-unused-labels
        'no-useless-call': 1, // 不要な`Function.prototype.apply/call`を警告する
        'no-useless-computed-key': 1, // 単に文字列で済むオブジェクトを、プロパティのキーにした場合に警告
        'no-useless-concat': 1, // 不要な文字列リテラルのconcatを警告する
        'no-useless-escape': 1, // 文字列リテラル中の不要なエスケープを警告する
        'no-useless-return': 1, // see http://eslint.org/docs/rules/no-useless-return
        'no-useless-rename': 1, // import, export, destructuringによる同名の参照へのリネームを禁止
        'no-void': 2, // We live in after ES5 : http://eslint.org/docs/rules/no-void
        'no-warning-comments': 0, // We need not always enable this : http://eslint.org/docs/rules/no-warning-comments
        'no-with': 2, // with禁止
        'radix': 2, // `parseInt()`の第2引数を強制する
        'vars-on-top': 0, // こんなバカバカしい習慣に従う必要は無い: http://eslint.org/docs/rules/vars-on-top
        'wrap-iife': 0, // http://eslint.org/docs/rules/wrap-iife
        'yoda': 0, // http://eslint.org/docs/rules/wrap-iife

        // Strict Mode
        'strict': [2, 'global'], // strict modeの強制

        // Variables
        'init-declarations': [2, 'always'], // 変数宣言時の初期化を矯正する
        'no-catch-shadow': 2, // http://eslint.org/docs/rules/no-catch-shadow
        'no-delete-var': 2, // 変数に対する`delete`の禁止. まず使わないので禁止
        'no-label-var': 2,
        'no-shadow': 0, // 変数のshadowingの可否
        'no-shadow-restricted-names': 2,
        'no-undef': 2, // Bann a variables which are not defined explicitly.
        'no-undef-init': 2, // 未初期化の変数の禁止
        'no-undefined': 0, // `undefined`の使用禁止
        'no-unused-vars': [1, { // 未使用変数の警告. デバッグ時に未使用変数ができてしまうことを考慮し警告に.
            'vars': 'all',
            'args': 'after-used',
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_', // `catch (_e) {...}`みたいな
        }],
        'no-use-before-define': [2, { // 変数の宣言箇所より前方で使用した場合に警告. Temporary Dead Zone対策
            'functions': false, //  Function declarations are hoisted.
            'classes': true, // Class declarations are not hoisted. We should warn it.
        }],

        // Node.js & CommonJS
        'callback-return': 0, // http://eslint.org/docs/rules/callback-return
        'global-require': 2, // トップレベル以外での`require()`の使用を禁止
        'no-mixed-requires': [2, { // まとめてrequire()とかしない
            'grouping': true,
        }],
        'no-new-require': 2, // requireと同時にnewとか, まず使わないので禁止
        'no-path-concat': 2, // パス名解決は`path`モジュールを使うようにする.
        'no-process-env': 0, // browserifyしてるから使うこともある.
        'no-process-exit': 0, // process.exit()を禁止するか
        'no-restricted-modules': 0, // 今の所特になし: http://eslint.org/docs/rules/no-restricted-modules
        'no-sync': 1, // 同期メソッドの呼び出しを警告する

        // Stylistic Issues
        'array-bracket-spacing': 0, // http://eslint.org/docs/rules/array-bracket-spacing
        'block-spacing': 0, // http://eslint.org/docs/rules/block-spacing
        'brace-style': [0, 'stroustrup', { // http://eslint.org/docs/rules/brace-style
            'allowSingleLine': true
        }],
        'camelcase': 2, // CamelCaseか
        'comma-spacing': [2, { // http://eslint.org/docs/rules/comma-spacing
            'before': false,
            'after': true
        }],
        'comma-style': [1, 'last', {// http://eslint.org/docs/rules/comma-style
            'exceptions': {
                'ArrayPattern': false,
                'ArrowFunctionExpression': false,
                'CallExpression': false,
                'FunctionDeclaration': false,
                'FunctionExpression': false,
                'ImportDeclaration': false,
                'ObjectPattern': false,
            },
        }],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'that'], // `this`参照時の記法に一貫性を持たせる
        'eol-last': [0, 'always'], // we don't have to restrict this.
        'func-call-spacing': 2, // `fn ()`のような空白の禁止
        'func-name-matching': 1,
        'func-names': [0, 'as-needed'], // we don't have to restrict this in most case.
        'func-style': [0, 'declaration', {
            'allowArrowFunctions': true,
        }], // XXX: a top level functions should be a declaration, but it would be good to allow both forms of declaration/expression.
        'id-length': 0, // http://eslint.org/docs/rules/id-length
        'id-match': 0, // http://eslint.org/docs/rules/id-match
        'id-blacklist': 0, // http://eslint.org/docs/rules/id-blacklist
        'indent': [2, 4, {
            'SwitchCase': 1,
            'MemberExpression': 1,
            'CallExpression': {
                'arguments': 'first',
            },
        }],
        'jsx-quotes': [1, 'prefer-single'], // Sort with JavaScript.
        'keyword-spacing': [1, { // キーワードの前後にスペースを挟む
            'before': true,
            'after': true,
        }],
        'key-spacing': 0, // オブジェクトリテラルの際に, keyの後ろにスペースを許容しない
        'linebreak-style': [2, 'unix'], // 改行コード
        'lines-around-comment': 0, // http://eslint.org/docs/rules/lines-around-comment
        'lines-around-directive': 2, // http://eslint.org/docs/rules/lines-around-directive 有効にしておく
        'line-comment-position': 0, // http://eslint.org/docs/rules/line-comment-position 行コメントの位置は強制の必要ない
        'max-depth': [2, 10], // http://eslint.org/docs/rules/max-depth
        'max-len': [2, 256, 4, { // http://eslint.org/docs/rules/max-len
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true,
        }],
        'max-lines': 0, // あからさまにおかしいものは普通はコードレビューで落とす. http://eslint.org/docs/rules/max-lines
        'max-nested-callback': 0, // http://eslint.org/docs/rules/max-nested-callbacks
        'max-params': 0, // http://eslint.org/docs/rules/max-params
        'max-statements': 0, // http://eslint.org/docs/rules/max-statements
        'max-statements-per-line': [1, { // http://eslint.org/docs/rules/max-statements-per-line
            'max': 1, // 基本的に, 1行に2以上のstatementを書くのはダメでしょ
        }],
        'multiline-ternary': 0, //三項演算子改行したほうが見やすいと思うが、改行されて無くても良いと思うので
        'new-cap': 1, // コンストラクタ呼び出しの頭文字をUpper Caseに
        'new-parens': 2, // コンストラクタ呼び出しに`()`を要求
        'newline-after-var': 0, // http://eslint.org/docs/rules/newline-after-var
        'newline-before-return' : 0, //returnの前の空行は別にいらないと思う。見難くなったら1にすればいいと思うので 今は0:無効
        'newline-per-chained-call': [0, { // http://eslint.org/docs/rules/newline-per-chained-call
            'ignoreChainWithDepth': 4, // I don't feel this is a real problem at now...
        }],
        'no-array-constructor': 2, // Arrayコンストラクタの使用禁止
        'no-bitwise': [2, { // 普通bit演算子とか使わない...
            'allow': [],
            'int32Hint': true, // `a|0`でint32として取り扱わせるっていう最適化技法は許容する
        }],
        'no-continue': 0, // http://eslint.org/docs/rules/no-continue
        'no-inline-comments': 0, // http://eslint.org/docs/rules/no-inline-comments
        'no-lonely-if': 1, // http://eslint.org/docs/rules/no-lonely-if
        'no-mixed-operators': 2, // http://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-spaces-and-tabs': 2, // スペースとタブの混在禁止
        'no-multiple-empty-lines': 0, // Empty lines somtimes means a section of a program.
        'no-negated-condition': 0, // http://eslint.org/docs/rules/no-negated-condition
        'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
        'no-new-object': 2, // `new Object()`の禁止
        'no-plusplus': 0, // 使うことだってある.
        'no-restricted-globals' : [2,
            //指定したグローバル変数を利用すると警告する(一般的すぎる名前を付けて意図しないグローバル変数の上書きをしないように)。必要に応じて追加していく。
            // 現状上げたのはここから http://qiita.com/mysticatea/items/cae686a8bebdfaaa5735
            'name', 'top', 'event'
        ],
        'no-restricted-syntax': [2,
            // - 文字列リフレクションの温床となりうるfor-inをBAN（使いたい場合は明示的に無効化しましょう）
            'ForInStatement'
        ],
        'no-restricted-properties': 0, // http://eslint.org/docs/rules/no-restricted-properties 特定のプロパティアクセスを禁止にする必要はない
        'no-ternary': 0, // http://eslint.org/docs/rules/no-ternary
        'no-trailing-spaces': 1, // 行末の空白を警告する
        'no-template-curly-in-string': 2, // 通常の文字列の中に、テンプレート リテラルの埋め込み式を書くと警告
        'no-underscore-dangle': [2, { // `_`から始まる名前の禁止
            'allowAfterThis': true, // private memberの作れるように, `this`の直後に関しては許容する
        }],
        'no-unneeded-ternary': 2, // 真偽値をそのまま返せば良いところで三項演算子を使ってはいないか
        'object-curly-spacing': 0, // http://eslint.org/docs/rules/object-curly-spacing
        'object-curly-newline': 0, // こんなのcase by case. http://eslint.org/docs/rules/object-curly-newline
        'one-var': [2, 'never'], // http://eslint.org/docs/rules/one-var
        'one-var-declaration-per-line': 1, // http://eslint.org/docs/rules/one-var-declaration-per-line
        'operator-linebreak': [2, 'after'], // 改行時, 演算子が行末になるようにする
        'padded-blocks': 0,
        'prefer-numeric-literals': 2, // http://eslint.org/docs/rules/prefer-numeric-literals parseInt による2進数・8進数・16進数の定数値を警告(数値リテラルを使う)
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
        }],
        'require-jsdoc': [0, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true,
                'ArrowFunctionExpression': true,
            }
        }],
        'semi': [2, 'always'], // Enfoce semicolon.
        'semi-spacing':[2, { // Ban a space char before semicolon.
            'before': false,
            'after': true
        }],
        'space-before-blocks': 0, // http://eslint.org/docs/rules/space-before-blocks
        'space-before-function-paren': [1, { // http://eslint.org/docs/rules/space-before-function-parentheses
            'anonymous': 'ignore',
            'named': 'never',
            'asyncArrow': 'ignore',
        }],
        'space-in-parens': 0,
        'space-infix-ops': 1, // 演算子の前後にスペースを挟む
        'space-unary-ops': [1, { // 演算子の前後にスペースを要求するか
            'words': true, // It's more readable for keywords.
            'nonwords': false, // It's very tired to enforce before/after of `++`/`--`.
        }],
        'spaced-comment': 0,
        'sort-keys': 0, // We don't think this is useful for all object by default.
        'unicode-bom': 2, // Ban byte-order-mark
        'wrap-regex': 0,

        // ECMASctipt 6
        'arrow-body-style': 0, // arrow functionのbodyのスタイルについて（see: #1700）
        'arrow-parens': 2, // arrow functionの引数のカッコを必須にする
        'arrow-spacing': [1, { // arrow functionのarrow (=>)の前後に空白を開ける
            'before': true,
            'after': true
        }],
        'constructor-super': 2, // 派生クラスのコンストラクタでは必ずsuperが呼ばれているか確かめる
        'generator-star-spacing': [2, {
            'before': false,
            'after': true
        }],
        'no-class-assign': 2, // class宣言で定義された変数への代入を禁止
        'no-confusing-arrow': [1, { // arrow functionか不等号かややこしいのを検知
            'allowParens': true,
        }],
        'no-const-assign': 2, // http://eslint.org/docs/rules/no-const-assign
        'no-dupe-class-members': 2, // http://eslint.org/docs/rules/no-dupe-class-members
        'no-duplicate-imports': 1, // http://eslint.org/docs/rules/no-duplicate-imports
        'no-new-symbol': 2, // `Symbol` is not a constructor.
        'no-restricted-imports': 0, // Should specified by for each projects: http://eslint.org/docs/rules/no-restricted-imports
        'no-this-before-super': 2, // http://eslint.org/docs/rules/no-this-before-super
        'no-useless-constructor': 0, // This is a stylistic issue.
        'no-var': 1,
        'no-tabs': 2,
        'no-whitespace-before-property': 2, // プロパティアクセス時に変な空白の入れ方を禁止する
        'object-shorthand': 0,
        'prefer-arrow-callback': [0, {
            'allowNamedFunctions': true, // for debugging stack trace
            'allowUnboundThis': false, // callback内で、bind等無しにはthisを使えなくする
        }],
        'prefer-const': [1, {
            'destructuring': 'any', // どれか一つでもconstにできるならconstにするぞ
        }],
        'prefer-rest-params': 1, // `arguments`の参照ではなくrest parameterの使用を推奨する
        'prefer-spread': 1, // `Function.prototype.apply`よりもspread operatorの使用を推奨する
        'prefer-template': 0,
        'require-yield': 2, // generator関数内にyieldが無いと警告する
        'rest-spread-spacing': [2, 'never'], // clarify 'this is rest/spread operator'.
        'symbol-description': 2, // Symbol()にdescriptionを渡すことを強制する
        'template-curly-spacing': [1, 'never'], // http://eslint.org/docs/rules/template-curly-spacing
        'yield-star-spacing': [1, 'after'], // http://eslint.org/docs/rules/%20yield-star-spacing.html
        'object-property-newline' : 0 // 一行に複数のプロパティがあってもいいと思うので無効
    }
};
