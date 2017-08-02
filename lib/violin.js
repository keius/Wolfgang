class Violin {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawViolin() {
    this.beginPath();
    this.rect(250, this.canvas.height*.75, this.canvas.width/8, 20);
    this.fillStyle = "#9E2407";
    this.fill();
    this.closepath();

    this.beginPath();
    this.rect(375, this.canvas.height*.75, this.canvas.width/8, 20);
    this.fillStyle = "#D1AA12";
    this.fill();
    this.closepath();

    this.beginPath();
    this.rect(500, this.canvas.height*.75, this.canvas.width/8, 20);
    this.fillStyle = "#079E0A";
    this.fill();
    this.closepath();

    this.beginPath();
    this.rect(675, this.canvas.height*.75, this.canvas.width/8, 20);
    this.fillStyle = "#10459E";
    this.fill();
    this.closepath();
  }
}

export default Violin;
