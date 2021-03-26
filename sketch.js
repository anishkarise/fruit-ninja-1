//Game States
var knife,knifeImage;
var play=1;
var end=0;
var gameState=1;
var score=0,fruitGroup,enemyGroup;
var fruit1,fruit2,fruit3,fruit4;
var enemy1,enemy2;
var gameOverImg;

function preload(){

  knifeImage=loadImage("sword.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  enemy1=loadImage("alien1.png");
  enemy2=loadImage("alien2.png");
  gameOverImg=loadImage("gameover.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
  knife=createSprite(200,200,20,20);
  knife.addImage("sword",knifeImage);
  knife.scale=0.8
  

  // Score variables and Groups
  fruitGroup=new Group();
  enemyGroup=new Group();
  
}

function draw() {
  background("lightblue");
  
 text("score "+score,200,50);
  
  if (gameState===play){
     spawnEnemy();
     spawnFruit();
     knife.x=mouseX;
     knife.y=mouseY;
    
    if(knife.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
      score=score+2;
    }
     if(knife.isTouching(enemyGroup)){
      
     gameState=end
      
    }
    
  }
  else{
    if(gameState===end){
      fruitGroup.destroyEach();
        enemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
        var gameOver=createSprite(300,300,20,20);
      gameOver.addImage("gameOver",gameOverImg);
      
    }

  } 
       
  drawSprites();

  
}
function spawnFruit(){
  if(frameCount% 60===0){
    fruit=createSprite(600,round(random(100,500)),20,20);
    fruit.velocityX=-3;
    fruit.scale=0.2
    
    var anything=round(random(1,4))
    switch(anything){
      case 1:fruit.addImage(fruit1);
        break
        case 2:fruit.addImage(fruit2);
        break
        case 3:fruit.addImage(fruit3);
        break
        case 4:fruit.addImage(fruit4);
        break
        }
        
        fruitGroup.add(fruit);
    }
}
function spawnEnemy(){
  if(frameCount% 50===0){
    enemy=createSprite(600,round(random(100,500)),20,20);
    enemy.velocityX=-3;
    enemy.scale=0.8
     enemyGroup.add(enemy);
    
    var anythink=round(random(1,2))
    switch(anythink){
      case 1:enemy.addImage(enemy1);
        break
        case 2:enemy.addImage(enemy2);
    }
    
   
  }
}
