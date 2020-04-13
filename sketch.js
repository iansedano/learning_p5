function setup() {
	createCanvas(400, 400);

	background(78); // 0 means black 255 means white , if you call with three , its RGB

}

var circleX = 0;

function draw() { // code inside draw() is automatically looped forever

	
	fill(252, 108, 133); // fills following shapes with colour
	stroke(0);
	strokeWeight(20)
	ellipse(180, 200, 150, 60); // (x, y, width, height)

	stroke(193,123,435);
	strokeWeight(5);
	rect(40, 40, 35, 45); // (x upper left, y upper left, width, height)

	point(350, 350) // (x, y)

	strokeWeight(50);
	point(300, 300);

	myVector = new p5.Vector(30, 350)
	point(myVector);

	strokeWeight(10);
	line(30, 350, 300, 300)	// (x1,y1,x2,y2)

	strokeWeight(3);
	stroke(0);
	quad(
		200, 100,		// x1,y1
		395, 200,		// x2,y2
		300, 280,		// x3,y3
		400, 400		// x4,y4
		)

	triangle(
		50, 100,
		100, 80,
		100, 130
		)


	ellipse(circleX, 200, 80 ,80);
	circleX ++;

	noStroke();
	fill(250, 200, 200, 100); // rgb alpha
	ellipse(mouseX, mouseY, 25, 25);


	r = map(mouseX, 0 , 600, 0, 255) // incoming value, lower incoming range, upper incoming range, lower target range, upper target range
	b = map(mouseX, 0 , 600, 255, 0)

	fill(r, 200, b, 100);
	ellipse(mouseX, mouseY, 10, b / 2);

}


