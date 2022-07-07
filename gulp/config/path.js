//Получаем имя папки проекта
import * as nodeParh from 'path';
const rootFolder = nodeParh.basename(nodeParh.resolve());

const buildFolder = `./dist`; //Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files`,
        fonts: `${buildFolder}/fonts`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        scss: `${srcFolder}/scss/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    }, 
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder, 
    rootFolder: rootFolder,
    ftp:`test`
}
