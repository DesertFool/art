function setup() {
    createCanvas (500, 500);
    background (120, 120, 120);
    strokeWeight(3)
    stroke(255)
    point (20, 20);
    line (100, 100, 400, 400);

    fill(255, 0, 0)
    ellipse(180, 200, 200, 100);

    fill(0, 255, 0)
    rect (200, 200, 120, 190);

    fill(255, 255, 0)
    triangle (50, 450, 200, 450, 125, 320);

    fill(0, 0, 255)
    quad (340, 50, 300, 120, 430, 155, 450, 20);
}