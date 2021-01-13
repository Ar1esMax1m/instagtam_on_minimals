const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, "../server/public/dist"),
  devServer: {
    proxy: {
      '/' : {
        ws: false,
        target: 'http://localhost:3000'
      }
    }
  }
}