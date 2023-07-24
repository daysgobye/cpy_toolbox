var webpack = require('webpack');

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({

        externals: ['canvas']
        ,
        module: {
            rules: [
                {
                    test: /canvas/,
                    use: loaders.null(),
                },
            ],
        },
        plugins: [
            new webpack.IgnorePlugin({ resourceRegExp: /canvas|jsdom/, contextRegExp: /konva/ })
        ],
    })
}  