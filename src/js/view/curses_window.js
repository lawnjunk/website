var el = require('../../lib/el.js');

module.exports = function(){
  var curses_window_container = document.createElement('div');
  curses_window_container.setAttribute('class', 'curses-window-container');
  var curses_window = document.createElement('div');
  curses_window.setAttribute('class', 'curses_window');
  var curses_window_header = document.createElement('section');
  curses_window_header.setAttribute('curses-window-header');
  var curses_window_main = document.createElement('section');
  var curses_window_footer = document.createElement('section');

  var cursesWindowContainer = el('div', 'curses-window-container');
  var lulwat = el('h1', 'lulwat');
  cursesWindowContainer.pushChild(lulwat);
  return cursesWindowContainer;
}
