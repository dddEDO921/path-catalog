const r = String.raw;

addTagPaths("サンプル", {
  "ブロックA": {
    "基本": [
      ["ガイド", r`C:\sample\guide`, ""],
      ["資料", r`\\fileserver\share\sample\docs`, "共有用"]
    ]
  },
  "ブロックB": {
    "リンク": [
      ["ポータル", r`https://example.local/portal`, ""]
    ]
  }
});
