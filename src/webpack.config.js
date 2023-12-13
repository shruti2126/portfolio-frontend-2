/** @format */

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // ... your other webpack config
  plugins: [
    // ... your other plugins
    new BundleAnalyzerPlugin(),
  ],
};
