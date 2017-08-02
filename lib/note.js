const stringColors = {
  'G': [250, "#FF3300"],
  'D': [375, "#F2EA02"],
  'A': [500, "#00FF00"],
  'E': [625, "#00FFFF"]
};

class Note {
  constructor (canvas, ctx, y, string, length) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.y = y;
    this.x = stringColors[string][0];
    this.color = stringColors[string][1];
    this.length = length;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y-this.length, 125, this.length);
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(this.x + 2, this.y-this.length + 2, 121, this.length - 4);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  move(distance) {
    this.y = this.y + distance;
  }
}

export default Note;
