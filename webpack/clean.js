const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (cleanRoot) => {
  return {
    plugins: [
      new CleanWebpackPlugin(['build', 'index.html'], {
        root: cleanRoot,
        verbose: true,
        dry: false,
        //exclude: ['do_not_delete.js']
      }),
    ],
  };
};
