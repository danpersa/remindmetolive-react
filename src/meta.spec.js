import {expect} from 'chai';
import Meta from './meta';

/* eslint-disable no-console */
describe('Meta', () => {
  describe('initalize', () => {
    it('should initalize', () => {
      // arrange
      const meta = new Meta();
      meta.init();

       expect(10).to.equal(22);

      // assert
      //expect(DateHelper.getFormattedDateTime(date)).to.equal('1/24 11:33:30');
    });
  });
});
