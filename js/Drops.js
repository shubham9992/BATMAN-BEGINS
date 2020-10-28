class createDrop{
    constructor(x,y,radius){
        var options={
            restitution:0.1,
            friction:0.1
        }
        this.rain=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.rain);
    }
    display(){
        if(frameCount%20===0){
            ellipseMode(RADIUS);
            fill(rgb(231,84,128));
            ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        }
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,700),y:random(0,700)})
        }
    }
};