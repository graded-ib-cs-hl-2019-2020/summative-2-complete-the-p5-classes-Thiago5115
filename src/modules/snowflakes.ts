
export class Snowflake {


    private x: number;
    private y: number;
    private size: number;
    private ySpeed: number = random(1, 1.5);
    private stopped: boolean = false;
    private color: string = "white";

    public getX() { return this.x }
    public setX(x: number) { this.x = x }
    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }



    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {

        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);

        if (this.stopped == false) {

            this.y = this.ySpeed + this.y;
            this.border();

        }

    }

    public move(): void {

        if (this.stopped == false) {

            this.y = this.ySpeed + this.y;
            this.border();
        }
    }

    public mouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public mouse2(): boolean {
        return this.mouse() < this.size / 2;
    }

    private border() {

        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
            height = height + random(3)
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;


        }
    }
}