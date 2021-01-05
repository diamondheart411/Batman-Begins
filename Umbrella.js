class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("images/WalkingFrame/walking_1.png")
      this.body = Bodies.circle(x,y,15,options);
      this.radius = 15
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
        imageMode(CENTER);

      image(this.image, this.body.position.x, this.body.position.y,300,300);
    }
  };