module.exports = {
    plugins: [
        '@babel/plugin-proposal-private-property-in-object',
        "file-loader",
    ],
    presets: [['@babel/preset-env',
        {targets: {node: 'current'}}],
        "@babel/preset-react",
        '@babel/preset-typescript'
    ]
};