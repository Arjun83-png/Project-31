const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var ground, division1, division2, division3, division4, division5, division6, division7;

var divisionHeight = 300;

var particles;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250, 780, 500, 10);

  division1 = new Division(10, 575, 5, 400);
  division2 = new Division(90, 575, 5, 400);
  division3 = new Division(170, 575, 5, 400);
  division4 = new Division(250, 575, 5, 400);
  division5 = new Division(330, 575, 5, 400);
  division6 = new Division(410, 575, 5, 400);
  division7 = new Division(475, 575, 5, 400);

  Engine.run(engine);
}

function draw() {
  background("black");  

  Engine.update(engine);

  drawSprites();

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  for(var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j, 75, 8));
  }

  for(var j = 15; j<= width-10; j = j+50) {
    plinkos.push(new Plinko(j, 175, 8));
  }

  for(var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j,275, 8));
  }

  for(var j = 15; j<= width-10; j = j+50) {
    plinkos.push(new Plinko(j, 375, 8));
  }

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(frameCount%60 === 0) {

    particles.push(new Particle(random(100, 450), 10, 10));

  }

  for(var j = 0; j<particles.length; j++) {

    particles[j].display();

  }
}