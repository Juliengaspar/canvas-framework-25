import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Rectangle} from "./framework25/shapes/Rectangle";
import {Hsl} from "./framework25/colors/Hsl";
import {Triangle} from "./framework25/shapes/Triangle";
import {iPosition} from "./framework25/iPosition";
import {Start} from "./framework25/shapes/Start";
//import {iPosition} from "./framework25/iPosition";
//import {iPosition} from "../iPosition";

console.log("test");
const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export class PositionClass implements iPosition {
    x:number;
    y:number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let myRgba = new Rgba(randomInt(0,255),randomInt(0,255), randomInt(0,255), randomInt(0,100));
let myPosition = new  PositionClass(50,50);
//dessinner un cercle
//let myPosition = new iPosition();
/*
premeirs maniers
let myCircle = new Circle(ctx, {
    x:randomInt(0, 500),
    y:randomInt(0, 500),
}, myRgba, randomInt(1,100));
myCircle.draw();

 */
///seconde maniers
let myCircle = new Circle(ctx, myPosition, myRgba, randomInt(1,100));
//myCircle.draw();
//dessiner un rectangle
let myPosition2 = new  PositionClass(randomInt(1,500),randomInt(1,500));
let myRectangle = new Rectangle(ctx, myPosition2, myRgba, randomInt(1,100), randomInt(1,100), randomInt(0,360));
//myRectangle.draw();
//dessiner un triangl
let myPoint1 = new  PositionClass(400,100);
let myPoint2 = new  PositionClass(200,250);
let myPoint3 = new  PositionClass(600,250);
let myTriangle = new Triangle(ctx, myRgba, myPoint1,  myPoint2, myPoint3);
//myTriangle.draw();
//dessiner un triangl2
let myPoint4 = new  PositionClass(randomInt(1,500), randomInt(1,500));
let myPoint5 = new  PositionClass(randomInt(1,500), randomInt(1,500));
let myPoint6 = new  PositionClass(randomInt(1,500), randomInt(1,500));
let myTriangle2 = new Triangle(ctx, myRgba, myPoint4,  myPoint5, myPoint6);
//myTriangle2.draw();


let myStars = new Start(ctx, {
    x: canvas.width/2,
    y:canvas.height/2,
}, myRgba, randomInt(50,200), randomInt(50,200));
myStars.draw();










/*
//cree rect
//const rect1 = new Rectangle(ctx, randomInt(settings.rectangle.position.min, settings.rectangle.position.max), settings.rectangle.position.max,randomInt(0, canvas.height), randomInt(0, 100), randomInt(0,100))
//affiche le rect avec la methode draw
//rect1.draw();
//cree 40 cercle
const hue =randomInt(0,360);

//cree aleatoirement des rectangle aux positio aux hassard
for (let i = 0; i < randomInt(0,100); i++) {
    //const rect = randomInt(settings.rectangle.position.min, settings.rectangle.position.max);
    const radius = randomInt(settings.rectangle.radius.min, settings.rectangle.radius.max)


    const rect = new Rectangle(ctx, {
        x: randomInt(radius, canvas.width - radius),
        y: randomInt(radius, canvas.height - radius)
    }, new Hsl(hue, randomInt(0, 100), randomInt(0, 100)), radius, radius, 0);
    rect.draw()
    }

/*
for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);

    const circle = new Circle(ctx, {
        x: randomInt(radius, canvas.width - radius),
        y: randomInt(radius, canvas.height - radius)
    }, new Rgba(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255), Math.random()), radius);
    circle.draw();
}





 // for (let i = 0; i < 40; i++) {
 //     const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);
 //
 //     const circle = new Circle(ctx, {
 //         x: randomInt(radius, canvas.width - radius),
 //         y: randomInt(radius, canvas.height - radius)
 //     }, new Hsl(hue, randomInt(0, 100), randomInt(0, 100)), radius);
 //     circle.draw();
 // }

 for (let i = 0; i < randomInt(0,100); i++) {
     const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);

     const circle = new Circle(ctx, {
         x: randomInt(radius, canvas.width - radius),
         y: randomInt(radius, canvas.height - radius)
     }, new Hsl(hue, randomInt(0, 100), randomInt(0, 100)), radius);
     circle.draw();
 }
 for (let i = 0; i < randomInt(0,100); i++) {
     const radius = randomInt(settings.triangle.radius.min, settings.triangle.radius.max);

          const triangle = new Triangle(ctx, {
              x: randomInt(0, canvas.width-radius ),
              y: randomInt(0, canvas.height-radius )
          }, new Hsl(hue, randomInt(0, 100), randomInt(0, 100)), randomInt(0, canvas.width), randomInt(0, canvas.height),360);
          triangle.draw();

     const color = new Hsl(randomInt(0, 360), randomInt(0, 100), randomInt(0, 100))

 }


 */
