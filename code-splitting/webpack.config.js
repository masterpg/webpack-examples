const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    view1: './src/view1.js',
    view2: './src/view2.js',
    view3: './src/view3.js',
    view4: './src/view4.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // チャンクの名前を指定
      // 例: "common"を指定した場合、下記の｢output｣の設定により"common.bundle.js"というファイル名になる
      name: 'common',
      // チャンクへモジュールを移動する基準となる最小インポート数
      // 例: ｢3｣を指定した場合、3ファイル以上でインポートが行われるモジュールはチャンクへ移動される
      minChunks: 3,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
