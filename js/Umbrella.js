class Umbrella{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,100,105);
    }
}