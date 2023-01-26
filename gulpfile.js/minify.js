const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

// Minify CSS
const cssMinify = () => {
  const plugins = [
    cssnano()
  ];

  return gulp.src('build/sc-natural-products/lp/assets/css/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build//sc-natural-products/lp/assets/css/'));
};

exports.cssMinify = cssMinify;