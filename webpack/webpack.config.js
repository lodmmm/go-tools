var webpack = require('webpack');



module.exports = {

  entry : {
    amnhh : ['./entry1', './entry2']
  },

  output : {
    library : 'aaaa',
    libraryTarget : 'var',
    // path : 'dist/js/page',
    path : './dist/js',
    // 只有 [name] 才可以被识别
    // filename : '[again].bundle.js'
    filename : '[name].js'

  }

};