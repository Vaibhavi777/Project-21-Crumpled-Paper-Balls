
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)
	ground=new Ground(400,680,1200,20)
	wall1=new Ground(550,611,20,120)
	wall2=new Ground(700,611,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  wall1.display()
  wall2.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5})
	}
}

