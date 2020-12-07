var heliIMG, helicopter, package,packageIMG;
var packageBody,ground;
var myEngine, myWorld;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	heliIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(heliIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	myEngine = Engine.create();
	myWorld = myEngine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);


	Engine.run(myEngine);
	
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x ;
  package.y= packageBody.position.y ;
  keyPressed();
  
  drawSprites();
 
}
function keyPressed()
{
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	  }
}
