var fade;
var fadeAmount = 1;
let imag
let fadeswitch = false;

function setup() {
  createCanvas(400, 400);
  fade = 0;
  image(imag, 0, 0);
}


let scale = 400;
function preload() {
  sans = loadSound('sounds/sans.mp3')
  hog = loadSound('sounds/hog-rider.mp3')
  sonic = loadSound('sounds/youre-too-slow.mp3')
  amogus = loadSound('sounds/amogus.mp3')
  imag = loadImage('photos/Gorillaz.jpg');
}
function mousePressed(){
  if (mouseX < scale/2 && mouseY < scale/2)
    sans.play()
  if (mouseX > scale/2 && mouseX < scale && mouseY < scale/2)
    hog.play()
  if (mouseX < scale/2 && mouseY > scale/2 && mouseY < scale)
    sonic.play()
  if (mouseX > scale/2 && mouseX < scale && mouseY > scale/2 && mouseY < scale)
    amogus.play()
}

function draw() { 
 
  if (fade==255){
    fadeswitch = !fadeswitch;
    fade = 0;
  }
  
  
 
  if (!fadeswitch){
  Background()
  Sans()
  Hogrider()
  Sanic()
  Amogus()
  fade += fadeAmount;
  }
  if (fadeswitch){
    tint(255, fade/10)
    image(imag, 0, 0, 400, 400)
    fade += fadeAmount;
  }
}









function Sans(){
  //start sans
  ellipse(scale * (21/80), scale * (14/40), scale * (1/4), scale * (2/20));
  ellipse(scale * (21/80), scale * (11/40), scale * (1/4), scale * (3/20));
  stroke(255, 255, 255, fade)
  ellipse(scale * (21/80), scale * (14/40), scale * (0.9/4), scale * (1.9/20));
  pop();
  ellipse(scale * (15/80), scale * (23/80), scale * (2/30));
  ellipse(scale * (27/80), scale * (23/80), scale * (2/30));
  push();
  fill(0, 200, 255, fade);
  ellipse(scale * (27/80), scale * (23/80), scale * (1/30));
  pop();
  ellipse(scale * (15/80), scale * (23/80), scale * (1/90));
  ellipse(scale * (27/80), scale * (23/80), scale * (1/90));
  push();
  fill(255, 255, 255, fade)
  curve(scale * (18/80), scale * (1/80), scale * (15/80), scale * (27/80), scale * (27/80), scale * (27/80), scale * (24/80), scale * (1/80));
  curve(scale * (15/80), scale * (20/80), scale * (15/80), scale * (27/80), scale * (27/80), scale * (27/80), scale * (32/80), scale * (15/80));
  pop();
  push();
  stroke(0);
  strokeWeight(2)
  line(scale *(16/80), scale *(27.5/80), scale *(16/80), scale *(28.5/80));
  line(scale *(18/80), scale *(28/80), scale *(18/80), scale *(29.5/80));
  line(scale *(20/80), scale *(28.2/80), scale *(20/80), scale *(30/80));
  line(scale *(26/80), scale *(27.6/80), scale *(26/80), scale *(28.5/80));
  line(scale *(24/80), scale *(28.1/80), scale *(24/80), scale *(29.5/80));
  line(scale *(22/80), scale *(28.3/80), scale *(22/80), scale *(30/80));
  pop();
  triangle(scale * (21/80), scale * (24/80), scale * (20/80), scale * (27/80), scale * (22/80), scale * (27/80))
  //end of sans
}

function Background(){
  //background
  background(0);
  fill(0, 0, 0, fade);
  push();
  fill(255, 255, 255, fade);
  textSize(scale/10);
  text('Amogus', scale * (12/40), scale/10);
  text('Lemon days', scale * (8/40), scale * (39/40));
  rect(scale * (10/20), scale * (21/40), scale* (17/40), scale * (7/20));
  rect(scale * (10/20), scale * (6/40), scale* (17/40), scale * (7/20));
  rect(scale * (1/20), scale * (6/40), scale* (17/40), scale * (7/20));
  rect(scale * (1/20), scale * (21/40), scale* (17/40), scale * (7/20));
  //end of background
}

