var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100,200,60,50);
  car .shapeColour=("red")
  wall=createSprite(800,200,30,80);
  wall.shapeColour=("red")
 
 
}

function draw() {
  background(0,0,0);  
  car.x= World.mouseX;
  car.y= World.mouseY;


  if(car.x-wallcar.x< car.width/2+wall.width/2
    && wall.x- car.x<wall.width/2+car.width/2
   ){
 car.shapeColour="blue"
 wall.shapeColour="blue"
  }
  else{
    car.shapeColour="red"
    wall.shapeColour="red"

  }
  drawSprites();
}