var ballonImg , ballon
var smallline , smalllineImg , smalllineGroup;
var largeline , largelineImg , largelineGroup;
var sky , skyImg



function preload(){
ballonImg = loadImage("ballon.png.png");
smalllineImg = loadImage("smallline.png.png");
largelineImg = loadImage("largeline.png.png");
skyImg = loadImage("sky.png.jpg");
}

function setup() {
    createCanvas(600,600);
    //spookySound.loop();
    sky = createSprite(300,300);
   sky.addImage("sky",ballonImg);
   sky.velocityY = 1;
    
    smalllineGroup = new Group();
    largelineGroup = new Group();
    
    ballon = createSprite(200,200,50,50);
    ballon.scale = 0.3;
   ballon.addImage("ballon", ballonImg);
}

function draw() {
    background(255);
    if(sky.y >400 ){
         sky.y = 300
       } 
     
     if (gameState === "play")
     {
        if(keyDown("LEFT_ARROW")){
           ballon.x = ballon.x - 3;
   
       }
       if(keyDown("RIGHT_ARROW")){
     
             ballon.x = ballon.x + 3;
  
       }
       if(keyDown("space")){
     
            ballon.velocityY = -10;
   
       }
     
       ballon.velocityY = ballon.velocityY + 0.8;

       spanLines();

       if(smalllineGroup.isTouching(ballon)){
        ballon.velocityY = 0;
      }
      if(largelineGroup.isTouching(ballon) || ballon.y > 600){
        ballon.destroy();
        gameState = "end"
      }

       drawSprites();
    }
    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
}

function spanLines(){
    if (frameCount % 240 === 0) {
        var smallline = createSprite(200,10);
        var largeline = createSprite(200,15);
       largeline.height = 2;
       smallline,height = 2;

      smallline.addImage(smalllineImg);

     smallline.velocityY = 1;
      largeline.velocityY = 1;

      smallline.lifetime = 800;
      largeline.lifetime = 800;

      largeline.debug = true;
      smalllineGroup.add(smallline);
      largelineGroup.add(largeline);
}
}
