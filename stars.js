class Stars {
  constructor() {
    let x = random(-800, width);
    let y = random(-1000, -1000);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 8);
    this.r = random(2, 8);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  update() {
    this.pos.add(this.vel);
  }
}
