
var block1,block2,block3,block4,block5,endblock,hole;
var endblockimg,horizontalimg,verticalimg

function preload(){
  endblockimg=loadImage("Images/redbrick.png")
  horizontalimg=loadImage("Images/horizontalbrick.png")
  verticalimg=loadImage("Images/vertbrick.png")
}
function setup() {
  createCanvas(400,150);



  block2=createSprite(39,54,79,30);
  block2.shapeColor="black"
    block2.addImage(horizontalimg)
    block2.scale=0.3
  block3=createSprite(85,20,30,40);
  block3.shapeColor="black"
   block3.addImage(verticalimg)
   block3.scale=0.3
  block4=createSprite(128,10,21,42);
  block4.shapeColor="black"
   block4.addImage(verticalimg)
   block4.scale=0.3
  block5=createSprite(163,54,113,27);
  block5.addImage(horizontalimg)
  block5.scale=0.3
  endblock=createSprite(10,10,60,20);
  endblock.addImage(endblockimg)
  endblock.scale=0.3
  block6=createSprite(227,10,70,13);
  block6.shapeColor="black"
  block6.addImage(horizontalimg)
  block6.scale=0.3
  //block7=createSprite(163,54,113,27);
  //block7.shapeColor="black"
  //block8=createSprite(163,54,113,27);
  //block8.shapeColor="black"
hole =createSprite(370,25,70,30);
hole.shapeColor="black"
wall=createSprite(200,100,400,10)



}

function draw() {
  background("#805205"); 
  if(mousePressedOver(block2)){
    block2.x=mouseX
    
  }

  if(mousePressedOver(block3)){
    block3.y=mouseY
  }

  if(mousePressedOver(block4)){
    block4.y=mouseY
  }
  if(mousePressedOver(block5)){
    block5.x=mouseX
  }

  if(mousePressedOver(block6)){
    block6.x=mouseX
  }

if(endblock.isTouching(block2) || endblock.isTouching(block3) || endblock.isTouching(block4) || endblock.isTouching(block5) || endblock.isTouching(block6)  ){
  alert("GAME OVER")
}

if(endblock.isTouching(hole)){
  alert("You WIN")
}

  if(keyDown("RIGHT_ARROW")){
    endblock.x +=2
  }

  if(keyDown("LEFT_ARROW")){
    endblock.x -=2
  }

if (block3.isTouching(block2) || block4.isTouching(block2) ){
  block3.isTouching(block2)
  block4.isTouching(block2)

}  
if (block3.isTouching(block5) || block4.isTouching(block5) ){
  block3.isTouching(block5)
  block4.isTouching(block5)

}  
if (block3.collide(block6) || block4.collide(block6) ){
  block3.collide(block6)
  block4.collide(block6)
  

  
}  
if (block5.isTouching(block6) || block6.isTouching(block5) ){
  block6.isTouching(block5)
  block5.isTouching(block6)

  
}  
if (block2.isTouching(block5) || block2.isTouching(block5) ){
  block2.isTouching(block5)
  block2.isTouching(block6)

  
}  
  drawSprites()
  
}