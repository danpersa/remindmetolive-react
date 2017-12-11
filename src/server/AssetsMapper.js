import fs from 'fs';
import path from 'path';

export default class AssetsMapper {

  constructor(dirPath) {
    this.dirPath = dirPath;
    this.assetsMap = this._buildAssetsMap();
  }

  _buildAssetsMap() {
    const manifestPath = path.join(this.dirPath, 'manifest.json');
    const manifest = fs.readFileSync(manifestPath, { encoding: "utf8" });
    return JSON.parse(manifest);
  }

  getJsFileName() {
    return this.assetsMap['main.js'];
  }

  getCssFileName() {
    return this.assetsMap['main.css'];
  }
}
