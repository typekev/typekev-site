// @ts-check

/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["img.youtube.com"],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/about/",
        destination: "/",
      },
      {
        source: "/work/",
        destination: "/",
      },
      {
        source: "/work/:place/",
        destination: "/",
      },
      {
        source: "/blog/",
        destination: "/",
      },
      {
        source: "/contact/",
        destination: "/",
      },
    ];
  },
};
