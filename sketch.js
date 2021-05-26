var fixrect,movrect;


function setup() {
  createCanvas(800,400);

  fixrect =createSprite(200, 200, 50, 50);
  movrect=createSprite(400, 200, 50, 50);
 movrect.shapeColor="blue";
 fixrect.shapeColor="blue";
  
}

function draw() {
  background(255,255,255);
  movrect.x=mouseX;
  movrect.y=mouseY;
  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2&&fixrect.x-movrect.x<movrect.width/2+fixrect.width/2&&movrect.x-fixrect.x<movrect.height/2+fixrect.height/2&&fixrect.x-movrect.x<movrect.width/2+fixrect.width/2){
    movrect.shapeColor="blue";
    fixrect.shapeColor="blue";
  }
  else{
    movrect.shapeColor="red";
    fixrect.shapeColor="red";
  }

  drawSprites();
}