// Path catalog data (編集用)
// `r` を使うことでバックスラッシュのエスケープ不要でそのまま貼り付け可能
const r = String.raw;

// 階層データ（カテゴリ > サブカテゴリ > アイテム）
const DATA_NESTED = {
  categories: [
    {
      name: "申請",
      subCategories: [
        {
          name: "経費",
          items: [
            { name: "経費精算フォルダ", path: r`\\fileserver\share\finance\expense`, note: "年度ごとに格納" },
            { name: "旅費申請書式", path: r`\\fileserver\share\finance\travel\forms`, note: "出張手当含む" }
          ]
        },
        {
          name: "勤怠",
          items: [
            { name: "勤怠申請フォルダ", path: r`\\fileserver\share\hr\attendance`, note: "" },
            { name: "休暇申請テンプレート", path: r`\\fileserver\share\hr\leave\template.docx`, note: "" }
          ]
        },
        {
          name: "稟議",
          items: [
            { name: "稟議申請書式", path: r`\\fileserver\share\admin\ringi\forms`, note: "最新テンプレート" },
            { name: "購買申請シート", path: r`\\fileserver\share\procurement\requests.xlsx`, note: "月次締めあり" }
          ]
        }
      ]
    },
    {
      name: "設計",
      subCategories: [
        {
          name: "API",
          items: [
            { name: "OpenAPI仕様書", path: r`C:\work\spec\openapi.yaml`, note: "" },
            { name: "APIモック", path: r`\\fileserver\share\api\mock`, note: "sandbox" }
          ]
        },
        {
          name: "インフラ",
          items: [
            { name: "ネットワーク構成図", path: r`\\fileserver\share\infra\nw-diagram.drawio`, note: "" },
            { name: "IaCテンプレート", path: r`C:\work\infra\terraform\modules`, note: "" }
          ]
        },
        {
          name: "DB",
          items: [
            { name: "ER図", path: r`\\fileserver\share\db\er\main.drawio`, note: "最新版" },
            { name: "マイグレーションスクリプト", path: r`\\fileserver\share\db\migration`, note: "" }
          ]
        }
      ]
    },
    {
      name: "開発",
      subCategories: [
        {
          name: "リポジトリ",
          items: [
            { name: "Monorepo", path: r`C:\dev\repo\monorepo`, note: "" },
            { name: "Design System Repo", path: r`C:\dev\repo\design-system`, note: "" }
          ]
        },
        {
          name: "ビルド",
          items: [
            { name: "CI設定", path: r`\\fileserver\share\ci\pipelines`, note: "共通ジョブ" },
            { name: "パイプラインテンプレ", path: r`\\fileserver\share\ci\templates`, note: "" }
          ]
        },
        {
          name: "ツール",
          items: [
            { name: "コードスタイル設定", path: r`C:\dev\config\lint\.eslintrc.json`, note: "" },
            { name: "npm private registry", path: r`https://npm.example.local/`, note: "" }
          ]
        }
      ]
    },
    {
      name: "運用",
      subCategories: [
        {
          name: "ジョブ",
          items: [
            { name: "夜間バッチ", path: r`\\fileserver\share\ops\batch\nightly`, note: "" },
            { name: "月次集計ジョブ", path: r`\\fileserver\share\ops\batch\monthly`, note: "" }
          ]
        },
        {
          name: "監視",
          items: [
            { name: "監視ダッシュボードURL", path: r`https://monitor.example.local/dashboards/main`, note: "" },
            { name: "アラート設定", path: r`\\fileserver\share\ops\monitoring\alerts`, note: "" }
          ]
        },
        {
          name: "障害対応",
          items: [
            { name: "インシデント手順書", path: r`\\fileserver\share\ops\incident\runbook.pdf`, note: "" },
            { name: "バックアップ", path: r`\\fileserver\share\backup\db`, note: "日次" }
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
        },
        {
          name: "ガイド",
          items: [
            { name: "社内Wikiトップ", path: r`https://wiki.example.local/`, note: "" },
            { name: "ブランドガイドライン", path: r`\\fileserver\share\brand\guide.pdf`, note: "" },
            { name: "ロゴ画像一式", path: r`\\fileserver\share\brand\logo`, note: "SVG/PNG" }
          ]
        }
      ]
    },
    {
      name: "顧客",
      subCategories: [
        {
          name: "案件共通",
          items: [
            { name: "NDA雛形", path: r`\\fileserver\share\clients\common\nda.docx`, note: "" },
            { name: "契約基本書", path: r`\\fileserver\share\clients\common\msa.docx`, note: "" }
          ]
        },
        {
          name: "案件A",
          items: [
            { name: "案件A仕様書", path: r`\\fileserver\share\clients\a\spec`, note: "" },
            { name: "案件A納品物", path: r`\\fileserver\share\clients\a\deliverables`, note: "" }
          ]
        },
        {
          name: "案件B",
          items: [
            { name: "案件B仕様書", path: r`\\fileserver\share\clients\b\spec`, note: "" },
            { name: "案件B納品物", path: r`\\fileserver\share\clients\b\deliverables`, note: "" }
          ]
        }
      ]
    }
  ]
};

// 階層データをフラット配列に変換
const flatten = (nested) => {
  const out = [];
  (nested.categories || []).forEach(cat => {
    (cat.subCategories || []).forEach(sub => {
      (sub.items || []).forEach(item => {
        out.push({
          category: cat.name || "",
          subCategory: sub.name || "",
          name: item.name || "",
          path: item.path || "",
          note: item.note || ""
        });
      });
    });
  });
  return out;
};

// 既存のレンダリングはフラット配列を前提としているのでここで変換
window.PATH_CATALOG_DATA = flatten(DATA_NESTED);
