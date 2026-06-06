/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 🛠️ اعتمد بالكامل على remotePatterns لضمان أمان واستقرار معالجة الصور
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      // الـ redirects بتاعتك زي ما هي بدون أي تغيير...
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/about-me", destination: "/", permanent: true },
      { source: "/featured", destination: "/properties", permanent: true },
      { source: "/category/:slug*", destination: "/blogs", permanent: true },
      { source: "/tag/:slug*", destination: "/blogs", permanent: true },
      { source: "/author/:slug*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/التسويق-العقاري", destination: "/blogs", permanent: true },
      { source: "/استفسار-عن-عقار", destination: "/contact", permanent: true },
      { source: "/properties/apartment/:city/:slug", destination: "/properties", permanent: true },
    ];
  },
};

export default nextConfig;