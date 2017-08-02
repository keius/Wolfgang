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
  }

  drawGame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const violin = new Violin(this.canvas, this.ctx);
    violin.drawViolin();

    const hitbox = this.canvas.height*.75 + 10;

    this.song.notes.map(note => {
      note.drawNote();
      note.move(1);
      if (
        (note.x = 250 && ((note.y < hitbox + 4 && note.y > hitbox - 4) && this.pressedRed === true)) ||
        (note.x = 375 && ((note.y < hitbox + 4 && note.y > hitbox - 4) && this.pressedYellow === true)) ||
        (note.x = 500 && ((note.y < hitbox + 4 && note.y > hitbox - 4) && this.pressedGreen === true)) ||
        (note.x = 645 && ((note.y < hitbox + 4 && note.y > hitbox - 4) && this.pressedBlue === true))
      ) {
        this.ctx.fillStyle = "white";
        this.fillRect(250, this.canvas.height*.75, this.canvas.width/2, 20);
      }

      requestAnimationFrame(this.draw.bind(this));
    });
  }
}

export default Game;
