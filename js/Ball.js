class Ball {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
              };
      this.r = 40;
  
      this.body = Bodies.circle(x, y, this.r, options);
  
      this.image = loadImage("melon.png");
      World.add(world, this.body);
    }
  
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
    }
}