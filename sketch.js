const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(1450,750);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,700,70,70);
    box2 = new Box(800,700,70,70);
    box3 = new Box(1200,600,70,70);
    box4 = new Box(800,600,70,70);
    box5 = new Box(1000,510,70,70);
    ground = new Ground(725,730,1450,10);
    pig1 = new Pig(1000,700);
    pig2 = new Pig(1000,600);
    log1 = new Log(1000,620,480,PI/2);
    log2 = new Log(1000,530,480,PI/2);
    log3 = new Log(1100,510,240,-PI/4);
    log4 = new Log(885,510,240,PI/4);
    bird = new Bird(200,150); 
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   ground.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   bird.display();
}