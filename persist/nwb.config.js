var RewirePlugin = require("rewire-webpack");

module.exports = {
  type: 'web-module',
  build: {
    externals: {},
    global: 'ReduxVCR_persist',
    jsNext: true,
    umd: true,
  },
  webpack: {
    extra: {
      plugins: [new RewirePlugin()],
    },
  },
};
