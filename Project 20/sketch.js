var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
speed = random(55, 90);
weight = random(400, 1500);
}

function draw() {
  background(255,255,255);  
car = createSprite(50, 200, 50, 50);
wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = Color(80, 80, 80);
car.velocityX = speed;
if (car.collide(wall)){
car.velocityX < 100;
car.shapeColor = Color(0,255,0);
car.velocityX = 0;
}
if (car.collide(wall)){
car.velocityX < 180 && car.velocity > 100;
car.shapeColor = Color(230,230,0);
car.velocityX = 0;
}
if (car.collide(wall)){
car.velocityX > 180;
car.shapeColor = Color(255,0,0);
car.velocityX = 0;
}
  drawSprites();
}