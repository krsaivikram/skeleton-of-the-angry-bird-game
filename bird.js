class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':10,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 70, options);
      this.width = 50;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  