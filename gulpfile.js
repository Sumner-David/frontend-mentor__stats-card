const postcss = require('gulp-postcss')
const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const tailwindcss = require('tailwindcss')
const postcssClean = require('postcss-clean')
const postcssImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')

function styles() {
  let plugins = [
    tailwindcss('./tailwind.config.js'),
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    postcssFlexbugsFixes,
    autoprefixer
  ]

  return gulp.src('css/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(concat({ path: 'style.css' }))
    .pipe(rename('styles.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('.'))
}

function server() {
  console.log("\r\n Starting BrowserSync \r\n" );

  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    },
  });
};

function reload(done) {
  browserSync.reload();
  done();
};

function watchFiles(done) {
  gulp.watch('**/*.html', reload);
  gulp.watch('./css/**/*.scss', gulp.series(styles,reload));
  gulp.watch('./tailwind.config.js', gulp.series(styles,reload));
  gulp.watch('./js/*.js', reload)
};

// Spin up server & watch files
exports.styles = styles
exports.default = gulp.parallel(server, watchFiles);