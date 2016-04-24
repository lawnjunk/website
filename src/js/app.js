'use strict';
const director = require('director');
const $ = require('jquery');

function slash(){
  $('.curses-content').text('hahahha');
  console.log('hahahahhah');
}

function tutorials(){
  $('.curses-content').text('aboutha');
  console.log('aboutahhah');
}

const routes = {
  '/slash': slash,
  '/tutorials': tutorials
};

const router = director.Router(routes);
router.init();


