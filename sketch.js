var player,playerImg;
var laser,laserImg,laserGroup;
var obstacle,obstacleImg,obstacleGroup;
var ground,groundImg;

function preload(){
  playerImg=loadImage("player.png");
  laserImg=loadImage("laser.png");
  obstacleImg=loadImage("obstacle.png");
  groundImg=loadImage("sky.png");
}


function setup() {
  createCanvas(800,400);
  ground=createSprite(400,200,800,400);
  ground.addImage(groundImg);
  ground.scale=0.75;

  player=createSprite(400,300,50,50);
  player.addImage(playerImg);
  player.scale=0.15;

  obstacleGroup=new Group();

}

function draw() {
  background(255,255,255);  


  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%75===0){
  obstacle=createSprite(random(100,700),-100,50,50);
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.1;
  obstacle.velocityY=5;
  obstacle.lifetime=600;
  obstacleGroup.add(obstacle);
  }
}