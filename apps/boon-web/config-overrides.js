const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = config => {
    config.resolve.plugins.pop();
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.plugins.push(new ReactRefreshWebpackPlugin());
    const tsRule = config.module.rules[2].oneOf[1];
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;
    return {
        ...config,
        devtool: undefined,
    }
};
