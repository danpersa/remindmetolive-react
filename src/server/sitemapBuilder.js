import sm from 'sitemap';

/* eslint-disable no-console */
export default class SitemapBuilder {

  constructor(paths) {
    this.paths = paths;
    this.sitemap = sm.createSitemap ({
      hostname: 'http://www.remindmetolive.com',
      cacheTime: 6000
    });
    this.init();
  }

  init() {
    this.paths.forEach((path) => {
      this.sitemap.add({url: path, changefreq: 'monthly', priority: 0.7});
    });
  }

  getSitemap() {
    return this.sitemap;
  }
}
