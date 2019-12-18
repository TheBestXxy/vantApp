"use strict";
const path = require("path");
const port = process.env.port || process.env.npm_config_port || 3000; // dev port

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        proxy: {
            "/ids": {
                target: "http://10.206.20.46:8088",
                ws: true,
                changeOrigin: true
            },
            "/api": {
                target: "http://192.168.1.65:8081",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        },
        overlay: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/styles/theme.less")]
        }
    },
    css: {
        extract: process.env.NODE_ENV === "development" ? false : true
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.optimization.minimize(true);
            config.optimization.splitChunks({
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vant)[\\/]/,
                        name: "vendor",
                        chunks: "initial",
                        priority: -10
                    }
                }
            });
        }
    }
};
