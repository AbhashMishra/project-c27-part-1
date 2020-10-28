class BobObject {
    constructor(x, y,radius) {
      var options = {
          
          restitution:1,
          friction:2,
          density:4,
          isStatic:false
      }
      this.body = Matter.Bodies.circle(x,y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("pink");
      strokeWeight(5)
      ellipseMode(RADIUS);  
      fill("hotPink");
      ellipse(0,0, this.radius,35);
      pop();
    }
  }