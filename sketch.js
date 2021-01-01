let angle = 0;
let kitten;
let snow = [];

function preload() {
  kitten = loadImage("./earth_ball.jpg");
  earth = loadModel("./earth_ball.obj");
}
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // put drawing code here
  background(10);
  snow.push(new Stars());
  for (flake of snow) {
    flake.render();
    flake.update();
  }
  pointLight(255, 255, 255, -200, 0, 0);

  ambientLight(80);

  push();

  translate(mouseX - width / 2, mouseY - height / 2);
  rotateX(angle * 0.2);
  rotateY(angle * 0.2);
  noStroke();
  texture(kitten);
  translate(0, 0, 10);
  model(earth);

  angle += 0.07;
  pop();
}
