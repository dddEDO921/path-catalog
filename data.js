// Path catalog data (編集用)
const PATH_CATALOG_DATA = [
  { "category": "申請", "subCategory": "経費", "name": "経費精算フォルダ", "path": "\\\\fileserver\\share\\finance\\expense", "note": "年度ごとに格納" },
  { "category": "申請", "subCategory": "経費", "name": "旅費申請書式", "path": "\\\\fileserver\\share\\finance\\travel\\forms", "note": "出張手当含む" },
  { "category": "申請", "subCategory": "勤怠", "name": "勤怠申請フォルダ", "path": "\\\\fileserver\\share\\hr\\attendance", "note": "" },
  { "category": "申請", "subCategory": "勤怠", "name": "休暇申請テンプレート", "path": "\\\\fileserver\\share\\hr\\leave\\template.docx", "note": "" },
  { "category": "申請", "subCategory": "稟議", "name": "稟議申請書式", "path": "\\\\fileserver\\share\\admin\\ringi\\forms", "note": "最新テンプレート" },
  { "category": "申請", "subCategory": "稟議", "name": "購買申請シート", "path": "\\\\fileserver\\share\\procurement\\requests.xlsx", "note": "月次締めあり" },

  { "category": "設計", "subCategory": "API", "name": "OpenAPI仕様書", "path": "C:\\\\work\\\\spec\\\\openapi.yaml", "note": "" },
  { "category": "設計", "subCategory": "API", "name": "APIモック", "path": "\\\\fileserver\\share\\api\\mock", "note": "sandbox" },
  { "category": "設計", "subCategory": "インフラ", "name": "ネットワーク構成図", "path": "\\\\fileserver\\share\\infra\\nw-diagram.drawio", "note": "" },
  { "category": "設計", "subCategory": "インフラ", "name": "IaCテンプレート", "path": "C:\\\\work\\\\infra\\\\terraform\\\\modules", "note": "" },
  { "category": "設計", "subCategory": "DB", "name": "ER図", "path": "\\\\fileserver\\share\\db\\er\\main.drawio", "note": "最新版" },
  { "category": "設計", "subCategory": "DB", "name": "マイグレーションスクリプト", "path": "\\\\fileserver\\share\\db\\migration", "note": "" },

  { "category": "開発", "subCategory": "リポジトリ", "name": "Monorepo", "path": "C:\\\\dev\\\\repo\\\\monorepo", "note": "" },
  { "category": "開発", "subCategory": "リポジトリ", "name": "Design System Repo", "path": "C:\\\\dev\\\\repo\\\\design-system", "note": "" },
  { "category": "開発", "subCategory": "ビルド", "name": "CI設定", "path": "\\\\fileserver\\share\\ci\\pipelines", "note": "共通ジョブ" },
  { "category": "開発", "subCategory": "ビルド", "name": "パイプラインテンプレ", "path": "\\\\fileserver\\share\\ci\\templates", "note": "" },
  { "category": "開発", "subCategory": "ツール", "name": "コードスタイル設定", "path": "C:\\\\dev\\\\config\\\\lint\\\\.eslintrc.json", "note": "" },
  { "category": "開発", "subCategory": "ツール", "name": "npm private registry", "path": "https://npm.example.local/", "note": "" },

  { "category": "運用", "subCategory": "ジョブ", "name": "夜間バッチ", "path": "\\\\fileserver\\share\\ops\\batch\\nightly", "note": "" },
  { "category": "運用", "subCategory": "ジョブ", "name": "月次集計ジョブ", "path": "\\\\fileserver\\share\\ops\\batch\\monthly", "note": "" },
  { "category": "運用", "subCategory": "監視", "name": "監視ダッシュボードURL", "path": "https://monitor.example.local/dashboards/main", "note": "" },
  { "category": "運用", "subCategory": "監視", "name": "アラート設定", "path": "\\\\fileserver\\share\\ops\\monitoring\\alerts", "note": "" },
  { "category": "運用", "subCategory": "障害対応", "name": "インシデント手順書", "path": "\\\\fileserver\\share\\ops\\incident\\runbook.pdf", "note": "" },
  { "category": "運用", "subCategory": "障害対応", "name": "バックアップ", "path": "\\\\fileserver\\share\\backup\\db", "note": "日次" },

  { "category": "共有", "subCategory": "テンプレート", "name": "議事録テンプレート", "path": "\\\\fileserver\\share\\templates\\minutes.docx", "note": "" },
  { "category": "共有", "subCategory": "テンプレート", "name": "契約書ドラフト", "path": "\\\\fileserver\\share\\templates\\contract.docx", "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "社内Wikiトップ", "path": "https://wiki.example.local/", "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "ブランドガイドライン", "path": "\\\\fileserver\\share\\brand\\guide.pdf", "note": "" },
  { "category": "共有", "subCategory": "ガイド", "name": "ロゴ画像一式", "path": "\\\\fileserver\\share\\brand\\logo", "note": "SVG/PNG" },

  { "category": "顧客", "subCategory": "案件共通", "name": "NDA雛形", "path": "\\\\fileserver\\share\\clients\\common\\nda.docx", "note": "" },
  { "category": "顧客", "subCategory": "案件共通", "name": "契約基本書", "path": "\\\\fileserver\\share\\clients\\common\\msa.docx", "note": "" },
  { "category": "顧客", "subCategory": "案件A", "name": "案件A仕様書", "path": "\\\\fileserver\\share\\clients\\a\\spec", "note": "" },
  { "category": "顧客", "subCategory": "案件A", "name": "案件A納品物", "path": "\\\\fileserver\\share\\clients\\a\\deliverables", "note": "" },
  { "category": "顧客", "subCategory": "案件B", "name": "案件B仕様書", "path": "\\\\fileserver\\share\\clients\\b\\spec", "note": "" },
  { "category": "顧客", "subCategory": "案件B", "name": "案件B納品物", "path": "\\\\fileserver\\share\\clients\\b\\deliverables", "note": "" }
];
