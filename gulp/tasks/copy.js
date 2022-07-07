export const copy = () => {
    //получение файлов из src
    return app.gulp.src(app.path.src.files)
    //перенос файлов в build
    .pipe(app.gulp.dest(app.path.build.files))
}