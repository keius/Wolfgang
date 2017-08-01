import Note from './note';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = 0;
let glength = 20;

function drawG() {
  const g = new Note(canvas, ctx, y, "E", glength);
  g.drawNote();
}

function drawViolin() {
  ctx.beginPath();
  ctx.rect(x/2, canvas.height*.75, x, 10);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawG();
  drawViolin();

  y ++;
}

setInterval(draw, 50);
