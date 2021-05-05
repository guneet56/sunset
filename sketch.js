const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

function preload() {
    getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   // if ()
    
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
   // var hour = datetime.slice(11,13);
   noStroke();
   textSize(35)
   fill("black")
   text("Time: " + time, width-300, 50)
  // time = hour;
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log (hour);
    time = hour;
    if(hour>=04 && hour<=06){
        bg = "sprite/sunrise1.png";
    }
    else if(hour>=06 && hour<08) {
        bg = "sprite/sunrise2.png";
    }
    else if(hour>=08 && hour<10) {
        bg = "sprite/sunrise3.png";
    }
    else if(hour>=10 && hour<12) {
        bg = "sprite/sunrise4.png";
    }
    else if(hour>=12 && hour<14) {
        bg = "sprite/sunrise5.png";
    }
    else if(hour>=14 && hour<16) {
        bg = "sprite/sunrise6.png";
    }
    else if(hour>=16 && hour<18) {
        bg = "sprite/sunset7.png";
    }
    else if(hour>=18 && hour<20) {
        bg = "sprite/sunset8.png";
    }
    else if(hour>=20 && hour<22) {
        bg = "sprite/sunset9.png";
    }
    else if(hour>=22 && hour<24) {
        bg = "sprite/sunset.png";
    }
    else if(hour>=24 && hour<02) {
        bg = "sprite/sunset11.png";
    }
    else  {
        bg = "sprite/sunset12.png";
    }
    
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}

    