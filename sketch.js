const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world

var thunderbolt
var thunderbolt2
var thunderbolt3
var thunderbolt4
var thunder
var drops= [];
var umbrellaBoy
var maxLimit =100
function preload(){
    thunderbolt = loadImage("images/thunderbolt/1.png")
    thunderbolt2 = loadImage("images/thunderbolt/2.png")
    thunderbolt3 = loadImage("images/thunderbolt/3.png")
    thunderbolt4 = loadImage("images/thunderbolt/4.png")
 
}

function setup(){
        engine = Engine.create();
        world = engine.world;
        createCanvas(400,700)

   for (var i =0;i<maxLimit;i++){
           drops.push(new Drops(random(0,400),random(0,400)))
   }

umbrellaBoy = new Umbrella(200,500);
}

function draw(){
    background("black")
    Engine.update(engine)

   for(var i=0;i<drops.length;i++){
           drops[i].display();
           drops[i].updateDrops();
   } 
   umbrellaBoy.display();
   if(frameCount % 60 === 0) {
    
    //obstacle.debug = true;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: image(thunderbolt,random(10,370),random(10,30),450,380)
              break;
      case 2: image(thunderbolt2,random(10,370),random(10,30),250,280)
              break;
      case 3:image(thunderbolt3,random(10,370),random(10,30),450,180)
              break;
      case 4: image(thunderbolt4,random(10,370),random(10,30),400,80)
              break;
      default: break;
    }

    umbrellaBoy.display();
  
   
}
}