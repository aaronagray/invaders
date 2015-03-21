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

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Game = _interopRequire(__webpack_require__(2));

	window.onload = function () {
	  new Game("game");
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Player = _interopRequire(__webpack_require__(4));

	var Game = function Game(canvasId) {
	  var _this = this;

	  var canvas = document.getElementById(canvasId),
	      screen = canvas.getContext("2d"),
	      gameSize = { x: canvas.width, y: canvas.height };

	  this.bodies = [new Player(this, gameSize)];

	  var tick = function () {
	    _this.update();
	    _this.draw(screen, gameSize);
	    requestAnimationFrame(tick);
	  };

	  tick();
	};

	Game.prototype = {
	  update: function update() {
	    for (var i = 0; i < this.bodies.length; i++) {
	      this.bodies[i].update();
	    }
	  },

	  draw: function draw(screen, gameSize) {
	    screen.clearRect(0, 0, gameSize.x, gameSize.y);
	    for (var i = 0; i < this.bodies.length; i++) {
	      drawRect(screen, this.bodies[i]);
	    }
	  }
	};

	var drawRect = function (screen, body) {
	  screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2, body.size.x, body.size.y);
	};

	module.exports = Game;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Keyboarder = function Keyboarder() {
	  var keyState = {};

	  window.onkeydown = function (e) {
	    keyState[e.keyCode] = true;
	  };

	  window.onkeyup = function (e) {
	    keyState[e.keyCode] = false;
	  };

	  this.isDown = function (code) {
	    return keyState[code] === true;
	  };

	  this.KEYS = {
	    LEFT: 37,
	    RIGHT: 39,
	    SPACE: 32
	  };
	};

	module.exports = Keyboarder;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Keyboarder = _interopRequire(__webpack_require__(3));

	var Player = function Player(game, gameSize) {
	  this.game = game;
	  this.size = { x: 15, y: 15 };
	  this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
	  this.keyboarder = new Keyboarder();
	};

	Player.prototype = {
	  update: function update() {
	    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
	      this.center.x -= 2;
	      return;
	    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
	      this.center.x += 2;
	    }
	  }
	};

	module.exports = Player;

/***/ }
/******/ ]);