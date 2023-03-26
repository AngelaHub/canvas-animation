// Get the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the initial ball position and velocity
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;
const radius = 20;

function drawBall() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();

  // Update the ball position
  x += dx;
  y += dy;

  // Bounce the ball off the walls
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy;
  }
}

function animate() {
  requestAnimationFrame(animate);
  drawBall();
}

animate();
