# path-note.html 構成マップ

## この資料の使い方

`path-note.html`は、配布を簡単にするため、スタイル・画面・アプリ処理を1ファイルにまとめています。

最初から最後まで読む必要はありません。変更したい内容から関係する章と主要関数を探してください。

行番号は変更でずれるため、エディターの検索で章コメントや関数名を探す方法を推奨します。

## 大きな構成

```text
path-note.html
├─ head
│  ├─ Tailwind設定・フォント
│  └─ style
│     ├─ テーマ変数
│     ├─ 共通UI
│     ├─ 操作UI
│     └─ 表示モード
├─ body
│  ├─ ヘッダー
│  ├─ サイドバー
│  ├─ メイン一覧
│  └─ 各種ダイアログ
├─ data.jsの読み込み
└─ アプリ処理
   ├─ 共通処理
   ├─ 設定・永続化
   ├─ データモデル
   ├─ 状態管理
   ├─ 描画
   ├─ UI制御
   ├─ データ入出力
   ├─ フィードバック
   ├─ イベント
   └─ 初期化
```

## CSSの章

| 検索する章コメント | 内容 | 変更例 |
| --- | --- | --- |
| `テーマ変数: 表示モードごとの色・形` | 色、背景、角丸、影などの変数 | 全体の色を調整する |
| `共通UI: レイアウト・ナビゲーション・カード・一覧行` | タブ、カテゴリ、一覧、詳細画面 | 一覧行の見た目を変える |
| `操作UI: メニュー・ダイアログ・ボタン・通知` | ボタン、メニュー、ダイアログ、トースト | 操作ボタンの見た目を変える |
| `表示モード: モード固有の見た目` | スタンダード、オープン、コンパクト固有CSS | 特定モードだけ変更する |

色を直接追加する前に、既存のCSS変数で表現できないか確認します。

## 静的HTMLの章

| 検索するコメント・ID | 内容 |
| --- | --- |
| `ヘッダー: ブランド・タブ・全体操作` | ロゴ、タブ、検索、表示、データ管理、追加 |
| `ナビゲーション: カテゴリ・警告` | サイドバー、カテゴリ、操作案内、データ警告 |
| `メイン: パス一覧の描画先` | JavaScriptが一覧を描画する入れ物 |
| `ダイアログ: パス・分類の追加` | 追加、詳細、編集、検索、分類整理 |

JavaScriptから参照される要素にはIDがあります。IDを変更した場合は、イベント登録とスモークチェックも確認します。

## JavaScriptの章

### 共通処理

検索語: `共通処理: DOM・文字列・パス判定・色生成`

| 主な関数 | 役割 |
| --- | --- |
| `$` | IDからDOM要素を取得 |
| `toSafeString` | nullや未定義を安全な文字列へ変換 |
| `toHtml` | HTMLへ埋め込む文字列をエスケープ |
| `classifyPath` | URL、ファイル、フォルダーを判定 |
| `colorForCat` | カテゴリ名から安定した色を生成 |

### 設定・永続化

検索語: `設定・永続化: 表示モード・ローカルストレージ`

| 主な処理 | 役割 |
| --- | --- |
| `storage` | localStorageの読み書きをまとめる |
| `THEME_CONFIG` | 表示モードの一覧 |
| `applyTheme` | 表示モードを適用・保存 |
| `loadCollapsedSubcats` | サブカテゴリの折りたたみ状態を復元 |

### データモデル

検索語: `データモデル: 検査・読み込み・カタログ操作`

| 主な処理 | 役割 |
| --- | --- |
| `inspectCatalog` | 外部データと保存データを検査 |
| `normalize` | 階層データを画面用オブジェクトへ変換 |
| `loadCatalog` | localStorageまたは`data.js`から読み込む |
| `catalogModel` | タブ、カテゴリ、サブカテゴリ、パスを操作 |

データの構造や保存方法を変更するときは、この章と[アーキテクチャ](architecture.md)を先に確認します。

### 状態管理

検索語: `状態管理: 選択・絞り込み・グルーピング`

| 主な処理 | 役割 |
| --- | --- |
| `state` | 画面用データ、選択中タブ、選択中カテゴリ |
| `getFilteredItems` | 現在の選択でパスを絞り込む |
| `groupByCategory` | 描画用にカテゴリとサブカテゴリへまとめる |
| `setSelection` | 選択状態を安全に変更して再描画 |
| `actions` | タブ・カテゴリ変更の入口 |

### 描画

検索語: `描画: HTML生成・画面反映`

命名規則は次の通りです。

- `build...Html`: HTML文字列を作る
- `apply...`: 作ったHTMLをDOMへ反映する
- `render...`: 必要なデータを集めてbuildとapplyを呼ぶ

