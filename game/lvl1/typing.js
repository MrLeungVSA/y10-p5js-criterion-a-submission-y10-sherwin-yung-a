var typingBox;
var words;
var answer;

function setupTyping()
{
	// question bank number 1
	wordsMax1 = 9;
	words = new Array(wordsMax1);
	answer = new Array(wordsMax1);

	answer[0] = "7";
	answer[1] = "9";
	answer[2] = "7";
	answer[3] = "11";
	answer[4] = "10";
	answer[5] = "20";
	answer[6] = "9";

	words[0] = "2+5";
	words[1] = "5+4";
	words[2] = "4+3";
	words[3] = "5+6";
	words[4] = "4+6";
	words[5] = "10+10";
	words[6] = "8+1";



	// question bank number 1


	// setup textbox
	typingBox = createInput('');
	typingBox.position(512.5+200-35,555);
	typingBox.size(70,50)
}


function showQuestion(x)
{
	fill(255,255,255);
	textSize(100);
	text(words[x],512.5+125,300);


	if (typingBox.value() == answer[x])
	{
		typingBox.value("");
		canvasID++;
		resetTime = false;
	}

	// calls function in timer.js
	manageTime(50,500);
	drawHealth(-1);

}
