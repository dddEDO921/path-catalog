(() => {
  const r = String.raw;

  addTagPaths("運用", [
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
    ]]
  ]);
})();
