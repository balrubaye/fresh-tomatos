"use strict";

const path = require('path');
var SRC_DIR= path.resolve( __dirname ,'src/app/');
var BUILD_DIR= path.resolve( __dirname , 'dist');

module.exports = {
  entry:  path.join(SRC_DIR, "main.jsx"),
  output: {
    path: path.join(BUILD_DIR),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
      include:SRC_DIR,
      loader:'babel'
      }
    ]
  }
};
