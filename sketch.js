var alien1,alienIMG;

function preload(){
  alienIMG = loadAnimation("sprite_0.png","sprite_1.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  alien1 = createSprite(400, 200, 50, 50);
  alien1.addAnimation("1",alienIMG);
}

function draw(){
  background(0);
  drawSprites();
  //console.log(1);
}