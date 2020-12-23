class Bob{
   constructor(x, y, r){
     var options = {
          restitution : 1,
          friction : 0.5,
          density : 1.2
       }
  
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
      
     }
       display(){
        var bobpos=this.body.position;
        push()
        fill("red");
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r/2)
        pop()
     }
  }