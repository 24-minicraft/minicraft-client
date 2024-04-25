const path = require("path")
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const entry = "./src/index.tsx"

const output = {
    filename: "index_bundle.js",
    path: path.resolve(__dirname, "dist"),
}

const devServer = {
    static: {
        directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
}

const resolveConfig = {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    alias: {
        "@": path.resolve(__dirname, "src"),
    },
}

const moduleRules = [
    {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
            loader: "swc-loader",
        },
    },
    {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "images/",
            },
        },
    },
]

const plugins = [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html",
    }),
]

module.exports = {
    entry,
    output,
    devServer,
    resolve: resolveConfig,
    module: {
        rules: moduleRules,
    },
    plugins,
}
