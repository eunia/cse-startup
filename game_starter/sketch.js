var monster_img;
var cookie_img;
var pie_img;
var cake_img;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var pie_x, pie_y;
var cake_x, cake_y;
var missedCount;
var cookieSpeed;
var cakeSpeed;
var pieSpeed;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  pie_img = loadImage("assets/pie.png");
  cake_img = loadImage("assets/cake.png");
}

function setup() {
  createCanvas(720, 400);
  // button = createButton('restart');
  // button.position(700,350);
  // button.mousePressed();
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  pie_x = 900;
  pie_y = random(350);
  cake_x = 1200;
  cake_y = random(350);
  points = 0;
  cookieSpeed = 2;
  pieSpeed = 2;
  cakeSpeed = 2;
  missedCount = 0;
  button = createButton('restart');
  button.position(650,370);
  button.mousePressed(restart);
}

function draw() {
  background(200);
  displayPoints();
  displayMisses();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  image(pie_img, pie_x, pie_y);
  image(cake_img, cake_x, cake_y);
  
  moveCookie();
  movePie();
  moveCake();
  moveMonster();
  checkForChomp();
  checkForEat();
  missed();
}

function displayPoints() {
  fill(0, 255, 0);
  textSize(150);
  text(points,10,360);
  textSize(30);
  text("POINTS", 20, 395);
}

function displayMisses() {
  fill(255,0,0);
  textSize(150);
  text(missedCount, 10, 115);
  textSize(30);
  text("MISSED", 10, 140);
}

function moveCookie() {
  if(cookie_x < 0 && missedCount < 3) {
    cookie_x = 725;
    cookie_y = random(350);
  }  
  else if(missedCount >= 3) {
    cookie_x = 725;
    cookie_y = random(350);
    endDisplay();
  }
  else {
  cookie_x -= cookieSpeed;
  }
  if (cookie_y > 0 && cookie_y < 300) {
    cookie_y += cookieSpeed;
  }
  else {
    cookie_y = 5;
  }
}

function movePie() {
  if(pie_x < 0 && missedCount < 3) {
    pie_x = random(725, 1500);
    pie_y = random(350);
  }  
  else if(missedCount >= 3)
  {
    pie_x = random(725, 1500);
    pie_y = random(350);
  }
  else {
  pie_x -= pieSpeed; 
  }
}

function moveCake() {
  if(cake_x < 0 && missedCount < 3) {
    cake_x = random(725, 1500);
    cake_y = random(350);
  }  
  else if(missedCount >= 3)
  {
    cake_x = random(725, 1500);
    cake_y = random(350); 
  }
  else {
  cake_x -= cakeSpeed;
  }
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2;
  if(keyIsDown(RIGHT_ARROW) && monster_x < width-150)
    monster_x += 2;
}

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookieSpeed += 0.5;
    cakeSpeed += 0.3;
    pieSpeed += 0.3;
    cookie_x = 725;
    cookie_y = random(350);
  }
}

function checkForEat() {
  var dPie = dist(pie_x, pie_y, monster_x, monster_y);
  var dCake = dist(cake_x, cake_y, monster_x, monster_y);
  if (dPie < 100 || dCake < 100) {
    missedCount++;
    if (dPie < 100)
    {
      pie_x = 725;
      pie_y = random(350);
    }
    else if(dCake < 100)
    {
      cake_x = 725;
      cake_y = random(350);
    }
  }
}

function missed() {
  if (cookie_x < 0 && missedCount < 3) {
    missedCount++;
  }
}

function restart() {
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  pie_x = 900;
  pie_y = random(350);
  cake_x = 1200;
  cake_y = random(350);
  points = 0;
  missedCount = 0;
  cookieSpeed = 2;
  pieSpeed = 2;
  cakeSpeed = 2;
  
  displayPoints();
  displayMisses();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  image(pie_img, pie_x, pie_y);
  image(cake_img, cake_x, cake_y);
  
  moveCookie();
  movePie();
  moveCake();
  moveMonster();
  checkForChomp();
  checkForEat();
  missed();
}

function endDisplay() {
  fill(255,0,0);
  textSize(80);
  text("YOU LOSE", 140, 200);
}