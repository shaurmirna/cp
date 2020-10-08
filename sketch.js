

var dog;
var happyDog;
var database;
var foods;
var foodStok;
var dogImage;
var dogImage2;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;

var foodStok=database.ref('food');
  foodStok.on("value",readStok);
}


function draw() {  
  background(46,139,87);
 
  textSize(15)
  fill("white")
  text("Note : press UP_ARROW KEY to feed the dog " , 80, 40)
 
  

  drawSprites();

  textSize(20)
  fill("white")
  text("food stock : "+foods , 200, 150)
  
  if(keyWentDown(UP_ARROW)){
    writeStok(foods);
    dog.addImage(dogImage2);
    
}
}

function readStok(data){
foods=data.val();
}

function writeStok(x){
  if(x<=0){
 x=0;
  }
  else{
 x=x-1;
  }
  database.ref('/').update({
    food:x
  })
  }
