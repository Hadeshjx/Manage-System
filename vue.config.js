// webpack 相关
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData:`
                    @import "~@/assets/scss/variables.scss";       
                `
            }
        }
    },
    devServer:{
        proxy: {
            '/api':{
                target:'http://localhost:3300',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
