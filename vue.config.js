module.exports = {
    devServer: {
        port:8088,
        disableHostCheck: true
    },
    // publicPath: process.env.NODE_ENV === 'production' ? '/examples/' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // entry: process.env.NODE_ENV === 'dev'? path.resolve(__dirname, './src/main.js'): path.resolve(__dirname, './index.js'),
    // output: {
    //     path: path.resolve(__dirname, './lib'),
    //     publicPath: '/dist/',
    //     filename: 'input-ui.js',
    //     library: 'input-ui',
    //     libraryExport: 'default',
    //     libraryTarget: 'umd'
    // },
    // externals: {
    //     vue: 'vue'
    // }
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            title: '示例',
        },
    },
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    productionSourceMap:false
}