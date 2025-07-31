import * as console from "node:console";

export class Hsl {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;


    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    toString() {
        return `hsl(${this._hue}deg,${this._saturation}%,${this.lightness}%)`
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 255) {
            this._lightness = value;
        } else {
            this._lightness = 0;
        }
    }

    get lightness() {
        return Math.trunc(this._lightness);
    }


    get hue(): number {
        return Math.trunc(this._hue);
    }

    set hue(value: number) {
        if (value >= 0 && value <= 360) {
            this._hue = value;
        }
        else {
            this._hue = 0;
        }
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    set saturation(value: number) {
        if (value >= 0 && value <= 100) {
            this._saturation = value;
        }
        else {
            this._saturation = 0;
        }
    }
}