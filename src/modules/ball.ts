export class Ball {
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-4, 4);
  private ySpeed: number = random(-4, 4);
  private stopped: boolean = false;
  private color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";;
  private borderColor: string = this.color;


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
    fill(this.color);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }

  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
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
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }

}