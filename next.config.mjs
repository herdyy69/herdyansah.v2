/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig = {
  reactStrictMode: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./src/styles"],
                prependData: `@import "variables.scss";`,
              },
            },
          },
        ],
      },
    ],
  },
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@import "variables.scss";`,
  },
};

export default nextConfig;
