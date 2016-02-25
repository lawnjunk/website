var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync').create();

var paths = {
  client: ['src/js/**/*.js', 'src/html/**/*.html', 'src/css/**/*.css']
};

var webpackConfig = require('./webpack.config.js');
gulp.task('webpack', function(done){  
  gulp.src(__dirname + '/src/client.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    util.log('whattt the fuck');
    done();
});


gulp.task('copy', function(){
  gulp.src('src/html/index.html').pipe(gulp.dest(__dirname + '/build'));
});


gulp.task('build', ['copy', 'webpack']);

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: __dirname + '/build/'
    }
  });

  gulp.watch(paths.client, ['build']).on('change', function(){
    browserSync.reload();
  });
});


gulp.task('watch', function(){
  gulp.watch(paths.client, ['build']);
});


