(() => {
  const r = String.raw;

  addTagPaths("設計", [
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
    ]]
  ]);
})();
