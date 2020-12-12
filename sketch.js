
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var boy,boyImage;

function preload()
{
boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(290,550);
	boy.addImage(boyImage);
	boy.scale=0.1
	ground = new Ground(600,height,1200,20);
	tree=new Tree(1000,550,500,500);
	stone=new Stone(235,420,30);
	mango1=new Mango(900,557,65);
	mango2=new Mango(946,587,65);
	mango3=new Mango(937,577,65);
	mango4=new Mango(920,567,65);
	mango5=new Mango(970,547,65);
	mango6=new Mango(980,537,65);
	mango7=new Mango(990,527,65);
	chain=new Chain(stone.body,boy);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background("white");
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();
  detectcollision(mango1,stone);
  detectcollision(mango2,stone);
  detectcollision(mango3,stone);
  detectcollision(mango4,stone);
  detectcollision(mango5,stone);
  detectcollision(mango6,stone);
  detectcollision(mango7,stone);
 

  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function detectcollision(fmango,fstone){
	var mangoBodyPosition=fmango.body.position;
	var stoneBodyPosition=fstone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=fmango.r+fstone.r){
		Matter.Body.setStatic(fmango,false);
	}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		chain.attach(stone.body);
	}
	}

	




