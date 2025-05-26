module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            [
                "module-resolver",
                'module:react-native-dotenv',
                {
                    root: ["./src"],
                    alias: {
                        "@": "./src",
                    },
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};
