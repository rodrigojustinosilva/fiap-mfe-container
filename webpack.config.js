const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        mfe1: env.VITE_MFE1_URL,
        mfe2: env.VITE_MFE2_URL,
      },
    }),
  ],
};
