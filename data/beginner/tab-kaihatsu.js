(() => {
  const r = String.raw;

  addTagPaths("開発", [
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
    ]]
  ]);
})();
