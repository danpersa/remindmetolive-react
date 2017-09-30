import SitemapBuilder from './sitemapBuilder';

describe('SitemapBuilder', () => {
  describe('getSitemap', () => {
    it('should return the sitemap', () => {
      const sitemapBuilder = new SitemapBuilder(['/', '/about', '/stories/first-story.html']);
      const sitemap = sitemapBuilder.getSitemap();
      expect(sitemap['hostname']).toEqual('http://www.remindmetolive.com');
      expect(sitemap['urls'].length).toEqual(3);
    });
  });
});
