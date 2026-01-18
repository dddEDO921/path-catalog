# Path Catalog

パスをカテゴリ×サブカテゴリにまとめ、ワンクリックでコピーできるシンプルなビューアです。

![Path Catalog sample](docs/path-catalog-sample-capture.png)

## 目次

- [Path Catalog](#path-catalog)
  - [目次](#目次)
  - [??概要](#概要)
  - [??動作環境](#動作環境)
  - [??セットアップ](#セットアップ)
  - [??データの編集](#データの編集)
    - [書き方（beginner 形式）](#書き方beginner-形式)
    - [読み込み順（index.js）](#読み込み順indexjs)
    - [共通のポイント](#共通のポイント)
  - [??使い方](#使い方)
  - [??開発メモ](#開発メモ)
  - [??ライセンス](#ライセンス)

## ??概要

社内パスの参照や手順共有を日常的にする人向けの、HTML+JSだけで動く軽量ビューアです。  
カテゴリ→サブカテゴリの整理で迷わず辿れ、各行をクリックするだけでパスをコピーできます。  
データ追加は `data/beginner/tab-*.js` を編集し、必要に応じて `data/beginner/index.js` に追記するだけで即反映、カテゴリ色とカード表示でどこに何があるか一目で把握できます。

## ??動作環境

- ブラウザ: 最新の Chromium / Firefox / Safari を想定
- ビルド/ランタイム: なし（静的ファイルを開くだけ）

## ??セットアップ

1. リポジトリを取得
2. `path-catalog.html` をブラウザで開く

## ??データの編集

`data/<mode>/tab-*.js` に表示したいパスを書いていきます。  
読み込み順は `data/<mode>/index.js` の manifest で管理します。

### 書き方（beginner 形式）

`addTagPaths` を使って、カテゴリ→サブカテゴリ→アイテムの順で記載します。  
アイテムは `[name, path, note]` の3列固定です（不足は空補完＋console.warn）。

```js
const r = String.raw;

addTagPaths("メイン", {
  "申請": {
    "経費": [
      ["経費精算フォルダ", r`\\fileserver\share\finance\expense`, ""],
      ["旅費申請書式", r`\\fileserver\share\finance\travel\forms`, "出張手当含む"]
    ]
  }
});
```

### 読み込み順（index.js）

ローカル環境ではディレクトリの自動列挙ができないため、`index.js` が必須です。

```js
const manifest = [
  "./tab-main.js",
  "./tab-extra.js"
];
```

### 共通のポイント

- `r`（`String.raw`）を使えばバックスラッシュをそのまま貼り付け可。
- `category` / `subCategory` は空でもOK（UI側でまとめて表示）。
- JSONモードは将来対応予定。現状は beginner 形式のみ。

## ??使い方

- 左サイドバーでカテゴリを選択
- 右側にカテゴリ／サブカテゴリ／パスの一覧が表示
- パス行をクリックするとクリップボードにコピー
- ノートは行末の `i` にホバーで表示

## ??開発メモ

- Tailwind は CDN 利用（ビルド不要）。必要に応じて手元でビルドして差し替えも可。
- アイコンやカラーリングはカテゴリ名から HSL を生成して安定化
- モバイル対応は不要な前提でレイアウト固定

## ??ライセンス

MIT License
