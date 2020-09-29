
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob,rope,roof;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	roof1 = new Roof(400,100,300,20);

     bob1 = new Bobc(310,300);
	 bob2 = new Bobc(349,300);
	 bob3 = new Bobc(388,300);
	 bob4 = new Bobc(427,300);
	 bob5 = new Bobc(466,300);
	
	//rope1 = new Rope(bob1.body,roof1.body,);
    //rope2 = new Rope(bob2.body,roof1.body,);
	//rope3 = new Rope(bob3.body,roof1.body,);
	//rope4 = new Rope(bob4.body,roof1.body,);
	//rope5 = new Rope(bob5.body,roof1.body,);

	
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

   roof1.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   //rope1.display();
   //rope2.display();
   //rope3.display();
   //rope4.display();
   //rope5.display();


  drawSprites();
 
}



