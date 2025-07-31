import {Shape} from "./Shape";
import {iPosition} from "../iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";
import {Triangle} from "./Triangle";

export  class Start extends Shape{
    width: number;
    height: number;
    triangle1: Triangle;
    triangle2: Triangle;
    triangle3: Triangle;
    triangle4: Triangle;


    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl, width: number, height: number) {
        super(ctx, position, color);
        this.width = width;
        this.height = height;
        this.triangle1 = new Triangle(ctx, color,
            {
                //point A
                x: position.x,
                y:position.y,
            }
            ,
            {
                //point B
            x: position.x+width,
            y:position.y,
        },{
                //point C
            x:position.x+width/2,
            y:position.y-height,
        });

        this.triangle2 = new Triangle(ctx, color, {
            //point B
                x: position.x+width,
                y:position.y,
            },
            {
                //point D
            x: position.x+width,
            y:position.y+width,
            },
            {
                //point E
            x:position.x+width+height,
            y:position.y+width/2,
        });

        this.triangle3 = new Triangle(ctx, color, {
            //point D
                x: position.x+width,
                y:position.y+width,
            },
            {
                //point F
            x: position.x,
            y:position.y+width,
            },
            //point G
            {
                x: position.x+width/2,
                y:position.y+width+height,

        });
        this.triangle4 = new Triangle(ctx, color, {
            //point F
                x: position.x,
                y:position.y+width,
            },
            {
                //point A
                x: position.x,
                y:position.y,
            },
            //point H
            {
                x: position.x-height,
                y:position.y+width/2,

        });
        //let myTriangle2 = new Triangle(ctx, myRgba, myPoint4,  myPoint5, myPoint6);
        //myTriangle2.draw();
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.save();
        //this.ctx.fillStyle = this.color.toString();
        //this.ctx.rect(this.position.x, this.position.y, this.width, this.width);
        this.ctx.fill();
        this.ctx.restore();
        this.triangle1.draw();
        this.triangle2.draw();
        this.triangle3.draw();
        this.triangle4.draw();
    }
}