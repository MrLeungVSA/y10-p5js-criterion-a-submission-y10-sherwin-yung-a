var canvasID

var wall;
var text;

function preload()
{
	preloadHealth();

	wall = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-sherwin-yung-a/master/wall.png')
}

function setup()
{
	createCanvas(1425,700);

	setupHealth();
	setupTimer();
	setupTyping();

	canvasID = 100;
}

function draw()
{
	background(255,255,255)

	fill(102,178,225)
	strokeWeight(0)
	rect(512.5,0,400,700)

	image(wall,512.5,0,400,700);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 100)
	{
		showQuestion(0);
	}
	else if (canvasID == 101)
	{
		showQuestion(1);
	}
	else if (canvasID == 102)
	{
		showQuestion(2);
	}
	else if (canvasID == 103)
	{
		showQuestion(3);
	}
	else if (canvasID == 104)
	{
		showQuestion(4);
	}
	else if (canvasID == 105)
	{
		showQuestion(5);
	}
	else if (canvasID == 106)
	{
		showQuestion(6);
	}
	else if (canvasID == 107)
	{
		endOfSection1();
	}	
	console.log(canvasID);
}

function endOfSection1()
{
	console.log('end of section 1');
	typingBox.hide();
	textSize(32);
	fill(0,0,0);
	text("YOU WIN!",512.5+10,50);
	textSize(12);
}

// handles all game over code
function gameOver()
{
	typingBox.hide();
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",50,50);
	textSize(12);
}
