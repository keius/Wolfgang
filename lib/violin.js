class Violin {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawViolin() {
    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/4, this.canvas.height*.75, this.canvas.width/8, 50);
    this.ctx.fillStyle = "#9E2407";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width*.375, this.canvas.height*.75, this.canvas.width/8, 50);
    this.ctx.fillStyle = "#D1AA12";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/2, this.canvas.height*.75, this.canvas.width/8, 50);
    this.ctx.fillStyle = "#079E0A";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width*.625, this.canvas.height*.75, this.canvas.width/8, 50);
    this.ctx.fillStyle = "#10459E";
    this.ctx.fill();
  }
}

export default Violin;
