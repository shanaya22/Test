const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    //var back=createSprite(600,200,1200,400);
    //back.addImage(bg);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,400,400,50);
    tower1=new Tower(90,225,75,300);
    tower2=new Tower(310,225,75,300);
    building=new Building(200,275,150,200);
    door= new Door(200,225);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
  tower1.display();
  tower2.display();
  building.display();
  door.display();

}