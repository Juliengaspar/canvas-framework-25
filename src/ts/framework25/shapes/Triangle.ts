import {iPosition} from "../iPosition";
import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Triangle extends Shape {
    width: number;
    height: number;
    rotation: number;

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl, width: number, height: number, rotation: number) {
        super(ctx, position, color);
        this.width = width;
        this.height = height;
        this.rotation = rotation;
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.translate(this.position.x, this.position.y);//deplacer le point d'origine
        this.ctx.lineTo(this.position.x, this.position.y)
        this.ctx.lineTo(this.position.x, this.position.y)
        this.ctx.closePath();
        this.ctx.restore();
    }
}