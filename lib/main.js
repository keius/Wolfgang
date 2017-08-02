import Game from './game';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const hitbox = canvas.height*.75 + 10;

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 65:
      game.pressedRed = true;
    case 83:
      game.pressedYellow = true;
    case 68:
      game.pressedGreen = true;
    case 70:
      game.pressedBlue = true;
  }
}

function keyUpHandler(e) {
  switch (e.keyCode) {
    case 65:
      game.pressedRed = false;
    case 83:
      game.pressedYellow = false;
    case 68:
      game.pressedGreen = false;
    case 70:
      game.pressedBlue = false;
  }
}
