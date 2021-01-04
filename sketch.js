Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground;
engine = Engine.create();
world = engine.world ;
var particle =[];
var score5 = 0;

function setup() 
{
  createCanvas(800,600);
  ground1 = new Ground(400, 600, 800, 10);

  division1 = new Ground(0, 500, 10, 200);
  division2 = new Ground(100, 500, 10, 200);
  division3 = new Ground(200, 500, 10, 200);
  division4 = new Ground(300, 500, 10, 200);
  division5 = new Ground(400, 500, 10, 200);
  division6 = new Ground(500, 500, 10, 200);
  division7 = new Ground(600, 500, 10, 200);
  division8 = new Ground(700, 500, 10, 200);
  division9 = new Ground(800, 500, 10, 200);

  plinko1 = new plinko(0, 60, 10);
  plinko2 = new plinko(80, 60, 10);
  plinko3 = new plinko(160, 60, 10);
  plinko4 = new plinko(240, 60, 10);
  plinko5 = new plinko(320, 60, 10);
  plinko6 = new plinko(400, 60, 10);
  plinko7 = new plinko(480, 60, 10);
  plinko8 = new plinko(560, 60, 10);
  plinko9 = new plinko(640, 60, 10);
  plinko10 = new plinko(720, 60, 10);
  plinko11 = new plinko(800, 60, 10);

  plinky1 = new plinko(40, 120, 10);
  plinky2 = new plinko(120, 120, 10);
  plinky3 = new plinko(200, 120, 10);
  plinky4 = new plinko(280, 120, 10);
  plinky5 = new plinko(360, 120, 10);
  plinky6 = new plinko(440, 120, 10);
  plinky7 = new plinko(520, 120, 10);  
  plinky8 = new plinko(600, 120, 10);
  plinky9 = new plinko(680, 120, 10);
  plinky10 = new plinko(760, 120, 10);

  plinke1 = new plinko(0, 180, 10);
  plinke2 = new plinko(80, 180, 10);
  plinke3 = new plinko(160, 180, 10);
  plinke4 = new plinko(240, 180, 10);
  plinke5 = new plinko(320, 180, 10);
  plinke6 = new plinko(400, 180, 10);
  plinke7 = new plinko(480, 180, 10);
  plinke8 = new plinko(560, 180, 10);
  plinke9 = new plinko(640, 180, 10);
  plinke10 = new plinko(720, 180, 10);
  plinke11 = new plinko(800, 180, 10);

  plinki1 = new plinko(40, 240, 10);
  plinki2 = new plinko(120, 240, 10);
  plinki3 = new plinko(200, 240, 10);
  plinki4 = new plinko(280, 240, 10);
  plinki5 = new plinko(360, 240, 10);
  plinki6 = new plinko(440, 240, 10);
  plinki7 = new plinko(520, 240, 10);  
  plinki8 = new plinko(600, 240, 10);
  plinki9 = new plinko(680, 240, 10);
  plinki10 = new plinko(760, 240, 10);

  plinka1 = new plinko(0, 300, 10);
  plinka2 = new plinko(80, 300, 10);
  plinka3 = new plinko(160, 300, 10);
  plinka4 = new plinko(240, 300, 10);
  plinka5 = new plinko(320, 300, 10);
  plinka6 = new plinko(400, 300, 10);
  plinka7 = new plinko(480, 300, 10);
  plinka8 = new plinko(560, 300, 10);
  plinka9 = new plinko(640, 300, 10);
  plinka10 = new plinko(720, 300, 10);
  plinka11 = new plinko(800, 300, 10);
}

function draw() 
{
  background(0);  
  Engine.update(engine);
  drawSprites();
  text("score: " + score5, 400, 350);
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();

  plinky1.display();  
  plinky2.display();
  plinky3.display();
  plinky4.display();
  plinky5.display();
  plinky6.display();
  plinky7.display();
  plinky8.display();
  plinky9.display();
  plinky10.display(); 

  plinke1.display();
  plinke2.display();
  plinke3.display();
  plinke4.display();
  plinke5.display();
  plinke6.display();
  plinke7.display();
  plinke8.display();
  plinke9.display();
  plinke10.display();
  plinke11.display();

  plinki1.display();  
  plinki2.display();
  plinki3.display();
  plinki4.display();
  plinki5.display();
  plinki6.display();
  plinki7.display();
  plinki8.display();
  plinki9.display();
  plinki10.display(); 

  plinka1.display();
  plinka2.display();
  plinka3.display();
  plinka4.display();
  plinka5.display();
  plinka6.display();
  plinka7.display();
  plinka8.display();
  plinka9.display();
  plinka10.display();
  plinka11.display();
  for(var j = 0; j < particle.length; j++)
  {
  particle[j].display();
  }
  if(frameCount % 140 == 0)
  {
    //particle = new Particle(random(0, 800), 10, 10);
    particle.push(new Particle(Math.round(random(0, 800)), 10, 10));
    console.log ("Particle x value during creation is " + particle[particle.length-1].x);
    console.log ("Particle y value during creation is " + particle[particle.length-1].y);
   
  }
 if(particle.length > 0){
  //  console.log(particle[particle.length-1].body.position.x)
  score1();
 }
//  particle.display();
}
function score1()
{
  //console.log ("Particle x value is " + particle.x);
  //console.log ("Particle y value is " + particle.y);
 if(particle[particle.length-1].body.position.y >400){
   console.log("i am here")
  if (particle[particle.length-1].body.position.x < 100 && particle[particle.length-1].body.position.x >= 0 )
  {
      score5 = score5 + 100;
      console.log("Inside first if function");
  }
  else if (particle[particle.length-1].body.position.x < 200 && particle[particle.length-1].body.position.x >= 100)
  {
    score5 = score5 + 100;
    console.log("Inside second if function");
  }
  else if (particle[particle.length-1].body.position.x < 300 && particle[particle.length-1].body.position.x >= 200 )
  {
    score5 = score5 + 100;
    console.log("Inside third if function");
  }
  else if (particle[particle.length-1].body.position.x < 400 && particle[particle.length-1].body.position.x >= 300 )
  {
    score5 = score5 + 100;
    console.log("Inside fourth if function");
  }
  else if (particle[particle.length-1].body.position.x < 500 && particle[particle.length-1].body.position.x >= 400 )
  {
    score5 = score5 + 100;
    console.log("Inside fifth if function");

  }
  else if (particle[particle.length-1].body.position.x < 600 && particle[particle.length-1].body.position.x >= 500 )
  {
    score5 = score5 + 100;
    console.log("Inside sixth if function");

  }
  else if (particle[particle.length-1].body.position.x < 700 && particle[particle.length-1].body.position.x >= 600)
  {
    score5 = score5 + 100;
    console.log("Inside seventh if function");
  }
  else if (particle[particle.length-1].body.position.x < 800 && particle[particle.length-1].body.position.x >= 700 )
  {
    score5 = score5 + 100;
    console.log("Inside eighth if function");

  }
}
}
