var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync').create();

var paths = {
  client: ['src/js/**/*.js', 'src/html/**/*.html', 'src/css/**/*.css']
};

var webpackConfig = require(__dirname + '/webpack.config.js');

gulp.task('webpack', function(done){  
  gulp.src(__dirname + '/src/js/client.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    done();
});


gulp.task('copy', function(){
  gulp.src(__dirname + '/src/html/index.html').pipe(gulp.dest(__dirname + '/build'));
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


