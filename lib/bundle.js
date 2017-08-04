/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
  function Note(canvas, ctx, y, string, length) {
    _classCallCheck(this, Note);

    this.canvas = canvas;
    this.ctx = ctx;

    var stringColors = {
      'G': [this.canvas.width / 4, "#FF3300"],
      'D': [this.canvas.width * .375, "#F2EA02"],
      'A': [this.canvas.width / 2, "#00FF00"],
      'E': [this.canvas.width * .625, "#00FFFF"]
    };

    this.y = y;
    this.x = stringColors[string][0];
    this.color = stringColors[string][1];
    this.length = length;
    this.hit = false;
  }

  _createClass(Note, [{
    key: 'drawNote',
    value: function drawNote() {
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y - this.length, this.canvas.width / 8, this.length);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.rect(this.x + 2, this.y - this.length + 2, this.canvas.width / 8 - 4, this.length - 4);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }, {
    key: 'move',
    value: function move(distance) {
      this.y = this.y + distance;
    }
  }]);

  return Note;
}();

exports.default = Note;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _note = __webpack_require__(0);

var _note2 = _interopRequireDefault(_note);

var _song = __webpack_require__(2);

var _song2 = _interopRequireDefault(_song);

var _violin = __webpack_require__(3);

var _violin2 = _interopRequireDefault(_violin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, ctx, len) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.len = 100;
    this.gameover = false;
    this.score = 0;
    this.result = ["", "EWW!", "WOW!", "YOU WON!"];
    this.resultIdx = 0;

    this.song = new _song2.default(this.canvas, this.ctx, -1000, this.len);

    this.pressedRed = false;
    this.pressedYellow = false;
    this.pressedGreen = false;
    this.pressedBlue = false;

    this.drawGame = this.drawGame.bind(this);
  }

  _createClass(Game, [{
    key: 'drawGame',
    value: function drawGame() {
      var _this = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var violin = new _violin2.default(this.canvas, this.ctx);
      violin.drawViolin();

      var hitbox = this.canvas.height * .75 + this.len / 2;

      this.song.notes.map(function (note) {
        note.move(1.55);
        note.drawNote();
        _this.drawScore(_this.ctx);
        _this.drawResult(_this.ctx, _this.resultIdx);

        if (note.y > hitbox + _this.len) {
          note.y = 3000;
        }
        if (note.x === _this.canvas.width / 4 && note.y < hitbox + _this.len / 2 && note.y > hitbox - _this.len / 2 && _this.pressedRed === true && _this.pressedBow || note.x === 3 * _this.canvas.width / 8 && note.y < hitbox + _this.len / 2 && note.y > hitbox - _this.len / 2 && _this.pressedYellow === true && _this.pressedBow || note.x === _this.canvas.width / 2 && note.y < hitbox + _this.len / 2 && note.y > hitbox - _this.len / 2 && _this.pressedGreen === true && _this.pressedBow || note.x === 5 * _this.canvas.width / 8 && note.y < hitbox + _this.len / 2 && note.y > hitbox - _this.len / 2 && _this.pressedBlue === true && _this.pressedBow) {
          _this.score++;
          _this.resultIdx = 2;
          note.hit = true;

          _this.ctx.beginPath();
          _this.ctx.rect(note.x, _this.canvas.height * .75, _this.canvas.width / 8, _this.len * 2);
          _this.ctx.fillStyle = "#FFFFFF";
          _this.ctx.fill();
        } else if (note.x === _this.canvas.width / 4 && note.y < hitbox + _this.len / 2 && note.y > hitbox + _this.len / 2 - 2 && _this.pressedRed === false || note.x === 3 * _this.canvas.width / 8 && note.y < hitbox + _this.len / 2 && note.y > hitbox + _this.len / 2 - 2 && _this.pressedYellow === false || note.x === _this.canvas.width / 2 && note.y < hitbox + _this.len / 2 && note.y > hitbox + _this.len / 2 - 2 && _this.pressedGreen === false || note.x === 5 * _this.canvas.width / 8 && note.y < hitbox + _this.len / 2 && note.y > hitbox + _this.len / 2 - 2 && _this.pressedBlue === false) {
          if (note.hit) {
            _this.resultIdx = 0;
          } else {
            _this.resultIdx = 1;
            _this.score--;
          }
        }
      });

      if (this.song.notes.every(function (note) {
        return note.y >= 3000;
      })) {
        this.resultIdx = 3;
        this.drawWin(this.ctx, this.resultIdx);
        this.gameover = true;
        return;
      }

      requestAnimationFrame(this.drawGame.bind(this));
    }
  }, {
    key: 'drawScore',
    value: function drawScore(ctx) {
      ctx.font = "30px Saira Condensed";
      ctx.fillStyle = "white";
      ctx.fillText("Score:  " + this.score, 100, this.canvas.height / 10);
    }
  }, {
    key: 'drawWin',
    value: function drawWin(ctx, idx) {
      ctx.font = "60px Saira Condensed";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(this.result[idx], this.canvas.width / 2, this.canvas.height / 2);
    }
  }, {
    key: 'drawResult',
    value: function drawResult(ctx, idx) {
      ctx.font = "60px Saira Condensed";
      ctx.textAlign = "center";
      if (idx === 1) {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "green";
      }
      ctx.fillText(this.result[idx], this.canvas.width / 2, this.canvas.height * .95);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _note = __webpack_require__(0);

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var song = ['A', 'D', 'G', 'D', 'A', 'A', 'A', '', 'D', 'D', 'D', '', 'A', 'E', 'E', '', 'A', 'D', 'G', 'D', 'A', 'A', 'A', '', 'D', 'D', 'A', 'D', 'G', '', '', ''];

var canon = [['E', 2], ['A', 2], ['D', 2], ['G', 2], ['D', 2], ['G', 2], ['D', 2], ['A', 2], ['E', 2], ['A', 2], ['D', 2], ['G', 2], ['D', 2], ['G', 2], ['D', 2], ['A', 2], ['A', 0.5], ['D', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5], ['A', 0.5], ['E', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['E', 0.5], ['A', 0.5], ['G', 0.5], ['E', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['E', 0.5], ['D', 0.25], ['A', 0.25], ['E', 0.5], ['D', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['A', 0.25], ['D', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['A', 0.5], ['G', 0.25], ['D', 0.25], ['A', 0.5], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['E', 0.25], ['A', 0.25], ['D', 0.25], ['A', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['D', 0.5], ['E', 0.25], ['A', 0.25], ['D', 0.5], ['G', 0.25], ['E', 0.25], ['G', 0.25], ['E', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['G', 0.5], ['A', 0.25], ['D', 0.25], ['A', 0.5], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['E', 2], ['A', 2], ['D', 2], ['G', 2], ['D', 2], ['G', 2], ['D', 2], ['A', 2], ['E', 2], ['A', 2], ['D', 2], ['G', 2], ['D', 2], ['G', 2], ['D', 2], ['A', 2]];

var Song = function () {
  function Song(canvas, ctx, startY, len) {
    _classCallCheck(this, Song);

    this.canvas = canvas;
    this.ctx = ctx;
    this.startY = startY;
    this.len = len;
    this.notes = this.notes();
  }

  _createClass(Song, [{
    key: 'notes',
    value: function notes() {
      var notes = [];
      var canvas = this.canvas;
      var ctx = this.ctx;
      var len = this.len;
      var startY = this.startY;
      canon.forEach(function (note) {
        if (note === '') {
          startY -= 30;
          return;
        } else {
          var newNote = new _note2.default(canvas, ctx, startY, note[0], len * note[1]);
          notes.push(newNote);
          startY -= len * note[1];
        }
      });
      return notes;
    }
  }, {
    key: 'move',
    value: function move(distance) {
      this.notes.forEach(function (note) {
        note.move(distance);
      });
    }
  }]);

  return Song;
}();

exports.default = Song;

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Violin = function () {
  function Violin(canvas, ctx) {
    _classCallCheck(this, Violin);

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Violin, [{
    key: "drawViolin",
    value: function drawViolin() {
      this.ctx.beginPath();
      this.ctx.rect(this.canvas.width / 4, this.canvas.height * .75, this.canvas.width / 8, 200);
      this.ctx.fillStyle = "#9E2407";
      this.ctx.fill();

      this.ctx.font = "20px Saira Condensed";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("A", this.canvas.width * .3125, this.canvas.height * .82);

      this.ctx.beginPath();
      this.ctx.rect(this.canvas.width * .375, this.canvas.height * .75, this.canvas.width / 8, 200);
      this.ctx.fillStyle = "#D1AA12";
      this.ctx.fill();

      this.ctx.font = "20px Saira Condensed";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("S", this.canvas.width * .4375, this.canvas.height * .82);

      this.ctx.beginPath();
      this.ctx.rect(this.canvas.width / 2, this.canvas.height * .75, this.canvas.width / 8, 200);
      this.ctx.fillStyle = "#079E0A";
      this.ctx.fill();

      this.ctx.font = "20px Saira Condensed";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("D", this.canvas.width * .5625, this.canvas.height * .82);

      this.ctx.beginPath();
      this.ctx.rect(this.canvas.width * .625, this.canvas.height * .75, this.canvas.width / 8, 200);
      this.ctx.fillStyle = "#10459E";
      this.ctx.fill();

      this.ctx.font = "20px Saira Condensed";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("F", this.canvas.width * .6875, this.canvas.height * .82);
    }
  }]);

  return Violin;
}();

exports.default = Violin;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameCanvas = document.getElementById("gameCanvas");
var gameCtx = gameCanvas.getContext("2d");

var game = new _game2.default(gameCanvas, gameCtx);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 65:
      game.pressedRed = true;
      break;
    case 83:
      game.pressedYellow = true;
      break;
    case 68:
      game.pressedGreen = true;
      break;
    case 70:
      game.pressedBlue = true;
      break;
    case 13:
      game.pressedBow = true;
  }
}

function keyUpHandler(e) {
  switch (e.keyCode) {
    case 65:
      game.pressedRed = false;
      break;
    case 83:
      game.pressedYellow = false;
      break;
    case 68:
      game.pressedGreen = false;
      break;
    case 70:
      game.pressedBlue = false;
      break;
    case 13:
      game.pressedBow = false;
  }
}

requestAnimationFrame(game.drawGame);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map