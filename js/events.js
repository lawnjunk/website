"use strict";
function createApp(callback){
  var app = {
    selectedMenuItem: 0,
    selectedActionItem: 0
  };

  function getMenuItems(){
    var nav = document.getElementsByTagName('nav');
    var nav_ul = !!nav ? (!!nav.children ? nav.children[0]: null): null;
    var nav_ul_li = !!nav_ul ? (!!nav_ul.children ? nav_ul.children: null) : null;
    return nav_ul_li;
  }

  window.addEventListener('load', function(){
    app.backButton = document.getElementsByClassName('back-button')[0];
    app.okButton = document.getElementsByClassName('ok-button')[0]; 
    app.homeButton = document.getElementsByClassName('home-button')[0]; 
    app.menuItems = getMenuItems();
    app.selectedMenuItem = 0;
    app.selectedActionItem = 0;

    app.init = function(){
      if (!!app.menuItems) {
        app.menuItems[app.selectedMenuItem].className = 'selected';
      }
    };

    app.upKeyEvent = function(){
      app.selectedMenuItem = selectedMenuItem + 1 % app.menuItems.length; 
    };

    app.downKeyEvent = function(){
      app.selectedMenuItem = selectedMenuItem - 1 % app.menuItems.length; 
    };

    if (!!app.okButton){
      app.okButton.addEventListener('click', function(){
        console.log('clickered that button');
      });
    }

    if (!!app.backButton){
      app.backButton.addEventListener('click', function(){
        window.location.href = window.location.href + '..';
        console.log('clickered that button');
      });
    }

    if (!!app.homeButton){
      app.homeButton.addEventListener('click', function(){
        window.location.href = '/';
      });
    }

    app.init();
    callback(app);
  });
};

createApp(function(app){
  console.log('App:', app);
});
