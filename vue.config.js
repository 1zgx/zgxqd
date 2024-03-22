const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        historyApiFallback: true,
        allowedHosts: "all",
        open: true,
        host: '192.168.3.7',
        port: 8082,
        https: true,
        proxy: 'https://bellonlinetest.bell.ai',
    },
    publicPath: process.env.NODE_ENV === 'production' ? '1zgx' : '/'
});

