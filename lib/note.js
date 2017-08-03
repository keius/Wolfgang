
class Note {
  constructor (canvas, ctx, y, string, length) {
    this.canvas = canvas;
    this.ctx = ctx;

    const stringColors = {
      'G': [this.canvas.width/4, "#FF3300"],
      'D': [this.canvas.width*.375, "#F2EA02"],
      'A': [this.canvas.width/2, "#00FF00"],
      'E': [this.canvas.width*.625, "#00FFFF"]
    };

    this.y = y;
    this.x = stringColors[string][0];
    this.color = stringColors[string][1];
    this.length = length;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y-this.length, this.canvas.width/8, this.length);
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.rect(this.x + 2, this.y-this.length + 2, this.canvas.width/8 - 4, this.length - 4);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  move(distance) {
    this.y = this.y + distance;
  }
}

export default Note;
