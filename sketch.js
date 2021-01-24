/*

//Examples of different types of data in JavaScript

//Number data type
var num = 45;
console.log(num);

//String data type
var name = 'Aaryan'
console.log(name);

//Boolean(true/false) data type
var bool = false;
console.log(bool);

//Undefined data type
var x;
console.log(x);

//Reassign the variable x to null
//Null data type
x= null;
console.log(x);

//Array for holding multiple values
//An array is created inside square brackets 

//Empty array
var arr1 = [];
console.log(arr1);

//array with values of same data type
var arr1 = [12,24,36,48,60];
console.log(arr1);
//length of the array -   number of elements or items in the array
console.log(arr1.length);

//array with values of different data types
var arr2 = [34.5, 'aaryan', true, null, 'gun', 567];
console.log(arr2);

//access the values of an array
console.log(arr1[0]); //12
console.log(arr1[3]); //48
console.log(arr2[5]); //567
console.log(arr2[arr2.length-1]); //567
console.log(arr1[arr1.length-1]); //60

//looping through the array
for(var i = 0; i < arr1.length ; i++){
    console.log(arr1[i]);
}

//array inside an array
var arr3 = [34, 56, 'hello', [10,20,30,40,50]];
console.log(arr3);
console.log(arr3.length);
console.log(arr3[2]);//hello
console.log(arr3[3]);//[10,20,30,40,50]
console.log(arr3[3][3]); //40
console.log(arr3[3][0]);//10
for(var j = 0; j < arr3.length ; j++){
    console.log(arr3[j]);
}

//pushing elements in an array
arr1.push(72);
console.log(arr1);
arr1.push(84,96,108);
console.log(arr1);

//pop the last element of an array
arr1.pop();
console.log(arr1);

*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== 'launched'){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    slingshot.fly();
    gameState = 'launched';
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}