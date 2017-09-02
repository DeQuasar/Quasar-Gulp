/*
    Require Gulp modules
*/

const gulp         = require("gulp");
const sass         = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat       = require("gulp-concat-css");
const cleanCSS     = require("gulp-clean-css");
const sourceMaps   = require("gulp-sourcemaps");

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
    Set the sourcemaps output folder -
*/

const sourcemapsOutput = 'resources/sourcemaps';

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
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

/*
    Gulp SCSS task

    Grabs scss files from resourcesInput folder, pipe sourcemaps to destination folder, pipes scss it through the autoprefixer then sends it to
    the destination folder
*/

gulp.task('sass', function () {
    return gulp
        .src(resourceInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write(sourcemapsOutput))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(resourceOutput));
});

/*
    Gulp concat task

    Grabs all of the css files in the resource output folder, combines them, and then minifys them and sends them
    to the production assets folder
*/

gulp.task('concat', ['sass'], function() {
    return gulp
        .src(resourceOutput + '/*.css')
        .pipe(concat('bundle.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(minifiedOutput));
});

/*
    Gulp file watcher task to re-run Gulp Sass and Gulp Concat tasks
*/

gulp.task('watch', function() {
    return gulp
        .watch(resourceInput, ['concat'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

/*
    Gulp Default

    Default task that is ran
*/

gulp.task('default', ['watch']);