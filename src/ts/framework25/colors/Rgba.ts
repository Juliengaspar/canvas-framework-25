export class Rgba {
    red: number;
    green: number;
    blue: number;
    alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    toString() {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`
    }
}