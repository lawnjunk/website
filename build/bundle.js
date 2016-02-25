/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Article = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	    articleEL.appendChild(headingEL);
	    articleEL.appendChild(textEl);
	    return articleEL;
	  }
	}


/***/ }
/******/ ]);