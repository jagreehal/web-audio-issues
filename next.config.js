const package = require('./package.json');
const basePath = process.env.NODE_ENV === 'production' ? `/${package.name}` : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
};
