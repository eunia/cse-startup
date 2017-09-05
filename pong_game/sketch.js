var paddles_y;
var paddle1_x, paddle2_x;
var bounces;
var ball_x, ball_y;
var direction_x, direction_y;

function setup() {
  createCanvas(720, 400);
  endgame = 0;
  paddles_y = 150;
  paddle1_x = 0;
  paddle2_x = 700;
  bounces = 0;
  direction_x = 1;
  direction_y = 1;
  ball_x = 360;
  ball_y = 200;
}

function draw() {
  background(200);
  paddles(paddle1_x, paddles_y, 20, 100, 0, 255, 0);
  paddles(paddle2_x, paddles_y, 20, 100, 0, 0, 255);
  ball(ball_x, ball_y, 20, 255, 0, 0);
  displayBounces();
  movePaddles();
  moveBall();
  changeBallDirection();
  checkForHit();
  endDisplay();
}

function paddles(x, y, w, h, r, g, b) {
  stroke(r, g, b);
  fill(r, g, b);
  rect(x, y, w, h);
}

function ball(x, y, w, r, g, b) {
  stroke(r, g, b);
  fill(r, g, b);
  ellipse(x, y, w);
}

function movePaddles() {
  if (keyIsDown(UP_ARROW) && paddles_y > 0) {
    paddles_y -= 4;
  }
  if (keyIsDown(DOWN_ARROW) && paddles_y < height - 100) {
    paddles_y += 4;
  }
}


function moveBall() {
  if (endgame == 0) {
    ball_x += (4 * direction_x);
  }
  if (ball_y > 0 && ball_y < 380) {
    ball_y += (4 * direction_y);
  }
}

function changeBallDirection() {
  if (ball_y <= 0 || ball_y >= 380) {
    direction_y = (-1 * direction_y);
    if (ball_y >= 380) {
      ball_y = 379;
    }
    if (ball_y <= 0) {
      ball_y = 5;
    }
  }
}

function displayBounces() {
  stroke(100);
  fill(100);
  textSize(30);
  text("bounces: " + bounces, 290, 40);
}

function checkForHit() {
  if (ball_x <= paddle1_x + 20 && ball_x >= 0) {
    if (ball_y >= paddles_y && ball_y <= paddles_y + 100) {
      direction_x = (-1 * direction_x);
      if (ball_x <= paddle1_x + 20 && endgame === 0) {
        ball_x = 21;
        bounces++;
      }
    }
  }
  if (ball_x >= paddle2_x && ball_x <= 720) {
    if (ball_y >= paddles_y && ball_y <= paddles_y + 100) {
      direction_x = (-1 * direction_x);
      if (ball_x >= 700 && endgame === 0) {
        ball_x = 699;
        bounces++;
      }
    }
  } else {
    checkForMiss();
  }
}

function checkForMiss() {
  if (ball_x <= 0 || ball_x >= 720) {
    endgame = 1;
    ball_x = 1000;
  }
}

function endDisplay() {
  if (endgame == 1 && ball_x == 1000) {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    textSize(80);
    text("YOU LOSE", 140, 200);
  }
}