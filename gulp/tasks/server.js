export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
            index: "portfolio.html"
        },
        notify: false,
        port: 3000
    })
}