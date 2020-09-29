class Bobc {

    constructor(x,y){
  
  
      var options = {
  
       isStatic : true,
       restitution : 0.3,
       density : 2,
       friction : 0.5
  
  
      }
     
     this.bob = Matter.Bodies.circle(x,y,20,options)
    this.radius = 20;
    World.add(world,this.bob);
    
    
  
    }
  
      display(){
  
  
       var posx = this.bob.position.x;
       var posy = this.bob.position.y;      
        fill("white")
        ellipseMode(RADIUS);
        ellipse(posx,posy,this.radius);
  
      }
  
    
  
   }