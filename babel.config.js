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
                {
                    root: ["./src"],
                    alias: {
                        "@": "./src",
                    },
                },
            ],
            ["module:react-native-dotenv"],
            "react-native-reanimated/plugin",
        ],
    };
};
