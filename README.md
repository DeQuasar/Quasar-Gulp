Quasar Gulp Boilerplate
---

This is a simple boilerplate for Gulp that Generates Source Maps, Auto-Prefixes, Concatenates,
Cleans, and Minifys the SCSS into a bundle.min.css file.

NPM Modules
---

* Gulp 
* Sass 
* Autoprefixer
* Concat CSS
* Clean CSS
* Sourcemaps

Usage Instructions
---

First you will need to clone the Quasar-Gulp Github Repository in to your existing project folder.

```git
git clone git@github.com:DeQuasar/Quasar-Gulp.git . 
```

Next Navigate to your project folder that contains the **package.json** file and run the following command.
This command will install all the devDependencies in the package.json file.

```git
npm install --save-dev
```

Next find the following paths in the **gulpfile.js** file and edit them according to your project's directory structure.

##### SCSS Files

```javascript
const resourceInput  = ['resources/scss/**/*.scss', 'resources/scss/**/*_.scss'];
const resourceOutput = 'resources/stylesheets';
```

##### SCSS Minfied Output

```javascript
const minifiedOutput = 'assets/stylesheets';
```

##### Source Maps Output

```javascript
const sourcemapsOutput = 'resources/sourcemaps';
```

##### Gulp Packages Options

You may either keep the current configuration of the Gulp Packages settings or you can change them to
the needs of your own project.

#### Running the Gulpfile

Simply run the following command in your terminal.
```
gulp
```

TODO List
---

* Imagemin - Compress images
* Newer - Better file piping
* htmlclean - Cleans and minifys HTML Files
* Browser-Sync - Reload browser on file change

Final Notes
---

If you have an issues, suggestions, or questions please create an issue request or email me at
**tonypro999@gmail.com.** 