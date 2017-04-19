import fs from 'fs';
import properties from 'properties';
import path from 'path';
import DirWalker from './dirWalker';

/* eslint-disable no-console */
export default class Meta {

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

  init() {
    const currentDir = path.resolve(path.dirname(''));
    const metaDir = path.join(currentDir, 'meta');
    const self = this;
    const dirWalker = new DirWalker(metaDir, filePath => {
      const data = fs.readFileSync(filePath, { encoding: "utf8" });
      const meta = properties.parse(data, self.options);
      // console.log("Found metas for: " + meta['path']);

      self.addMeta(meta['path'], meta);
    });

    dirWalker.walk();
  }
}
