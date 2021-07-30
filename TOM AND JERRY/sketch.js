
function preload() {
    //load the images here
    cat1=loadImage("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadImage("images/cat4.png")
    mouse1=loadImage("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadImage("images/mouse4.png")
    garden=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addImage("c1",cat1)
mouse=createSprite(200,600)
mouse.addImage("m1",mouse1)
cat.scale=0.2
mouse.scale=0.15
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
cat.velocityX=0
cat.addImage("c3",cat3)
cat.changeImage("c3",cat3)
cat.x=300
mouse.addImage("m3",mouse3)
mouse.changeImage("m3",mouse3)
}
    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
cat.velocityX=-3
cat.addAnimation("c2",cat2)
cat.changeAnimation("c2",cat2)
mouse.addAnimation("m2",mouse2)
mouse.changeAnimation("m2",mouse2)
}
  //For moving and changing animation write code here


}
