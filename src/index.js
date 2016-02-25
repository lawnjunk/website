var Article = require('./model/post.js');

//$('body').html('sup slug?')
//console.log('hows it going', Article);
var art1 = new  Article('how is this working', 'how_works', 'thisi is my random text content').genorateDisplay();

//document.body.appendElement(art1);

console.log('lulwat sluuuuuug');
document.body.textContent = "lulwat lulwat sflkjdsf";
var x = document.createElement('h1')
x.textContent = 'ffffffuuuuuksldjfsk yeah'
x.style.color = 1000;
document.body.appendChild(x);
document.body.appendChild(art1);
