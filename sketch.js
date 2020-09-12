var car,wall;
var speed,weight;


function preload() {
  
}


function setup() {
  createCanvas(750,300);
  car=createSprite(50,150,50,50)
  wall=createSprite(725,150,20,150)
  
 speed = random(55,90);
  weight = random(400,1500);
  
 
}

function draw() {
  background("black");
  
  
  car.velocityX = speed;
  
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>100)
    {
      car.shapeColor = color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0)
    }
    if(deformation<100)
    {
      car.shapeColor = color(0,255,0)
    }
  }
  
  
  drawSprites()
  
}