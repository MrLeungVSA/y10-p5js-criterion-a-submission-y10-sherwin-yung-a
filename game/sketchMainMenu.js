var wall;

function preload()
{
  wall = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-sherwin-yung-a/master/wall.png')	
}

function setup()
{
  createCanvas(1425,700);

  
}

function draw()
{
	background(255,255,255)

	fill(102,178,225)
	strokeWeight(0);
	rect(512.5,0,400,700)

	text(mouseX,10,60);
	text(mouseY,10,110);


	image(wall,512.5,0,400,700); 

	button();
}

function button()
{

	fill(255,255,255);
	strokeWeight(5);
	textSize(50)
	text("START",512.5+125,400);


	if (mouseX > 641 && mouseX < 797 && mouseY > 365 && mouseY < 400 && mouseIsPressed)
	{
		window.open("lvl1/index.html","_self");
	}
}