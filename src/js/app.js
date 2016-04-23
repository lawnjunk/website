var path = require(__dirname + '/vendor/path.js');
var $ = require('jquery');

function index(){
  $('.curses-content').text('hahahha');
  console.log('hahahahhah');
}

function about(){
  $('.curses-content').text('aboutha');
  console.log('aboutahhah');
}

path.map('/').to(index);
path.map('#/slash').to(index);
path.listen();
