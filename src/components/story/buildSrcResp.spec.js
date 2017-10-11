import buildSrcResp from './buildSrcResp';

describe('buildSrcResp', () => {
  it('should build the src', () => {
    expect(buildSrcResp("the-dir", "M", "image", "01")).toEqual("/images/M/the-dir/image-01.jpg");
  });
});
