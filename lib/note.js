const stringColors = {
  "G": "#FF3300",
  "D": "#F2EA02",
  "A": "#00FF00",
  "E": "#00FFFF"
};

class Note {
  constructor (canvas, ctx, y, string, length) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.y = y;
    this.color = stringColors[string];
    this.length = length;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/2, this.y-this.length, 5, this.length);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Note;
