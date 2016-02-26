'use strict';


function addClass(cssClass){
  this.cssClasses.push(cssClass)
  if (this.el){
    if (!!this.el.setAttribute){
      debugger;
      this.el.setAttribute('class', this.cssClasses.join(' '));
    }
  }
}

function pushChild(htmlEL){
  this.children.push(htmlEL);
  if (this.el) {
    if (this.el.appendChild){
      this.el.appendChild(htmlEL.el)
    }
  }
}

function popChild(htmlEL){
  var result = this.children.pop();
  if (this.el.children){
    this.el.removeChild(this.el.lastChild);
  }
  return result;
}

function appendToElement(element){
  if (element.appendChild){
    element.appendChild(this.el)
  }
}

var htmlEL = {
  el: undefined,
  cssClasses: [],
  addClass: addClass,
  pushChild: pushChild,
  popChild: popChild,
  appendToElement: appendToElement,
  children: []
}

module.exports = function(element, cssClass){
  var result = Object.create(htmlEL);
  result.el = document.createElement(element);
  if (cssClass) result.addClass(cssClass);
  return result;
};
