(() => {
  const r = String.raw;

  addTagPaths("顧客", [
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
  ]);
})();
