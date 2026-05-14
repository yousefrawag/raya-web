// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "via.placeholder.com",
      "images.ctfassets.net",
      "images.pexels.com",
    ],
  },

  async redirects() {
    return [
      // blog القديم -> الجديد
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },

      // صفحات قديمة
      {
        source: "/about-me",
        destination: "/",
        permanent: true,
      },
      {
        source: "/featured",
        destination: "/properties",
        permanent: true,
      },

      // روابط ووردبريس الشائعة
      {
        source: "/category/:slug*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },

      // الروابط العربية القديمة
      {
        source: "/التسويق-العقاري",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/استفسار-عن-عقار",
        destination: "/contact",
        permanent: true,
      },

      // رابط العقارات القديم
      {
        source: "/properties/apartment/:city/:slug",
        destination: "/properties",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;