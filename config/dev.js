const webpack = require('webpack');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain (chain) {
      chain.plugin('record').use(webpack.ProvidePlugin, [{
        'crypto.getRandomValues': 'polyfill-crypto.getrandomvalues',
      }]);
    }
  },
  h5: {}
}
