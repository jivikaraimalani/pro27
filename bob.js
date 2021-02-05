class Bob {
    constructor(x, y) {
        var options = {         
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.body = Bodies.circle( 20,329,radius/2, options);
  
  
  
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
  
        push();
        translate(pos.x, pos.y);
  
        strokeWeight(4);
        stroke("green");
        fill("yellow");
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
    
}