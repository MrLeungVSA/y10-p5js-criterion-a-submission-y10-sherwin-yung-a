var health;

var health1
var health2
var health3

function preloadHealth()
{

	health1 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-sherwin-yung-a/healthbar/health1.png')
	health2 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-sherwin-yung-a/healthbar/health2.png')
	health3 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-sherwin-yung-a/healthbar/health3.png')
}

function setupHealth()
{
	health = 3;
}

function drawHealth(setGameOverCanvasID)
{
	if (health == 3)
	{
		image(health1,512.5+30,425,290/2,110/2);
	}

	if (health == 2)
	{
		image(health2,512.5+30,400,290/2,110/2)
	}

	if (health == 1)
	{
		image(health3,512.5+30,400,290/2,110/2)
	}

	if (health <= 0)
	{
		canvasID = setGameOverCanvasID;
	}
}

function deductHealth(amount)
{
	health = health - amount;
}

