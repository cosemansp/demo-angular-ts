module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './app/index',
    output: {
        path: './app/bundle',
        filename: 'main.js',
        publicPath: 'bundle'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                // html loader
                test: /\.html/, loaders: ['html-loader'], exclude: /node_modules/
            },

            {
                // Typescript loader
                test: /\.ts/, loaders: ['ts'], exclude: /node_modules/
            }
        ]
    },
    devServer: {
        // root folder to serve the app
        contentBase: './app',

        // Limit logging
        stats: {
            version: false,
            colors: true,
            chunks: false,
            children: true,
        },
    }
};
