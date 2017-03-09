function setup() {
createCanvas (600,400);
background(47,148,249);
}

function draw() {
    fill(200,0,150);
    noStroke();
  ellipse(500,90,200,200);
  ellipse(mouseX,mouseY,89,200);
}