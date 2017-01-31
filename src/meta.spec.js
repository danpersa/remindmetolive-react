import {expect} from 'chai';
import Meta from './meta';

describe('Meta', () => {
  describe('initalize', () => {
    it('should initalize', () => {
      const meta = new Meta();
      expect(meta.getMetaForPath('/')['title']).to.equal('Remindmetolive - Photos and Stories');
    });
  });
});
