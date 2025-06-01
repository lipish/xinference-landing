const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  // 简化配置
  reactStrictMode: true,
});
