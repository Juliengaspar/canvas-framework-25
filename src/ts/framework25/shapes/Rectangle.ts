
import {iPosition} from "../iPosition";
import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Rectangle extends Shape {
    width: number;
    height: number;
    rotation: number;


    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl, width: number, height: number, rotation: number) {
        super(ctx, position, color);
        this.width = width;
        this.height = height;
        this.rotation = rotation;
    }
//methode de draw
    //save et restore toujour obligatoir pour cree une nouvelle forme && beginPath & clothPath
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.translate(this.position.x, this.position.y);//deplacer le point d'origine
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.closePath();
        this.ctx.restore();
    }

}