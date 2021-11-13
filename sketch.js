var x,xImage
var o,OImage
var bg,bgImage
var PLAY=1,END=0;
var gameState=PLAY;
var topGround,bottomGround; 
var rightGround,leftGround;
function preload(){
xImage = loadImage("images/x.png")
OImage = loadImage("images/o.png")  
bgImage = loadImage("images/bg.png")
}
function setup() {
  createCanvas(800,400);
  topGround = createSprite(700,17,1400,10)
  topGround.visible=true;
  bottomGround = createSprite(400,386,800,10);
  bottomGround.visible=true;
  rightGround = createSprite(790,20,10,800)
  rightGround.visible=true;
  leftGround = createSprite(20,20,10,800)
  leftGround.visible = true;
  x = createSprite(400, 200, 20, 20);
  x.addImage(xImage)
  x.scale=0.05
  o = createSprite(600,200,20,20);
  o.addImage(OImage)
  o.scale=0.5 
}

function draw() {
  background("white");
    

  if(keyDown("UP_ARROW")){
    x.velocityY=-2
  }
  if(keyIsDown("DOWN_ARROW")){
    x.velocityY=2
  }
  if(keyDown("LEFT_ARROW")){
    x.velocityX=-2
  }
  if(keyDown("RIGHT_ARROW")){
    x.velocityX=2
  }
  if(keyDown("W")){
    o.velocityY=-2
  }
  if(keyDown("S")){
    o.velocityY=2
  }
  if(keyDown("A")){
    o.velocityX=-2
  }
  if(keyDown("D")){
   o.velocityX=2
  }
  if(keyDown("SPACE")){
    x.velocityY=0
    x.velocityX=0
  }
  if(keyDown("R")){
    o.velocityX=0
    o.velocityY=0
  }
  if(x.isTouching(topGround)|| x.isTouching(bottomGround))
 {
    x.velocityY=0
  }
  if(x.isTouching(rightGround)|| x.isTouching(leftGround))
 {
    x.velocitX=0
  }
  if(o.isTouching(topGround)|| o.isTouching(bottomGround))
  {
    o.velocityY=0
  }
  if(o.isTouching(rightGround)|| o.isTouching(leftGround))
  {
    o.velocityX=0
}
drawSprites();
}