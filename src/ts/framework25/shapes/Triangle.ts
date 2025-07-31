import {iPosition} from "../iPosition";
import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Triangle extends Shape {
    position2: iPosition;
    position3: iPosition;


    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl, position: iPosition,  position2: iPosition, position3: iPosition) {
        super(ctx, position, color);
        this.position2 = position2;
        this.position3 = position3;
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.lineWidth =5;
        //pour faire des lignes il faut dabort un point de depart et le point finaux pour faire un tracé
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.position2.x,this.position2.y);
        this.ctx.moveTo(this.position2.x,this.position2.y);
        this.ctx.lineTo(this.position3.x,this.position3.y);
        this.ctx.moveTo(this.position3.x,this.position3.y);
        this.ctx.lineTo(this.position.x,this.position.y);
        this.ctx.stroke();
       /* this.ctx.strokeStyle = this.color.toString();
        //this.ctx.translate(this.position.x, this.position.y);//deplacer le point d'origine
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.position2.x, this.position2.y);*/

        this.ctx.closePath();
        this.ctx.restore();
    }
}