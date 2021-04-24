const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require("gulp-autoprefixer");

function styles() {
  return gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename('styles.css'))
  .pipe(sourcemaps.write())
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
  gulp.watch('*.html', reload);
  gulp.watch('./scss/*.scss', gulp.series(styles,reload));
  gulp.watch('./js/*.js', reload)
};

// Spin up server & watch files
exports.default = gulp.parallel(server, watchFiles);