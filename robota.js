const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
const radius = 20;
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A5'];
let colorIndex = 0;

function drawBall(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = colors[colorIndex];
  ctx.fill();
  ctx.closePath();
}

function animateBall() {
  const y = 200 + 100 * Math.sin(x * 0.05);
  drawBall(x, y);
  x += 2;

  if (x > canvas.width) {
    x = 0;
    colorIndex = (colorIndex + 1) % colors.length;
  }

  requestAnimationFrame(animateBall);
}

animateBall();
