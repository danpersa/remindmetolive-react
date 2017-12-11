import AssetsMapper from './AssetsMapper';
import path from 'path';

describe('AssetsMapper', () => {
  describe('_buildAssetsMap', () => {
    it('should build the map', () => {
      const currentDirPath = path.join(path.resolve(path.dirname(''), 'src', 'server'));
      const mapper = new AssetsMapper(currentDirPath);

      expect(mapper.getJsFileName()).toEqual('main.f0c0ff29f421db7ea7b5.js');
      expect(mapper.getCssFileName()).toEqual('main.3a52fb136ee4d0a0d6c67be913526e51.css');
    });
  });
});
