import fs from 'fs';
import properties from 'properties';
import path from 'path';

/* eslint-disable no-console */
export default class MetaParser {

  constructor() {
    this.pathToMeta = {};
    this.options = {
      sections: false,
      comments: ";",
      separators: "=",
      strict: true
    };
    this.init();
  }

  addMeta(path, meta) {
    this.pathToMeta[path] = meta;
  }

  getMetaForPath(path) {
    return this.pathToMeta[path];
  }

  walk(currentDirPath) {
    const self = this;
    fs.readdirSync(currentDirPath).forEach(function (name) {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const data = fs.readFileSync(filePath, { encoding: "utf8" });
        const meta = properties.parse(data, self.options);
        console.log("Found metas for: " + meta['path']);

        self.addMeta(meta['path'], meta);
      } else if (stat.isDirectory()) {
        self.walk(filePath);
      }
    });
  }

  init() {
    console.log("");
    const currentDir = path.resolve(path.dirname(''));
    const metaDir = path.join(currentDir, 'meta');

    this.walk(metaDir);
  }
}
