class Thunder{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.image=loadImage("images/thunderbolt/1.png");
        this.image2=loadImage("images/thunderbolt/2.png");
        this.image3=loadImage("images/thunderbolt/3.png");
        this.image4=loadImage("images/thunderbolt/4.png");
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        if(frameCount%20===0){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,500,105);
            image(this.image2,this.body.position.x+300,this.body.position.y,500,105);
            image(this.image3,this.body.position.x+400,this.body.position.y,500,105);
            image(this.image4,this.body.position.x+500,this.body.position.y,500,105);
        }
        
    }
}