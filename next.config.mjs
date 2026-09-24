// セキュリティヘッダー（jobmadley に準じる。ただしフレームは jobmadley の DENY と違い、同一オリジンからの埋め込みだけ許可する）
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ssw',
  assetPrefix: '/ssw',
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    // basePath が付くので実際は /ssw/:path*（/ssw 自体も含む）
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ssw',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig; 