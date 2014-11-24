var gulp = require('gulp');
var sass = require('gulp-sass');
var ap = require('gulp-autoprefixer');

var paths = {
  sass: ['./scss/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
