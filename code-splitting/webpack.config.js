const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    app1: './src/app1.js',
    app2: './src/app2.js',
    app3: './src/app3.js',
    app4: './src/app4.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // チャンクの名前を指定
      // 例: "common"を指定した場合、下記｢output｣の設定により"common.bundle.js"というファイル名になる
      name: 'common',
      // チャンクへモジュールを移動する基準となる最小インポート数
      // 例: ｢3｣を指定した場合、3箇所からインポートされているモジュールがチャンクへ移動される
      minChunks: 3,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
