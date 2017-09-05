function setup() {
  createCanvas(400,400);
  background(60,97,255);
}

function draw() {
  //ears
  stroke(36,232,88);
  fill(36,232,88);
  triangle(160,100,180,20,200,100);//left ear
  triangle(200,100,220,20,240,100);
  stroke (255,236,185);
  fill(255,236,185);
  triangle(165,100,180,35,195,100);//left ear
  triangle(205,100,220,35,235,100);
  //head
  stroke(36,232,88);
  fill(36,232,88);
  ellipse(200,100,80);
  
  //eye
  fill(255,255,255);
  stroke(0,0,0);
  ellipse(200,95,55);
  stroke(99,191,255);
  fill(99,191,255);
  ellipse(200,100,40);
  fill(0,0,0);
  ellipse(200,100,20);
  
  //legs
  stroke(36,232,88);
  fill(36,232,88);
  rect(140,260,20,100);//leftleg
  rect(240,260,20,100);
  
  //torso
  ellipse(200,220,190);
  
  //mouth
  fill(0,0,0);
  arc(200,220,100,100,0, PI,OPEN);
  
  //feet
  stroke(36,232,88);
  fill(36,232,88);
  triangle(100,380,160,340,160,380);//leftfoot
  triangle(300,380,240,340,240,380);
}
