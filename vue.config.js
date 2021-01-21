module.exports = {
    devServer: {
        port:8088
    },
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
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }

        }
    },
}