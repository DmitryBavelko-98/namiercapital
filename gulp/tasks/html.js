import fileinclude from "gulp-file-include";
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const html = () => {
    //получение файлов из src
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.replace(/@portfolio.html/g, 'portfolio.html'))
        .pipe(app.plugins.replace(/@team.html/g, 'team.html'))
        .pipe(app.plugins.replace(/@contact.html/g, 'contact.html'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNoSvg()
            )
        )
        .pipe( 
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            ) 
        )
        //перенос файлов в build
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}