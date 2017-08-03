import Note from './note';
import Song from './song';
import Violin from './violin';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.gameover = false;
    this.score = 0;
    this.result = ["", "EWW!", "WOW!", "YOU WON!"];
    this.resultIdx = 0;

    this.song = new Song(this.canvas, this.ctx, 0);

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

    const hitbox = this.canvas.height*.75 + 15;

    this.song.notes.map(note => {
      note.move(1);
      note.drawNote();
      this.drawScore(this.ctx);
      this.drawResult(this.ctx, this.resultIdx);

      if (note.y > hitbox + 15) { note.y = 3000; }
      if (
        (note.x === this.canvas.width/4 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedRed === true && this.pressedBow)) ||
        (note.x === 3*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedYellow === true && this.pressedBow)) ||
        (note.x === this.canvas.width/2 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedGreen === true && this.pressedBow)) ||
        (note.x === 5*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedBlue === true && this.pressedBow))
      ) {
        this.score ++;
        this.resultIdx = 2;
        note.hit = true;

        this.ctx.beginPath();
        this.ctx.rect(note.x, this.canvas.height*.75, this.canvas.width/8, 30);
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fill();
      } else if (
        (note.x === this.canvas.width/4 && ((note.y < hitbox + 15 && note.y > hitbox + 13) && this.pressedRed === false)) ||
        (note.x === 3*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox + 13) && this.pressedYellow === false)) ||
        (note.x === this.canvas.width/2 && ((note.y < hitbox + 15 && note.y > hitbox + 13) && this.pressedGreen === false)) ||
        (note.x === 5*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox + 13) && this.pressedBlue === false))
      ) {
        if (note.hit) {
          this.resultIdx = 0;
        } else {
          this.resultIdx = 1;
          this.score --;
        }
      }
    });

    if (this.song.notes.every(note => note.y >= 3200)) {
      this.resultIdx = 3;
      this.drawResult(this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    }

    requestAnimationFrame(this.drawGame.bind(this));
  }

  drawScore(ctx) {
    ctx.font = "30px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText("Score:  " + this.score, 100, this.canvas.height/10);
  }

  drawResult(ctx, idx) {
    ctx.font = "60px Permanent Marker";
    ctx.textAlign = "center";
    if (idx === 1) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "green";
    }
    ctx.fillText(this.result[idx], this.canvas.width/2, this.canvas.height*.95);
  }
}

export default Game;
