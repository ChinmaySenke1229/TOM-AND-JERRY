var garden , gardenImg;
var jerry, jerryone,jerryoneimg,jerrytwo,jerrytwoimg,jerrythree,jerrythreeimg,jerryfour,jerryfourimg,jerrytease,jerrycollided;
var tom,tomone,tomoneimg,tomtwo,tomtwoimg,tomthree,tomthreeimg,tomfour,tomfourimg,tomrunningtomcollided;

function preload() {

gardenImg=loadImage("images/garden.png");

jerrytease=loadAnimation("images/jerryOne.png");
jerrytwoimg=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerrycollided=loadAnimation("images/jerryFour.png");

tomoneimg=loadAnimation("images/tomOne.png");
tomrunning=loadAnimation("images/tomTwo.png","images/tomThree.png");
tomcollided=loadAnimation("images/tomFour.png");

}

function setup(){

    createCanvas(1000,800);
    
    tom=createSprite(700,400);
    tom.addAnimation("tomoneimg",tomoneimg);
    tom.scale=0.2;

    jerry=createSprite(100,400);
    jerry.addAnimation("jerrytwoimg",jerrytease);
    jerry.scale=0.15;
}

function draw() {

    background(gardenImg);

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){

    tom.addAnimation("tomcollided",tomcollided);
    tom.changeAnimation("tomcollided");
    tom.scale=0.2;
    jerry.addAnimation("jerrycollided",jerrycollided);
    jerry.changeAnimation("jerrycollided");
    jerry.scale=0.15;
    tom.velocityX=0;

    }

    text(mouseX+','+mouseY,10,45);


    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("catrunning",tomrunning);
    tom.changeAnimation("catrunning");
    jerry.addAnimation("jerryteasing",jerrytwoimg);
    jerry.changeAnimation("jerryteasing")
}


}
