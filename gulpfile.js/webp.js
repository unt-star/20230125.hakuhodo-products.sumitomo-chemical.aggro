const gulp = require('gulp');
const webp = require('gulp-webp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const mode = require('gulp-mode')();
const { destDir } = require('./config');

const exportOriginalImage = () => {
  return gulp.src([
    'static/_webp/**',
  ])
    .pipe(changed(`${destDir}/**`))
    .pipe(mode.production(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminPngquant({
        quality: [0.6, 0.8],
        speed: 1
      })
    ])))
    .pipe(gulp.dest(`${destDir}/assets/img`));
};

const exportWebp = () => {
  return gulp.src([
    'static/_webp/**'
  ])
    .pipe(webp())
    .pipe(gulp.dest(`${destDir}/assets/img`));
};

exports.webp = gulp.parallel(exportOriginalImage, exportWebp);