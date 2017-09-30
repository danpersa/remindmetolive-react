import fs from 'fs';
import path from 'path';

export default class DirWalker {

  constructor(dirPath, fn) {
    this.dirPath = dirPath;
    this.fn = fn;
  }

  walkInternal(currentDirPath) {
    const self = this;
    fs.readdirSync(currentDirPath).forEach(name => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        self.fn(filePath);
      } else if (stat.isDirectory()) {
        self.walkInternal(filePath);
      }
    });
  }

  walk() {
    this.walkInternal(this.dirPath);
  }
}
