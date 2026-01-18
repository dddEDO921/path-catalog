(() => {
  const toStr = (value) => (value ?? "").toString();
  const warn = (message) => console.warn(`[PathCatalog] ${message}`);

  const data = [];

  const normalizeRow = (tab, category, subCategory, item, index) => {
    let row = [];
    if (Array.isArray(item)) {
      row = item.slice(0, 3);
      if (item.length < 3) {
        warn(`Missing columns at ${tab}/${category}/${subCategory} #${index + 1}`);
      } else if (item.length > 3) {
        warn(`Extra columns ignored at ${tab}/${category}/${subCategory} #${index + 1}`);
      }
    } else {
      row = [item];
      warn(`Item is not an array at ${tab}/${category}/${subCategory} #${index + 1}`);
    }

    const [name, path, note] = [row[0], row[1], row[2]].map(toStr);
    data.push({
      tab: toStr(tab),
      category: toStr(category),
      subCategory: toStr(subCategory),
      name,
      path,
      note
    });
  };

  const addTagPaths = (tab, dataMap) => {
    const tabName = toStr(tab);
    if (!dataMap || typeof dataMap !== "object") {
      warn(`Data for tab "${tabName}" must be an object`);
      return;
    }

    Object.entries(dataMap).forEach(([category, subMap]) => {
      if (!subMap || typeof subMap !== "object") {
        warn(`Category "${category}" in tab "${tabName}" must be an object`);
        return;
      }
      Object.entries(subMap).forEach(([subCategory, items]) => {
        if (!Array.isArray(items)) {
          warn(`Items for ${tabName}/${category}/${subCategory} must be an array`);
          return;
        }
        items.forEach((item, index) => {
          normalizeRow(tabName, category, subCategory, item, index);
        });
      });
    });
  };

  window.addTagPaths = addTagPaths;
  window.PATH_CATALOG_DATA = data;

  const defaultSources = [
    "./tab-shinsei.js",
    "./tab-sekkei.js",
    "./tab-kaihatsu.js",
    "./tab-unyo.js",
    "./tab-kyoyu.js",
    "./tab-kokyaku.js",
    "./tab-sample.js"
  ];

  if (!window.PATH_CATALOG_SOURCES) {
    window.PATH_CATALOG_SOURCES = defaultSources;
  } else if (!Array.isArray(window.PATH_CATALOG_SOURCES)) {
    warn("PATH_CATALOG_SOURCES must be an array");
    window.PATH_CATALOG_SOURCES = defaultSources;
  }

  const baseUrl = new URL(".", (document.currentScript && document.currentScript.src) || location.href);
  const resolveSrc = (src) => new URL(src, baseUrl).toString();

  const loadScript = (src) => new Promise((resolve) => {
    const resolved = resolveSrc(src);
    const script = document.createElement("script");
    script.src = resolved;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => {
      warn(`Failed to load ${resolved}`);
      resolve();
    };
    document.head.appendChild(script);
  });

  const loadSequential = (list) => list.reduce(
    (promise, src) => promise.then(() => loadScript(src)),
    Promise.resolve()
  );

  window.PATH_CATALOG_READY = loadSequential(window.PATH_CATALOG_SOURCES).then(() => data);
})();
