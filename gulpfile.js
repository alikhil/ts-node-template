const gulp = require("gulp");
const ts = require("gulp-typescript");
const copy = require("gulp-copy");

const tsProject = ts.createProject("tsconfig.json");

const gulp_tslint = require('gulp-tslint');

gulp.task('tslint', () => {
    gulp.src(['test/*.ts'])
      .pipe(gulp_tslint({
          formatter: "prose"
      }))
      .pipe(gulp_tslint.report({
          emitError: false
      }));
});

gulp.task("copy-configs", () => {
    return gulp.src("./src/configs/*.json")
        .pipe(gulp.dest("out/configs"));
});

gulp.task("scripts", () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("out"));
});

gulp.task("watch", ["scripts"], () => {
    gulp.watch("src/**/*.ts", ["scripts"]);
    gulp.watch("src/configs/*.json", ["copy-configs"]);
});

gulp.task("compile", ["scripts", "copy-configs"]);

gulp.task("default", ["copy-configs", "watch"]);