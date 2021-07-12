var path, pathImg

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage("path",pathImg);
  path.y = height/2;
  path.velocityY = 4;
  path.scale = 1.2;
  
  
}

function draw() {
  background ("black")
  
}
