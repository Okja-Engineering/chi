module.exports = {
    typescript: true,
    prettier: false,
    ref: true,
    outDir: "./src",
    svgo: {
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        inlineStyles: {
                            onlyMatchedOnce: false
                        },
                    }
                }
            },
            "removeComments",
        ],
    }
}