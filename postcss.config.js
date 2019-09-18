const AutoPrefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = ({
    file
}) => {
    let remUnit
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        remUnit = 37.5
    } else {
        remUnit = 75
    }
    return {
        plugins: [
            AutoPrefixer({
                overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                ]
            }),
            pxtorem({
                rootValue: 50,
                propList: ['*'],
                selectorBlackList: ['van-circle__layer']
            })
        ]
    }
}