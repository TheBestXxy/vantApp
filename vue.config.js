'use strict'
// const path = require('path')
// const glob = require('glob')

// function resolve(dir) {
//     return path.join(__dirname, dir)
// }

// function getEntry(url) {
//     let entrys = {}
//     glob.sync(url).forEach(item => {
//         // splice(-3)取数组后三项
//         let urlArr = item.split('/').splice(-3)
//         entrys[urlArr[1]] = {
//             entry: 'src/pages/' + urlArr[1] + '/' + 'index.js',
//             template: 'src/pages/' + urlArr[1] + '/' + 'index.html',
//             filename: urlArr[1] + '.html',
//             title: 'pages-' + urlArr[1]
//         }
//     })
//     return entrys
// }
// let pages = getEntry('./src/pages/**?/*.html')

const port = process.env.port || process.env.npm_config_port || 8082 // dev port
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        proxy: {
            '/ids': {
                target: 'http://10.206.20.46:8088',
                ws: true,
                changeOrigin: true,
            }
        },
        overlay: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    }
}