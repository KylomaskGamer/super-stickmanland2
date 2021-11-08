
var bob,block,total,bobSensor,idle,walk,jump;
var block,grassImg,dirtImg,blockGroup,smallBlock,coin,coinImg,spikes,spikesImg,spikeGroup;
var sky,skyImg;
var musica;

function preload(){
  grassImg = loadImage("grass.png");
  dirtImg = loadImage("dirt.png");
  skyImg = loadImage("sky.jpg");
  idle = loadImage("costume1 (3).png");
  smallBlock = loadImage("pixil-frame-0 (3).png")
  musica  = loadSound("Sound1.mp3")
  // musica = new Audio('Sound1.mp3');
  coinImg = loadAnimation("coin.png");
  spikesImg = loadImage("spikes.png");
  //   if (typeof musica.loop == 'boolean')
  // {
  //     musica.loop = true;
  // }
  
}

function setup(){
musica.play();
  createCanvas(windowWidth,windowHeight)
  bob = createSprite(130,50,10,10)
  bob.addImage(idle)
  bobSensor = createSprite(bob.x,bob.y + 10,5,1)
  sky = createSprite(bob.x,bob.y)
  sky.addImage(skyImg)
  blockGroup = createGroup()
  createLevel()
}

function draw() {
  background("#87CEEB");
  
  musica.setVolume(0.5)
  sky.depth -=1
  sky.x = camera.x
  sky.y = camera.y
  sky.scale = 1.5
  camera.x = bob.x
  camera.y = bob.y
  bobSensor.x = bob.x
  bobSensor.y = bob.y + 25
  drawSprites()
  handleMouvement()
}

function CreateBlock(x,y,type){
  block = createSprite(x*120,y*120,130,130);
  if(type == "grass"){
    block.addImage(grassImg)
  } else if (type == "dirt") {
    block.addImage(dirtImg)
  } else if (type == "small"){
    block.addImage(smallBlock);
    block.x = block.x + 30
    block.y = block.y + 30
  }
  blockGroup.add(block)
}

function handleMouvement(){
  if (keyDown("left")){
    bob.velocityX = -8
  } else if (keyDown("right")){
    bob.velocityX = 8
  } else {
    bob.velocityX = 0
  }
  if (keyWentDown("space") && bobSensor.isTouching(blockGroup)){
    bob.velocityY = -12
  }
  if (!bobSensor.isTouching(blockGroup)){
    bob.velocityY = bob.velocityY + 1.6
  }
  bob.collide(blockGroup) 
}

function CreateBlock(x,y,type){
  block = createSprite(x*120,y*120,130,130);
  if(type == "grass"){
    block.addImage(grassImg)
  } else if (type == "dirt") {
    block.addImage(dirtImg)
  } else if (type == "small"){
    block.addImage(smallBlock);
    block.x = block.x + 30
    block.y = block.y + 30
  }
  blockGroup.add(block)
}

function CreateSpikes(x,y){
  spikes = createSprite(x*120,y*120,130,130);

  spikeGroup.add(block)
}

function createLevel(){
  //This can be edited!
  for(var i = 1; i <= 10; i++){
    CreateBlock(i,1,"grass")
  }
  for(var i = 1; i <= 10; i++){
    CreateBlock(i,2,"dirt")
  }

}