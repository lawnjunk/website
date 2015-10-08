"use strict";

var app = {};

app.backButton = document.getElementsByClassName('back-button')[0];
app.okButton = document.getElementsByClassName('ok-button')[0]; 
app.homeButton = document.getElementsByClassName('home-button')[0]; 
app.backReference = {
  prjects: '/'
};

console.log('window', window);

window.addEventListener('load', function(){
  console.log('lulwat loaded');

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

  if (!!app.backButton){
    app.backButton.addEventListener('click', function(){
      window.location.href = '/';
    });
  }
});
