class Violin {
  constructor(canvas, ctx) {
    ctx.beginPath();
    ctx.rect(x/2, canvas.height*.75, x, 20);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

  }
}
