var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


module.exports = {
  // 插件项
  // 这里我们使用 CommonsChunkPlugin 插件, 用于提取多个入口文件的公共脚本, 归纳成 common.js, 方便多页面之间复用
  plugins : [commonsPlugin],

  entry : {
    page1 : './page1',
    page2 : ['./entry1', './entry2']
  },

  output : {
    // path : 'dist/js/page',
    path : 'dist/js',
    // 只有 [name] 才可以被识别
    // filename : '[again].bundle.js'
    filename : '[name].bundle.js'

  }

};