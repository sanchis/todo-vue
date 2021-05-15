module.exports = {
  publicPath: '/todo-vue/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./scss/_variables.scss";`
      }
    }
  }
}
