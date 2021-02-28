var bg, bgimg
var boy,boyimg
var coin,coinimg
var badcoin,badcoinimg

function preload(){
  bgimg=loadImage("background3.png")
  boyimg=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png")
  coinimg=loadAnimation("coins.png","coin2.png")
  badcoinimg=loadAnimation("badcoin.png","badcoin2.png")
}


function setup() {
  createCanvas(displayWidth-30,displayHeight-80);

  bg=createSprite(displayWidth/2,displayHeight/2, 50, 50);
  bg.addImage(bgimg)
  bg.velocityY=2
  bg.scale=1.5

  boy=createSprite(displayWidth/2,displayHeight/5)
  boy.addAnimation("boyrunning",boyimg)
}

function draw() {
  background("white"); 
  if(bg.y>displayHeight/2+20){
    bg.y=displayHeight/2-10
  } 
  spawnCoins()
  //spawnBadCoins()
  drawSprites();

}
function spawnCoins(){
  
if (frameCount%100===0){
  coin=createSprite(Math.round(random(displayWidth/2-300,displayWidth/2+300)),displayHeight-300)
  coin.velocityY=-4
  coin.addAnimation("coins",coinimg)
  coin.scale=0.3
  coin.lifetime=150
}
if(frameCount%200===0){
  // badcoin=createSprite(Math.round(random(displayWidth/2-300,displayWidth/2+300)),Math.round(random(displayHeight/2-300,displayHeight/2+300)))
  badcoin=createSprite(100,100)
  badcoin.addAnimation("badcoins",badcoinimg)
  badcoin.velocityY=-6
 } 

}
/*function spawnBadCoins(){
  if(frameCount%200===0){
   // badcoin=createSprite(Math.round(random(displayWidth/2-300,displayWidth/2+300)),Math.round(random(displayHeight/2-300,displayHeight/2+300)))
   badcoin=createSprite(100,100)
   badcoin.addAnimation("badcoins",badcoinimg)
   badcoin.velocityY=-6
  } }*/