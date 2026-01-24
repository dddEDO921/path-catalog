// Path catalog data (編集用)
// `r` を使うことでバックスラッシュのエスケープ不要でそのまま貼り付け可能
const r = String.raw;

// 階層データ（タブ > カテゴリ > サブカテゴリ > アイテム）
// タブ未指定の場合は「共通」にまとまります。
window.PATH_CATALOG = [
  ["共通", [
    ["申請", [
      ["経費", [
        ["経費精算フォルダ", r`\\fileserver\share\finance\expense`, "年度ごとに格納"],
        ["旅費申請書式", r`\\fileserver\share\finance\travel\forms`, "出張手当含む"]
      ]],
      ["勤怠", [
        ["勤怠申請フォルダ", r`\\fileserver\share\hr\attendance`, ""],
        ["休暇申請テンプレート", r`\\fileserver\share\hr\leave\template.docx`, ""]
      ]],
      ["稟議", [
        ["稟議申請書式", r`\\fileserver\share\admin\ringi\forms`, "最新テンプレート"],
        ["購買申請シート", r`\\fileserver\share\procurement\requests.xlsx`, "月次締めあり"]
      ]]
    ]],
    ["共有", [
      ["テンプレート", [
        ["議事録テンプレート", r`\\fileserver\share\templates\minutes.docx`, ""],
        ["契約書ドラフト", r`\\fileserver\share\templates\contract.docx`, ""]
      ]],
      ["ガイド", [
        ["社内Wikiトップ", r`https://wiki.example.local/`, ""],
        ["ブランドガイドライン", r`\\fileserver\share\brand\guide.pdf`, ""],
        ["ロゴ画像一式", r`\\fileserver\share\brand\logo`, "SVG/PNG"]
      ]]
    ]]
  ]],
  ["業務", [
    ["設計", [
      ["API", [
        ["OpenAPI仕様書", r`C:\work\spec\openapi.yaml`, ""],
        ["APIモック", r`\\fileserver\share\api\mock`, "sandbox"]
      ]],
      ["インフラ", [
        ["ネットワーク構成図", r`\\fileserver\share\infra\nw-diagram.drawio`, ""],
        ["IaCテンプレート", r`C:\work\infra\terraform\modules`, ""]
      ]],
      ["DB", [
        ["ER図", r`\\fileserver\share\db\er\main.drawio`, "最新版"],
        ["マイグレーションスクリプト", r`\\fileserver\share\db\migration`, ""]
      ]]
    ]],
    ["開発", [
      ["リポジトリ", [
        ["Monorepo", r`C:\dev\repo\monorepo`, ""],
        ["Design System Repo", r`C:\dev\repo\design-system`, ""]
      ]],
      ["ビルド", [
        ["CI設定", r`\\fileserver\share\ci\pipelines`, "共通ジョブ"],
        ["パイプラインテンプレ", r`\\fileserver\share\ci\templates`, ""]
      ]],
      ["ツール", [
        ["コードスタイル設定", r`C:\dev\config\lint\.eslintrc.json`, ""],
        ["npm private registry", r`https://npm.example.local/`, ""]
      ]]
    ]],
    ["運用", [
      ["ジョブ", [
        ["夜間バッチ", r`\\fileserver\share\ops\batch\nightly`, ""],
        ["月次集計ジョブ", r`\\fileserver\share\ops\batch\monthly`, ""]
      ]],
      ["監視", [
        ["監視ダッシュボードURL", r`https://monitor.example.local/dashboards/main`, ""],
        ["アラート設定", r`\\fileserver\share\ops\monitoring\alerts`, ""]
      ]],
      ["障害対応", [
        ["インシデント手順書", r`\\fileserver\share\ops\incident\runbook.pdf`, ""],
        ["バックアップ", r`\\fileserver\share\backup\db`, "日次"]
      ]]
    ]],
    ["顧客", [
      ["案件共通", [
        ["NDA雛形", r`\\fileserver\share\clients\common\nda.docx`, ""],
        ["契約基本書", r`\\fileserver\share\clients\common\msa.docx`, ""]
      ]],
      ["案件A", [
        ["案件A仕様書", r`\\fileserver\share\clients\a\spec`, ""],
        ["案件A納品物", r`\\fileserver\share\clients\a\deliverables`, ""]
      ]],
      ["案件B", [
        ["案件B仕様書", r`\\fileserver\share\clients\b\spec`, ""],
        ["案件B納品物", r`\\fileserver\share\clients\b\deliverables`, ""]
      ]]
    ]]
  ]]
];
