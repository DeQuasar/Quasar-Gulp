Quasar Gulp Boilerplate
---

> This is a simple boilerplate for Gulp that Generates Source Maps, Auto-Prefixes, Concatenates,
Cleans, and Minifys the SCSS into a bundle.min.css file.

NPM Modules
---

* Gulp 
* Sass 
* Autoprefixer
* Concat CSS
* Clean CSS
* Imagemin
* Sourcemaps
* BrowserSync

Usage Instructions
---

> First you will need to clone the Quasar-Gulp Github Repository in to your existing project folder.

```git
git clone git@github.com:DeQuasar/Quasar-Gulp.git . 
```

> Next Navigate to your project folder that contains the **package.json** file and run the following command.
This command will install all the devDependencies in the package.json file.

```git
npm install --save-dev
```

> The current directory structure that I am using is as follows.

* assets - Production folder
    * images - Productions images
    * stylesheets - Productions stylesheets
    * javascript - Production Javascript

* resources - Development Folder
    * images - Uncompressed images
    * scss - SCSS Files
        * app.scss - Master SCSS File for imports
            * scss folder - SCSS Folder
            * scss folder - SCSS Folder
    * stylesheets - Stylesheets that will be combined, cleaned, and compressed
        * app.css
        * reset.css                

> Next find the following paths in the **gulpfile.js** file and edit them according to your project's directory structure.

##### SCSS Files

```javascript
const resourceInput  = ['resources/scss/**/*.scss', 'resources/scss/**/*_.scss'];
const resourceOutput = 'resources/stylesheets';
```

##### SCSS Minfied Output

```javascript
const minifiedOutput = 'assets/stylesheets';
```

##### Development Images

```javascript
const imageInput = 'resources/images/*';
```

##### Compressed Images

```javascript
const imageOutput = 'assets/images';
```

##### HTML File Location

> This is the location of the entry point for the BrowserSync gulp plugin.

```javascript
const htmlLocation = '.';
```

##### Gulp Packages Options

> You may either keep the current configuration of the Gulp Packages settings or you can change them to
the needs of your own project.

#### Running the Gulpfile

> Simply run the following command in your terminal.
```
gulp
```

TODO List
---

* ~~Imagemin - Compress images~~ **Completed:** *02 September 2017*
* ~~Browser-Sync - Reload browser on file change~~ **Completed:** *02 September 2017*

Final Notes
---

If you have an issues, suggestions, or questions please create an issue request or email me at
**tonypro999@gmail.com.** 