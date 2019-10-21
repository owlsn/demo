var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
const Koa = require('koa')
const koa_static = require('koa-static')

// var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
const proxy = require('koa-server-http-proxy')
var webpackConfig = require('./webpack.dev.conf.vue')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

// const server = express();
const server = new Koa();
var compiler = webpack(webpackConfig)

var devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('koa-webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

var context = config.dev.context

switch (process.env.NODE_ENV) {
    case 'local': var proxypath = 'http://localhost:3000'; break;
    // case 'online': var proxypath = 'http://elm.cangdu.org'; break;
    default: var proxypath = config.dev.proxypath;
}
var options = {
    target: proxypath,
    changeOrigin: true,
}
// if (context.length) {
//     context.forEach(function (currentValue, index, arr) {
//         server.use(httpProxy(currentValue, {
//             target: proxypath,
//             changeOrigin: true,
//             logs: true
//         }))
//     })
// }

const proxyTable = {
    '/json': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/json': '/json/4' },
        changeOrigin: true
    },
    '/apis': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/apis': '' },
        changeOrigin: true
    }
}

Object.keys(proxyTable).forEach((context) => {
    var options = proxyTable[context]
    server.use(proxy(context, options))
})
// handle fallback for HTML5 history API
// server.use(require('connect-history-api-fallback')())
server.use(require('koa-connect-history-api-fallback')())

// serve webpack bundle output
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(koa_static(staticPath))
// server.use(express.static(staticPath))

module.exports = server.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})
