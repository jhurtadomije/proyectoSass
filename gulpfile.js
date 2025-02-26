import gulp from "gulp";
import sassPkg from "gulp-sass";
import dartSass from "sass";

const sass = sassPkg(dartSass);

const paths = {
  scss: "scss/**/*.scss",
  css: "css/"
};

function compileSass() {
  return gulp.src(paths.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.css));
}

function watchFiles() {
  gulp.watch(paths.scss, compileSass);
}

export const sassTask = compileSass;
export const watchTask = watchFiles;
export default gulp.series(compileSass, watchFiles);
