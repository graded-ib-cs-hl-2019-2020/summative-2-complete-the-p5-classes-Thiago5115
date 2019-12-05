export class Snowflake {
    constructor(x, y, size) {
        this.ySpeed = random(1, 1.5);
        this.stopped = false;
        this.color = "white";
        this.x = x;
        this.y = y;
        this.size = size;
    }
    getX() { return this.x; }
    setX(x) { this.x = x; }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
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
    move() {
        if (this.stopped == false) {
            this.y = this.ySpeed + this.y;
            this.border();
        }
    }
    mouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    mouse2() {
        return this.mouse() < this.size / 2;
    }
    border() {
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
            height = height + random(3);
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map