
var w=720;
var h=600;
var hR1=100;
var hR2=100;
var wR2=30;
var wR1=30;
var y=h/2-hR1/2;
var y2=h/2-hR2/2;
var xC=w/2;
var yC=h/2;
var R=20;
var speedX=8;
var speedY= -8;

function randomNumber(between){
	  var plusOrMinus = Math.random() < 0.5 ? -Math.random() : Math.random();
	  return plusOrMinus*between

}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(w, h);
  stroke(232,16,203); // Set line drawing color to white
  frameRate(30);
	console.log(randomNumber(7))
	speedX=2+randomNumber(7);
 speedY= 2+randomNumber(7);
  
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  rect(0,y,wR1,hR1)
  rect(w-wR2,y2,wR2,hR2)
  circle(xC,yC,R)
  xC+=speedX;
  yC+=speedY;
  if ( yC+R> h ) {
  speedY= -speedY
  }
   if ( yC-R< 0 ) {
  speedY= -speedY
  }
  
  
  if ( (xC + R )>( w - wR2) && yC>y2 && yC< (y2 + hR2) ) {
  speedX= -speedX
  speedX= speedX+randomNumber(2)
  speedY= speedY+randomNumber(2)
  }
  
   if ( (xC - R )<(  wR1) && yC>y && yC< (y + hR1) ) {
  speedX= -speedX
  speedX= speedX+randomNumber(2)
  speedY= speedY+randomNumber(2)
  }
  if ( (xC - R )<0 ) {
	  
  xC=w/2;
 yC=h/2;
  speedX= speedX+randomNumber(5)
  speedY= speedY+randomNumber(5)
  }
  if ( (xC+R )>w ) {
	  
  xC=w/2;
 yC=h/2;
 speedX= speedX+randomNumber(5)
  speedY= speedY+randomNumber(5)
  }
  
   if (keyIsDown(UP_ARROW)) {
    y -= 7;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 7;
  }
  
  if (keyIsDown(90)) {
    y2 -= 7;
  }
  if (keyIsDown(83)) {
    y2 += 7;
  }
  if(y<0){ y=0 
  }
  if(y2<0){ y2=0 
  }
  if((y+hR1)>h){ y= h - hR1
  }
   if((y2+hR2)>h){ y2= h - hR2
  }
  
}



