
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustBinBottom, dustBinSide1, dustBinSide2;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 620);

	
	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(600, height, 1200, 20);
	
	paper=new Paper(200, 450, 40);
	//Matter.Bodies.circle(x, y, 20, 20);

	dustBinBottom=new DustBin(950, height-20, 200, 20);
	dustBinSide1=new DustBin(860, height-60, 20, 100);
	dustBinSide2=new DustBin(1040, height-60, 20, 100);
	//Create the Bodies Here.
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustBinSide1.display();
  dustBinSide2.display();
  dustBinBottom.display();
  paper.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log(paper.body)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:72,y:-72});
	}
}

