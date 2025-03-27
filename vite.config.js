export default {
    base: "./",
    build: {
        outDir: "./dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "./index.html",
                beerclassification: "./beerclassification.html", 
                beerhisoty: "./beerhisoty.html",
                beervide: "./beervide.html",
                wineclassification: "./wineclassification.html",
                winehistory: "./winehistory.html",
                winevideo: "./winevideo.html",
            },
        },
    },
};
