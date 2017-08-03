import Note from './note';
import Song from './song';
import Violin from './violin';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

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

    const hitbox = this.canvas.height*.75 + 25;

    this.song.notes.map(note => {
      note.move(1);
      note.drawNote();
      if (note.y > hitbox + 25) { note.y = 3000; }
      if (
        (note.x === this.canvas.width/4 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedRed === true && this.pressedBow)) ||
        (note.x === 3*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedYellow === true && this.pressedBow)) ||
        (note.x === this.canvas.width/2 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedGreen === true && this.pressedBow)) ||
        (note.x === 5*this.canvas.width/8 && ((note.y < hitbox + 15 && note.y > hitbox - 15) && this.pressedBlue === true && this.pressedBow))
      ) {
        this.ctx.beginPath();
        this.ctx.rect(this.canvas.width/4, this.canvas.height*.75, this.canvas.width/2, 50);
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fill();
      }
    });

    requestAnimationFrame(this.drawGame.bind(this));
  }
}

export default Game;
