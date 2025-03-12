import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Rectangle} from "./framework25/shapes/Rectangle";
import {Hsl} from "./framework25/colors/Hsl";
import {Triangle} from "./framework25/shapes/Triangle";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
//cree rect
//const rect1 = new Rectangle(ctx, randomInt(settings.rectangle.position.min, settings.rectangle.position.max), settings.rectangle.position.max,randomInt(0, canvas.height), randomInt(0, 100), randomInt(0,100))
//affiche le rect avec la methode draw
//rect1.draw();
//cree 40 cercle
const hue =randomInt(0,255);


for (let i = 0; i < randomInt(0,100); i++) {
    //const rect = randomInt(settings.rectangle.position.min, settings.rectangle.position.max);
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);


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

 */



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


 const color = new Hsl(-20, -30, -40)

 console.log(color.toString());