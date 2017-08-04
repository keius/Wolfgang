import Game from './game';

const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const game = new Game(gameCanvas, gameCtx);

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
