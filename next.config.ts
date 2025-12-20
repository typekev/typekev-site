import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  distDir: "build",
  serverExternalPackages: ["pg"],
  webpack(config, { isServer }) {
    // audio files
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: config.inlineImageLimit,
            fallback: "file-loader",
            publicPath: `${config.assetPrefix ?? ""}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
  turbopack: {
    resolveAlias: {
      dns: { browser: "./empty.ts" },
      fs: { browser: "./empty.ts" },
      net: { browser: "./empty.ts" },
      tls: { browser: "./empty.ts" },
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
