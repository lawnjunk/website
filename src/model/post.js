module.exports = function Article(name, htmlId, text){
  this.name = name;
  this.htmlId = htmlId;
  this.text = text;

  this.genorateDisplay = function(){
    var articleEL = document.createElement('div');
    articleEL.setAttribute('id', this.htmlId);
    var headingEL = document.createElement('h1');
    headingEL.textContent = this.name;
    var textEl  = document.createElement('p');
    textEl.textContent = this.text;
    articleEL.appendElement(headingEL);
    articleEL.appendElement(textEl);
    return articleEL;
  }
}
