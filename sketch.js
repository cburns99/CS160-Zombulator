// zombulator by Cameron Burns

var zombieA = 100;
var zombieAspeed = 5;
var zombieAsize;
var startPosition = 0;
var endPosition = 800;
var zombieAcolor;

function setup() {
	createCanvas(800, 800);
	zombieAsize = random (20, 300)
	zombieAcolor = color(random(255), random(255), random(255));
}

function draw() {
	background(0);
	fill(random(50, 255), random(50, 255), random(50, 255))
	ellipse(zombieA, 200, zombieAsize, zombieAsize);
	zombieA = zombieA + zombieAspeed;

	if (zombieA <= endPosition && zombieAspeed <= 0) {
		zombieAspeed = random(-3, -6)
		zombieAcolor(random(50, 255), random(50, 255), random(50, 255));
		zombieAsize = random(30, 200);
	}

	if (zombieA >= endPosition && zombieAspeed >= 0) {
		zombieAspeed = random(-3, -6);
		zombieAcolor(random(50, 255), random(50, 255), random(50, 255));
		zombieAsize = random(30, 200);
	} 

}