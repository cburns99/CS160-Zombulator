// zombulator by Cameron Burns

var humanY = 100;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.7;
var humanSize = 80;
var humanColor;
var backgroundColor;
var zombieY = 130;
var zombieV = 0;
var zombieA = 0.5;
var zombieSize = 180;
var zombieDamping = -0.8
var zombieColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	humanColor = color(random(255), random(255), random(255));
	zombieColor = color(random(255), random(255), random(255));
	backgroundColor = color(random(255), random(255), random(255));
}

function draw() {
	background(backgroundColor); 
	fill(humanColor);
	stroke(200, 140, 20);
	strokeWeight(10);
	ellipse(windowWidth / 2, humanY, humanSize, humanSize);
	humanY += humanV;
	humanV += humanA;

	if (humanY + (humanSize / 2) >= windowHeight) {
		humanY = windowHeight - (humanSize / 2);
		humanV *= humanDamping;
		humanSize *= 0.8;
	}

	fill(zombieColor);
	stroke(240, 50, 50);
	strokeWeight(20);
	ellipse(windowWidth / 4, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;

	if (zombieY + (zombieSize / 2) >= windowHeight) {
		zombieY = windowHeight - (zombieSize / 2);
		zombieV *= zombieDamping;
		zombieSize *= 0.5;
	}



}
//Nathan Pierce
//Leo 