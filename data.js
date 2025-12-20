// Path catalog data (編集用)
// `r` を使うことでバックスラッシュのエスケープ不要でそのまま貼り付け可能
const r = String.raw;

window.PATH_CATALOG_DATA = [
  { "category": "申請", "subCategory": "経費", "name": "経費精算フォルダ", "path": r`\\fileserver\share\finance\expense`, "note": "年度ごとに格納" },
  { "category": "申請", "subCategory": "経費", "name": "旅費申請書式", "path": r`\\fileserver\share\finance\travel\forms`, "note": "出張手当含む" },
  { "category": "申請", "subCategory": "勤怠", "name": "勤怠申請フォルダ", "path": r`\\fileserver\share\hr\attendance`, "note": "" },
  { "category": "申請", "subCategory": "勤怠", "name": "休暇申請テンプレート", "path": r`\\fileserver\share\hr\leave\template.docx`, "note": "" },
  { "category": "申請", "subCategory": "稟議", "name": "稟議申請書式", "path": r`\\fileserver\share\admin\ringi\forms`, "note": "最新テンプレート" },
  { "category": "申請", "subCategory": "稟議", "name": "購買申請シート", "path": r`\\fileserver\share\procurement\requests.xlsx`, "note": "月次締めあり" },

  { "category": "設計", "subCategory": "API", "name": "OpenAPI仕様書", "path": r`C:\work\spec\openapi.yaml`, "note": "" },
  { "category": "設計", "subCategory": "API", "name": "APIモック", "path": r`\\fileserver\share\api\mock`, "note": "sandbox" },
  { "category": "設計", "subCategory": "インフラ", "name": "ネットワーク構成図", "path": r`\\fileserver\share\infra\nw-diagram.drawio`, "note": "" },
  { "category": "設計", "subCategory": "インフラ", "name": "IaCテンプレート", "path": r`C:\work\infra\terraform\modules`, "note": "" },
  { "category": "設計", "subCategory": "DB", "name": "ER図", "path": r`\\fileserver\share\db\er\main.drawio`, "note": "最新版" },
  { "category": "設計", "subCategory": "DB", "name": "マイグレーションスクリプト", "path": r`\\fileserver\share\db\migration`, "note": "" },

  { "category": "開発", "subCategory": "リポジトリ", "name": "Monorepo", "path": r`C:\dev\repo\monorepo`, "note": "" },
  { "category": "開発", "subCategory": "リポジトリ", "name": "Design System Repo", "path": r`C:\dev\repo\design-system`, "note": "" },
  { "category": "開発", "subCategory": "ビルド", "name": "CI設定", "path": r`\\fileserver\share\ci\pipelines`, "note": "共通ジョブ" },
  { "category": "開発", "subCategory": "ビルド", "name": "パイプラインテンプレ", "path": r`\\fileserver\share\ci\templates`, "note": "" },
  { "category": "開発", "subCategory": "ツール", "name": "コードスタイル設定", "path": r`C:\dev\config\lint\.eslintrc.json`, "note": "" },
  { "category": "開発", "subCategory": "ツール", "name": "npm private registry", "path": r`https://npm.example.local/`, "note": "" },

  { "category": "運用", "subCategory": "ジョブ", "name": "夜間バッチ", "path": r`\\fileserver\share\ops\batch\nightly`, "note": "" },
  { "category": "運用", "subCategory": "ジョブ", "name": "月次集計ジョブ", "path": r`\\fileserver\share\ops\batch\monthly`, "note": "" },
  { "category": "運用", "subCategory": "監視", "name": "監視ダッシュボードURL", "path": r`https://monitor.example.local/dashboards/main`, "note": "" },
  { "category": "運用", "subCategory": "監視", "name": "アラート設定", "path": r`\\fileserver\share\ops\monitoring\alerts`, "note": "" },
  { "category": "運用", "subCategory": "障害対応", "name": "インシデント手順書", "path": r`\\fileserver\share\ops\incident\runbook.pdf`, "note": "" },
  { "category": "運用", "subCategory": "障害対応", "name": "バックアップ", "path": r`\\fileserver\share\backup\db`, "note": "日次" },

  { "category": "共有", "subCategory": "テンプレート", "name": "議事録テンプレート", "path": r`\\fileserver\share\templates\minutes.docx`, "note": "" },
  { "category": "共有", "subCategory": "テンプレート", "name": "契約書ドラフト", "path": r`\\fileserver\share\templates\contract.docx`, "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "社内Wikiトップ", "path": r`https://wiki.example.local/`, "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "ブランドガイドライン", "path": r`\\fileserver\share\brand\guide.pdf`, "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "ロゴ画像一式", "path": r`\\fileserver\share\brand\logo`, "note": "SVG/PNG" },

  { "category": "顧客", "subCategory": "案件共通", "name": "NDA雛形", "path": r`\\fileserver\share\clients\common\nda.docx`, "note": "" },
  { "category": "顧客", "subCategory": "案件共通", "name": "契約基本書", "path": r`\\fileserver\share\clients\common\msa.docx`, "note": "" },
  { "category": "顧客", "subCategory": "案件A", "name": "案件A仕様書", "path": r`\\fileserver\share\clients\a\spec`, "note": "" },
  { "category": "顧客", "subCategory": "案件A", "name": "案件A納品物", "path": r`\\fileserver\share\clients\a\deliverables`, "note": "" },
  { "category": "顧客", "subCategory": "案件B", "name": "案件B仕様書", "path": r`\\fileserver\share\clients\b\spec`, "note": "" },
  { "category": "顧客", "subCategory": "案件B", "name": "案件B納品物", "path": r`\\fileserver\share\clients\b\deliverables`, "note": "" }
];
