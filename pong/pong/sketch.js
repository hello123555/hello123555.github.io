//width of the screen
var w=720;
//hight of the screen
var h=600;
//hight of rectangle 1 
var hR1=100;
//hight of rectangle 1 
var hR2=100;
//width of rectangle 2
var wR2=30;
//width of rectangle 1
var wR1=30;

// vertical center of the screen for rectangle 1
var y=h/2-hR1/2;
// vertical center of the screen for rectangle 2
var y2=h/2-hR2/2;

//center of the screen for the ball
var xC=w/2;
var yC=h/2;
// radius of the ball
var R=20;
//speed of the ball
var speedX=8;
var speedY= -8;
//holad the score
var score1=0;
var score2=0;
var speedrect=9;
var acceleration=0.05;

//generates a random number between 
function randomNumber(between){
	  var plusOrMinus = Math.random() < 0.5 ? -Math.random() : Math.random();
	  return plusOrMinus*between

}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(w, h);
  stroke(255); // Set line drawing color to white
  frameRate(60);

  //set the initial speed to be random
	speedX=5
 speedY= 5
  
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  
  background(0); // Set the background to black
  textSize(32);
  fill(255);
text(score1+"", 10, 30)
text(score2+"", w-30, 30)
  //draw the rectangles and the ball
  rect(0,y,wR1,hR1)
  rect(w-wR2,y2,wR2,hR2)
  circle(xC,yC,R)
  //make the ball move
  xC+=limitSpeed(speedX,12);
  yC+=limitSpeed(speedY,12);
  
  //collision for the ball reverse the speed when hitting a wall
  if ( yC+R> h ) {
  speedY= -speedY
  }
   if ( yC-R< 0 ) {
  speedY= -speedY
  }
  
  
  //collision for rectangle 2
  if ( (xC + R )>( w - wR2) && yC>y2 && yC< (y2 + hR2) ) {
  speedX= -speedX
  speedX= speedX+randomNumber(2)
  speedY= speedY+randomNumber(2)
  }
  
  //collision for rectangle 1
   if ( (xC - R )<(  wR1) && yC>y && yC< (y + hR1) ) {
  speedX= -speedX
  speedX= speedX+randomNumber(2)
  speedY= speedY+randomNumber(2)
  }

  //collision for the left wall

  if ( (xC - R )<0 ) {
	  
  xC=w/2;
 yC=h/2;
  speedX= speedX+randomNumber(5)
  speedY= speedY+randomNumber(5)
  score2++;
  console.log(score2)
  }

  //collision for the right wall
  if ( (xC+R )>w ) {
	  
  xC=w/2;
 yC=h/2;
 speedX= speedX+randomNumber(5)
  speedY= speedY+randomNumber(5)
  score1++;
  console.log(score1)
  }
  
  //movement for player 1 using up and down arrows
   if (keyIsDown(UP_ARROW)) {
    y -= speedrect;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += speedrect;
  }
//movement for player 2 using z and s 
  if (keyIsDown(90)) {
    y2 -= speedrect;
  }
  if (keyIsDown(83)) {
    y2 += speedrect;
  }

//limit movement for rectangles
  if(y<0){ y=0 
  }
  if(y2<0){ y2=0 
  }
  if((y+hR1)>h){ y= h - hR1
  }
   if((y2+hR2)>h){ y2= h - hR2
  }

  //runAI 
  if(speedX>=0){
    runAI()
  }

  
}
function runAI(){
  var kp=1
  var error=yC-(y2+hR1/2)
  var step=limitSpeed(error*kp,speedrect)
  y2 += step
}
function limitSpeed(s,limit){
  if (Math.abs(s)>limit){
    if(s>=0){
    return limit
    }else{
      return -limit
    }
    
  }else{
    return s
  }
}



