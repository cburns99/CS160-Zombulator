// zombulator by Cameron Burns

var zombieA = 0;
var zombieAspeed = -1;
var zombieAsize = 0;
var startPosition = 0;
var endPosition = 800;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(0);
	if (zombieA >= startPosition && zombieAspeed <= 0) {
		fill(random(50, 255), random(50, 255), random(50, 255));
		zombieAsize = random(30, 200);
		startPosition = zombieAsize / 2;
	}

	if (zombieAspeed < 0 && zombieA >= 800 - (zombieAsize / 2)) {
		zombieAspeed = random(3, 6);
	} else if (zombieAspeed < 0 && zombieA > zombieAsize / 2) {
		zombieAspeed = random(3, 6);
		zombieAsize = random(30, 200);
		fill(random(50, 255), random(50, 255), random(50, 255));
	}

	ellipse(zombieA, 200, zombieAsize, zombieAsize);
	zombieA = zombieA + zombieAspeed;
}