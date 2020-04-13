

class ball {
	constructor(x, y, locIncrement, diameter) {
		this.x = x;
		this.y = y;
		this.xlocIncrement = locIncrement;
		this.ylocIncrement = locIncrement;
		this.dia = diameter;
	}

	checkDirection() {
		if (this.x > width - (this.dia/2) || this.x < 0 + (this.dia/2)) {
    	this.xlocIncrement = this.xlocIncrement * -1
    	}

    	if (this.y > height - (this.dia/2) || this.y < 0 + (this.dia/2)) {
    	this.ylocIncrement = this.ylocIncrement * -1
    	}
	}

	move() {
	this.x += this.xlocIncrement; 
    this.y += this.ylocIncrement;
	}
}

var locIncrement = 3;
var dia = 50;

h = 600
w = 400

function randx() {
	return p5.prototype.random(dia, w-dia)
}
function randy() {
	return p5.prototype.random(dia, h-dia)
}

var ball1 = new ball(randx(), randy(), locIncrement, dia)
var ball2 = new ball(randx(), randy(), -locIncrement, dia)
var ball3 = new ball(randx(), randy(), locIncrement, dia)
var ball4 = new ball(randx(), randy(), locIncrement, dia)
var ball5 = new ball(randx(), randy(), -locIncrement, dia)
var ball6 = new ball(randx(), randy(), -locIncrement, dia)

var ballList = {
1: ball1,
2: ball2,
3: ball3,
4: ball4,
5: ball5,
6: ball6,
}

function setup() {
    createCanvas(h, w);
}

function draw() { // code inside draw() is automatically looped forever

    background(78);

    stroke(255);
    strokeWeight(4);
    noFill();

    for (var i = 1; i <= 6; i++) {
    	ellipse(ballList[i].x,ballList[i].y,ballList[i].dia,ballList[i].dia)
    	ballList[i].checkDirection()
    	ballList[i].move()
    }

}

