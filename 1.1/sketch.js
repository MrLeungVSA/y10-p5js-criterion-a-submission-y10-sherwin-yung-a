function setup()
{
  //create a drawing service 700px wide, 500px tall
  // task one - change canvas size
  createCanvas(1000,600);
  
}

function draw()
{
  //create a background using RGB values
  // task two - change background color
  background(247,247,247)

  // change the paint brush to a specific color according to RGB values
  fill(55,109,130);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(10,10,100,30);

 // task three - add 2 more rectangles
  fill(163,39,39);
  rect(10,40,50,100);

  fill(255,255,255)
  rect(60,40,50,75)

  fill(55,109,130)
  rect(60,115,50,25)

  // task four - add 5 rectangles in all corners and center
  fill(0,0,0);
  rect(0,0,30,30);

  fill(0,0,0);
  rect(1000-30,0,30,30);

  fill(0,0,0);
  rect(0,600-30,30,30);

  fill(0,0,0);
  rect(1000-30,600-30,30,30);

  fill(0,0,0);
  rect(500-30,300-30,30,30);
}