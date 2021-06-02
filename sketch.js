//taking variables
var Thomas, ThomasImage, thomas;
var Enemy1, terrorists;

//for preloading the images
function preload(){
  ThomasImage = loadImage('thomas.png');

  EnemiesImage1 = loadImage('enemy1.png');

  EnemiesImage2 = loadImage('enemy2.png');

  BlockImage = loadImage('block.png');

  LargeBlockImage = loadImage('largeblock.png');

  LongBlockImage = loadImage('longblock.png');
}

//function setup
function setup() {
  createCanvas(700,700);
  Thomas = createSprite(350,620);
  Thomas.addImage(ThomasImage);
  Thomas.scale = 0.5;

  Enemy1 = createSprite(580,400);
  Enemy1.addImage(EnemiesImage1);
  Enemy1.scale = 0.2;

  Enemy2 = createSprite(100,200);
  Enemy2.addImage(EnemiesImage2);
  Enemy2.scale = 0.2;

  Enemy3 = createSprite(50,550);
  Enemy3.addImage(EnemiesImage2);
  Enemy3.scale = 0.2;

  Enemy4 = createSprite(520,150);
  Enemy4.addImage(EnemiesImage1);
  Enemy4.scale = 0.2;





  Wall1 = createSprite(100,630,50,50);
  Wall1.addImage(BlockImage);
  Wall1.scale = 0.2;

  Wall2 = createSprite(130,485,100,30);
  Wall2.addImage(LargeBlockImage);
  Wall2.scale = 0.2

  Wall3 = createSprite(210,427,30,200);
  Wall3.addImage(LongBlockImage);
  Wall3.scale = 0.4

  Wall4 = createSprite(530,630,70,30);
  Wall4.addImage(LargeBlockImage);
  Wall4.scale = 0.2

  Wall5 = createSprite(610,572,30,100);
  Wall5.addImage(LongBlockImage);
  Wall5.scale = 0.4

  Wall6 = createSprite(435,445,70,30);
  Wall6.addImage(LargeBlockImage)
  Wall6.scale = 0.2

  Wall7 = createSprite(355,387,30,100);
  Wall7.addImage(LongBlockImage);
  Wall7.scale = 0.4

  Wall8 = createSprite(20,250,30,150);
  Wall8.addImage(LongBlockImage);
  Wall8.scale = 0.4

  Wall9 = createSprite(60,250,40,40);
  Wall9.addImage(BlockImage);
  Wall9.scale = 0.2;

  Wall10 = createSprite(450,230,70,30);
  Wall10.addImage(LargeBlockImage)
  Wall10.scale = 0.2;

  Wall11 = createSprite(685,300,30,100);
  Wall11.addImage(LongBlockImage)
  Wall11.scale = 0.4;

  Wall12 = createSprite(350,50,30,100);
  Wall12.addImage(LongBlockImage);
  Wall12.scale = 0.4;

  Wall13 = createSprite(550,50,70,30);
  Wall13.addImage(LargeBlockImage);
  Wall13.scale = 0.2;

  Wall14 = createSprite(595,107,30,100);
  Wall14.addImage(LongBlockImage);
  Wall14.scale = 0.4;

  Wall15 = createSprite(150,15,100,30);
  Wall15.addImage(LargeBlockImage);
  Wall15.scale = 0.2;

  Wall16 = createSprite(240,230,40,40);
  Wall16.addImage(BlockImage);
  Wall16.scale = 0.2;

}

function draw() {
  background(200);
  
if(keyDown(RIGHT_ARROW)){
  Thomas.x = Thomas.x+3
}

if(keyDown(LEFT_ARROW)){
  Thomas.x = Thomas.x-3
}

if(keyDown(UP_ARROW)){
  Thomas.y = Thomas.y-3
}  

if(keyDown(DOWN_ARROW)){
  Thomas.y = Thomas.y+3
}

if(thomas.isTouching(Enemy1)) {
  Enemy1.destroy();
}



  drawSprites();
}
