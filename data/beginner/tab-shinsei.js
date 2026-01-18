(() => {
  const r = String.raw;

  addTagPaths("申請", [
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
    ]]
  ]);
})();
