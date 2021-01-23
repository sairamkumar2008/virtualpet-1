//Create variables here
var Dog,HappyDog,database,foodStock,foodS
var dog
function preload()
{
  //load images here
  Dog=loadImage("images/dogImg.png")
  HappyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(60,130,50,40)
  dog.addImage(Dog)
  dog.scale=0.1
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(HappyDog)
  }
  drawSprites();
  text("Press UP_ARROW key to Feed Drago Milk,food remaining="+foodS,170,200)
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

