/*
    Require Gulp modules
*/

const gulp         = require("gulp");
const sass         = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat       = require("gulp-concat-css");
const cleanCSS     = require("gulp-clean-css");
const imagemin     = require("gulp-imagemin");
const sourcemaps   = require("gulp-sourcemaps");
const browserSync  = require("browser-sync").create();

/*
    Set resource Input directory and Output Directory

    Input  - resources/scss and all sub folders
    Output - resources/stylesheets
*/

const resourceInput  = ['resources/scss/**/*.scss', 'resources/scss/**/*_.scss'];
const resourceOutput = 'resources/stylesheets';

/*
    Set the minified output folder - assets/stylesheets/bundle.min.scss

    Output - assets/stylesheets
*/

const minifiedOutput = 'assets/stylesheets';

/*
    Set the images input folder
*/

const imageInput = 'resources/images/*';

/*
    Set the minified images output folder
*/

const imageOutput = 'assets/images';

/*
    Index.html file location
*/

const htmlLocation = '.';

/*
    Set the sassOptions

    errlogToConsole - Log errors the the console
    outputStyle     - Set to expanded in case the user wants to edit the css file directly
*/

const sassOptions = {
    errLogToConsole: true,
    outputStyle:     "expanded"
};

/*
    Set the autoprefixer options

    browsers - Uses the last 2 versions of Firefox ESR with a greater than 5% accepting rate
*/

const autoprefixerOptions = {
    browsers: ['last 2 versions'],
    cascade:  false,
    grid:     true
};

/*
    Gulp SCSS task

    Grabs scss files from resourcesInput folder, pipes scss it through the autoprefixer then sends it to
    the destination folder
*/

gulp.task('scss', function () {
    return gulp
        .src(resourceInput)
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(resourceOutput));
});

/*
    Gulp concat task

    Grabs all of the css files in the resource output folder, combines them, and then minifys them and sends them
    to the production assets folder with source maps
*/

gulp.task('concat', ['scss'], function() {
    return gulp
        .src(resourceOutput + '/*.css')
            .pipe(concat('bundle.min.css'))
            .pipe(sourcemaps.init())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(minifiedOutput))
        .pipe(browserSync.stream());
});

/*
    Gulp Imagemin

    Minifies all of the images in the resources/images folder and pipes them to the assets/images folder
*/

gulp.task('images', function() {
   return gulp
       .src(imageInput)
           .pipe(imagemin({ optimizationLevel: 7 }))
       .pipe(gulp.dest(imageOutput));
});

/*
 Gulp file watcher task to run images, scss, concat tasks, and auto-reloading with browser-sync.
 */

gulp.task('watch', function() {

        // Browser Sync Init
        browserSync.init({
            server: htmlLocation
        });

        // Run Images First
        gulp.watch(imageInput, ['images']);

        // Watches SCSS and HTML file changes, runs concat which compiles scss first then creates the bundle.min.css file, then reloads browser
        gulp.watch([resourceInput, htmlLocation + '/*.html'], ['concat']).on('finish', browserSync.reload);

});

/*
    Gulp Default

    Default task that is ran on gulp start
*/

gulp.task('default', ['watch']);