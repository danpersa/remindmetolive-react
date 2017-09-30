import DirWalker from './dirWalker';
import path from 'path';

describe('DirWalker', () => {
  describe('walk', () => {
    it('should walk', () => {
      const currentDirPath = path.resolve(path.dirname(''));
      const metaDirPath = path.join(currentDirPath, 'meta');
      const foundFiles = [];

      const dirWalker = new DirWalker(metaDirPath, filePath => {
        foundFiles.push(filePath);
      });
      dirWalker.walk(metaDirPath);
      expect(foundFiles.length).toEqual(19);
    });
  });
});
