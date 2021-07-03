var ground, groundImage

var trex, trex_running
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}
function setup(){
  createCanvas(600,200)
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  edges = createEdgeSprites();
  ground = createSprite(200,180,400,20);
}
function draw(){
  background("white")

  //making trex jump
   if(keyDown("space")){
   trex.velocityY = -5;
   }
   //adding gravity
   trex.velocityY += 0.5;
   trex.collide(ground);
   trex.scale = 0.5;
   ground.velocityX = -2;
   console.log(ground.x);

   if(ground.x <0){
     ground.x = ground.width/2

   }
   ground.addImage("ground", groundImage);

  drawSprites();
}