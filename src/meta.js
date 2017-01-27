import fs from 'fs';
import properties from 'properties';
import path from 'path';

/* eslint-disable no-console */
export default class MetaParser {
  constructor() {
    this.meta = {};
  }

  walk(currentDirPath, metas) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const data = fs.readFileSync(filePath, { encoding: "utf8" });

        const options = {
          sections: false,
          comments: ";",
          separators: "=",
          strict: true
        };

        const obj = properties.parse(data, options);
        metas[obj['path']] = obj;

        console.log("Metas: " + obj['path'] + " Data:" + data + " obj: " + obj['title']);
        console.log(obj);

      } else if (stat.isDirectory()) {
        this.walk(filePath, metas);
      }
    });
  }

  init() {
    console.log("");
    const currentDir = path.resolve(path.dirname(''));

    const metaDir = path.join(currentDir, 'meta');

    const files = fs.readdirSync(metaDir);


    console.log("Files: " + files);

    this.walk(metaDir, {});



  }
}
