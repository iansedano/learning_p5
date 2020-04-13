class ball {
    constructor(x, y, locIncrement, diameter) {
        this.x = x;
        this.y = y;
        this.xlocIncrement = locIncrement;
        this.ylocIncrement = locIncrement;
        this.dia = diameter;
    }

    checkDirection() {
        if (this.x > width - (this.dia / 2) || this.x < 0 + (this.dia / 2)) {
            this.xlocIncrement = this.xlocIncrement * -1
        }

        if (this.y > height - (this.dia / 2) || this.y < 0 + (this.dia / 2)) {
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

w = 600
h = 400

function randx() {

    return p5.prototype.random(dia, (w - dia))
}

function randy() {
    return p5.prototype.random(dia, (h - dia))
}

numberOfBalls = 20

var ballList = {}

for (var i = 1; i <= numberOfBalls; i++) {
    ballList[i] = new ball(randx(), randy(), locIncrement, dia)
}

function setup() {
    createCanvas(w, h);
}

function draw() { // code inside draw() is automatically looped forever

    background(78);

    stroke(255);
    strokeWeight(4);
    noFill();

    for (var i = 1; i <= numberOfBalls; i++) {
        ellipse(ballList[i].x, ballList[i].y, ballList[i].dia, ballList[i].dia)
        ballList[i].checkDirection()
        ballList[i].move()
    }

}