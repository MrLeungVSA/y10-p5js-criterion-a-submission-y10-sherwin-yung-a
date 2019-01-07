var maxTime;
var resetTime;
var lastRecordedTime;


function setupTimer()
{
	frameRate(30);

	// modify this for when you want to countdown from.
	maxTime = 10;
	resetTime = false;

}

function manageTime(x,y)
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * 30;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			// uses function from health.js
			deductHealth(1);
			resetTime = false;

			canvasID++;
			typingBox.value("");
		}
	}
	showTimeBar(512.5+300,433);
	fill(255.255,255)

}

function showTimeBar(x,y)
{
	textSize(30);
	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / 30 + 1);
	text(+s,x+30,y+30);
	textSize(50);
}