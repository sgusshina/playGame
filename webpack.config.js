module.exports = {
    entry: './playCard.js',
    mode: 'development',
    module: {
        rules: [
    {
            test: /\.css$/, // регулярное выражение для нахождения файла
            use: "css-loader"
    }
    ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    }