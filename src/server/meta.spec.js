import Meta from './meta';

describe('Meta', () => {

  describe('getMetaForPath', () => {
    it('should get the correct title', () => {
      const meta = new Meta();
      expect(meta.getMetaForPath('/')['title']).toEqual('Remindmetolive - Photos and Stories');
    });
  });

  describe('getMetaPath', () => {
    it('should return all of the meta paths', () => {
      const meta = new Meta();
      expect(meta.getMetaPaths()).toContain('/');
      expect(meta.getMetaPaths()).toContain('/about/');
    });
  });
});
