const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csscomb = require('gulp-csscomb');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rucksack = require('rucksack-css');
const lec = require('gulp-line-ending-corrector');
const { END_OF_LINE, ENCODING, destDir } = require('./config');
const mode = require('gulp-mode')();

const isProduction = mode.production();
const sourcemapsInit = isProduction ? false : true;
const sourcemapsWrite = isProduction ? false : '.';

// Compile and automatically prefix stylesheets
const styles = () => {
  /**
   * プラグイン一覧
   *
   * - autoprefixer：ベンダープレフィックスの付与
   *
   */
  const plugins = [
    autoprefixer(),
    rucksack()
  ];

  return gulp.src('src/scss/**/*.scss', { sourcemaps: sourcemapsInit })
    .pipe(sass.sync({
      includePaths: 'src/scss/assets/css/_partials/',
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(csscomb())
    .pipe(postcss(plugins))
    .pipe(lec({ eolc: END_OF_LINE, ENCODING }))
    .pipe(gulp.dest(destDir, { sourcemaps: sourcemapsWrite }));
};

exports.styles = styles;