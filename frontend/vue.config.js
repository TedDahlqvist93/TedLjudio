module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "^/rest": {
        target: "http://localhost:3000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/rest": "/" }
      },
      "^/api/": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
        logLevel: "debug"
      },
    }
  }
}
