/*
	Simple image display example

	mouse + space bar will invert
  Also, display a random bit of text
*/

var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];
var img;
var firesize1;
var firesize2;
var stylus;
var move=true;
var stringList = ["LOOK INTO MY EYES","HELP","Gotta love gravy!","Mmmmmmmm"]
var teext ="";
var mySong;
var rotten;
var startmusic=true;

var drawin=false;

var time = 1000;

var state = 1;
var stateImg1 = 1; 
var stateImg2 = 2; 
var stateImg3 = 3; 
var stateImg4 = 4; 
var stateImg5 = 5; 
var stateImg6 = 6; 


var startMillis;
var startTextMillis;



// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg'); 			
  imageList[1] = loadImage('assets/image2.jpg');
  imageList[2] = loadImage('assets/image3.jpg');
  imageList[3] = loadImage('assets/image4.jpeg');
  imageList[4] = loadImage('assets/image5.jpeg');
  imageList[5] = loadImage('assets/image6.jpg');

  firesize1 = loadImage('assets/fire1.png');
  firesize2 = loadImage('assets/fire 2.gif');
  stylus=loadImage('assets/stylus.png');

  mySong=loadSound('assets/ratat.mp3');
  rotten=loadSound('assets/rotten.mp3');
}

function setup() {
  print("imageSequenceP5 Example");

	imageMode(CENTER);

  //img=imageList[0];

  //chooseNewImage();
  
	createCanvas(1024, 800);
  print(width);
  startMillis = millis();
  startMillis = millis();
}

function draw() {
	background(0);
  print(width);


  // When timer expires, after 1000ms, choose a new random image
  
  if(move){
    if( millis() > startMillis + time ) {	
      // Displays the image at center point
      //image(img, width/2, height/2, random(mouseX), random(mouseY));
      state++;
      teext=setText();
      if(startmusic)
      {
        startmusic=false;
        mySong.play();
      }
      print(time);
      if(state==7){
      state=1;
    }


      //chooseNewImage();
      startMillis = millis();
    }
  }

  setImage(state);

  drawBackgroundCircles();

  // draw the image
  image(img, width/2, height/2);



if(state==stateImg1)
{
  carrots();
}else if(state==stateImg2)
{
  help(teext);
}else if(state==stateImg3)
{
  fireee();
}else if(state==stateImg4)
{
  cookinMama();
}else if(state==stateImg6)
{
  flavortown();
}



}




// chooses a new items from the array, select a random
// index 0 to length of array-1
function setImage(stateparam)
  {
    //print(stateparam)
    img=imageList[stateparam-1];
  }

function carrots()
  {
    var pos1=50;
    var pos2=80;

    fill(29, 135, 0);
    stroke(29, 135, 0);
    ellipseMode(CENTER);
    ellipse(width/2-50,height/2-175,25,25);
    ellipse(width/2-50,height/2-190,25,25);

    fill(252, 157, 3);
    stroke(252, 157, 3);
    triangle(width/2-50,height/2-80,width/2-75,height/2-175,width/2-25,height/2-175);

    fill(29, 135, 0);
    stroke(29, 135, 0);
    ellipseMode(CENTER);
    ellipse(width/2-50+pos1,height/2-175+pos1,25,25);
    ellipse(width/2-50+pos1,height/2-190+pos1,25,25);

    fill(252, 157, 3);
    stroke(252, 157, 3);
    triangle(width/2-50+pos1,height/2-80+pos1,width/2-75+pos1,height/2-175+pos1,width/2-25+pos1,height/2-175+pos1);

    fill(29, 135, 0);
    stroke(29, 135, 0);
    ellipseMode(CENTER);
    ellipse(width/2-50-pos2,height/2-175+pos2,25,25);
    ellipse(width/2-50-pos2,height/2-190+pos2,25,25);

    fill(252, 157, 3);
    stroke(252, 157, 3);
    triangle(width/2-50-pos2,height/2-80+pos2,width/2-75-pos2,height/2-175+pos2,width/2-25-pos2,height/2-175+pos2);
  }

function help(inp)
  {
    fill(255, 230, 0);
    stroke(0);
    textSize(70);
    text(inp,mouseX,mouseY);
  }

function cookinMama()
  {
    image(stylus,mouseX+65,mouseY-110);
  }

function fireee()
  {
    image(firesize2,mouseX-150,mouseY-100);
    image(firesize2,mouseX+150,mouseY-100);
    image(firesize2,mouseX-150,mouseY+100);
    image(firesize2,mouseX+150,mouseY+100);
    image(firesize1,mouseX,mouseY);
  }

function setText()
  {
    var x = random(stringList);
    return x;
  }

function keyPressed()
  {
    if(key=='1')
    {
      time=100;
    }else if(key=='2')
    {
      time=200;
    }else if(key=='3')
    {
      time=300;
    }else if(key=='4')
    {
      time=400;
    }else if(key=='5')
    {
      time=500;
    }else if(key=='6')
    {
      time=600;
    }else if(key=='7')
    {
      time=700;
    }else if(key=='8')
    {
      time=800;
    }else if(key=='9')
    {
      time=900;
    }else if(key=='0')
    {
      time=1000;
    }else if(key=='-')
    {
      time=time-(time*.1);
    }else if(key=='=')
    {
      time=time+(time*.1);
    }else if(key=='`')
    {
      time=random(100,1000);
    }else if(key=='d')
    {
      if(state>=6)
      {
        state=1;
      }else
      {
        state++;
      }
    }else if(key=='a')
    {
      if(state<=1)
      {
        state=6;
      }else
      {
        state--;
      }
    }else if(key==' ')
    {
      move=false;
    }else if(key=='p')
    {
      mySong.play();
    }
  }

function drawBackgroundCircles()
  {
    fill(7, 0, 87);
    strokeWeight(18);
    stroke(166, 158, 255);
    ellipse(width/2-300,height/2,mouseX+200,mouseY+200);

    fill(9, 173, 0);
    stroke(3, 54, 0);
    ellipse(width/2+300,height/2,mouseX+200,mouseY+200);
    strokeWeight(1);
  }

function mousePressed()
  {
    if(state==stateImg5)
    {
      rotten.play();
      mySong.stop();
      time=10000;
    }
  }

function flavortown()
{
  fill(255,140,0);
  stroke(255, 0, 0);
  for (var x=-1;x<2;x++)
  {
    textSize(70);
    text("Welcome to Flavortown",160+x,680);
    text("Welcome to Flavortown",160,680+x);
  }
  fill(255,0,0);
  text("Welcome to Flavortown",160,680);
}








