import Game from './game';
import {Howl} from 'howler';

const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const game = new Game(gameCanvas, gameCtx);

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
  window.mary = new Howl({
    src: ['./lib/canon.mp3']
  });
  if (e && game.gameStarted === false) {
    game.gameStarted = true;
    window.mary.play();
    requestAnimationFrame(game.drawGame);
  } else if (e && game.gameOver === true) {
    location.reload();
  }
}

gameCtx.font = "20px Saira Condensed";
gameCtx.textAlign = "center";
gameCtx.fillStyle = "white";
gameCtx.fillText("Take a moment to relax with a violin. Click anywhere to begin.", gameCanvas.width/2, gameCanvas.height/2);
