const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var wall1, wall2, wall3;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper();

	ground = new Ground(400,550,width*2,15);

	wall1 = new Wall(1050,480,15,95);
	wall2 = new Wall(950,534,190,15);
	wall3 = new Wall(850,480,15,95);
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  	paper.display();
  
	ground.display();

	wall1.display();
	wall2.display();
	wall3.display();

}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});

	}

}

