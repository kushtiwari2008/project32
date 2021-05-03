const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world; 


    

}


function draw(){
if (backgroundImg) 
    

   background(backgroundImg)
   Engine.update(engine)
fill("black")
textSize(12)
if (hour<=12) {
  text("Time: "+hour+" AM",100,100)  
} else if(hour>12){
 text("Time: "+hour%12+" PM",100,100)  

}

else if (hour===00) {
    text("Time: 12 AM",100,100)   
}
  


}

async function getBackgroundImg(){
    var request =await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")  
    var response = await request.json()
    console.log(response.datetime.slice(11,13))
    var hour=response.datetime.slice(11,13)
    if(hour>=4 && hour<=6 ){
    backgroundImg=loadImage("sunrise1.png")
    }
    else if (hour>6 && hour<=8) {
    backgroundImg=loadImage("sunrise2.png")
    }
    else if (hour>8 && hour<=10) {
        backgroundImg=loadImage("sunrise3.png")
        }
     else if (hour>10 && hour<=12) {
        backgroundImg=loadImage("sunrise4.png")
         }
     else if (hour>12 && hour<=14) {
        backgroundImg=loadImage("sunrise5.png")
         }
     else if (hour>14 && hour<=16) {
            backgroundImg=loadImage("sunrise6.png")
            }   
     else if (hour>16 && hour<=18) {
                backgroundImg=loadImage("sunset7.png")
                }   
     else if (hour>18 && hour<=20) {
                    backgroundImg=loadImage("sunset8.png")
                    }                    
      else if (hour>20 && hour<=22) {
                        backgroundImg=loadImage("sunset9.png")
                        }   
      else if (hour>22 && hour===00) {
                            backgroundImg=loadImage("sunset10.png")
                            }  
      else if (hour===00 && hour<=2) {
                                backgroundImg=loadImage("sunset11.png")
                                }    
       else if (hour>2 && hour<=6) {
                                    backgroundImg=loadImage("sunset12.png")
                                    }   
}
