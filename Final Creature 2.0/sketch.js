var creatureColor = ("green");
var eye1Color = ("white");
var eye2Color = ("blue");
var open = true; //for sleeping function

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue");

  hill(-70, 405, 300, 380);
  hill(50, 395, 500, 450);
  hill(0, 400, 400, 300);
  
  cloud (100, 50, 90, 40);
  cloud (300, 90, 120, 30);

  translate(mouseX - 200, mouseY - 200);//creature movement

  outerears(160, 100, 180, 20, 200, 100); //left ear
  outerears(200, 100, 220, 20, 240, 100);
  innerears(165, 100, 180, 35, 195, 100); //inner left ear
  innerears(205, 100, 220, 35, 235, 100);

  head(200, 100, 80);

  whiteeye(200, 95, 55, 0, 0, 0, 255, 255, 255);
  blueeye(200, 100, 40, 99, 191, 255, 99, 191, 255);
  blackeye(200, 100, 20, 0, 0, 0, 0, 0, 0);

  arms(45, 200, 50, 217, 190, 190, 178, 175); //leftarm
  arms(355, 200, 350, 217, 210, 190, 222, 175);

  legs(140, 260, 20, 100); //leftleg
  legs(240, 260, 20, 100);

  torso(200, 220, 190);

  mouth(200, 220, 100, 100, 0, PI, OPEN);

  teeth(170, 220, 175, 230, 180, 220);
  teeth(220, 220, 225, 230, 230, 220);

  feet(100, 360, 160, 340, 160, 360); //leftfoot
  feet(300, 360, 240, 340, 240, 360);
}

function keyPressed() {
  if (keyCode === ENTER) {
    creatureColor = color(random(256), random(256), random(256));
  }
}

function mousePressed() {
  if (open == true) {
    eye1Color = color(0);
    eye2Color = color(0);
    open = false;
  } else {
    eye1Color = ("white");
    eye2Color = ("blue");
    open = true;
  }
}

function hill(x, y, w, h) {
  stroke(0);
  fill(0, 255, 150);
  arc(x + (w / 2), y, w, h, PI, 0, PIE);
}

function cloud (x,y,w,h) {
  stroke (255);
  fill (255);
  ellipse (x,y,w,h);
  ellipse (x+40,y+5,w/1.7,h/2);
  ellipse (x-40,y-5,w/1.7,h/2);
}

function outerears(x1, y1, x2, y2, x3, y3) {
  stroke(creatureColor);
  fill(creatureColor);
  triangle(x1, y1, x2, y2, x3, y3);
}

function innerears(x1, y1, x2, y2, x3, y3) {
  stroke(255, 236, 185);
  fill(255, 236, 185);
  triangle(x1, y1, x2, y2, x3, y3);
}

function head(x, y, z) {
  stroke(creatureColor);
  fill(creatureColor);
  ellipse(x, y, z);
}

function closedeye(x, y, z, a, b, c, x1, x2, x3) {
  stroke(a, b, c);
  fill(x1, x2, x3);
  ellipse(x, y, z);
}

function whiteeye(x, y, z, a, b, c, x1, x2, x3) {
  stroke(eye1Color);
  fill(eye1Color);
  ellipse(x, y, z);
}

function blueeye(x, y, z, a, b, c, x1, x2, x3) {
  stroke(eye2Color);
  fill(eye2Color);
  ellipse(x, y, z);
}

function blackeye(x, y, z, a, b, c, x1, x2, x3) {
  stroke(a, b, c);
  fill(x1, x2, x3);
  ellipse(x, y, z);
}

function arms(a, b, c, d, e, f, g, h) {
  stroke(creatureColor);
  fill(creatureColor);
  quad(a, b, c, d, e, f, g, h);
}

function legs(a, b, c, d) {
  stroke(creatureColor);
  fill(creatureColor);
  rect(a, b, c, d);
}

function torso(a, b, c) {
  ellipse(a, b, c);
}

function mouth(a, b, c, d, e, f, g) {
  stroke(0);
  fill(0);
  arc(a, b, c, d, e, f, g);
}

function teeth(x1, y1, x2, y2, x3, y3) {
  stroke(255);
  fill(255);
  triangle(x1, y1, x2, y2, x3, y3);
}

function feet(x1, y1, x2, y2, x3, y3) {
  stroke(creatureColor);
  fill(creatureColor);
  triangle(x1, y1, x2, y2, x3, y3);
}