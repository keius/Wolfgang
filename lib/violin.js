class Violin {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawViolin() {
    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/4, this.canvas.height*.75, this.canvas.width/8, 30);
    this.ctx.fillStyle = "#9E2407";
    this.ctx.fill();

    this.ctx.font = "20px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("A", this.canvas.width*.3125, this.canvas.height*.82);

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width*.375, this.canvas.height*.75, this.canvas.width/8, 30);
    this.ctx.fillStyle = "#D1AA12";
    this.ctx.fill();

    this.ctx.font = "20px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("S", this.canvas.width*.4375, this.canvas.height*.82);

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/2, this.canvas.height*.75, this.canvas.width/8, 30);
    this.ctx.fillStyle = "#079E0A";
    this.ctx.fill();

    this.ctx.font = "20px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("D", this.canvas.width*.5625, this.canvas.height*.82);

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width*.625, this.canvas.height*.75, this.canvas.width/8, 30);
    this.ctx.fillStyle = "#10459E";
    this.ctx.fill();

    this.ctx.font = "20px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("F", this.canvas.width*.6875, this.canvas.height*.82);
  }
}

export default Violin;
