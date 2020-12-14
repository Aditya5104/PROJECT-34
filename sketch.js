const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    pendulum1= new Pendulum(200,200,80,80)
    pendulum2= new Pendulum(250,200,80,80)
    pendulum3= new Pendulum(150,200,80,80)
    pendulum4= new Pendulum(300,200,80,80)
    pendulum5= new Pendulum(100,200,80,80)

    sling1=new Sling(pendulum.body,{x:500,y:50})
    sling2=new Sling(pendulum.body,{x:500,y:50})
    sling3=new Sling(pendulum.body,{x:500,y:50})
    sling4=new Sling(pendulum.body,{x:500,y:50})
    sling5=new Sling(pendulum.body,{x:500,y:50})
}

function draw(){
background("grey")
Engine.update(engine)
let canvasmouse=Mouse.create(canavs.elt)
canvasmouse.pixelRatio=pixelDensity();
let options={
    mouse:canvasmouse
};
mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);

pendulum1.display()
pendulum2.display()
pendulum3.display()
pendulum4.display()
pendulum5.display()

sling1.display()
sling2.display()
sling3.display()
sling4.display()
sling5.display()

}
function mouseDragged(){
 Matter.body.setPosition(pendulum.body,{x:mouseX,y:mouseY})   
}