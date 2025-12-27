# Path Catalog

パスをカテゴリ×サブカテゴリにまとめ、ワンクリックでコピーできるシンプルなビューアです。

![Path Catalog sample](docs/path-catalog-sample-capture.png)

## 目次

- [Path Catalog](#path-catalog)
  - [目次](#目次)
  - [🔸概要](#概要)
  - [🔸動作環境](#動作環境)
  - [🔸セットアップ](#セットアップ)
  - [🔸データの編集](#データの編集)
    - [書き方（フラット形式）](#書き方フラット形式)
    - [書き方（階層形式）](#書き方階層形式)
    - [共通のポイント](#共通のポイント)
  - [🔸使い方](#使い方)
  - [🔸開発メモ](#開発メモ)
  - [🔸ライセンス](#ライセンス)

## 🔸概要

社内パスの参照や手順共有を日常的にする人向けの、HTML+JSだけで動く軽量ビューアです。  
カテゴリ→サブカテゴリの整理で迷わず辿れ、各行をクリックするだけでパスをコピーできます。  
データ追加は `data.js` を編集するだけで即反映、カテゴリ色とカード表示でどこに何があるか一目で把握できます。

## 🔸動作環境

- ブラウザ: 最新の Chromium / Firefox / Safari を想定
- ビルド/ランタイム: なし（静的ファイルを開くだけ）

## 🔸セットアップ

1. リポジトリを取得
2. `path-catalog.html` をブラウザで開く

## 🔸データの編集

data.jsに表示したいパスを書いていきます。

### 書き方（フラット形式）

1行1データで記載していく形式です。  
編集箇所が1階層ずつなので直感的に編集できます。

```js
const r = String.raw;
window.PATH_CATALOG_DATA = [
  { tab: "共通", category: "申請", subCategory: "経費", name: "経費精算フォルダ", path: r`\\fileserver\share\finance\expense`, note: "" },
  // ...
];
```

### 書き方（階層形式）

タブ > カテゴリ > サブカテゴリ > アイテムの構造でまとめる方法です。  
タブごとに複数カテゴリをまとめたいときに便利です。

```js
const r = String.raw;
const DATA = {
  tabs: [
    {
      name: "共通",
      categories: [
        {
          name: "申請",
          subCategories: [
            {
              name: "経費",
              items: [
                { name: "経費精算フォルダ", path: r`\\fileserver\share\finance\expense`, note: "" },
                { name: "旅費申請書式", path: r`\\fileserver\share\finance\travel\forms`, note: "" }
              ]
            }
          ]
        },
        {
          name: "共有",
          subCategories: [
            {
              name: "テンプレート",
              items: [
                { name: "議事録テンプレート", path: r`\\fileserver\share\templates\minutes.docx`, note: "" },
                { name: "契約書ドラフト", path: r`\\fileserver\share\templates\contract.docx`, note: "" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// フラットに変換（data.js にサンプルあり）
window.PATH_CATALOG_DATA = flatten(DATA);
```

### 共通のポイント

- `r`（`String.raw`）を使えばバックスラッシュをそのまま貼り付け可。
- `tab` は任意。未指定の場合は `共通` タブにまとまります。フラット形式は各行に、階層形式はタブ配下にカテゴリを置く形で記載してください。
- 階層形式を使う場合は、`data.js` の `flatten` を通して `window.PATH_CATALOG_DATA` に渡してください。

## 🔸使い方

- 左サイドバーでカテゴリを選択
- 右側にカテゴリ／サブカテゴリ／パスの一覧が表示
- パス行をクリックするとクリップボードにコピー
- ノートは行末の `i` にホバーで表示

## 🔸開発メモ

- Tailwind は CDN 利用（ビルド不要）。必要に応じて手元でビルドして差し替えも可。
- アイコンやカラーリングはカテゴリ名から HSL を生成して安定化
- モバイル対応は不要な前提でレイアウト固定

## 🔸ライセンス

MIT License
