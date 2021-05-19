const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;

var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  bogi1 = new Bogi(100,340,60,60);
  bogi2 = new Bogi(180,340,60,60);
  bogi3 = new Bogi(260,340,60,60);
  bogi4 = new Bogi(340,340,60,60);
  bogi5 = new Bogi(420,340,60,60);
  bogi6 = new Bogi(500,340,60,60);
  slingshot1 = new SlingShot(bogi1.body,bogi2.body)
  slingshot2 = new SlingShot(bogi2.body,bogi3.body)
  slingshot3 = new SlingShot(bogi3.body,bogi4.body)
  slingshot4 = new SlingShot(bogi4.body,bogi5.body)
  slingshot5 = new SlingShot(bogi5.body,bogi6.body)


}

function draw() {
  background(bg);  
  
  
  bogi1.display()
  bogi2.display()
  bogi3.display()
  bogi4.display()
  bogi5.display()
  bogi6.display()
  slingshot1.display()
  slingshot2.display()
  slingshot3.display()
  slingshot4.display()
  slingshot5.display()
  }

  
