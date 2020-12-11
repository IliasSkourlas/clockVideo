const now = new Date();
let videoTimePlaying = 0;
let videoTimeStoped = 0;
let t = 0;
let counterOn = false;

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  
  vidElement = createVideo("chikens.mp4"); 
  vidElement.hide();
  
  playBtn = createButton("Play Video"); 
  playBtn.position(30, 40); 
  playBtn.mouseClicked(playVideo); 
  pauseBtn = createButton("Pause Video"); 
  pauseBtn.position(150, 40); 
  pauseBtn.mouseClicked(pauseVideo); 
} 
  
function playVideo() { 
    vidElement.loop(); 
    counterOn = true;
    print("Play")
} 
function pauseVideo() { 
  vidElement.pause();
  print("Pause") 
  counterOn = false;
}
function countVideoTime(){
  if(counterOn){
    videoTimePlaying = millis() - videoTimeStoped;
  }else{
    videoTimeStoped = millis() - videoTimePlaying;
  }
};  

function checkTime(){
  print(floor(videoTimePlaying/1000))
  if(floor(videoTimePlaying/4000) % 2){
    vidElement.loop();
  }else{
    vidElement.pause();  
  }
  
}

function draw(){
  background(100);
  
  image(vidElement, 0, 0);
  
  //Time
  textSize(100);
  fill(150, 255);
  textFont('monospace')
  text(hour() + ":" + minute() + ":" + second(), width/2, height/2, 100,100);
  //Counter
  countVideoTime();
  text( videoTimePlaying,100, height - 50);

  checkTime();
}

