module.exports = {
    apps: [{
        name: 'CORSProxyService',
        script: 'server.js',
        env: {
            HOST: '0.0.0.0',
            PORT: 6001,
            CORSANYWHERE_BLACKLIST: [],
            CORSANYWHERE_WHITELIST: [],
            CORSANYWHERE_RATELIMIT: '50 3',
            NODE_ENV: 'production',
        },
    }],
};
