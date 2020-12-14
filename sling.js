class Sling{
 constructor(bodyA,pointB)   {
  var options={
body:bodyA,
pointB:pointB,
stiffness: 1,
angularStiffness:1,
  };
  this.pointB=pointB;
  this.pointX=   bodyA.x;
  this.pointY= bodyA.y-250;
  this.sling=constraint.create(options);
  World.add(world,this.sling)
 }
 display(){
   var angle= this.body.angle;
   var pos=this.body.position;
   push();
  strokeWeight(3.5);
  stroke("black");
  line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
 }
}