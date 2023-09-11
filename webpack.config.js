const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Apply loader to .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel for transpilation
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        ignore: [ './node_modules/mapbox-gl/dist/mapbox-gl.js' ]
                    }
                }
            }
        ]
    }

};
