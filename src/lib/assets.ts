export function getAsset(path: string) {
  const assetModules = import.meta.globEager<{ default: string }>(
    './../assets/**/*.*'
  );

  const assetsArray = Object.entries(assetModules).map(
    ([path, { default: processedPath }]) => {
      const [, pathWithoutPrefix] = path.split('../assets/');

      return [pathWithoutPrefix, processedPath];
    }
  );

  const assetsObj: { [path: string]: string } = Object.fromEntries(assetsArray);

  if (!assetsObj[path]) {
    throw "can't find asset: " + path;
  }

  return assetsObj[path];
}
