export class Bubble {
    constructor(x, y, size) {
        this.xSpeed = random(-5, 2);
        this.ySpeed = random(-2, -1);
        this.stopped = false;
        this.color = "rgba(255,255,255,.5)";
        this.borderColor = "black";
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
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
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
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map