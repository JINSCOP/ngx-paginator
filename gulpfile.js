var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('copy-task', function() {
    return gulp.src(['README.md', 'package.json', 'LICENSE'])
        .pipe(gulp.dest('./dist'));
});

gulp.task("scripts", function() {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write("./"))   
        .pipe(gulp.dest("./dist"));
});

gulp.task('default', function() {
    gulp.run('copy-task');
    gulp.run('scripts');
});