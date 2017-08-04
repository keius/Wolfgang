import Note from './note';
import Song from './song';
import Violin from './violin';

class Game {
  constructor(canvas, ctx, len) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.len = 100;
    this.score = 0;
    this.result = ["", "eh.", "wow.", "YOU WON!"];
    this.resultIdx = 0;
    this.gameStarted = false;
    this.gameOver = false;

    this.song = new Song(this.canvas, this.ctx, -1000, this.len);

    this.pressedRed = false;
    this.pressedYellow = false;
    this.pressedGreen = false;
    this.pressedBlue = false;

    this.drawGame = this.drawGame.bind(this);
  }

  drawGame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const violin = new Violin(this.canvas, this.ctx);
    violin.drawViolin();

    const hitbox = this.canvas.height*.75;

    this.song.notes.map(note => {
      note.move(1.55);
      note.drawNote();
      this.drawScore(this.ctx);
      this.drawResult(this.ctx, this.resultIdx);
      if (note.y)

      if (note.y > hitbox + note.length) { note.y = 3000; }
      if (
        (note.x === this.canvas.width/4 && ((note.y < hitbox + note.length && note.y > hitbox - note.length) && this.pressedRed === true && this.pressedBow)) ||
        (note.x === 3*this.canvas.width/8 && ((note.y < hitbox + note.length && note.y > hitbox - note.length) && this.pressedYellow === true && this.pressedBow)) ||
        (note.x === this.canvas.width/2 && ((note.y < hitbox + note.length && note.y > hitbox - note.length) && this.pressedGreen === true && this.pressedBow)) ||
        (note.x === 5*this.canvas.width/8 && ((note.y < hitbox + note.length && note.y > hitbox - note.length) && this.pressedBlue === true && this.pressedBow))
      ) {
        this.score ++;
        this.resultIdx = 2;
        note.hit = true;

        this.ctx.beginPath();
        this.ctx.rect(note.x, this.canvas.height*.75, this.canvas.width/8, this.len*2);
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fill();
      } else if (
        (note.x === this.canvas.width/4 && ((note.y < hitbox + this.len/2 && note.y > hitbox + this.len/2 - 2) && this.pressedRed === false)) ||
        (note.x === 3*this.canvas.width/8 && ((note.y < hitbox + this.len/2 && note.y > hitbox + this.len/2 - 2) && this.pressedYellow === false)) ||
        (note.x === this.canvas.width/2 && ((note.y < hitbox + this.len/2 && note.y > hitbox + this.len/2 - 2) && this.pressedGreen === false)) ||
        (note.x === 5*this.canvas.width/8 && ((note.y < hitbox + this.len/2 && note.y > hitbox + this.len/2 - 2) && this.pressedBlue === false))
      ) {
        if (note.hit) {
          this.resultIdx = 0;
        } else {
          this.resultIdx = 1;
          this.score --;
        }
      }
    });

    if (this.song.notes.every(note => note.y < 0)) {
      this.drawIntro(this.ctx);
    }

    if (this.song.notes.every(note => note.y >= 3000)) {
      this.resultIdx = 3;
      this.gameOver = true;
      this.drawWin(this.ctx, this.resultIdx);
      return;
    }

    requestAnimationFrame(this.drawGame.bind(this));
  }

  drawScore(ctx) {
    ctx.font = "30px Saira Condensed";
    ctx.fillStyle = "white";
    ctx.fillText("Score:  " + this.score, 100, this.canvas.height/10);
  }

  drawWin(ctx, idx) {
    ctx.font = "60px Saira Condensed";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(this.result[idx], this.canvas.width/2, this.canvas.height/2 - 20);

    ctx.font = "30px Saira Condensed";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("click to play again!", this.canvas.width/2, this.canvas.height/2 + 20);
  }

  drawResult(ctx, idx) {
    ctx.font = "60px Saira Condensed";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(this.result[idx], this.canvas.width/2, this.canvas.height*.95);
  }

  drawIntro(ctx) {
    ctx.font = "30px Saira Condensed";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("press (A/S/D/F + ENTER) to play notes!", this.canvas.width/2, this.canvas.height/2);
  }
}

export default Game;
