// zombulator by Cameron Burns

var zombieX = 50;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(260, 0, 0);
	ellipse(zombieX, 50, 80, 80);
	fill(150, 150, 200);
	ellipse(200, 100, 80, 80);
	zombieX = zombieX +1;
}