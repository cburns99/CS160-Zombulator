// zombulator by Cameron Burns

var zombieX = 50;
var Zombie2X = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(260, 0, 0);
	ellipse(zombieX, 50, 80, 80);
	fill(150, 150, 200);
	ellipse(Zombie2X, 100, 80, 80);
	zombieX = zombieX +1;
	Zombie2X = Zombie2X +2;
}