function Hogrider(){
  //start of hog rider
  push();
  fill(130, 80, 0, fade)
  rect(scale * (42/80), scale * (18/80), scale * (14/80), scale * (18/80), scale * (2/80))
  pop();
  rect(scale * (47/80), scale * (13/80), scale * (4/80), scale * (7/80));
  rect(scale * (41/80), scale * (28/80), scale * (16/80), scale * (10/80), scale * (2/80))
  push();
  fill(130, 80, 0, fade)
  rect(scale * (46/80), scale * (31/80), scale * (6/80), scale * (3/80), scale * (2/80))
  pop();
  push()
  fill(255, 120, 150, fade);
  rect(scale * (59/80), scale * (18/80), scale * (12/80), scale * (18/80), scale * (2/80))
  pop();
  push()
  fill(255, 210, 150, fade)
  triangle(scale * (60/80), scale * (29/80), scale * (61/80), scale * (34/80), scale * (63/80), scale * (34/80))
  triangle(scale * (70/80), scale * (29/80), scale * (67/80), scale * (34/80), scale * (69/80), scale * (34/80))
  pop()
  push()
  fill(255, 255, 255, fade)
  ellipse((scale * 45/80), scale * (23/80), scale * (5/80), scale * (4/80))
  ellipse((scale * 53/80), scale * (23/80), scale * (5/80), scale * (4/80))
  ellipse((scale * 60/80), scale * (23/80), scale * (3/80), scale * (4/80))
  ellipse((scale * 70/80), scale * (23/80), scale * (3/80), scale * (4/80))
  pop()
  push()
  fill(200, 100, 130, fade)
  ellipse((scale * 65/80), scale * (32/80), scale * (5/80), scale * (4/80))
  pop()
  ellipse((scale * 45/80), scale * (23/80), scale * (2.5/80), scale * (2/80))
  ellipse((scale * 53/80), scale * (23/80), scale * (2.5/80), scale * (2/80))
  ellipse((scale * 60/80), scale * (23/80), scale * (1.5/80), scale * (2/80))
  ellipse((scale * 70/80), scale * (23/80), scale * (1.5/80), scale * (2/80))
  line(scale * (47/80), scale * (33/80), scale * (51/80), scale * (33/80))
  ellipse((scale * 64/80), scale * (32/80), scale * (1.5/80), scale * (2/80))
  ellipse((scale * 66/80), scale * (32/80), scale * (1.5/80), scale * (2/80))
  //end of hog rider
}

function Sanic(){
  //start of sanic
  push();
  fill(0, 0, 180, fade)
  triangle(scale * (5/80), scale * (44/80), scale * (20/80), scale * (57/80), scale * (22/80), scale * (50/80))
  triangle(scale * (5/80), scale * (54/80), scale * (20/80), scale * (57/80), scale * (22/80), scale * (50/80))
  ellipse(scale * (26/80), scale * (55/80), scale * (20/80), scale * (15/80))
  pop();
  push();
  fill(255, 210, 150, fade)
  ellipse((scale * 28/80), scale * (58/80), scale * (10/80), scale * (5/80))
  pop();
  curve(scale * (10/80), scale * (51/80), scale * (26/80), scale * (58/80), scale * (31/80), scale * (58/80), scale * (32/80), scale * (55/80));
  push();
  fill(255, 255, 255, fade)
  ellipse((scale * 26/80), scale * (52/80), scale * (14/80), scale * (6/80))
  pop()
  push()
  fill(0, 0, 180, fade)
  stroke(0, 0, 180, fade)
  triangle(scale * (26/80), scale * (52/80), scale * (28/80), scale * (49/80), scale * (24/80), scale * (48/80))
  triangle(scale * (26/80), scale * (52/80), scale * (28/80), scale * (55/80), scale * (24/80), scale * (55/80))
  pop()
  ellipse((scale * 24/80), scale * (52/80), scale * (1.5/80))
  ellipse((scale * 31/80), scale * (52/80), scale * (1.5/80))
  //end of sanic
}

function Amogus(){
  //start of amogus
  push()
  fill(235, 0, 0, fade)
  ellipse(scale * (50/80), scale * (57/80), scale * (7/80), scale * (10/80))
  rect(scale * (50/80), scale * (46/80), scale * (14/80), scale * (20/80), scale * (2/80))
  pop();
  push();
  fill(0, 180, 255, fade)
  ellipse(scale * (60/80), scale * (52/80), scale * (12/80), scale * (7/80))
  pop();
  //end of amogus
}