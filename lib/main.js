import Game from './game';
import {Howl} from 'howler';

const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const game = new Game(gameCanvas, gameCtx);

const canon = new Howl({
  src: ['./lib/canon.mp3']
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", clickHandler, false);

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
      break;
    case 82:
      location.reload();
      break;
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

function clickHandler(e) {
  if (e && game.gameStarted === false && e.pageY < 900) {
    game.gameStarted = true;
    canon.play();
    requestAnimationFrame(game.drawGame);
  } else if (e && game.gameOver === true) {
    location.reload();
  }
}

gameCtx.font = "20px Saira Condensed";
gameCtx.textAlign = "center";
gameCtx.fillStyle = "white";
gameCtx.fillText("Take a moment to relax with a violin. Click anywhere to begin.", gameCanvas.width/2, gameCanvas.height/2);
