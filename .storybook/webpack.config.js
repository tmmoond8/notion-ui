const path = require('path');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    enforce: 'pre',
    exclude: /(node_modules)/,
    use: [],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(path.resolve('./'));
  config.node = { fs: 'empty', React: 'empty'};
  
  return config;
};