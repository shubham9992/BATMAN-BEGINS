const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var umbrellaImg;
var maxDrops=100;
var drops=[];
function preload(){
    umbrellaImg=loadImage("images/Walking Frame/walking_1.png");
    thunder1=loadImage("images/thunderbolt/1.png");
}

function setup(){
 createCanvas(1600,800);  

 engine=Engine.create();
 world=engine.world;
 umbrella=new Umbrella(200,600,5);
 thunder=new Thunder(100,50,10);
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,700),random(0,700),5));
    }
//  umb=createSprite(200,600);
//  umb.scale=0.5;
//  umb.addImage("umbrellaImg",umbrellaImg);
 Engine.run(engine);

}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    thunder.display();
    for(var i=0;i<maxDrops;++i){
        drops[i].display();
    }
    //drops[0].display();
    drawSprites();
}   

