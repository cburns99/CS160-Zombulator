// http://tinyurl.com/cs160ex13
// Zombulator by YOUR NAME
// CS 160 Exercise 13: Intro to arrays

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 200;
const NUMBER_OF_ZOMBIES = 96;
const NUMBER_OF_HUMANS = 40;

var zombieXs;
var zombieYs;
var zombieSizes;
var zombieColors;

var humanXs;
var humanYs;
var humanSizes;
var humanColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
}

function initializeZombies() {
  zombieXs = [];
  zombieYs = [];
  zombieSizes = [];
  zombieColors = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    initializeZombie(i);
  }
}

function initializeZombie(index) {
	zombieXs[index] = random(0, windowWidth);
    zombieYs[index] = random(0, 200);
    zombieSizes[index] = random(MIN_SIZE, MAX_SIZE / 3);
    zombieColors[index] = color(random(200, 255), random(50, 100), random(50, 100), 150);
}

function initializeHumans() {
	humanXs = [];
	humanYs = [];
	humanSizes = [];
	humanColors = [];
	for(var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}

function initializeHuman(index){
  humanXs[index] = random(0, windowWidth);
  humanYs[index] = random(windowHeight - 200, windowHeight);
  humanSizes[index] = random(MIN_SIZE, MAX_SIZE / 3);
  humanColors[index] = color(random(50, 70), random(50, 70), random(50, 70), 200);
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
  drawZombie(i);
  }
}

function drawZombie(index) {
	fill(zombieColors[index]);
    ellipse(zombieXs[index], zombieYs[index], zombieSizes[index], zombieSizes[index]);
}

function drawHumans() {
  for(var i = 0; i < NUMBER_OF_HUMANS; ++i) {
  drawHuman(i);
  }
}

function drawHuman(index) {
  fill(humanColors[index]);
  ellipse(humanXs[index], humanYs[index], humanSizes[index], humanSizes[index]);
}