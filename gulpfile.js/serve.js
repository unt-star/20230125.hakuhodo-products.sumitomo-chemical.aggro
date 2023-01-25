const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const connectSSI = require('connect-ssi');
const { markup } = require('./ejs');
const { styles } = require('./styles');
const { script } = require('./script');
const { handleStatic } = require('./handle-static');

// Reloading browsers
const browserReload = callback => {
  browserSync.reload();
  callback();
};

// Build and serve
const serve = () => {
  browserSync.init({
    open: false,
    startPath: '',
    reloadDelay: 1000,
    once: true,
    notify: false,
    ghostMode: false,
    server: {
      baseDir: 'dest',
      middleware: connectSSI({
        baseDir: 'dest',
        ext: '.html'
      })
    }
  });

  watch('src/**/*.html', { usePolling: true }).on('change', browserReload);
  watch('src/ejs/**/*.ejs', { usePolling: true }).on('change', series(markup, browserReload));
  watch('src/scss/**/*.scss', { usePolling: true }).on('change', series(styles, browserReload));
  watch('src/es6/**/*.es6', { usePolling: true }).on('change', series(script, browserReload));
  watch('static/**/*.{jpg,jpeg,png,gif,svg}', series(handleStatic, browserReload));
};

exports.serve = serve;