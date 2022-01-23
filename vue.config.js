module.exports = {
  publicPath: '',
  configureWebpack: {
    devtool: 'source-map',
  },
  pages: {
    index: {
      // 修改入口
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
};
