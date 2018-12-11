var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    sass.compiler = require('node-sass');
    return gulp.src("./styles/*.scss")
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ["./node_modules/@syncfusion/"]
        })).pipe(gulp.dest('./src/'));
});

var browserSync = require('browser-sync');

gulp.task('serve', ['styles'], function (done) {
    var bs = browserSync.create('EJ2 with Bootstrap3');
    var options = {
        server: {
            baseDir: './src'
        },
        ui: false
    };
    bs.init(options, done);
});

gulp.task('watch', ['serve'], function () {
    var bs = browserSync.get('EJ2 with Bootstrap3');

    gulp.watch("./styles/*.scss", ['styles', bs.reload]);
});
