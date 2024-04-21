const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const ball = {
  x: 100,
  y: 100,
  radius: 20,
  xSpeed: 5,
  ySpeed: 3,
};

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}

function updateBall() {
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  // Check for wall collisions
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.xSpeed *= -1;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.ySpeed *= -1;
  }
}

function gameUpdate() {
  drawBall();
  updateBall();
  requestAnimationFrame(gameUpdate);
}

gameUpdate();
