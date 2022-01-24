/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withTM = require("next-transpile-modules")(["react-markdown"]);

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */

module.exports = withTM({
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["img.youtube.com"],
  },
  webpack: ({ resolve, ...rest }, { isServer }) => ({
    ...rest,
    resolve: {
      ...resolve,
      alias: {
        ...resolve.alias,
        "@mui/base": "@mui/base/legacy",
        "@mui/material": "@mui/material/legacy",
        "@mui/private-theming": "@mui/private-theming/legacy",
        "@mui/styled-engine": "@mui/styled-engine/legacy",
        "@mui/system": "@mui/system/legacy",
        "@mui/utils": "@mui/utils/legacy",
        "react-in-viewport": "react-in-viewport/dist/next",
        "react-markdown": isServer
          ? "react-markdown"
          : "react-markdown/react-markdown.min.js",
        tinyld: "tinyld/light",
      },
      fallback: {
        ...resolve.fallback,
        fs: false,
      },
    },
  }),
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
      {
        source: "/contact/:channel/",
        destination: "/",
      },
    ];
  },
});
