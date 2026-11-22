const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
