
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var option={
	isStatic:false,
	restitution:.3,
	friction:0.5,
	density:1.2
	}
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

    ball=createSprite(100,350,15,15,option)  
    ball.shapeColor="lightblue"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic:true}  );
	World.add(world, ground); 
	
	ball=Bodies.circle(100,350,30,option)
	World.add(world,ball)
	Engine.run(engine);
}


function draw() {
  Engine.update(engine); 
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



