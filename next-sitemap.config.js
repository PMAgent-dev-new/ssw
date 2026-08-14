/** @type {import('next-sitemap').IConfig} */
// 本アプリは Cloudflare Worker 経由で https://ridejob.jp/ssw 配下に配信される
// （next.config.mjs の basePath: '/ssw' と対応）。siteUrl に basePath まで含める。
//
// robots.txt は ridejob.jp のルート（jobmadley 側）で一元管理しているため、
// ここでは生成しない。/ssw/robots.txt はクローラが読まないうえ、
// 誤った Host 行を出すと紛らわしいだけになる。
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ridejob.jp/ssw',
  generateRobotsTxt: false,
  // [locale] は動的ルートのため自動収集されない。実在する4ロケールを明示する。
  additionalPaths: async (config) => Promise.all(
    ['/ja', '/en', '/vi', '/id'].map((p) => config.transform(config, p))
  ),
}
