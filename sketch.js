
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roofobject;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bobdiameter = 40;
  
	Engine.run(engine);

  roof = new Roof(400,200,400,40);

	bobobject1 = new Bob(280,400,50);
	bobobject2 = new Bob(340,400,50);
	bobobject3 = new Bob(400,400,50);
	bobobject4 = new Bob(460,400,50);
  bobobject5 = new Bob(520,400,50);
  
  rope1=new Rope(bobobject1.body,{x : 280,y : 200});
  rope2=new Rope(bobobject2.body,{x : 340,y : 200});
  rope3=new Rope(bobobject3.body,{x : 400,y : 200});
  rope4=new Rope(bobobject4.body,{x : 460,y : 200});
  rope5=new Rope(bobobject5.body,{x : 520,y : 200});
  
  }

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display();

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-165,y:0});
  }
}