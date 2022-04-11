function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(200,0,0);
  
  translate(width / 2, height / 2);
  stroke(200,50,20);
  strokeWeight(3);
  for (let i = 0; i < width+200; i += 10) {
      ellipse(0, 0, i);
    }

  let s = map(mouseY, 0, height, 0.3, 1);

  translate(mouseX-width/2, mouseY-height/2) 
  scale(s);
  stroke(0,100,255);
  strokeWeight(3);
   for (let i = 0; i < width/2; i += 10) {
      ellipse(0, 0, i);
    }
}

function windowResized () {
resizeCanvas (windowWidth , windowHeight)
}