| 主な処理 | 役割 |
| --- | --- |
| `buildTabListHtml` | タブを作る |
| `buildCategoryListHtml` | サイドバーのカテゴリを作る |
| `buildListRow` | 通常表示のパス1行を作る |
| `buildCategoryCardHtml` | カテゴリカードを作る |
| `buildCompactMainHtml` | コンパクト表示を作る |
| `buildMainHtml` | 表示モードに応じた一覧を作る |
| `renderAll` | タブ、カテゴリ、一覧をまとめて描画 |

### UI制御

検索語: `UI制御: カタログ変更・ダイアログ・メニュー`

| 主な処理 | 役割 |
| --- | --- |
| `commitCatalogChange` | データ変更、保存、失敗時の復元 |
| `dialogController` | ダイアログの共通操作 |
| `openPathDetailsDialog` | パス詳細を開く |
| `openOrganizeDialog` | 分類整理を開く |
| `prepareAddDialog` | パス追加画面を準備 |
| `onEditPathSubmit` | パス編集を保存 |
| `menuController` | ヘッダーメニューを開閉 |
| `onAddPathSubmit` | パス追加を保存 |

### データ入出力

検索語: `データ入出力: data.js の読み込み・書き出し`

| 主な処理 | 役割 |
| --- | --- |
| `buildDataJs` | 現在のカタログを`data.js`文字列へ変換 |
| `exportCatalogData` | `data.js`をダウンロード |
| `parseDataJs` | 読み込んだファイルを安全に解析 |
| `importCatalogData` | 確認後にカタログを置き換える |

### フィードバック

検索語: `フィードバック: 通知・コピー・ノート表示`

| 主な処理 | 役割 |
| --- | --- |
| `showInlineToast` | 保存やコピー結果を短く表示 |
| `copyTextToClipboard` | クリップボードへコピー |
| `noteTooltip` | 一覧のノートを表示 |

### イベント

検索語: `イベント: キー操作・クリック・マウス操作`

| 主な処理 | 役割 |
| --- | --- |
| `onKeydown` | 全体のキーボード操作 |
| `onTabClick` | タブ選択 |
| `onCatClick` | カテゴリ選択 |
| `onListClick` | パスのコピー |
| `onPathDetailsClick` | 詳細表示 |
| `onSubcatToggle` | サブカテゴリ折りたたみ |
| `onNoteOver`など | ノートのマウス表示 |

### 初期化

検索語: `初期化: イベント登録・初期描画`

| 主な処理 | 役割 |
| --- | --- |
| `bind` | イベントを1回だけ登録 |
| `init` | 表示モード適用、イベント登録、初期描画 |
| `App.init()` | アプリの起動 |

## 変更内容からの逆引き

| 変更したいこと | 最初に見る場所 | あわせて確認する場所 |
| --- | --- | --- |
| 色や角丸を変える | CSSのテーマ変数 | 表示モード固有CSS |
| タブ・カテゴリの見た目を変える | `buildTabListHtml`、`buildCategoryListHtml` | 共通UIのCSS |
| パス一覧の見た目を変える | `buildListRow`、`buildCompactMainHtml` | `.list-row`、`.compact-row` |
| 検索対象や検索結果を変える | `getSearchResults`、`buildSearchResultHtml` | 検索ダイアログ |
| パスの追加項目を変える | `addPathDialog`、`onAddPathSubmit` | `catalogModel.appendItem`、`inspectCatalog` |
| パス編集を変える | `editPathForm`、`onEditPathSubmit` | `catalogModel.replaceItem` |
| 削除処理を変える | `deleteDetailItem`、`deleteOrganizeSelection` | `catalogModel.deleteItem`、`deleteGroup` |
| 保存方法を変える | `storage`、`loadCatalog`、`saveCatalog` | `commitCatalogChange` |
| `data.js`形式を変える | `buildDataJs`、`parseDataJs` | `data.js`、スモークチェック |
| ダイアログを追加する | 静的HTMLのダイアログ群 | `dialogController`、`bind`、スモークチェック |
| ボタンを追加する | 対応する静的HTMLまたはbuild関数 | `bind`またはイベント委譲 |

## 新しい機能を追加するときの確認順

1. 新しいデータが必要か確認する
2. 必要なら`data.js`構造と`inspectCatalog`への影響を確認する
3. 画面の配置場所を決める
4. 描画処理または静的HTMLを変更する
5. イベント処理を追加する
6. データ変更は`commitCatalogChange`を通す
7. 表示状態が不要にリセットされないか確認する
8. 必須IDを追加した場合はスモークチェックへ追加する
9. ブラウザで主要操作と狭い画面を確認する
