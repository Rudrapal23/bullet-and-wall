var wall , thickness;
var bullet , speed ,weight;



function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
 wall = createSprite(990,200,thickness , height / 2);
 bullet = createSprite(10,200,500,50);



 speed=random(223,321)
 weight=random(30,52)

 bullet.velocityX=speed;
}

function draw() {
  background("black");
 
 if (hasCollided(bullet,wall))
 {
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness* thickness* thickness);

if (damage>10)
{
wall.shapeColor = "red ";
}

if (damage<10)
{
  wall.shapeColor = "green" ;
}

 }
 



  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
bulleRightEdge = Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;

if (bulleRightEdge>=wallLeftEdge)
{
return true;
}
return false;

}






