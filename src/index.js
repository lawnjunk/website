var $ = require('jquery');
var Article = require('./model/post.js');

$('body').html('sup slug?')
console.log('hows it going', Article);
var art1 = new  Article('how is this working', 'how_works', 'thisi is my random text content').genorateDisplay();

document.body.appendElement(art1);
