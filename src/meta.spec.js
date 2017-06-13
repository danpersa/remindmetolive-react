import Meta from './meta';

describe('Meta', () => {
  describe('initalize', () => {
    it('should initalize', () => {
      const meta = new Meta();
      expect(meta.getMetaForPath('/')['title']).toEqual('Remindmetolive - Photos and Stories');
    });
  });
});
