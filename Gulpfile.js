var gulp = require("gulp");

var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("lint", function() {
    return gulp.src("./lib/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("concat-minify", function() {
    return gulp.src("./lib/*.js")
        .pipe(concat("domion.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
});

// Watch Files For Changes
gulp.task("watch", function() {
    gulp.watch("./lib/*.js", ["lint", "concat-minify"]);
});

// Default Task
gulp.task("default", ["lint", "concat-minify", "watch"]);