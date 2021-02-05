class Ground {
    constructor() {
      var options = {
          isStatic:true         

      }
      this.body = Bodies.rectangle( x,y,width,height,options);
     this.width = 600;
     this.height = 20; 

      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      fill("red");
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
    } 