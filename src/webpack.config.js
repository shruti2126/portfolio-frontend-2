/** @format */

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const type = "commonjs";
export const plugins = [
  // ... your other plugins
  new BundleAnalyzerPlugin(),
];
