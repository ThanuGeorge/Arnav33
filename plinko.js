class plinko
{
    constructor(x,y,r)
    {
      var options = 
      {
          isStatic : true
      }   
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      World.add(world, this.body);
    }
    display()
    {
        
         push();
         translate(this.body.position.x, this.body.position.y);
        
         rotate(this.body.angle);
         ellipseMode(RADIUS);
         fill("white")
         ellipse(0,0,this.r)
         pop();
    }
 }