(() => {
  const r = String.raw;

  addTagPaths("共有", [
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
  ]);
})();
